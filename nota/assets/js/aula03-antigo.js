let nome = document.getElementById("nome");
let serie = document.getElementById("serie");
let materia = document.getElementById("materia");
let bim1 = document.getElementById("bim1");
let bim2 = document.getElementById("bim2");
let bim3 = document.getElementById("bim3");
let bim4 = document.getElementById("bim4");
let media = document.getElementById("media");

function calcularMedia(){
    event.preventDefault();

    media.value = (parseFloat(bim1.value) + parseFloat(bim2.value) + parseFloat(bim3.value) + parseFloat(bim4.value)) / 4;
}