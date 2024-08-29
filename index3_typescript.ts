import * as readlineSync from 'readline-sync';

const numero1: number = Number(readlineSync.question("Digite o primeiro número:\n"));
const numero2: number = Number(readlineSync.question("Digite o segundo número:\n"));

if (!isNaN(numero1) && !isNaN(numero2)) {
    if (numero1 > numero2) {
        console.log(`O número ${numero1} é maior que o número ${numero2}`);
    } else if (numero1 < numero2) {
        console.log(`O número ${numero2} é maior que o número ${numero1}`);
    } else {
        console.log(`Os números ${numero1} e ${numero2} são iguais`);
    }
} else {
    console.log("Um valor inválido foi digitado, impossível concluir a operação");
}
