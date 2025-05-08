console.log("Hello everyone!");

// [SECTION] if, else if and else statement

let numG = -1;

// if statement
// Execute a statement if the specified condition is true.
// true
if(numG < 0){
	console.log("Hello!");
}

//else if statement/clause
// executes a statement if previous conditions are flase and if the specified condition is true
// THe "else if" clause is optional and can be added to captue additional conditions to change the flow of a program.

let numH = 1;

if(numG < 0 ){
	console.log("Hello from second conditional statement");
}else if(numH > 0 ){
	console.log("World");
}

// else statement
// executes a statement if and only if al the other conditions were not satisfied or false
// The else statement is optional and can be added to capture any other result to change the flow of a program

if(numG > 0){
	console.log("Hi I am from the third if statement");
} else if(numH === 0){
	console.log("Hello from else if!");
} else{
	console.log("I am safety net!");
}

// if, else if and else statements are use together with function
// Most of the times we would like to use if, else if and else statements with functions to control the folow of our application.
// By including them inside functions, we can decide certain condtions will be checked instead of executing statements when the JS loads.
// The "return" statement can be utilized with conditional statements.

let message;

function determineTyphoonIntensity(windSpeed){
	console.log(typeof windSpeed)
	if(typeof windSpeed !== "number"){
		return "Invalid input, add number please!";
	}
	else if(windSpeed < 0){
		return "The windSpeed is invalid! We cannot have negative speed!"
	}
	else if(windSpeed < 30){
		return "Not a typhoon a yet.";
	} else if(windSpeed <= 61){
		return "Tropical Depression detected."
	} else if(windSpeed <= 88){
		return "Tropical storm detected!";
	} else if (windSpeed <= 117){
		return "Severe Tropical storm detected";
	} else {
		return "Typhoon detected!";
	}
}

message = determineTyphoonIntensity(85);
console.log(message);

// We can further control the flow of our program based on conditions and changing variables result

// console.warn() is a good way to print warnings in our console that could help us developers act on certain output within our code

if (message === 'Tropical storm detected!'){
	console.warn(message);
}

//= - assignment
//== - equality
// === - strict equality operator


//[SECTION] Truthy and Falsy
/*
	In Javasript a truthy value is a value that is considered true when encountered in a Boolean context
	Values are considered true unless defined otherwise:
	Falsy values/exceptions for truthy:
	
	1. false
	2. 0
	3. -0
	4. ""
	5. null
	6. undefined
	7. NaN - not a number

*/

// truthy
if(true){
	console.log("Truthy");
}

if(1){
	console.log("Hi I am 1 and I am a truthy value.");
}

if([]){
	console.log("Hi I am empty array and I am also a truthy value.");
}

// falsy value
if(false){
	console.log("Falsy");
}

if(0){
	console.log("Falsy");
}

if(undefined){
	console.log("Falsy");
}

//SECTION Conditional - Ternary Operator
/*
	It will only take 3 operands
	1. condition
	2. expression to execute if the condition is truthy
	3. expression to execute of the condition is faly

	THis could be alternative for if statement
	Ternary operators have an implicit return meaning that withpout the return keyword, the resulting expression can be stored in variable.
*/

let ternaryResult = (19 < 18) ? true : false;

console.log(ternaryResult);

// the parseInt function converts the input received into a number data type
let age = parseInt(prompt("What is your age?"));
console.log(age);
let legalAge = (age > 18) ? "You are of legal age!" : "You are under age limit!";
console.log(legalAge);

// [Section] Switch Statement
// can be used as an alternative to an if statement where the data to be used in the condition is of an expected output
// The break statement is used to terminate the current lopp once a match has been found.
/*
	Syntax:
		switch(expression){
			case value:
				statement;
				break;
			default:
				statement;
				break;
		}

*/
// THe cases in switch statement are case sensitive
// the toLowerCase() method wil change the input received from the promt into all lowercase letters
let day = prompt("What day of the week is it today?").toLowerCase();

switch(day){
	case 'monday':
		console.log("The color of the day is red!");
		break;
	case 'tuesday':
		console.log("The color of the day is orange!");
		break;
	case 'wednesday':
		console.log("The color of the day is yellow!");
		break;
	case 'thursday':
		console.log("The color of the day is green!");
		break;
	case 'friday':
		console.log("The color of the day is blue!");
		break;
	case 'saturday':
		console.log("The color of the day is indigo!");
		break;
	case 'sunday':
		console.log("The color of the day is violet!");
		break;
	default:
		console.log("Please input a valid day!");
		break;
	
}

//[SECTION] Try - catch - finally Statement
/*
	try-catch statements are commonly used for error handling
	there are instance when application return an error.
*/

// error
// conole.log("Hello world!");

// console.log("Hello world!");
try{
	// It will try to execute the code
	conole.warn(determineTyphoonIntensity(27))
}catch(error){
	// If there is an error, the catch statement will run and capture the error
	console.warn(error)
}finally{
	console.warn("Intensity updates will show new alert");
}

console.log("I am after the error")
