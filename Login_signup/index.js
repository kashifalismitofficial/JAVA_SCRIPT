let form = document.querySelector('form');
let fullName = document.querySelector('#Name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

let registerPerson = [];

form.addEventListener('submit', event => {
    event.preventDefault();
    registerPerson.push({
        email: email.value,
        name: fullName.value,
        password: password.value
    })
    localStorage.setItem('items', JSON.stringify(registerPerson))
    console.log(registerPerson);
    if(registerPerson == )







    // console.log(fullName.value);
    // console.log(email.value);
    // console.log(password.value);
    fullName.value=""
    email.value=""
    password.value=""





})