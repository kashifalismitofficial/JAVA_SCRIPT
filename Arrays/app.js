1. Declare an empty array using JS literal notation to store
student names in future.>>>>>>>>>

Ans  let futureStudentsName = [];
 console.log=(futureStudents);


2. Declare an empty array using JS object notation to store
student names in future.

Ans  let futureStudentNames = new Array();
console.log(futureStudentNames);


3. Declare and initialize a strings array        

Ans:  let Strig = ["kashif ALi","Bashir Ahmed" ,"Awan"]
console.log(Strig)
console.log(typeof(Strig));
console.log(Strig.length);


4. Declare and initialize a numbers array.

Ans:  let numbers = [1,2,5,6,5,25,5,86,5,97];
console.log(numbers);
console.log(numbers.length);


5. Declare and initialize a boolean array.

Ans: let tr = true ;
let fls = false;
let boolean= [tr,fls];

console.log(boolean);


6. Declare and initialize a mixed array.
Ans:  let sting = 'kashif ali';
let num = 3;
let bolen = true ;
let mixed = [sting,num,bolen,]
console.log(mixed);

7. Declare and Initialize an array and store available mobile
networks in Pakistan.

Ans:  let availableNetwork =['ufone','jazz','Zong','telenore']
console.log(availableNetwork);


8. Declare and Initialize an array and store available education
qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
M. Phil., PhD). Show the listed qualifications in your browser
like:


Ans :  let education=["SSC","SSC","HSC","BS","BCOM","MS","M.Phil","PHD"];
let qoli = document.querySelector('#list');

for (let i = 1; i < education.length; i++) {
   qoli.innerHTML +=(`<li>${education[i]}</li>`);
}


9. Declare and initialize an empty array to store top movies of
2015. Add movies one by one in an array. Display the elements
& length of array in your browser. (Use array’s length method)


Ans : let topMovies2015 =[];


// Add movies one by one to the array
topMovies2015.push ("Kashif ALi 01");
topMovies2015.push ("Kashif ALi 02");
topMovies2015.push ("Kashif ALi 03");
topMovies2015.push ("Kashif ALi 04");
topMovies2015.push ("Kashif ALi 05");

let movi = document.querySelector(`#list`);
for (let i = 0; i < topMovies2015.length; i++){
    movi.innerHTML+=(`<li>${topMovies2015[i]}</li>`)

}
document.write("Here total lenght ",topMovies2015.length)




10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array

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




11. Write a program to store 3 student names in an array. Take
another array to store score of these three students. Assume
that total marks are 500 for each student, display the scores &
percentages of students like:

Answer :

var totalScore = 500;
let students = ['Kashif Ali', 'Irfan', 'Fayaz rajper'];
let scores = [455, 460, 465];
let kashifPercentage = [`${scores[0] / totalScore * 100}`]
let irfanPercentage = [`${scores[1] / totalScore * 100}`]
let fayazPercentage = [`${scores[2] / totalScore * 100}`]

console.log(`Score of ${students[0]} is: ${scores[0]} And Percentage: ${kashifPercentage}`);
console.log(`Score of ${students[1]} is: ${scores[1]} And Percentage: ${irfanPercentage}`);
console.log(`Score of ${students[2]} is: ${scores[2]} And Percentage: ${fayazPercentage}`);


13. Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method. 

let studentScore = ["320", "230", "480", "120"];
console.log(studentScore.sort());



14. Write a program to sort the below mentioned array:
Answer:

 let fruits = ['strawberry','apple','orange','bnana'];
 console.log(fruits.sort());
 

15. Write a program to initialize an array with city names. Copy
3 array elements from cities array to selectedCities array. 

let cities = ['Karcahi', 'Lahore', 'Islamabad', 'peshawer', 'Quota']
console.log(`Selected Cities list: ${cities[2]} ${cities[4]}`);



16. Write a program to create a single string from the below
mentioned array:
var arr = ['This '+' is '+' my '+' cat'];
// (Use array’s join method)

console.log(arr.join());

































































// Declare an empty array to store top movies of 2015
let topMovies2015 = [];

// Add movies one by one to the array
topMovies2015.push("Star Wars: The Force Awakens");
topMovies2015.push("Jurassic World");
topMovies2015.push("Avengers: Age of Ultron");
topMovies2015.push("Inside Out");
topMovies2015.push("Furious 7");

// Display the elements of the array
document.write("<h2>Top Movies of 2015:</h2>");
document.write("<ul>");
for (let i = 0; i < topMovies2015.length; i++) {
    document.write("<li>" + topMovies2015[i] + "</li>");
}
document.write("</ul>");

// Display the length of the array
document.write("<p>Length of the array: " + topMovies2015.length + "</p>");
