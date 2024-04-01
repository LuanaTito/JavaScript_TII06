//Exercício 5: Verificar o status de um pedido com base no seu código.
function statusPedido(codigo) {
    var status;
    switch (codigo) {
        case "AP":
            status = "Aguardando pagamento";
            break;
        case "PR":
            status = "Pedido em produção";
            break;
        case "ST":
            status = "Pedido enviado";
            break;
        case "DL":
            status = "Pedido entregue";
            break;
        default:
            status = "Código inválido!";
    }
    return status;
}

console.log(statusPedido("ST")); // Saída: Pedido enviado
