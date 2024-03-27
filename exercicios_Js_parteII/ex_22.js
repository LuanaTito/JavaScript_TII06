//Exercício 1: Encontrar o maior número em um array.
function encontrarMaiorNumero(numeros) {
    return Math.max(...numeros);
}

var numeros = [10, 5, 8, 20, 15];
console.log("O maior número é: " + encontrarMaiorNumero(numeros));
