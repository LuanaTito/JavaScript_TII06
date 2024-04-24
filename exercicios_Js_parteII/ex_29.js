//Exercício 2: Calcular o fatorial de um número.
function calcularFatorial(numero) {
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado *= i; //resultado = resultado* i
    }
    return resultado;
}

console.log(calcularFatorial(5)); // Saída: 120
