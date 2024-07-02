const prompt = require('prompt-sync')();
console.log("Olá bem vindo ao nosso sistema de atendimento")
const primeiraTela = Number(prompt("Olá, o que você deseja: (1)Falar com o departamento de inspeção de pias de granito. (2)Contatar a sub-secretaria autônoma de manufatura de sopas de peixe. (3)Conversar com representante da comissão intergalática de pesagem de queijos"));
switch (primeiraTela){
    case 1: 
    const segundaTela = Number(prompt("Olá, este é o departamento de inspeção de pias de granito. O que você deseja? (1)Agendar uma inspeção (2)Fazer uma denûncia (3)Propor uma regulamentação"));
    switch (segundaTela){
        case 1:
            console.log("Infelizmente não é possível no momento, todos os funcionários estão em recesso. ")
    }
    case 2: 
    const terceiraTela = Number(prompt("Olá, esta é a sub-secretaria autônoma de manufatura de sopas. O que você deseja? (1)Repassar ou Reinvindicar um certificado de manufatura de sopas (2)Denûnciar soparias clandestinas (3)Propor uma nova receita de sopa"));
    case 3: 
    const quartaTela = Number(prompt("Olá, esta é a linha direta com Doutor Dante Salamandriaco da Silva, representante da comissão intergalática de pesagem de queijos. O que você deseja? (1)Marcar uma entrevista (2)Discutir assuntos de estado (3)Alcançar a linha direta ao vice-cônsul do paquistão"));
} 
