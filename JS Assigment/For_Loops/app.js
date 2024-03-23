// For Loops Assigment

// <<<<<<<<<<< Question No 01 >>>>>>>>>>>>
//  Write a program to display the message "Hello World” 5 times 
// in your browser using for loop

// Answer:

// let head2 = document.querySelector(`#head02`)
// let hello = "Hello World";

// for (let i = 0; i < 5; i++) {
//     // console.log('hello world', i);
//     head2.innerHTML += `<li>${hello} ${i +1}</li>`

// }





// <<<<<<<<<<< Question No 02 >>>>>>>>>>>>
// 2. Write a program to print numeric counting from 1 to 10.

// Answer:

// let ol = document.querySelector(`#head02`)
// for (let i = 0; i < 10; i++) {
//     ol.innerHTML +=`<li>${"Number"} ${i +1}</li>`
//     // console.log(i+1);
// }




// <<<<<<<<<<< Question No 03 >>>>>>>>>>>>
// Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user.

// Answer

// let table = prompt("Enter Table");
// let times = prompt("Enter Lenght");
// for (let  i= 1;  i <= times ; i++) {
//     console.log(`${table} * ${i} = ${table * i}`);
// }


// <<<<<<<<<<< Question No 04 >>>>>>>>>>>>
// You have an array
// A = ["Nokia”, "Samsung”, "Apple”, "Sony”, "Huawei”]
// Write each element on new line with the help of for loop.

// Answer:

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// let arry = document.querySelector(`#arry`);

// for (let i = 0; i < A.length; i++) {
//     arry.innerHTML +=`<p>${A[i]}</p>`

// }




// <<<<<<<<<<< Question No 04 >>>>>>>>>>>>
// Write a program to print items of the following array using for loop:
// fruits = ["apple”, "banana”, "mango”, "orange”, "strawberry”]

// Answer:

let pro = document.querySelector(`#pro`);
let content = document.querySelector(`#content`);
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    pro.innerHTML += `<p>${fruits[i]}</p>`
    content.innerHTML += `<p>Element At Index ${i} is ${fruits[i]}  </p>`

}

