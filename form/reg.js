let form = document.querySelector('form')
let fullName = document.querySelector('#full-name')
let email = document.querySelector('#email')
let Pasword = document.querySelector('#password')

let registorData = []

form.addEventListener('submit', event => {
    event.preventDefault()
    registorData.push({
        fullName : fullName.value,
        email : email.value,
        Pasword : Pasword.value,
    })
    localStorage.setItem('send', JSON.stringify(registorData))
    console.log(registorData);
    console.log(registorData);
    fullName.value = ''
    email.value = ''
    Pasword.value = ''
})





















