let link = document.getElementById("link");
let endereco = "https://www.infnet.edu.br/infnet/instituto/";

if (link.getAttribute("href") !== endereco) {
  link.setAttribute("href", endereco);
}
console.log(link.getAttribute("href"));
