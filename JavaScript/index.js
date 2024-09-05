const prompt = require('prompt-sync')({sigint: true});
console.log(":::Conversor Real x Dolar::::")
const cotDolar = prompt("Informe o valor atual do Dolar em relação ao real: ");
const selec = Number(prompt("Informe a moeda que você deseja converter:\nReal para Dolar(1)\nDolar para Real"))
const valMoeda = prompt("Informe o valor da moeda que você deseja converter: ");
const MoedaPosConversao = undefined
const valCotado = undefined
if(selec=1){
    const valCotado = valMoeda / cotDolar
    const MoedaPosConversao = "Dolar"
}
else if(selec=2){
    const valCotado = valMoeda * cotDolar
    const MoedaPosConversao = "Reak"
}
else{
    console.log("Seleção Inválida")
}
console.log(`O valor ${valMoeda} em ${MoedaPosConversao} é equivalente a ${valCotado} Reais.`);
