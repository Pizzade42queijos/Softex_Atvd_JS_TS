import readlineSync from 'readline-sync';

const nota1: number = Number(readlineSync.question("Digite a nota do primeiro aluno:\n"));
const nota2: number = Number(readlineSync.question("Digite a nota do segundo aluno:\n"));
const media: number = 6;

if (!isNaN(nota1) && !isNaN(nota2)) {
    if (nota1 >= media) {
        console.log(`O primeiro aluno, que obteve a nota ${nota1}, está aprovado.`);
    } else {
        console.log(`O primeiro aluno, que obteve a nota ${nota1}, está reprovado.`);
    }

    if (nota2 >= media) {
        console.log(`O segundo aluno, que obteve a nota ${nota2}, está aprovado.`);
    } else {
        console.log(`O segundo aluno, que obteve a nota ${nota2}, está reprovado.`);
    }
} else {
    console.log("Um valor inválido foi digitado, impossível concluir a operação.");
}
