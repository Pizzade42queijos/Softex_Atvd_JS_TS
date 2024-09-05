const prompt = require('prompt-sync')();
const primeiraconstrucao = prompt("Olá, bem vindo ao criador de bot\nDigite três frases separadas por '.' elas serão utilizadas pelo bot para iniciar a conversa\n"
)
const dict = undefined
const primeirasFrases = primeiraconstrucao.split('.');
for (const frase in primeirasFrases) {
    const segundaconstrucao = prompt(`Ótimo, agora pense em três respostas para a ${Number(primeirasFrases.indexOf(frase)) + 1}# frase`)
    const segundasFrases = segundaconstrucao.split('.');
    const dict = {
        frase: segundasFrases
    }
}
console.log("Ótimo, seu bot está pronto!\nIniciando o Bot.....")
const primeiraIteracao = (Number(prompt(`(1)${primeirasFrases[0]}\n(2)${primeirasFrases[1]}\n(3)${primeirasFrases[2]}\n`))) - 1

const segundaIteracao = Number(prompt(`(1)${(dict[primeiraIteracao])[0]}\n(2)${(dict[primeiraIteracao])[1]}\n(3)${(dict[primeiraIteracao])[2]}\n`))
console.log(`Pois é, realmente. ${(dict[primeiraIteracao])[(segundaIteracao) - 1]}}, eu concordo! Agora vou ali almoçar, até mais! :)`)
