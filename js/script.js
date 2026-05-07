
//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

console.log(botaoEntrar);


//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.
botaoEntrar.addEventListener("click", function() {

    console.log("Botão de entrar clicado");

 const email = document.getElementById("idEmail").value;
 console.log(email)
 console.log("Email clicado")

 const senha = document.getElementById("idSenha").value;
 console.log(senha)
 console.log("Senha clicada")


    //Para casa:
    //Capturar os campos de email e senha.
    //Armazenar em variáveis.
    //Imprimir seus valores.




});