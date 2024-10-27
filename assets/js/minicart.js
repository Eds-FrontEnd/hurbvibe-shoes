import { clearProducts, createProduct, deleteProduct, readProduct, upDateCard } from '../js/localStorage.js';
import { modalInfo } from './modal.js';

let iconCart = document.querySelector(".header_cart");
let miniCart = document.querySelector(".mini-card");
let shadow = document.querySelector(".shadow");
let btnClose = document.querySelector(".close");
let size;
let totalCalc = 0;

const updateProduct = () => {
    let cartItem = document.querySelector(".carts-item");
    cartItem.innerHTML = "";

    const products = readProduct();
    products.forEach((card, index) => {
        cartItem.innerHTML += `
        <div class="cart-item minicart" data-key-card="${index}">
            <div class="cart-item-img">
                <img src="${card.img}" alt="${card.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${card.name}</div>
                <div class="cart-item-delete"><img class="iconDelete" src="assets/img/delete.svg" /></div>
                <div class="cart-item-price" data-price="${card.price}">R$ ${(card.price * card.quant).toFixed(2).replace(".", ",")}</div>
                <div class="cart-item-price-prest">6x ${((card.price * card.quant) / 6).toFixed(2).replace(".", ",")}</div>
                <div class="cart-item-tam">tamanho: ${card.tam}</div>
                <div class="counter">
                    <button class="minus">-</button>
                    <div class="amount">${card.quant}</div>
                    <button class="plus">+</button>
                </div>
            </div>
        </div>`;
    });

    let carrinhoVazio = document.querySelector(".mini-card-bag");
    let totalValor = document.querySelector(".mini-card__total");
    carrinhoVazio.style.display = products.length === 0 ? "flex" : "none";
    totalValor.style.display = products.length === 0 ? "none" : "flex";
    
    document.querySelector(".header_cart_counter").textContent = products.length;

    calcSubTotal();
}

const btnProduct = document.querySelectorAll(".payProduct");
btnProduct.forEach((btn, indice) => {
    btn.addEventListener("click", (e) => {
        let key = e.target.closest(".card-item");
        let index = key.getAttribute("data-key");

        if (size) {
            pushProduct(index, indice);
            miniCartOpen();
            updateProduct();
            cleanSizes();
        } else {
            modalInfo("Ops...", "Escolha uma opção de tamanho.", "error" );
        }
    });
});

let sizes = document.querySelectorAll(".card-sizes span");

const cleanSizes = () => {
    sizes.forEach((otherElement) => {
        otherElement.classList.remove("activeSize");
    });
    size = "";
}

sizes.forEach((e) => {
    e.addEventListener("click", () => {
        cleanSizes();
        e.classList.toggle("activeSize");

        if (e.classList.contains("activeSize")) {
            size = e.textContent;
        }
    });
});

const pushProduct = (index, id) => {
    let cards = readProduct();
    let nameProd = listProduts[index].name;

    let existingProduct = cards.find(item => item.name === nameProd && item.tam === size);

    if (existingProduct) {
        existingProduct.quant++;
        upDateCard(cards.indexOf(existingProduct), existingProduct);
    } else {
        let product = {
            id,
            quant: 1,
            tam: size,
            name: listProduts[index].name,
            price: listProduts[index].price,
            img: listProduts[index].img
        };
        createProduct(product);
    }
}

const miniCartClose = () => {
    miniCart.classList.remove("activeCart");
    shadow.style.display = "none";
}

const miniCartOpen = () => {
    miniCart.classList.add("activeCart");
    shadow.style.display = "flex";
}

document.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
        miniCartClose();
    }
});

shadow.addEventListener("click", miniCartClose);
btnClose.addEventListener("click", miniCartClose);
iconCart.addEventListener("click", miniCartOpen);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("plus") || e.target.classList.contains("minus")) {
        let counter = e.target.closest(".counter");
        let amountDisplay = counter.querySelector(".amount");
        let amount = parseInt(amountDisplay.textContent);

        if (e.target.classList.contains("plus")) {
            amount++;
        } else if (amount > 1) {
            amount--;
        }

        amountDisplay.textContent = amount;

        let index = parseInt(counter.closest(".minicart").getAttribute("data-key-card"));
        let product = readProduct()[index];
        product.quant = amount;
        upDateCard(index, product);
        
        let priceElement = counter.closest(".cart-item").querySelector(".cart-item-price");
        priceElement.textContent = `R$ ${(product.price * amount).toFixed(2).replace(".", ",")}`;
        
        calcSubTotal();
    }

    if (e.target.classList.contains("iconDelete")) {
        let index = parseInt(e.target.closest(".minicart").getAttribute("data-key-card"));
        Swal.fire({
            title: 'Opa!',
            text: 'Deseja realmente excluir esse produto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, excluir!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(index); 
                updateProduct(); 
                Swal.fire('Produto excluído!', '', 'success'); 
            }
        });
        
    }
});

const calcSubTotal = () => {
    totalCalc = 0;
    let priceProductTotal = document.querySelectorAll(".cart-item-price");
    
    priceProductTotal.forEach((item) => {
        let pricesProduct = parseFloat(item.textContent.replace("R$ ", "").replace(",", "."));
        totalCalc += pricesProduct;
    });
    
    let totalPrint = document.querySelector(".mini-card__value");
    totalPrint.innerHTML = `R$ ${totalCalc.toFixed(2).replace(".", ",")}`;

}

document.querySelector(".mini-card__button").addEventListener("click", () => {
    let totalValue = document.querySelector(".mini-card__value");
    let totalCalc = parseFloat(totalValue.innerHTML.replace("R$ ", "").replace(".", "").replace(",", "."));

    totalValue.innerHTML = `R$ ${totalCalc.toFixed(2).replace(".", ",")}`;

    Swal.fire({
        title: 'Sua Lista de Compras!',
        html: `Confirme por favor a sua compra. <br> Valor total: R$ ${totalCalc.toFixed(2).replace(".", ",")}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar compra',
        cancelButtonText: 'Voltar às compras'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Compra Realizada com Sucesso!', '', 'success'); 
            miniCartClose(); 
            clearProducts();
            updateProduct();
        }
    });
});

updateProduct();
