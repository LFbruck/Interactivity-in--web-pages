let conteudo = document.querySelector(".conteudo");

conteudo.addEventListener("click", function () {
  conteudo.setAttribute(
    "style",
    "background-color: blue; color: white; border: 1px solid orange; width: 2px; height: 2px;"
  );
});
