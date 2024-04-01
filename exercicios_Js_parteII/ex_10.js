//Exercício 5: Verificar o tipo de triângulo com base nos comprimentos dos lados.
function tipoDeTriangulo(a, b, c) {
    var tipo;
    switch (true) {
        case a === b && b === c:
            tipo = "Equilátero";
            break;
        case a === b || b === c || a === c:
            tipo = "Isósceles";
            break;
        default:
            tipo = "Escaleno";
    }
    return tipo;
}

console.log(tipoDeTriangulo(5, 5, 5)); // Saída: Equilátero
