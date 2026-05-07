
//capturando botao
const botaoEntrar = document.getElementById("btnEntrar");

console.log(botaoEntrar);

//atrelando ao botao uma funcao que vai receber dois parametros
//o primeiro sera o evento de tela, o segundo sera a funcao de callBack ou funcao anonima
botaoEntrar.addEventListener("click", function(){
    console.log("Botao de entrar clicado");
});

//para casa:
//capturar os campos de email e senha
//armazenar em variaveis
//imprimir seus valores