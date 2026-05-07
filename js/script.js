// alert("olá mundo!");
// var nome = prompt("Olá digite seu nome");

// alert("Meu nome é " + nome);
// console.log("Meu nome é " + nome);

<<<<<<< HEAD
// HOISTING
// var nome = "Alê";
// let sobreNome = "Carlos";

// if(true){

//     var nome = "Joaquim";
//     let sobreNome = "Das Couves";

// }

// console.log(nome);
// console.log(sobreNome);


// // Conversões:
// let numero = "123";
// console.log(parseInt(numero)); // 123
// console.log(parseFloat("12.5")); // 12.5
// console.log(numero.toString()); // “123”
// // Métodos de texto:
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 26 – Retorna a quantidade de caracteres da string
// console.log(frase.indexOf("as")); // 15 – Retorna a posição da string encontrada
// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// // Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

//Declarando variáveis em JS com let

let nome   = "Italo";
let idade  = 11;
let status = false;

//Imprimir os dados do nosso usuário JOSÉ com console.log usando concatenação simples:
console.log(nome + " de " + idade +" anos está " + (status === true ? "empregado" : "desempregado") + " atualmente.");

//Exercício, agora escreva a mesma frase com template-literal, onde o texto e as variáveis ficam dentro de ` ` e as variáveis são apresentadas entre os símbolos de ${variável}.
=======
//Declarando variáveis em JS com let

let nome = "José";
let idade = 33;
let status = false;

//Imprimindo os dados do noss usário José com console.log usando concatenação simples>

console.log(nome + " tem " + idade + " anos. Está " +(status === true ? "empregado " : "desempregado " + "atualmente."))

console.log(`${nome} tem ${idade} está ${status === true ? "empregado" : "desempregado"} atualmente. Template-literal`);
>>>>>>> rm572956
