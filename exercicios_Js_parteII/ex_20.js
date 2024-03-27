//Exercício 5: Gerar uma sequência de Fibonacci com 10 elementos usando a estrutura do while.
function fibonacci(n) {
    var sequencia = [];
    var i = 0;
    var a = 0;
    var b = 1;
    do {
        sequencia.push(a);
        var temp = a;
        a = b;
        b = temp + b;
        i++;
    } while (i < n);
    return sequencia;
}

console.log(fibonacci(10)); // Saída: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
