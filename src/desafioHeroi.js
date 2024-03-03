class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque genérico";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
const heroi1 = new Heroi("Gandalf", 1000, "mago");
heroi1.atacar(); // Saída: O mago atacou usando magia

const heroi2 = new Heroi("Conan", 35, "guerreiro");
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
