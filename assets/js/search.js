import { modalInfo } from "../../assets/js/modal.js";

const container = document.querySelector(".container-cards");
const slideshow = document.querySelector(".slideshow");
const cards = document.querySelectorAll(".card");

const getWrite = () => {
    const result = input.value.toLowerCase();
    if(result!==""){
        for(let card of cards){
            let title = card.querySelector(".card-description h1").textContent.toLowerCase();

            if(title.includes(result)){
                card.style.display="flex";
                card.style.justifyContent="center";
                container.style.position="absolute";
                slideshow.style.display="none";

            } else {
                card.style.display="none";
                slideshow.style.display="none";
            }
        }
    } else {
        for(let card of cards){
            card.style.display="flex";
            card.style.justifyContent="center";
            container.style.position="absolute";
            slideshow.style.display="flex";
        }
    }

    const cardsImg = document.querySelectorAll('.container-cards .card');
    const allHidden = Array.from(cardsImg).every(card => getComputedStyle(card).display === 'none');

    if (allHidden) {

        modalInfo("Ops...", "Não encontramos o que você procura. Que tal usar palavras diferentes para sua busca?", "warning");

        for(let card of cards){
            card.style.display="flex";
            card.style.justifyContent="center";
            container.style.position="absolute";
            slideshow.style.display="flex";
        }

        document.querySelector(".search input").value="";
    } 
}

const input = document.querySelector("input");
input.addEventListener("input", getWrite);