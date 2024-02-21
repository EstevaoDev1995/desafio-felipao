/*# 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

/*let vitorias = 70;
let derrotas = 30;
let resultado = calcularNivel(vitorias, derrotas);


function calcularNivel(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O Herói tem saldo de ${saldo} está no nível de ${nivel}`);
    return nivel;
}*/

let victores = 90;
let defeats = 45;
let result = levelRanked(victores, defeats);

function levelRanked(victores, defeats){
    let balance = victores - defeats;
    let level;

    if (victores < 10){
        level = "Ferro"
    } else if (victores >= 11 && victores <= 20) {
        level = "Bronze";
    } else if (victores >= 21 && victores <= 50) {
        level = "Prata";
    } else if (victores >= 51 && victores <= 80) {
        level = "Ouro";
    } else if (victores >= 81 && victores <= 90) {
        level = "Diamante";
    } else if (victores >= 91 && victores <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    console.log(`O Herói tem saldo de ${balance} está no nível de ${level}`);
    return level;
}
