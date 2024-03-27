//exercício em JavaScript que gera um número aleatório e pede ao usuário para adivinhá-lo. O usuário tem três tentativas para acertar o número:

function jogoDeAdivinhacao() {
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Gera um número aleatório entre 1 e 10
    var tentativas = 3;

    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Você tem 3 tentativas para adivinhar o número entre 1 e 10.");

    while (tentativas > 0) {
        var palpite = parseInt(prompt("Tentativa " + (4 - tentativas) + ": Digite seu palpite:"));

        if (palpite === numeroAleatorio) {
            console.log("Parabéns! Você acertou o número " + numeroAleatorio + "!");
            return;
        } else if (palpite < numeroAleatorio) {
            console.log("Tente um número maior.");
        } else {
            console.log("Tente um número menor.");
        }

        tentativas--;
    }

    console.log("Suas tentativas acabaram. O número correto era " + numeroAleatorio + ".");
}

jogoDeAdivinhacao();






// Claro! Vamos analisar o código passo a passo:

// function jogoDeAdivinhacao() { ... }: Aqui, estamos definindo uma função chamada jogoDeAdivinhacao que encapsula todo o jogo de adivinhação.

// var numeroAleatorio = Math.floor(Math.random() * 10) + 1;: Esta linha gera um número aleatório entre 1 e 10. O Math.random() retorna um número decimal entre 0 (inclusive) e 1 (exclusivo). Multiplicando esse valor por 10, obtemos um número entre 0 e 9.999... A função Math.floor() arredonda esse valor para o número inteiro mais próximo, resultando em um número entre 0 e 9. Adicionamos 1 ao resultado para garantir que o número aleatório esteja entre 1 e 10.

// var tentativas = 3;: Aqui, estamos definindo o número total de tentativas que o jogador terá para adivinhar o número.

// console.log("Bem-vindo ao jogo de adivinhação!"); ...: Aqui, estamos exibindo uma mensagem de boas-vindas ao jogador, informando-o sobre o jogo e quantas tentativas ele tem.

// while (tentativas > 0) { ... }: Este é um laço while que continuará executando enquanto o número de tentativas for maior que 0.

// var palpite = parseInt(prompt("Tentativa " + (4 - tentativas) + ": Digite seu palpite:"));: Aqui, estamos pedindo ao jogador para inserir seu palpite através de um prompt. O prompt é exibido com uma mensagem indicando a tentativa atual do jogador. O parseInt() converte a entrada do usuário em um número inteiro.

// if (palpite === numeroAleatorio) { ... } else if (palpite < numeroAleatorio) { ... } else { ... }: Aqui, estamos verificando se o palpite do jogador é igual, maior ou menor que o número aleatório gerado. Dependendo da comparação, uma mensagem adequada é exibida ao jogador.

// tentativas--;: Em cada iteração do loop, subtraímos 1 do número total de tentativas restantes.

// console.log("Suas tentativas acabaram. O número correto era " + numeroAleatorio + ".");: Se o jogador usar todas as tentativas sem adivinhar corretamente, esta mensagem é exibida, revelando o número correto.

// O jogo termina quando o jogador adivinha corretamente o número ou esgota todas as suas tentativas.