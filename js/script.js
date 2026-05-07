// Declarando variáveis em JS com let
let nome = "José";
let idade = 33;
let status = false;

// Imprimir os dados do nosso usuário José com console.log usando concatenação simples:
console.log(nome + " de " + idade + " anos está " + (status ? "empregado" : "desempregado") + " atualmente.");

// Agora escrevendo a mesma frase com template literal:
console.log(`${nome} de ${idade} anos está ${status ? "empregado" : "desempregado"} atualmente.`);

// Outro exemplo de frase com concatenação simples:
console.log(nome + " tem " + idade + " anos e está " + (status ? "empregado" : "desempregado") + " atualmente.");

// Outro exemplo com template literal:
console.log(`${nome} tem ${idade} anos e está ${status ? "empregado" : "desempregado"} atualmente. (Template literal)`);
