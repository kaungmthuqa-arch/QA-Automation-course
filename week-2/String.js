// 1. ToUpperCase() - converts a string to uppercase letters

const kaungName = "kaung myat";
console.log(kaungName.toUpperCase()); // KAUNG MYAT

// 2. ToLowerCase() - converts a string to lowercase letters

const RICHARD_NAME = "RICHARD";
console.log(RICHARD_NAME.toLowerCase()); // richard

// 3. Trim() - removes whitespace from both ends of a string

let messyString = " JavaScript ";
console.log(messyString); // " JavaScript "
console.log(messyString.trim()); // "JavaScript"

//4. includes() - checks if a string contains a specified value

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("cat")); // false

// 5. slice() - extracts a section of a string and returns it as a new string