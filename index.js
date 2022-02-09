function validarEmail() {
    const email = document.getElementById('email')
    const error = document.getElementById('error')

    if (!email.checkValidity()) {
        error.innerHTML = 'Email invalido'
    } else {
        error.innerHTML = ''
    }
}