document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menu-hamburguer");
  const linksMenu = document.querySelectorAll(".menu a");
  const secoes = [
    document.getElementById("inicio"),
    document.getElementById("sobre"),
    document.getElementById("patinho-feio"),
    document.getElementById("contato")
  ].filter(Boolean);

  linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
      if (menuCheckbox) {
        menuCheckbox.checked = false;
      }
    });
  });

  if ("IntersectionObserver" in window && secoes.length) {
    const observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;

        linksMenu.forEach(function (link) {
          link.classList.toggle(
            "ativo",
            link.getAttribute("href") === "#" + entrada.target.id
          );
        });
      });
    }, {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    });

    secoes.forEach(function (secao) {
      observador.observe(secao);
    });
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760 && menuCheckbox) {
      menuCheckbox.checked = false;
    }
  });
});
const botaoMenu = document.getElementById("botao-menu");
const listaMenu = document.getElementById("lista-menu");

botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("aberto");

    const aberto = listaMenu.classList.contains("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = aberto ? "✕" : "☰";
});

// Fecha o menu depois de clicar em um link
const linksMenu = listaMenu.querySelectorAll("a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        listaMenu.classList.remove("aberto");
        botaoMenu.textContent = "☰";
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});





