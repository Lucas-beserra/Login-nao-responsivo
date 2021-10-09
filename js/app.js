var Login = document.querySelector("#entrar");
var Cadastro = document.querySelector("#criar");

var Body = document.querySelector("body");

Login.addEventListener("click", function(){
    Body.className = "conteudo-login";
});

Cadastro.addEventListener("click", function(){
    Body.className = "conteudo-cadastro";
});