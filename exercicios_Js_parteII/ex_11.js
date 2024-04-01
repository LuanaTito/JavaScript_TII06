//Exercício 1: Verificar o período do dia com base na hora.

function periodoDoDia(hora) {
    var periodo;
    if (hora >= 0 && hora < 12) {
        periodo = "Manhã";
    } else if (hora >= 12 && hora < 18) {
        periodo = "Tarde";
    } else if (hora >= 18 && hora <= 23) {
        periodo = "Noite";
    } else {
        periodo = "Hora inválida!";
    }
    return periodo;
}

console.log(periodoDoDia(14)); // Saída: Tarde

