console.log("ES6 Updates!");

// [SECTION] Exponent Operator

// 8 raise to the power of 2 or 8 * 8:
let firstNum = 8 ** 2;
console.log(firstNum);

//Exponent Assignment Operator
// 64 multiply to 64
firstNum **= 2;
console.log(firstNum);

let secondNum = Math.pow(8, 2);
console.log(secondNum);


// [SECTION] Template Literals
let name = "John";

// before template literals
let message = 	"Hello " + name +
	"! Welcome to programming.";
console.log(message);

// Template Literals
message = `Hello ${name}! Welcome to programming!`;
console.log(message);

let anotherMessage = `	${name} attended a math competition. 
He won it by solving the problem 8 ** 2 with the solution of ${secondNum}`;
console.log(anotherMessage);

// perform operations in Template Literals
const interestRate = 0.1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

// [SECTION] Array Destructuring
// allows to unpack elements of an array into distinct variables
//allow us to name array elements with variables instead of using index number
// Helps us to read the code better.
	/*
		Syntax: 
			let/const [variableNameA, variableNameB, variableC, ...] = arrayName;
	*/

const fullName = ["Juan", "Dela", "Cruz"];

// Before the array destructuring
let name1 = fullName[0];
let name2 = fullName[1];
let name3 = fullName[2];
console.log(name1);
console.log(name2);
console.log(name3);

//Array destructuring
let [firstName, middleName, lastName] = fullName;
console.log(firstName);
console.log(middleName);
console.log(lastName);

// [SECTION] Arrow Function
// Compact alternative syntaxl a traditional functions
//useful for code snippets where creating functions will not be reused in any other portion of the code.
// adheres to the DRY principle. Do not Repeat Yourself
	/*
		syntax:
			const variableName = () => {
					statement/s;
			}

	*/

// function printFullName(firstName, middleName, lastName){
// 	console.log(`${firstName} ${middleName} ${lastName}`);
// }

// printFullName("Lebron", "None", "James");

// arrow function
const printFullName = (firstName, middleName, lastName) => {
	console.log(`${firstName} ${middleName} ${lastName}`)
}

printFullName("Chris", "Pogi", "Mortel");

// Arrow function with Implicit return
	//if the function has one statement it will have implicit return

// const add = (x, y) => x + y;
const add = (x, y) => {
	return x+y;
}

const total = add(1, 2);
console.log(total);

// [SECTION] Class-based Object Blueprints
//allow creation/ instantiation of objects using classes as blueprint

// Blueprint of class
class Car {
	constructor(brand, name, year){
		this.brand = brand;
		this.name = name;
		this.year = year;
	}

	// method
	run = () => {
		console.log(`${this.name} is now running!`);
	}
}

// Instance of Car class
let myCar = new Car('Ford', "Ranger", 2021);
console.log(myCar);
myCar.run();

// ES14
	//released 2023

// toSorted()
	//it allows you to sort an array by returning a new array instead of updating the array;

let array = [2, 3, 1, 4, 5];
console.log(array);
// array.sort();
// console.log(array);
let sortedArray = array.toSorted();
console.log("Original Array: ", array);
console.log("Sorted New Array: ", sortedArray);

// findLast();
	//the findLast() method allows you to find the last occurence of an element in an array;

let arrayNumbers = [14, 2, 8, 24, 23, 27, 28, 31];

// we need find the last element that is divisible by 2
let lastEvenNumber = arrayNumbers.findLast((number) => number % 2 === 0);

console.log(lastEvenNumber);

// what if I want to get the index of the last even number
console.log(arrayNumbers.lastIndexOf(arrayNumbers.findLast((number) => number % 2 === 0)));

// toSpliced()
	//it allows you to create an updated array from the original array by removing or adding elements.
	// array.stoSpliced(startingIndex, deleteCount, elementsToBeAdded);

let songsList = ["Yellow", "Sunday Morning", "Red", "Raining in Manila", "Crossing Field"];

// let removedItem = songsList.splice(1, 1, "Monday Morning" );

// console.log(removedItem);
// console.log(songsList);

console.log(songsList);
let splicedArray = songsList.toSpliced(1, 1, "Monday Morning");

console.log(splicedArray);
console.log(songsList)