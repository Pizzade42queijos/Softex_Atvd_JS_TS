const prompt = require('prompt-sync')();
const tipoIngresso = Number(prompt("Por Favor sinalize o tipo de ingresso desejado:\n (1)VIP\n(2)Standart\n "))
const compoPipoca = Number(prompt("Agora sinalize o combo de pipoca:\n(1) Sim.\n(2) Não\n "))
let total = 0
if (tipoIngresso ==1 && compoPipoca== 1){
let total = 110
}
else if (tipoIngresso ==1 && compoPipoca== 2){
let total = 80
} 
else if (tipoIngresso ==2 && compoPipoca== 2){
let total = 40
} 
else{
let total = 70
}
alert(`O valor total é ${total}`)


