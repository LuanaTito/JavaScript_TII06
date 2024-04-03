let campoCep = $("#cep");

campoCep.blur(function (){
    var cep = $(this).val();

    if(cep != ""){
        console.log(cep)
        buscaCep(cep)
    } else {
        Swal.fire('Atenção', 'Digite o campo de CEP', 'warning')
    }
})

function buscaCep(cep){
    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        beforeSend: () => {
            Swal.fire('Aguarde', 'Buscando dados do CEP', 'info')
        },
        success: (resposta) => {
            Swal.fire('Sucesso', 'Campos preenchidos com os dados encontrados', 'success')

            $("#endereco").val(resposta.logradouro)
            $("#bairro").val(resposta.bairro)
            $("#cidade").val(resposta.localidade)
            $("#estado").val(resposta.uf)
        },
        error: () => {
            Swal.fire('Erro', 'Não conseguimos encontrar o CEP', 'error')
        }
    })
}