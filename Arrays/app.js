// 1. Declare an empty array using JS literal notation to store
// student names in future.>>>>>>>>>

// Ans  let futureStudentsName = [];
    //  console.log=(futureStudents);


// 2. Declare an empty array using JS object notation to store
// student names in future.

// Ans  let futureStudentNames = new Array();
        // console.log(futureStudentNames);


// 3. Declare and initialize a strings array        

// Ans:  let Strig = ["kashif ALi","Bashir Ahmed" ,"Awan"]
// console.log(Strig)
// console.log(typeof(Strig));
// console.log(Strig.length);


// 4. Declare and initialize a numbers array.

// Ans:  let numbers = [1,2,5,6,5,25,5,86,5,97];
// console.log(numbers);
// console.log(numbers.length);


// 5. Declare and initialize a boolean array.

// Ans: let tr = true ;
// let fls = false;
// let boolean= [tr,fls];

// console.log(boolean);


// 6. Declare and initialize a mixed array.
// Ans:  let sting = 'kashif ali';
// let num = 3;
// let bolen = true ;
// let mixed = [sting,num,bolen,]
// console.log(mixed);

// 7. Declare and Initialize an array and store available mobile
// networks in Pakistan.

// Ans:  let availableNetwork =['ufone','jazz','Zong','telenore']
// console.log(availableNetwork);


// 8. Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:


// Ans :  let education=["SSC","SSC","HSC","BS","BCOM","MS","M.Phil","PHD"];
// let qoli = document.querySelector('#list');

// for (let i = 1; i < education.length; i++) {
//    qoli.innerHTML +=(`<li>${education[i]}</li>`);
// }


// 9. Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)


// Ans : let topMovies2015 =[];


// // Add movies one by one to the array
// topMovies2015.push ("Kashif ALi 01");
// topMovies2015.push ("Kashif ALi 02");
// topMovies2015.push ("Kashif ALi 03");
// topMovies2015.push ("Kashif ALi 04");
// topMovies2015.push ("Kashif ALi 05");

// let movi = document.querySelector(`#list`);
// for (let i = 0; i < topMovies2015.length; i++){
//     movi.innerHTML+=(`<li>${topMovies2015[i]}</li>`)
    
// }
// document.write("Here total lenght ",topMovies2015.length)




// 10. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array























































let favoriteCars = ["Tesla Model S", "Porsche 911", "Audi R8", "BMW M5"];

// a. First index of the array
let firstIndex = 0;

// b. Car at first index of the array
let carAtFirstIndex = favoriteCars[firstIndex];

// c. Last index of the array
let lastIndex = favoriteCars.length - 1;
let carAtLastIndex = favoriteCars[lastIndex];

// Display the information
console.log("First index of the array:", firstIndex);
console.log("Car at first index of the array:", carAtFirstIndex);
console.log("Last index of the array:", lastIndex);
console.log("Car at last index of the array:", carAtLastIndex);













// // Declare an empty array to store top movies of 2015
// let topMovies2015 = [];

// // Add movies one by one to the array
// topMovies2015.push("Star Wars: The Force Awakens");
// topMovies2015.push("Jurassic World");
// topMovies2015.push("Avengers: Age of Ultron");
// topMovies2015.push("Inside Out");
// topMovies2015.push("Furious 7");

// // Display the elements of the array
// document.write("<h2>Top Movies of 2015:</h2>");
// document.write("<ul>");
// for (let i = 0; i < topMovies2015.length; i++) {
//     document.write("<li>" + topMovies2015[i] + "</li>");
// }
// document.write("</ul>");

// // Display the length of the array
// document.write("<p>Length of the array: " + topMovies2015.length + "</p>");
