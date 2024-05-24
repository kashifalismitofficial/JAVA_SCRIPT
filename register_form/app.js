
const form = document.querySelector('#form');
const input01 = document.querySelector(`#firt`);
const input02 = document.querySelector(`#second`);
const input03 = document.querySelector(`#third`);
const input04 = document.querySelector(`#fourth`);
const input05 = document.querySelector(`#five`);

let firstName = /^[A-Za-z0-9._%+-]{3,13}$/ ;
let lastName = /^[a-zA-Z]{3,15}$/ ;
let SchoolName =  /^.{15,50}$/ ;
let email = /^[a-zA-Z0-9._%+-]+@gmail\.com$/ ;
let cnicPattern = /^42\d{11}$/;


//



form.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log(firstName.test(input02.value));
    if (firstName.test(input01.value)){
            console.log(input01.value);
        }else{
            alert('Enter Correct Firtst Name')
        }
        if (lastName.test(input02.value)){
            console.log(input02.value);
        }else{
            alert('Enter Correct Last Name')
        }
        if (SchoolName.test(input03.value)){
            console.log(input03.value);
        }else{
            alert('Enter Correct School Name')
        }
        if (email.test(input04.value)){
            console.log(input04.value);
        }else{
            alert('Enter Correct Email')
        }
        if (cnicPattern.test(input05.value)){
            console.log(input05.value);
        }else{
            alert('Enter Correct CNIC Number')
        }
        input01.value =''
        input02.value =''
        input03.value =''
        input04.value =''
        input05.value =''
        
})

