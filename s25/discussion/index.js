console.log("Happy Fiesta!");

// prompt();
// pop up that will collect user input

function printInput(argument) {
	// body...
	let nickname = prompt("Enter Your nickname: ");

	console.log(nickname);
}

// printInput();

// [Section] Functions and Parameters
// We dont need to use prompt to pass data into function. Using parameter you can directly pass data to a function.
// A parameter acts as a named/variable that exist only inside the function.(parameter/s is/are function scoped)

// function with one parameter
function printName(name) {
	// body... 
	console.log("My name is " + name);

	return name;
}

// [Section] Invoking functions with arguments
// values are passed when invoking a function are called the arguments. These arguments are stored as the parameters within the function.
printName("Juana");
printName("Drisya");

// [Section] Variable as arguments
// Variable can also be sued as an argument to pass dynamic data within javascript as a result of other operations in the codes.

let sampleVariable = "Dahyun";

printName(sampleVariable);
printName();
printName("chris", "topher");

// function with one parameter
function checkDivisibiltyBy8(num) {
	let remainder = num % 8;
	console.log("The remainderof " + num + "divided by 8 is: " + remainder);

	// we are going to create a variable that will contain a boolean value if the number is divisible or not

	let isDivisibleBy8 = remainder == 0;
     console.log("Is " + num + "divisible by 8?");
     console.log(isDivisibleBy8);
}

checkDivisibiltyBy8(5);

// Functions as arguments
// Functions parameters can also accept other functions as arguments
// some complex functions use other functions as arguments to perform more complicated results
// More discussion about this will be discussed in the array methods.

function argumentFunction() {
	console.log("this function was passed as an argument before the message was printed.")
}

function invokeFunction(argFunction) {
	argFunction();
}

invokeFunction(argumentFunction);


// Function with multiple parameters

function createFullName(firstName, middleName, lastName) {
	console.log(firstName + " " + middleName + " " + lastName);
}

createFullName("chris" , "NA" , "Mortel");
let firstName = "chris";
let middleName = "NA";
let lastName = "jun";

createFullName(firstName, middleName, lastName);












