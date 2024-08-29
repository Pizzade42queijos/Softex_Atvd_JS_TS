const prompt = require('prompt-sync')({sigint: true});
const nota1 = Number(prompt("Digite a nota do primeiro aluno\n"))
const nota2 = Number(prompt("Digite a nota do segundo aluno:\n"))
const media = 6
if((typeof nota1 == number)&&(typeof nota2 == number)){
    if (nota1>=6){
       console.log(`O primeiro aluno, que obteve a nota ${nota1}, está aprovado`);
    }
    else{
        console.log(`O primeiro aluno, que obteve a nota ${nota1}, está reprovado`);
    }
    if (nota2>=6){
        console.log(`O segundo aluno, que obteve a nota ${nota2}, está aprovado`);
    }
    else{
        console.log(`O segundo aluno, que obteve a nota ${nota2}, está reprovado`);
    }
}
else{
    console.log("Um valor inválido foi digitado, impossível concluir a operação")
}
