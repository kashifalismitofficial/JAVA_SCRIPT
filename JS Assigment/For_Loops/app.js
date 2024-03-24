// For Loops Assigment

// <<<<<<<<<<< Question No 01 >>>>>>>>>>>>
document.write(`<p>Write a program to display the message "Hello World" 5 times 
in your browser using for loop</p>`)

// Answer:

let head2 = document.querySelector(`#head02`)
let hello = "Hello World";

for (let i = 0; i < 5; i++) {
    console.log('hello world', i);
    head2.innerHTML += `<li>${hello} ${i +1}</li>`

}





// <<<<<<<<<<< Question No 02 >>>>>>>>>>>>
document.write(`<p> Write a program to print numeric counting from 1 to 10.<p>`)
// Answer:

let ol = document.querySelector(`#head02`)
for (let i = 0; i < 10; i++) {
    ol.innerHTML +=`<li>${"Number"} ${i +1}</li>`
    // console.log(i+1);
}




// <<<<<<<<<<< Question No 03 >>>>>>>>>>>>
document.write(`<p>Write a program to print multiplication table of any number 
using for loop. Table number & length should be taken as an 
input from user.</p>`)

// Answer

let table = prompt("Enter Table");
let times = prompt("Enter Lenght");
for (let  i= 1;  i <= times ; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
}


// <<<<<<<<<<< Question No 04 >>>>>>>>>>>>
document.write(`<p>You have an array
A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
Write each element on new line with the help of for loop.</p>`)

// Answer:

let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
let arry = document.querySelector(`#arry`);

for (let i = 0; i < A.length; i++) {
    arry.innerHTML +=`<p>${A[i]}</p>`

}




// <<<<<<<<<<< Question No 05 >>>>>>>>>>>>
document.write(`<p>Write a program to print items of the following array using for loop:
fruits = ["apple", "banana", "mango", "orange", "strawberry"];</p>`)

// Answer:

let pro = document.querySelector(`#pro`);
let content = document.querySelector(`#content`);
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    pro.innerHTML += `<p>${fruits[i]}</p>`
    content.innerHTML += `<p>Element At Index ${i} is ${fruits[i]}</p>`

}



// <<<<<<<<<<< Question No 06 >>>>>>>>>>>>
document.write(`<p>Write a program to initialize an array of N items by using 
prompt. Where N is number of items as entered by the user.</p>`)

// Answer:

let number = +prompt("Enter Number Of Items");
let render = document.querySelector(`#render`);
let render_list= document.querySelector(`#render_list`);
let arr = [];


function RunLoop() {
   let items = prompt(`Enter value for index ${i}`);
   arr.push(items);
   render.innerHTML = `<p>Number of Items: ${number} </p> Items:`
   render_list.innerHTML +=`<p>${arr[i]}</p>`;
}
for (i = 0; i < number; i++) {
   RunLoop()
}




// <<<<<<<<<<< Question No 07 >>>>>>>>>>>>
document.write(`<p>Generate the following series in your browser. See example
output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k</p>`)

// Answer:
document.write(`<h2>Counting:</h2>`)
for (let i = 1; i <= 15; i++) {
   document.write(`<span>${i},</span>`);
}
document.write(`<h2>Reverse counting:</h2>`)
for (let i = 10; i >= 1; i--) {
   document.write(`<span>${i},</span>`);

}
document.write(`<h2>Even:</h2>`)
for (i = 0; i <= 20; i += 2) {
   document.write(`<span>${i},</span>`);

}
document.write(`<h2>Odd:</h2>`)
for (i = 1; i <= 19; i += 2) {
   document.write(`<span>${i},</span>`);

}
document.write(`<h2>Series:</h2>`)
for (i = 2; i <= 20; i = i + 2) {
   document.write(`<span>${i}k,</span>`);

}



// <<<<<<<<<<< Question No 08 >>>>>>>>>>>>
document.write(`<p>8. You have an array
A = ["cake", "apple pie", "cookie", "chips", "patties"]
Write a program to enable "search by user input" in an array.
After searching, prompt the user whether the given item is
found in the list or not. Example: </p>`)

Answer:
let User = prompt("Enter Item Name");
let bakery = ["cake", "apple pie", "cookie", "chips", "patties","pastry"];
let isAvailable = false;
for (i = 0; i <= bakery.length; i++) {
   if (User === bakery[i]) {
     document.write(`${User} <b>is Available</b> at index ${i} in our bakery`);
      isAvailable = true;
   }
}
if (!isAvailable) {
   document.write(`We are Sorry ${User} is <b>not Available</b> in our bakery`);
}


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
document.write(`<p>Array Items:[24, 53, 78, 91, 12]</p> The largest Number in array is ${largestNumber}`)



// <<<<<<<<<<< Question No 10 >>>>>>>>>>>>
document.write(`<p>10. Write a program to identify the smallest number in the given 
array.
A = [24, 53, 78, 91, 12].</p>`)

// Answer:

let arysmall = [24, 53, 78, 91, 12];
let smallNumber = arysmall[0];

for (let i = 1; i < arysmall.length; i++){
   if (arysmall[i] < smallNumber) {
      smallNumber = arysmall[i]
   }
}
document.write(`<p>Array Items: [24, 53, 78, 91, 12] </p> The Smallest Number in array is ${smallNumber}`);



// <<<<<<<<<<< Question No 11 >>>>>>>>>>>>
document.write(`<p> 11. Write a program to identify the largest & the smallest
number in the given array.
A = [24, 53, 78, 91, 12] </p>`)

// Answer:

const arrylargsmall = [24, 53, 78, 91, 12];
let questionNo11 = document.querySelector(`#question11`);
let questionpart211 = document.querySelector(`#questionpart211`)
let bothsmalllarge = arrylargsmall[0];

for (let i = 1; i < arrylargsmall.length; i++) {
   if (arrylargsmall[i] > bothsmalllarge) {
      bothsmalllarge = arrylargsmall[i]
   }
}
questionNo11.innerHTML = `<p>The Smallest Number Is  ${bothsmalllarge} </p>`;

for (let i = 1; i < arrylargsmall.length; i++) {
   if (arrylargsmall[i] < bothsmalllarge) {
      bothsmalllarge = arrylargsmall[i]
   }
}
questionpart211.innerHTML = `<p>The Smallest Number Is ${bothsmalllarge}</p>  `;



// <<<<<<<<<<< Question No 12 >>>>>>>>>>>>
// 12. Write a program to print multiples of 5 ranging 1 to 100

// Answer:

for (i = 5; i <= 100; i += 5) {
   document.write(`<span>${i}, </span>`)
}



// <<<<<<<<<<< Question No 13 >>>>>>>>>>>>
document.write(`<p>13. You have given the following arrays:
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
FOR	Loops |	JAVASCRIPT
Page	9 of	12
Write a program to generate the following HTML table in your 
browser using JS.</p>`)

// Answer :
let students = ["Ali", "Sami", "Taha", "Inam"];
let scores = [58, 73, 89, 90];
for (let i = 0; i < students.length; i++) {
   

}





// <<<<<<<<<<< Question No 16 >>>>>>>>>>>>
document.write(`<p>16. Write a program to repeatedly print the value of the variable 
num which is input by user. Value should be decreasing by 0.5 
each time, as long as x Value remains positive.</p>`)

// Answer:

let num = +prompt(`Enter a Number`)
for (i = num; i >= 0; i -= 0.5) {
   document.write(`<span>${i} </span>`)
}



// <<<<<<<<<<< Question No 17 >>>>>>>>>>>>
document.write(`<p>17. The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each 
iteration, it will check if the current number is even or odd, and 
report that to the screen (e.g. "2 is even").</p>`)

// Answer:
for (let i = 0; i <= 19; i++) {
   if (i % 2 === 0) {
      document.write(`<div>${i}  is odd </div>`);
   }else{
      document.write(`<div>${i}  is even  </div>`)
   }

}



