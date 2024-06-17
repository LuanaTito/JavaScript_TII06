
const car = {type:"BMW", model:"500", color:"white"};

// class Pessoa{ //declaração de uma classe
//     constructor(){ //abrindo um construtur de objetos
//         this.nome="Luana" //this, invoca o objeto em questão
//     }
// }

class Pessoa{ 
    constructor(pnome){ 
        this.nome=pnome
    }
}

let p1=new Pessoa("Luana") 
let p2=new Pessoa("Maria")
let p3=new Pessoa("Rosa")

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)

