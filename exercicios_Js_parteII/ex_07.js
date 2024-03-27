//Exercício 2: Converter um número em seu nome correspondente.

function converterNumeroParaNome(numero) {
    var nome;
    switch (numero) {
        case 1:
            nome = "Um";
            break;
        case 2:
            nome = "Dois";
            break;
        case 3:
            nome = "Três";
            break;
        case 4:
            nome = "Quatro";
            break;
        case 5:
            nome = "Cinco";
            break;
        default:
            nome = "Número fora do intervalo.";
    }
    return nome;
}

console.log(converterNumeroParaNome(3)); // Saída: Três

