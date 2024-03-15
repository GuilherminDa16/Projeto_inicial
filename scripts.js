var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");


function alertar (){
    alert(nome.value + " " + "no botão!!!");
}