//Exercício 2: Calcular a média dos números em um array.
function calcularMedia(numeros) {
    var soma = numeros.reduce((a, b) => a + b, 0);
    return soma / numeros.length;
}

var numeros = [10, 20, 30, 40, 50];
console.log("A média dos números é: " + calcularMedia(numeros));
