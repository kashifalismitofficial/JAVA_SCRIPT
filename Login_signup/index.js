let form = document.querySelector('form');
let fullName = document.querySelector('#Name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');


form.addEventListener('submit', event =>{
    event.preventDefault();
    // console.log(fullName.value);
    // console.log(email.value);
    // console.log(password.value);
    const saveItem = localStorage.setItem('sendItems', JSON.stringify(form.value))
    console.log(saveItem);
    // fullName.value=""
    // email.value=""
    // password.value=""





})