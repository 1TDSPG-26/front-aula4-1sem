// alert("olá mundo!");
// var nome = prompt("Olá digite seu nome");

// alert("Meu nome é " + nome);
// console.log("Meu nome é " + nome);

//Declarando variáveis em JS com let

let nome = "José";
let idade = 33;
let status = false;

//Imprimindo os dados do noss usário José com console.log usando concatenação simples>

console.log(nome + " tem " + idade + " anos. Está " +(status === true ? "empregado " : "desempregado " + "atualmente."))

console.log(`${nome} tem ${idade} está ${status === true ? "empregado" : "desempregado"} atualmente. Template-literal`);