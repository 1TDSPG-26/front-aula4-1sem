//Capturando o botao de entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Altrelando o botao com uma funcao q vai receber dois parametros.
//O primeiro sera o evento de tela, o segundo sera a funcao de callBack
botaoEntrar.addEventListener("click", function(){
  console.log("Botao de entrar clicado")
});