import readlineSync from 'readline-sync';

console.log("Olá, bem-vindo ao nosso sistema de atendimento");

const primeiraTela: number = Number(readlineSync.question("Olá, o que você deseja: (1) Falar com o departamento de inspeção de pias de granito. (2) Contatar a sub-secretaria autônoma de manufatura de sopas de peixe. (3) Conversar com representante da comissão intergalática de pesagem de queijos\n"));

switch (primeiraTela) {
    case 1: {
        const segundaTela: number = Number(readlineSync.question("Olá, este é o departamento de inspeção de pias de granito. O que você deseja? (1) Agendar uma inspeção (2) Fazer uma denúncia (3) Propor uma regulamentação\n"));
        switch (segundaTela) {
            case 1:
                console.log("Infelizmente não é possível no momento, todos os funcionários estão em recesso.");
                break;
            case 2:
                console.log("Por favor, envie sua denúncia através do nosso portal oficial.");
                break;
            case 3:
                console.log("Sua proposta será avaliada. Obrigado por sua contribuição!");
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
        break;
    }
    case 2: {
        const terceiraTela: number = Number(readlineSync.question("Olá, esta é a sub-secretaria autônoma de manufatura de sopas. O que você deseja? (1) Repassar ou reivindicar um certificado de manufatura de sopas (2) Denunciar soparias clandestinas (3) Propor uma nova receita de sopa\n"));
        switch (terceiraTela) {
            case 1:
                console.log("Por favor, encaminhe seus documentos para o nosso setor de certificação.");
                break;
            case 2:
                console.log("Sua denúncia foi registrada. Agradecemos sua colaboração.");
                break;
            case 3:
                console.log("Estamos ansiosos para experimentar sua nova receita!");
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
        break;
    }
    case 3: {
        const quartaTela: number = Number(readlineSync.question("Olá, esta é a linha direta com Doutor Dante Salamandriaco da Silva, representante da comissão intergalática de pesagem de queijos. O que você deseja? (1) Marcar uma entrevista (2) Discutir assuntos de estado (3) Alcançar a linha direta ao vice-cônsul do Paquistão\n"));
        switch (quartaTela) {
            case 1:
                console.log("A agenda do Doutor Dante está lotada no momento.");
                break;
            case 2:
                console.log("Por favor, envie um memorando oficial para discutir assuntos de estado.");
                break;
            case 3:
                console.log("Conectando você ao vice-cônsul do Paquistão...");
                break;
            default:
                console.log("Opção inválida.");
                break;
        }
        break;
    }
    default:
        console.log("Opção inválida.");
        break;
}
