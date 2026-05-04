// alert("olá mundo!");
// var nome = prompt("Olá digite seu nome");

// alert("Meu nome é " + nome);
// console.log("Meu nome é " + nome);

//var nome = "Luigi";
//let sobreNome = "Tormim";

//if(true){
  //  var nome = "Joaquim";
    //let sobreNome = "Trevas";
//}

//console.log(nome);
//console.log(sobreNome);

//Declarando variaveis em 35 com let

let nome = "Edubecks";
let idade = 18;
let status = false;

//Imprimir os dados do nosso usuario edubecks com console.log usando concatecao simples:
console.log(nome + "de" + idade + "está" + (status === true ? "empregado" : "desempregado") + "atualmente.");

//Exercicio, agora escreva a mesma frase com template-literal, onde o texto e as variaveis ficam dentro de ''
//e as variaveis sao apresentadas entre os simbolos de $(varaivel).

console.log( `${nome} de ${idade} anos está
    
    ${(status === true ? "empregado" : "desempregado")} atualmente.` );


