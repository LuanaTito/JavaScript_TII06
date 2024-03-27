//Exercício 3: Verificar se um elemento existe em um array.
function verificarElemento(array, elemento) {
    return array.includes(elemento);
}

var array = ["maçã", "banana", "laranja", "uva"];
var elemento = "banana";
console.log("O elemento " + elemento + " existe no array? " + verificarElemento(array, elemento));
