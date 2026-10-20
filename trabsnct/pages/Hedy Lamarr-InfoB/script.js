var atual = 0;
var tempo = 3000;

function troca(){
    var imagens = document.querySelectorAll(".slider img");
    imagens[atual].classList.remove("ativo");
    atual = atual + 1;
    if (atual >= imagens.length){
        atual = 0;
    }
    imagens[atual].classList.add("ativo");
}

function slider(){
    setInterval(troca, tempo);
}
