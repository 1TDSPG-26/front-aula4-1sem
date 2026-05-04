// alert("olá mundo!");
// var nome = prompt("Olá digite seu nome");

// alert("Meu nome é " + nome);
// console.log("Meu nome é " + nome);

// HOISTING
// var nome = "Alê";
// let sobreNome = "Carlos";

// if(true){

//     var nome = "Joaquim";
//     let sobreNome = "Das Couves";

// }

// console.log(nome);
// console.log(sobreNome);



//Declarando variáveis em JS com let


let nome = "Jose";
let idade = 33;
let status = false;



//Imprimir os dados do nosso usuário JOSÉ com console.log usando concatenação simples:
console.log(nome + " de " + idade +" anos está " + (status === true ? "empregado" : "desempregado") + " atualmente.");
//Exercício, agora escreva a mesma frase com template-literal, onde o texto e as variáveis ficam dentro de ` ` e as variáveis são apresentadas entre os símbolos de ${variável}.
console.log(`${nome} de ${idade}  anos está 
    ${(status === true ? "empregado " : "desempregado")} atualmente.    `);


