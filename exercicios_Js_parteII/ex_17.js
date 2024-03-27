//Exercício 2: Calcular o fatorial de um número usando a estrutura do while.
function calcularFatorial(numero) {
    var resultado = 1;
    var i = 1;
    do {
        resultado *= i;
        i++;
    } while (i <= numero);
    return resultado;
}

console.log(calcularFatorial(5)); // Saída: 120
