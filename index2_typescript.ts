import * as readlineSync from 'readline-sync';

console.log(":::Verificador de Pares e Ímpares::::");
const numero: number = Number(readlineSync.question("Favor informe o valor a ser analisado:\n"));

// Verificação se o número é par ou ímpar
if (!isNaN(numero) && numero % 2 === 0) {
    console.log(`O número ${numero} é Par`);
} else {
    console.log(`O número ${numero} é Ímpar`);
}
