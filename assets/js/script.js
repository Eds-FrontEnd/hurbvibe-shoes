const btnUp = document.querySelector(".up");
const headerTop = document.querySelector("header");
const footerBox = document.querySelector("footer");
const logoImg = document.querySelector(".logo img");

btnUp.addEventListener("click", ()=>{
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
});

window.addEventListener("scroll", ()=>{
    if(scrollY < 800){
        btnUp.style.display="none";
        logoImg.style.width = "21px";
        headerTop.style.backgroundColor = "black";
    } else {
        btnUp.style.display="block";
        logoImg.style.width = "16px";
        headerTop.style.backgroundColor = "gray";
    }
});

window.addEventListener("scroll", ()=>{
    if(scrollY < 800){
        footerBox.style.display="none";
    } else {
        footerBox.style.display="flex";
    }
});

//Menu Mobile
const btnMenuMobile = document.querySelector(".menu-mobile");

btnMenuMobile.addEventListener("click", ()=>{
    let menuMobile = document.querySelector(".menu-mobile ul");
    menuMobile.classList.toggle("active");
});

//Ano Atual
const infoAge = document.querySelector("#footer-age");
infoAge.textContent = new Date().getFullYear();