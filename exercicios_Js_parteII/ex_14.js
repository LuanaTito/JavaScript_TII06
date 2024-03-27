//Exercício 4: Verificar a categoria de um nadador com base na idade.
function categoriaNadador(idade) {
    var categoria;
    if (idade >= 5 && idade <= 7) {
        categoria = "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        categoria = "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        categoria = "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        categoria = "Juvenil B";
    } else if (idade >= 18) {
        categoria = "Adulto";
    } else {
        categoria = "Idade inválida!";
    }
    return categoria;
}

console.log(categoriaNadador(12)); // Saída: Juvenil A
