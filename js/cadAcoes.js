let nome = document.getElementById('nome')
let idade = document.getElementById('idade')
let salario = document.getElementById('.salario')
//let cargo = document.getElementById('cargo')
let cargo = document.querySelector('#cargo')
let btnsalvar = document.getElementById("btnsalvar")

btnsalvar.addEventListener("click" , function (){
    document.getElementById('fnome').innerHTML = nome.value
    document.getElementById('fidade').innerHTML = idade.value
    document.getElementById('fsalario').innerHTML = salario.value
    document.getElementById('fcargo').innerHTML = cargo.value
});
