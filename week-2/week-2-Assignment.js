//1 .Create two numbers and:

let myNum1 = 10;
let myNum2 = 5;
//  - Add them
let add = myNum1 + myNum2;
console.log(add);

//- Subtract them

let subtract = myNum1 - myNum2;
console.log(subtract);
// - Multiply them

let multiply = myNum1 * myNum2;
console.log(multiply);

// - Divide them

let divide = myNum1 / myNum2;

console.log(divide);

//2. Create a number and:
let myNum = 7;

//  - Increase it by 1 using an operator
myNum++;
console.log(myNum);

//- Decrease it by 1 using an operator
myNum--;
console.log(myNum);

//3 .Create two numbers and print:
let num1 = 15;
let num2 = 4;
console.log(num1 % num2);

//4. Create a number and raise it to the power of 3.
let baseNum = 3;
console.log(baseNum ** 3);

//Part 2: Comparison Operators
//1.Crate tow variables:
let A = 8;
let b = "16";
console.log(A === b);

//2.Create two values and check if they are not equal using !==.
let H1 = 20;
let H2 = 10;
console.log(H1 !== H2);

// Part 3: Logical Operators
//1.Create two comparison expressions and combine them using &&.
let com1 = 5 > 4;
let com2 = 7 < 9;
console.log(com1 && com2);
console.log(com1 || com2);
console.log(!com1);

//Part 4: Truthy vs Falsy
//1. Create a variable with a value that is falsy.
let isThatRight = false;
if (!isThatRight) {
  console.log("falsy value detected");
}
//2. Create a variable with a value that is truthy.
let isThatRight2 = true;
if (isThatRight2) {
  console.log("truthy value detected");
}
//3. crerate a variable and use || to give it a default value.
let areYouReady = null;
let readyStatus = areYouReady || "Yes, I am ready!";
console.log(readyStatus);

//Challenge(Optional):

let userName = "KMT";
userName && console.log("wellcome back ");

userName || console.log("Please sign up");
