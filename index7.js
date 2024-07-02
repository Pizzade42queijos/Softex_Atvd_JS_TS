const prompt = require('prompt-sync')();
const jornadaSemanal = 40;
function HoraNReg(valor){
    //valor da hora regular em valor da hora não regular
    return valor*1.50
}

function CalcValorSemana(horasTrabalhadas, valorHoraReg, valorHoraExt){
    let horasRegulares = undefined;
    let horasExras = undefined;
    if(horasTrabalhadas > 40){
       let horasExras = horasTrabalhadas - 40
       let horasRegulares = horasExras - horasTrabalhadas
    }
    else{
        let horasExras = 0
        let horasRegulares = horasTrabalhadas
    }
    return (horasRegulares * valorHoraReg)+(horasExras*valorHoraExt)
}

function SemanaParaMes(valorSemanal){
    return valorSemanal*4
}

const valorHoraReg = Number(prompt("Qual o valor da hora regular, isto é, dentro da jornada de 40 horas?"));
const valorHoraExt= HoraNReg(valorHoraReg);
const horasTrabalhadas = Number(prompt("Qual a quantidade de horas totais trabalhadas por esse funcionário em uma semana?"));
const valorSalarioMes= Number(SemanaParaMes(CalcValorSemana(horasTrabalhadas)));
console.log(`Deverá ser pago ${valorSalarioMes} ao funcionário`)

