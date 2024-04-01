//Exercício 3: Verificar o tipo de operação matemática.
function calcular(valor1, operador, valor2) {
    var resultado;
    switch (operador) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
        default:
            resultado = "Operador inválido!";
    }
    return resultado;
}

console.log(calcular(5, "+", 3)); // Saída: 8
