//let page = document.getElementById("page");
let body = document.body;
let formAluno = document.getElementById("form-aluno");

function tema(){
    //toggle =>É uma função resenvada, onde se estiver oculto, deixa a mostra e vise-versa.
    body.classList.toggle("tema-dark");
}

/* function modoClaro(){
    page.style = "background-color: #f5f5f5; color: #222;";
}

function modoEscuro(){
    page.style = "background-color: #222; color: #fff;";
}
 */
formAluno.addEventListener("submit", (event) => {
    event.preventDefault();
    //SE bim1 <> "" e bim2 <> "" ENTAO
    if(formAluno.nome.value == ""){
        alert("Preencha o Nome");
    } else if(formAluno.serie.value == ""){
        alert("Preencha a Série");
    } else if(formAluno.materia.value == ""){
        alert("Preencha a Matéria");
    } else if(
        formAluno.bim1.value != "" && 
        formAluno.bim2.value != "" &&
        formAluno.bim3.value != "" && 
        formAluno.bim4.value != ""
    ){
            formAluno.media.value = (parseFloat(formAluno.bim1.value) +
                                    parseFloat(formAluno.bim2.value) + 
                                    parseFloat(formAluno.bim3.value) +
                                    parseFloat(formAluno.bim4.value)) / 4;
            gerarRelatorio();
    }else{
        alert("Preecha todos os bimestres");
    }
    
});

function gerarRelatorio(){
    let tbody = document.getElementById("relatorio");

    tbody.innerHTML = `<tr>
                            <td class='center'>${formAluno.nome.value}</td>
                            <td class='center'>${formAluno.serie.value}</td>
                            <td class='center'>${formAluno.materia.value}</td>
                            <td class='center'>${formAluno.bim1.value}</td>
                            <td class='center'>${formAluno.bim2.value}</td>
                            <td class='center'>${formAluno.bim3.value}</td>
                            <td class='center'>${formAluno.bim4.value}</td>
                            <td class='center'>${formAluno.media.value}</td>
                            <td class='center'>${(formAluno.media.value > 7) ? 
                                    'Aprovado' : 
                                    'Reprovado'
                                }</td>
                        </tr>`
}

//Funciona porém precisamos de mais
function campoNome(){
    if(formAluno.nome.value == ""){
        alert("Preencha o campo Nome");
    }
}