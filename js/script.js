// // alert("olá mundo!");
// // var nome = prompt("Olá digite seu nome");

// // alert("Meu nome é " + nome);
// // console.log("Meu nome é " + nome);

// // HOISTING
// // var nome = "Alê";
// // let sobreNome = "Carlos";

// // if(true){

// //     var nome = "Joaquim";
// //     let sobreNome = "Das Couves";

// // }

// // console.log(nome);
// // console.log(sobreNome);



// //Declarando variáveis em JS com let

// let nome   = "José";
// let idade  = 33;
// let status = false;

// //Imprimir os dados do nosso usuário JOSÉ com console.log usando concatenação simples:
// console.log(nome + " de " + idade +" anos está " + (status === true ? "empregado" : "desempregado") + " atualmente.");

// //Exercício: agora escreva a mesma frase com template-literal, onde o texto e as variáveis ficam dentro de ` ` e as variáveis são apresentadas entre os símbolos de ${variável}.
// console.log( `${nome} de ${idade} anos está ${(status === true ? "empregado" : "desempregado")} atualmente.` );
// //Declarando variáveis em JS com let

// let nome = "José";
// let idade = 33;
// let status = false;

// //Imprimindo os dados do noss usário José com console.log usando concatenação simples>

// console.log(nome + " tem " + idade + " anos. Está " +(status === true ? "empregado " : "desempregado " + "atualmente."))

// console.log(`${nome} tem ${idade} está ${status === true ? "empregado" : "desempregado"} atualmente. Template-literal`)
// ;



//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

//Atrelando ao botão uma função que vai receber dois parâmetros.
//O primeiro será o evento da tela e o segundo será a função de callBack ou função anônima.
botaoEntrar.addEventListener("click", function(){
    console.log("O botão de entrar está clicado.")
});

//Para casa:
//Capturar os campos de email e senha.
//Armazenar em variáveis.
//Imprimir seus valores.
