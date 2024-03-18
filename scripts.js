var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida= document.getElementById("saida-de-dados");

var email = document.getElementById("email");

var telefone = document.getElementById("telefone");

var cep = document.getElementById("cep");

var logradouro = document.getElementById("log");

var numero = document.getElementById("num");

var complemento = document.getElementById("comp");

var bairro = document.getElementById("bairro");

var cidade = document.getElementById("cid");

var estado = document.getElementById("est");


function alertar (){
   // alert(nome.value + " " + "no botão!!!");
   saida.innerText = "Nome: "+" "+ nome.value+
          "\n E-mail: " + " " + email.value +
          "\n Telefone" + " " + telefone.value +
          "\n CEP" + " " + cep.value
          "\n Logradouro" + "  " + log.value
          "\n Numero" + " " + num.value
          "\n Complemento" + " " + comp.value
          "\n Bairro" + " " + bairro.value
          "\n Cidade" + " " + cid.value
          "\n Estado" + " " + est.value;

}