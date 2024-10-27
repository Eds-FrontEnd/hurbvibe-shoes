// Exibe a tela de loading ao carregar a página
window.onload = () => {
    const loadingElement = document.querySelector("#loading");
    if (loadingElement) {
        loadingElement.style.display = "none"; // Oculta após o carregamento
    }
};

// Função para carregar páginas com tela de loading
export const loadPages = () => {
    const loadingElement = document.querySelector("#loading");

    if (loadingElement) {
        loadingElement.style.display = "block"; // Exibe a tela de loading
    }

    setTimeout(() => {
        if (loadingElement) {
            loadingElement.style.display = "none"; // Oculta após 2 segundos
        }
    }, 2000);
};
