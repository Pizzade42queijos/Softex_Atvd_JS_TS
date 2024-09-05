const prompt = require('prompt-sync')({sigint: true});
console.log(":::Verificador de Pares e Ímpares::::")
const numero = Number(prompt("Favor informe o valor a ser analisado:\n"));
if ((typeof numero == number) && (numero%2==0)){
    console.log("O número ${numero} é Par");
}
else{
    console.log(`O número ${numero} é Impar`);
}