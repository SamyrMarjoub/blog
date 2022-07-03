const submit = document.querySelector('#submit')
const login = document.querySelector('#login')
const senha = document.querySelector('#senha')

submit.addEventListener('click', function () {
    const arrayLogin = [{login:'', senha:''}]
    arrayLogin[0].login = login.value
    arrayLogin[0].senha = senha.value
    console.log(arrayLogin)

})