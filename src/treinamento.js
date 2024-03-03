class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log(``)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "Recheio de nutella")
let boloPremium = new formaDeBolo("Baunilha", "Coco")

boloFesta.escrever()
boloPremium.escrever()