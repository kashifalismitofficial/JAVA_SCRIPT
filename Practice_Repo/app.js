// var userName = "Kashif Awan"; declare variable
// var userName = "Kashif Ali";  redeclare variable
// userName = "Mahii";   reassign variable
// console.log(userName);




// let firstName = "Kashif";
// firstName ="Ali Awan";
// console.log(firstName);





// const userName ="kashif Ali jan";
// userName = "just chk";
// console.log(userName);







// let city1 = 'karachi';
// let city2 = 'lahore';
// let city3 = 'islamabad';


// let cities = ['karachi' , 'lahore' , 'islamabad' , 'faislabad' , 'hyderabad' , 'sheikarpur'];
// let cities = ['karachi' , 'lahore' , 'islamabad' , 'faislabad' , 'hyderabad' , 'sheikarpur' , 20 , true , ['fb area' , 'liyari' , 'golimar']];
// console.log(cities[8][2]);
// console.log(cities.length);
// console.log(cities[3]);
// console.log(typeof(cities))





// let KahsifBhanjay = ['Ubaidullah jani', 'Rehan jan', 'Ali kokay', 'Azan Jan' , 'Mujahid Ali', 'Abdul Hadii Baba']
// console.log(typeof(KahsifBhanjay));
// console.log(KahsifBhanjay);


// let Kashiffamilychild =['Ubaidullah jani', 'Rehan jan', 'Ali kokay', 'Azan Jan'  , ['Mujahid Ali', 'Abdul Hadii Baba']];
// console.log(Kashiffamilychild[4]);





// const shop = ['Apple', 'graps', 'mango', 'bnana', 'watermelon', 'salat','kashif ali'];
// let fruits = document.querySelector(`#fruits`);
// let head2 = document.querySelector(`#head-2`);




// function getFruits() {
//     console.log(fruits.value);
//     if (shop.includes(fruits.value)) {
//         console.log("Fruit in available");
//         head2.innerHTML=`${fruits.value} is available`
//     } else {
//         console.log("not fruit in not available");
// head2.innerHTML=`${fruits.value} is not  available`
//     }
//    fruits.value="";

// }


// const shop = ['Apple', 'graps', 'mango', 'bnana', 'watermelon', 'salat', 'kashif ali'];
// let fruits = prompt("Which Fruit");
// let head2 = document.querySelector(`#head-2`);

// function getFruits() {
//     if (shop.includes(fruits.value)) {
//         console.log("yes available");
//         head2.innerHTML = `${fruits.value} is Available`
//     } else {
//         console.log("sorry not available");
//         head2.innerHTML = `${fruits.value} is Not Available`
//     }
// }
// getFruits()




// loops work in smit

// for (let i = 1; i <= 10; i++){
//         console.log(outer Loop ===> , i);
//         for
//     }




//     let table = +prompt('Enter table');
//     let times = +prompt('Enter time')

//     for  (i = 1; i <= times ; i++){
//         console.log(${table}* ${i} = ${table * i});
//     }


//     let table = 2;
//     let times = 10;

//     for  (i = 1; i <= times ; i++){
//         console.log(${table}* ${i} = ${table * i});
//     }


//     for  (i = 1; i <= 10 ; i++){
//         console.log(${3}* ${i} = ${3 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${4}* ${i} = ${4 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${5}* ${i} = ${5 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${6}* ${i} = ${6 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${7}* ${i} = ${7 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${8}* ${i} = ${8 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${9}* ${i} = ${9 * i});
//     }
//     for  (i = 1; i <= 10 ; i++){
//         console.log(${10}* ${i} = ${10 * i});
//     }


//     for (i = 1; i <= 100; i++){
//           console.log();
//           for(j=1; j <=10; j++){
//             console.log(${i}*${j} = ${i*j});
//           }
//     }















// for (i = 0; i < 10; i++){
//     console.log(`As salam U alikum ! Kashif Ali`, i);
// }



// let table = `5`;

// for (let i = 1; i < 10; i++) {
//    console.log(`${table} * ${i} = ${table * i}`);

// }



// <<<<<<<<<<<<<<<>>>>>>>>>>><<<<<<>>>>>
// <<<just for checking pull command>>>>

// let table = `5`;

// for (let i = 1; i < 10; i++) {
//    console.log(`${table} * ${i} = ${table * i}`);

// }


// let table = `5`;

// for (let i = 1; i < 10; i++) {
//    console.log(`${table} * ${i} = ${table * i}`);

// }

// let table = `5`;

// for (let i = 1; i < 10; i++) {
//    console.log(`${table} * ${i} = ${table * i}`);

// }



















// let aryLargest = [24, 53, 78, 91, 12];
// var largestNumber = aryLargest[0];
// for (i = 1; i < aryLargest.length; i++) {
//    if (aryLargest[i] < largestNumber) {
//       largestNumber = aryLargest[i]
//    }
// }
// document.write(`<p>Array Items:[24, 53, 78, 91, 12]</p> The largest Number in array is ${largestNumber}`)




//infinite loops

// let i = 1;
// while(i > 0){
//     console.log(i);
//     i++
// }



// while loop
// let j = 1;
// while (j <= 10) {
//     console.log('while loop ===>', j);
//     j++
// }

// do while loop
// let i = 1;
// do {
//     console.log('do while loop ===>', i)
//     i++
// } while (i <= 10)










// <<<<<<<<<<<<<<<<<<<Todo App>>>>>>>>>>>>>>>>>>>>

let array = [`mango`, `apple`, `bnana`];
let unorder = document.querySelector(`ul`);

for (i = 0; i < array.length; i++) {

    unorder.innerHTML += `<li>${array[i]} <button onclick="deleteone(${i})">Delete</button></li>`
}




function deleteone(index){
    unorder.innerHTML = "";
    array.splice(index , 1);
    for (i = 0; i < array.length; i++) {
        unorder.innerHTML += `<li>${array[i]}<button onclick="deleteone(${i})">Delete</button></li>`
    }
}

function DeleteAll() {
unorder.innerHTML="";
}
























