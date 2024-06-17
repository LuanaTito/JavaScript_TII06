class Carro{ 
    constructor(cnome, ctipo){ 
        this.nome=cnome
        if(ctipo==1){
            this.tipo="Esportivo"
            this.velmax=300
        }else if(ctipo==2){
            this.tipo="Utilitario"
            this.velmax=100
        }else if(ctipo==3){
            this.tipo="Passeio"
            this.velmax=160
        }else{
            this.tipo="Militar"
            this.velmax=180
        }
    }
    //MÉTODOS
    //get captura os datos armazenados.
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo,this.velmax]
    }
    //set será responsável por alocar os dados. 
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(velmax){
        this.velmax=velmax
    }

    info(){
        console.log("Nome: " + this.nome)
        console.log("Tipo: " + this.tipo)
        console.log("V. Max: " + this.velmax)
        console.log("-----------------------")
    }
}

//MÉTODOS

const motoristas ={
    primeiroNome: "Paulo",
    ultimoNome: "Santos",
    id: 5587,
    nomeCompleto: function() {
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

document.getElementById("texto").innerHTML = motoristas.nomeCompleto();




let c1=new Carro("Rapidão",1)
let c2=new Carro("Super Luxo",2)
let c3=new Carro("Bombadão",4)
let c4=new Carro("Carrego tudo",3)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
//console.log(c1.getInfo()[2])
c1.setNome("Super veloz")

console.log(c1.nome)


//c2.info()

