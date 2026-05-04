// alert("olá mundo!");
// var nome = prompt("Olá digite seu nome");

// alert("Meu nome é " + nome);
// console.log("Meu nome é " + nome);

//declarando variaveis em JS com let

let nome = "Jose";
let idade = 33;
let status = false;

//imprimir os dados do nosso usuario JOSE com console.log usando concatenacao simples:
console.log(nome + " de " + idade +" anos esta " + (status === true ? "empregado" : "desempregado") + " atualmente.")

//exercicio
console.log(`${nome} de ${idade} anos esta ${(status === true ? "empregado" : "desempregado")} atualmente.`);
