document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuLinks = document.getElementById("menuLinks");

    if (menuToggle && menuLinks) {
        const definirMenu = (aberto) => {
            menuLinks.classList.toggle("aberto", aberto);
            menuToggle.setAttribute("aria-expanded", aberto);
            menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
            menuToggle.textContent = aberto ? "✕" : "☰";
        };

        // Alterna o estado do menu ao clicar no botão hambúrguer
        menuToggle.addEventListener("click", () => {
            const estaAberto = menuLinks.classList.contains("aberto");
            definirMenu(!estaAberto);
        });

        // Fecha o menu ao clicar em um link interno
        menuLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", (evento) => {
                // Impede o fechamento se for apenas o item pai com submenu ("#")
                if (link.getAttribute("href") === "#") {
                    evento.preventDefault();
                    return;
                }
                definirMenu(false);
            });
        });

        // Fecha o menu caso a tela seja redimensionada para desktop
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1280) {
                definirMenu(false);
            }
        });
    }
});