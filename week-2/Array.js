//1. Array is data type that can store multiple elements.

const fruits = ["Apple ", "Banana", "Orange", "Kiwi"];
console.log(fruits);

//2. Accessing elements in an array using index.

console.log(fruits[0]); // Accessing first element
console.log(fruits[3]); // Accessing third element

//3. updating elements in an array.
fruits[1] = "Mango";
console.log(fruits);
fruits[3] = "Strawberry";
console.log(fruits);

//4.Length -returns how may elements inside an array.
console.log(fruits.length);

//_________  Methods that return new array __________//

//5. concat ()- merges array to a new array

const fruitsTwo = ["Apple", "Banana", "Orange"];
const moreFruits = ["Cherry", "Grape"];
const allfruits = fruitsTwo.concat(moreFruits);

console.log(allfruits); // ["Apple", "Banana", "Orange", "Cherry", "Grape"]
console.log(fruitsTwo); // Original array remains unchanged
console.log(moreFruits); // Original array remains unchanged

//6.    .flat( ) - flattens tha arrays

const nestedNumbers = [[1, 2, [3, 4], [5, 6]]];
const flattenedNumbers = nestedNumbers.flat();

console.log(nestedNumbers); // [1, 2, 3, 4, 5, 6]
console.log(flattenedNumbers); // [1, 2, 3, 4, 5, 6]

//7.   slice() - exracts a portion of an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers);

const myFavoriteColors = ["green", "yello", "blue", "red", "white "];
const mySlicedFavoriteColors = myFavoriteColors.slice(2, 5);
console.log(mySlicedFavoriteColors);

// 8.  Methotds that change the original array //

// 1. copying an array

const originalFruits = ["Kiwi", "Banana", "Cherry"];
const kaungFruits = [...originalFruits];

console.log(kaungFruits); // ["Kiwi", "Banana", "Cherry"]
console.log(originalFruits); // ["Kiwi", "Banana", "Cherry"]

// 2. push() - adds elements to the end of an array

console.log(originalFruits);
kaungFruits.push("Peach");
console.log(kaungFruits);

// 3. pop() - removes the last element from an array

console.log(kaungFruits);
kaungFruits.pop();
console.log(kaungFruits);

// 4.  .unshift() - add an element at the beginning of an array
kaungFruits.unshift("Grapes");
console.log(originalFruits);
console.log(kaungFruits);

//5. shift() - removes the first element from an array
kaungFruits.shift();
console.log(originalFruits);
console.log(kaungFruits);

// 6 .Reverse() - reverses the order of elements in an array
console.log(originalFruits);
console.log(kaungFruits.reverse);

// 7. sort() - sorts the elements of an array in place and returns the sorted array

const newNumbers = [4, 2, 8, 6, 5, 1, 7, 3];
console.log(newNumbers);
newNumbers.sort((a, b) => a - b);
console.log(newNumbers);

//_________Methods that find and element in tht array__________//

// 1. indesOf() - returns the first index at which a given element can be found in the array.

const kaungFavoriteColors = ["green", "yellow", "blue", "red", "white"];
console.log(kaungFavoriteColors.indexOf("blue")); //2

// 2 .lastIndexOf() - returns the last index at which a given element can be found in the array.

console.log(kaungFavoriteColors.lastIndexOf("red")); //3

// 3. at() - Gets an element at a specific position.

console.log(kaungFavoriteColors.at(1)); // yellow
console.log(kaungFavoriteColors.at(-1)); // white //counts from the end of the array

// 4. includes() - Checks if an element exists in an array.

const traninLanes = ["f", "e", "d", "c", "b", "a"];
console.log(traninLanes.includes("c")); // true
console.log(traninLanes.includes("x")); // false

//_________Joiners & Converters __________//

//    join (). - converts an array into a string

const kaungFruitsArray = ["Mango", "Banana", "Cherry"];
const kaungfruitsString = kaungFruitsArray.join(" / ");
console.log(kaungfruitsString); // "Mango, Banana, Cherry"

//2. Array.form() - creates a new array from a string
const str = "Hello";
const chars = Array.from(str);
console.log(chars); // ['H', 'e', 'l', 'l', 'o']

// 3. Array.isArray() - checks if a value is an array
const nycNumbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(nycNumbers)); // true
console.log(Array.isArray("Hello")); // false
