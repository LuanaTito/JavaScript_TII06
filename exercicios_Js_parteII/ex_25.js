//Exercício 4: Contar o número de elementos pares em um array.
function contarPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0).length;
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("O número de elementos pares é: " + contarPares(numeros));
