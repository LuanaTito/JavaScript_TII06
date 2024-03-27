//Exercício 3: Contar o número de vogais em uma string.
function contarVogais(texto) {
    var vogais = texto.match(/[aeiou]/gi);
    return vogais ? vogais.length : 0;
}

var texto = "Hello World";
console.log("O número de vogais na string é: " + contarVogais(texto));
