//Exercício 3: Verificar a faixa etária com base na idade.
function faixaEtaria(idade) {
    var faixa;
    if (idade >= 0 && idade <= 12) {
        faixa = "Criança";
    } else if (idade >= 13 && idade <= 19) {
        faixa = "Adolescente";
    } else if (idade >= 20 && idade <= 59) {
        faixa = "Adulto";
    } else if (idade >= 60) {
        faixa = "Idoso";
    } else {
        faixa = "Idade inválida!";
    }
    return faixa;
}

console.log(faixaEtaria(25)); // Saída: Adulto
