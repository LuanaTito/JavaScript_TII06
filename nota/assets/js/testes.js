let formulario = document.getElementById("form-teste");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(formulario.email.value);
})