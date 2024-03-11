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


const shop = ['Apple', 'graps', 'mango', 'bnana', 'watermelon', 'salat', 'kashif ali'];
let fruits = prompt("Which Fruit");
let head2 = document.querySelector(`#head-2`);

function getFruits() {
    if (shop.includes(fruits.value)) {
        console.log("yes available");
        head2.innerHTML = `${fruits.value} is Available`
    } else {
        console.log("sorry not available");
        head2.innerHTML = `${fruits.value} is Not Available`
    }
}
getFruits()




























