//Exercício 1: Calcular a média de números em um array.
function calcularMedia(numeros) {
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    var media = soma / numeros.length;
    return media;
}

var numeros = [10, 20, 30, 40, 50];
console.log("A média dos números é: " + calcularMedia(numeros));
