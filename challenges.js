// Create a variable called myName and assign it your name as a string.
let myName = "Teke";

// Create an array called numbers and add five numbers to it.
let numbers = [1,2,3,4,5];

// Create a variable called myAge and assign it your age as a number.
let myAge = 22;

// Create an object called person with properties name, age, and gender.
const person = {
    name: myName,
    age: myAge,
    gender: "M"
}

// Create a variable called isRaining and assign it a boolean value based on whether it is currently raining or not.
let isRaining = true;

// Create a function called greet that takes a name as a parameter and returns a greeting message using template literals.
function greet( name ) {
    return `Hello, ${name}!`;
}

// Create a function called multiply that takes two numbers as parameters and returns their product.
function multiply( a, b) {
    return a * b;
}

// Create a function called divide that takes two numbers as parameters and returns their quotient.
function divide( a, b ) {
    return a / b;
}

// BONUS
// Create a function called isEven that takes a number as a parameter and returns true if the number is even, false otherwise.
function isEven( num ) {
    return ( num % 2 == 0 ) ? true : false;
}

/*
TESTING
*/
// console.log( greet("Teke") );
// console.log("3 * 5 = ");
// console.log( multiply( 3, 5 ) );
// console.log("10 / 5 = ");
// console.log( divide( 10, 5 ) );
// console.log( isEven(5) );
// console.log( isEven(6) );