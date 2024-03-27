//Exercício 2: Verificar se um número é par ou ímpar.
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}

var numero = 15;
console.log(verificarParOuImpar(numero));
