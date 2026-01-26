//Basic Number Operations

let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.3333...
console.log(a % b); // Modulus: 1
console.log(a ** b); // Exponentiation: 1000

//Comparing Numbers

console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal to: true
console.log(a <= b); // Less than or equal to: false
console.log(a === b); // Strict equality: false
console.log(a !== b); // Strict inequality: true

// Rounding Numbers

let num = 7.56;

// Rounds to nearest integer: 8
console.log(Math.round(num));

// Rounds down: 7
console.log(Math.floor(num));

// Rounds up: 8
console.log(Math.ceil(num));

// Rounds to 1 decimal place: "7.6
console.log(num.toFixed(1));

//Convcerting Numbers

let Numberis = "42.58";

// Converts string to number: 42
console.log(Number(Numberis));

// Converts string to integer: 42.58
console.log(parseInt(Numberis));

// Converts string to float: 42.58
console.log(parseFloat(Numberis));

// Checking Number

console.log(isNaN("hello")); // Checks if not a number: true
console.log(isFinite(1000)); // Checks if finite number: true
console.log(Number.isInteger(10.5)); // Checks if integer: false
console.log(Number.isSafeInteger(9007199254740991)); // Checks if safe integer: true

// Math Utility Methods
//Math.abs()- Returns the absolute value of a number
console.log(Math.abs(-15)); // Absolute value: 15

//math.min()- Returns the smallest of zero or more numbers
console.log(Math.max(1, 5, 3, 9, 2));

//math.max()- Returns the largest of zero or more numbers
console.log(Math.min(1, 5, 3, 9, 2));

//math.pow()- Returns base to the exponent power
console.log(Math.pow(2, 4)); // 2 raised to the power of 4: 16

//math.sqrt()- Returns the square root of a number
console.log(Math.sqrt(64)); // Square root of 64: 8

//math.random()- Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Random number between 0 and 1
