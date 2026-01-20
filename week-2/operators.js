//A
// // 1. addition

const number = 5 + 2;
console.log(number + 3);

console.log(4 + 3);

//2 . substraction

console.log(9 - 4);
console.log(7 - 2);

//. strict equal//

console.log(5 === 5);
console.log(5 === 8);

//2. not strict equal

console.log(5 !== 5);
console.log(5 !== 8);

//3. greater than

console.log(5 > 3);
console.log(2 > 4);

//4. less than

console.log(3 < 6);
console.log(7 < 1);

//5. greater than or equal to

console.log(4 >= 4);
console.log(5 >= 8);

//6. less than or equal to

console.log(3 <= 5);
console.log(9 <= 2);

//7. AND operator

console.log(5 > 2 && 3 < 6);
console.log(4 > 7 && 8 < 1);

//8. OR operator

console.log(5 > 2 || 3 < 1);
console.log(4 > 7 || 8 < 1);

//9. NOT operator

console.log(!(5 === 5));
console.log(!(3 > 1));

//10. Increment operator

let a = 5;
a++;
console.log(a);

//11. Decrement operator

let b = 10;
b--;
console.log(b);

//12. Modulus operator

console.log(10 % 3);
console.log(15 % 4);

//13. Exponentiation operator

console.log(2 ** 3);
console.log(3 ** 4);

//14. Assignment operator

let c = 5;
c += 3; // equivalent to c = c + 3
console.log(c);

let d = 10;
d -= 4; // equivalent to d = d - 4
console.log(d);

let e = 6;
e *= 2; // equivalent to e = e * 2
console.log(e);

let f = 20;
f /= 5; // equivalent to f = f / 5
console.log(f);

let g = 15;
g %= 4; // equivalent to g = g % 4
console.log(g);

let h = 3;
h **= 2; // equivalent to h = h ** 2
console.log(h);
//15. String concatenation operator

const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);
//16. Ternary operator

const age = 20;
const canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);

//17. Comma operator

let x = (1, 2, 3);
console.log(x); // outputs 3
//18. Typeof operator

console.log(typeof 42); // outputs "number"
console.log(typeof "Hello"); // outputs "string"
//19. Void operator

function myFunction() {
  return "Hello";
}
console.log(void myFunction()); // outputs undefined
//20. Delete operator

const myObject = { name: "Alice", age: 25 };
delete myObject.age;
console.log(myObject); // outputs { name: "Alice" }
//21. Spread operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // outputs [1, 2, 3, 4, 5]
//22. Rest operator

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // outputs 10
//23. Optional chaining operator

const user = { profile: { name: "Bob" } };
console.log(user.profile?.name); // outputs "Bob"
console.log(user.address?.city); // outputs undefined
//24. Nullish coalescing operator

const foo = null ?? "default string";
console.log(foo); // outputs "default string"

const bar = "Hello" ?? "default string";
console.log(bar); // outputs "Hello"
//25. Logical nullish assignment operator

let baz = null;
baz ??= "now assigned";
console.log(baz); // outputs "now assigned"

let qux = "already assigned";
qux ??= "new value";
console.log(qux); // outputs "already assigned"
//26. Logical AND assignment operator

let a1 = true;
a1 &&= false;
console.log(a1); // outputs false

let b1 = false;
b1 &&= true;
console.log(b1); // outputs false
//27. Logical OR assignment operator

let c1 = false;
c1 ||= true;
console.log(c1); // outputs true

let d1 = true;
d1 ||= false;
console.log(d1); // outputs true
//28. BigInt operator
const bigInt1 = BigInt(9007199254740991);
const bigInt2 = 9007199254740991n;
console.log(bigInt1 + bigInt2); // outputs 18014398509481982n
