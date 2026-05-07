
// capturando botao de entrar
const botaoEntrar = document.getElementById("btnEntrar");

console.log(botaoEntrar)

//Atrelando ao botao uma função que vai receber dois parâmetros.
//O primeiro será o evento de tela, o segundo será a função de callBack ou função anonima.
botaoEntrar.addEventListener("click", function(){
    console.log("Botão de entrar clicado")
});