//Exercício 2: Classificar o grau de um estudante com base na sua pontuação.
function classificarEstudante(pontuacao) {
    var nota;
    if (pontuacao >= 90) {
        nota = "A";
    } else if (pontuacao >= 80) {
        nota = "B";
    } else if (pontuacao >= 70) {
        nota = "C";
    } else if (pontuacao >= 60) {
        nota = "D";
    } else {
        nota = "F";
    }
    return nota;
}

console.log(classificarEstudante(85)); // Saída: B
