// For Loops Assigment

// <<<<<<<<<<< Question No 01 >>>>>>>>>>>>
//  Write a program to display the message "Hello World" 5 times 
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
// A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// Write each element on new line with the help of for loop.

// Answer:

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// let arry = document.querySelector(`#arry`);

// for (let i = 0; i < A.length; i++) {
//     arry.innerHTML +=`<p>${A[i]}</p>`

// }




// <<<<<<<<<<< Question No 05 >>>>>>>>>>>>
// Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// Answer:

// let pro = document.querySelector(`#pro`);
// let content = document.querySelector(`#content`);
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     pro.innerHTML += `<p>${fruits[i]}</p>`
//     content.innerHTML += `<p>Element At Index ${i} is ${fruits[i]}</p>`

// }



// <<<<<<<<<<< Question No 06 >>>>>>>>>>>>
// Write a program to initialize an array of N items by using 
// prompt. Where N is number of items as entered by the user.

// Answer:

// let number = +prompt("Enter Number Of Items");
// let render = document.querySelector(`#render`);
// let render_list= document.querySelector(`#render_list`);
// let arr = [];


// function RunLoop() {
//    let items = prompt(`Enter value for index ${i}`);
//    arr.push(items);
//    render.innerHTML = `<p>Number of Items: ${number} </p> Items:`
//    render_list.innerHTML +=`<p>${arr[i]}</p>`;
// }
// for (i = 0; i < number; i++) {
//    RunLoop()
// }




// <<<<<<<<<<< Question No 07 >>>>>>>>>>>>
// Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Answer:
// document.write(`<h2>Counting:</h2>`)
// for (let i = 1; i <= 15; i++) {
//    document.write(`<span>${i},</span>`);
// }
// document.write(`<h2>Reverse counting:</h2>`)
// for (let i = 10; i >= 1; i--) {
//    document.write(`<span>${i},</span>`);

// }
// document.write(`<h2>Even:</h2>`)
// for (i = 0; i <= 20; i += 2) {
//    document.write(`<span>${i},</span>`);

// }
// document.write(`<h2>Odd:</h2>`)
// for (i = 1; i <= 19; i += 2) {
//    document.write(`<span>${i},</span>`);

// }
// document.write(`<h2>Series:</h2>`)
// for (i = 2; i <= 20; i = i + 2) {
//    document.write(`<span>${i}k,</span>`);

// }



// <<<<<<<<<<< Question No 08 >>>>>>>>>>>>
document.write(`<p>8. You have an array
A = ["cake", "apple pie", "cookie", "chips", "patties"]
Write a program to enable "search by user input" in an array.
After searching, prompt the user whether the given item is
found in the list or not. Example: </p>`)

// Answer:
// let User = prompt("Enter Item Name");
// let bakery = ["cake", "apple pie", "cookie", "chips", "patties","pastry"];
// let isAvailable = false;
// for (i = 0; i <= bakery.length; i++) {
//    if (User === bakery[i]) {
//      document.write(`${User} <b>is Available</b> at index ${i} in our bakery`);
//       isAvailable = true;
//    }
// }
// if (!isAvailable) {
//    document.write(`We are Sorry ${User} is <b>not Available</b> in our bakery`);
// }


// <<<<<<<<<<< Question No 09 >>>>>>>>>>>>
document.write(`<p>9. Write a program to identify the largest number in the given 
array.
A = [24, 53, 78, 91, 12]</p>`)

// Answer:

let aryLargest = [24, 53, 78, 91, 12];
var largestNumber = aryLargest[0];
for (i = 1; i < aryLargest.length; i++) {
   if (aryLargest[i] > largestNumber) {
      largestNumber = aryLargest[i]
   }
}
// document.write(`<p>Array Items:[24, 53, 78, 91, 12]</p> The largest Number in array is ${largestNumber}`)




document.write(`10. Write a program to identify the smallest number in the given 
array.
A = [24, 53, 78, 91, 12]`)

// Answer:

let arysmall = [24, 53, 78, 91, 12];
let smallNumber = arysmall[0];

for (let i = 1; i < arysmall.length; i++) {
   if (arysmall[i] < smallNumber) {
      smallNumber = arysmall[i]
   }
}
document.write(`<p>Array Items:[24, 53, 78, 91, 12]</p> The Smallest Number in array is ${smallNumber}`)












