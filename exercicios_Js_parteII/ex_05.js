//Exercício 5: Calcular o fatorial de um número.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

var numero = 5;
console.log("O fatorial de " + numero + " é: " + calcularFatorial(numero));
