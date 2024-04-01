//Exercício 4: Verificar se uma palavra é um palíndromo.
function verificarPalindromo(palavra) {
    var palavraInvertida = palavra.split("").reverse().join("");
    if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        return "A palavra é um palíndromo.";
    } else {
        return "A palavra não é um palíndromo.";
    }
}

var palavra = "arara";
console.log(verificarPalindromo(palavra));
