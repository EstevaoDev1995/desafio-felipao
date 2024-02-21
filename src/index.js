// 1 Desafio Classificador de nível de Herói

//** O que deve ser utilizado **

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// Objetivos

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize
// uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nível de variável}**"

let nomeHeroi = "Mr. Robot"
let quantDeExperiencia = 10.000
let nivel = ["Ferro" , "Bronze" , "Prata" , "Ouro" , "Platina" , "Ascendente" , "Imortal" , "Radiante" ]

if(quantDeExperiencia === 1.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[0]))
    }else if(quantDeExperiencia <= 2.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[1]))
    }else if(quantDeExperiencia <= 5.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[2]))
    }else if(quantDeExperiencia <= 7.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[3]))
    }else if(quantDeExperiencia <= 8.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[4]))
    }else if(quantDeExperiencia <= 9.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[5]))
    }else if(quantDeExperiencia <= 10.000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[6]))
    }else{quantDeExperiencia >= 10.001
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + (nivel[7]))
    }
