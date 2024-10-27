listProduts.forEach((item, index)=>{

    let containerCards = document.querySelector(".container-cards");

    containerCards.innerHTML+=`
        <div class="card">
            <div class="card-item" data-key="${index}" title="${item.name}" alt="${item.name}" >
                <img src="${item.img}" >
                <div class="card-description" title="valor: R$ ${item.price.toFixed(2).replace(".",",")} ou 6x de R$ ${(item.price / 6).toFixed(2).replace(".",",") }" alt="valor: R$ ${item.price.toFixed(2).replace(".",",")} ou 6x de R$ ${(item.price / 6).toFixed(2).replace(".",",") }"  >
                    <h1>${item.name}</h1>
                    <h6>- ${item.promo}% OFF</h6>
                    <div class="card-price">R$ ${item.price.toFixed(2).replace(".",",")}</div>
                    <div class="card-price-prest">ou 6x de R$ ${(item.price / 6).toFixed(2).replace(".",",") }</div>
                    <div class="card-sizes">Tam: ${item.sizes.map((size) => `<span>${size}</span>`).join('')}</div>
                    <button class="payProduct">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    `
});

