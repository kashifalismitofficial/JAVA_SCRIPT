// . Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

var number = +prompt("Enter Number");

if (number % 3 == 0) {
    console.log("Hello good! divide by 3");
} else {
    console.log("Oh sorry !Is'nt divide by 3");
}

// Write a program that checks whether the given input is an even
// number or an odd number.

var evenodd = +prompt("Enter Value");
if (evenodd % 2 === 0) {
    console.log("Good Kashif ! This is Odd Number");
} else {
    console.log("Good Kashif ! This is Even Number")
}

// . Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

var age = +prompt("Enter Your Age");
if (age < 18) {
    console.log("Hi Kahif ! you Are too Young Mashallah");
} else {
    console.log("Sory Sir ! You are Old Enough");
}


// Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

var userName = prompt("Hey ! Enter Your Name");
if (userName == "Kashif Ali") {
    console.log("Hey! Kashif Ali Hope all are doing Well.")
}
else {
    console.log("Plz Enter Correct Name");
}

// . Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

var divisible = +prompt("Kahif ALi Enter Number Which you Like");
if (divisible % 3 === 0) {
    console.log("Yes Divide By 3")
} else {
    console.log("Not Divide By 3");
}


// Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

var time = +prompt("Kashif Enter");
if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good After Noon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} else if (time >= 2100 && time < 2390) {
    console.log("Good Night");
} else {
    console.log()
}



var year = prompt("Enter Current Year");
var leap = (2023 == 2028 == 2032);

if (year % 100 === 0) {
    console.log("it is a leap year")
} else {
    console.log("This is Not leap Year")
}


//  Question NO 11

// Write a program that adds an else statement to the following
// script to display “You are not Fahad”

var firstName = prompt("Enter Your Name");
if (firstName === "Kashif Ali") {
    console.log("Yes Kashif ali");
}else {
    console.log("You Are Not Kashif ALi");
}