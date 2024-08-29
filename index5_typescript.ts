import readlineSync from 'readline-sync';

const tipoIngresso: number = Number(readlineSync.question("Por favor, sinalize o tipo de ingresso desejado:\n(1) VIP\n(2) Standard\n"));
const compoPipoca: number = Number(readlineSync.question("Agora sinalize o combo de pipoca:\n(1) Sim\n(2) Não\n"));
let total: number = 0;

if (tipoIngresso === 1 && compoPipoca === 1) {
    total = 110;
} else if (tipoIngresso === 1 && compoPipoca === 2) {
    total = 80;
} else if (tipoIngresso === 2 && compoPipoca === 2) {
    total = 40;
} else if (tipoIngresso === 2 && compoPipoca === 1) {
    total = 70;
}

console.log(`O valor total é ${total}`);
