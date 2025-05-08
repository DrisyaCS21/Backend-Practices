console.log("Advance happy weekend!");

// [Section] Array
// We neeed arrays becuase it let us store multiple values into a single variable.
//Arrays are used to store multiple "related values" in a single variable.
// Commonly used to store numerous amounts of data to manipulate in order to perfrom number of tasks
// Arrays also provide acces to anumber of functions/ methods that help in manipulating/accessing the content
// a method is another for functions associated with an object and is used to execite statements that are relevant to a specific object

// If we are not goint to use array:
let studentNumberA = "2024-1923";
let studentNumberB = "2024-1924";
let studentNumberC = "2024-1925";
let studentNumberD = "2024-1926";
let studentNumberE = "2024-1927";

// If we use array
	//we use square bracket or the array literals to create an array
let studentNumbers = ['2024-1923', '2024-1924', '2024-1925', '2024-1926', '2024-1927']

console.log(studentNumbers);
// In javascript, array is special type of an object.
console.log(typeof studentNumbers);

/*
	Syntax :
		let/const arrayName = [elementA, elementB, elementC, . . .];

*/

//Array of numbers:
// let grades = [98.5, 94.3, 89.2, 90.1];
// console.log(grades);

//Array of strings:
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Redfox', 'Gateway', 'Toshiba', 'Fujitsu'];
console.log(computerBrands);

// Array of Boolean:
let truthValues = [true, false, true, false];
console.log(truthValues);

// Mixed Array - this is not recommended
let mixedElements = [12, 'Asus', null, undefined, {}, true];
console.log(mixedElements);

// Other ways to create or initialize an array
// using multiple lines
let myTasks = [
		'drink HTML',
		'eat JavaScript',
		'inhale CSS',
		'bake SASS'
	]

console.log(myTasks);

// create an array using variable
let city1 = "Kathmandu";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];
console.log(cities);

// Array length - to get the number of elements in an array (.length)
/*
	Syntax:
		arrayName.length;

*/

console.log(cities.length);
console.log(myTasks.length);


let blankArr = [];
// it will result to zero because it doesnt have any element.
console.log(blankArr.length);


// Accessing element of an array
//accessing array elements is one of the more common tasks that we do in array
//Thi can be done through the use of array indexes.

// the index value starts from zero
let grades = [98.5, 94.3, 100, 89.1, 89.2, 90.1, 85.9];
console.log(grades);

console.log(grades[0]);
console.log(grades[3]);

// to get the last element in the aray
console.log(grades[grades.length - 1]);

// this will be undefined because there is no element occupying index 7;
console.log(grades[7]);

let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "Kareem"];
console.log(lakersLegends);

// console.log(lakersLegends[-3]);

// contain element/s in a variable;
let currentLaker = lakersLegends[2];
console.log(currentLaker);

// reassign the value of an element
console.log(lakersLegends);
lakersLegends[1] = "Pau Gasol";
console.log(lakersLegends);

// add element in the array
let newArr = [];
console.log(newArr);

newArr[0] = "Cloud Strife";
console.log(newArr);

newArr[1] = "Tifa Lockhart";
console.log(newArr);

newArr[newArr.length] = "Barrett Wallace";
console.log(newArr);

// Looping over an array
// You can use a for loop to iterate over all items in an array.

// console all elements from array
for(let index = 0; index < newArr.length; index++){
	console.log(newArr[index]);
}

//one-dimensional array
let numArr = [5, 10, 30, 46, 40];

// to create a for loop the array and check if the element is divisible by 5 or not
	//if the number is divisible by 5 console the number and concatenate " is divisible by 5."
	//otherwise, console the number and concatenate " is not divisible by 5";

for(let index = 0; index < numArr.length; index++){
	// console.log(numArr[index]);
	// we need to add if statement to check whether the number is divisible by 5 or not
	
	if(numArr[index] % 5 === 0){
		console.log(numArr[index] + " is divisible by 5.")
	}else{
		console.log(numArr[index] + " is not divisible by 5.")
	}

}


// Multidimensional aray
//array inside an aray
//nested array

//two-dimensional array
//array of arrays
let chessBoard = [
	['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
	['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
	['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
	['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
	['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
	['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
	['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
	['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']

]
console.log(chessBoard);
console.table(chessBoard);

console.log(chessBoard[0][3]);

console.log(chessBoard[3][4]);