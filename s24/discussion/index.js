// console.log("Belated Happy Teej!");

// [Section] Functions
	// Functions in JavaScript are lines/blocks of codes that tell our device/application to perform a certain task when called/ invoke
	//Functions are mostly created to create complicated tasks to run several lines in succession.
	// They are also used to prevent repeating lines/block of codes that perform the same task or function.

// Function Declarations
	//A function definition consists of the function keyword. (also called a function declaration or function statement)

	/*
		function keyword is used to define a javascript funtion
		functionName is the name. Functions are named to be able to call or invoke them
		function block - the statements which comprise the body of function. This is where the code will be executed.

		Syntax:
		function functionName(){
			code block or statement;
		}
	*/

// Example:

// Anatomy of this function:
	// function keyword
	//sayHello - function name
	// {console.log("Hello World!")} - function block
function sayHello(){
	console.log("Hello World!");
}
console.log("Hello B458!");

//[Session] Function Invocation/calling function
	//The code block or the statements inside the function is not immediately executed when function is defined. They will only be execued if the function is called/invoked.

// Let's invoke the function sayHello();
sayHello();
// sayHello();
// sayHello();

// function works like a variable.
// declaredFunction();

// [SECTION] Function Namin Convention
	// JavaScript Function names are also case-sensitive. So, similar to variables, the camelCasing approach.
	//FUnction names should be definitive of the task it will perform. It is usually contains descriptive nouns and vers as prefixes

// good practice

function getCourses(){
	let courses = ['Scinece 101', "Math 101", "English 101"];
	console.log(courses);
}

getCourses();

function displayCarInfo(){
	console.log("Brand: Toyota");
	console.log("Type: Sedan");
	console.log("Price: 1, 500, 000");
}

displayCarInfo();

// Avoid generic names to avoid confusion within your code:
function get(){
	let name  = "Dahyun";
	console.log(name);
}

get();

// Avoid pointless and inappropriate function names
function foo(){

	console.log(25%5);

}

foo();

// Function Epression
	// we use the function key word and we spicy a name for the function declaration.
	//A function expression is a function that is created as part of an expression, typically by being assigned to a variable. It can be either named or anonymous.
	
	// function expression with a named function
	let funcExpression = function funcName(){
		console.log("Hello from the other side!");
	}

	funcExpression();

	//function expression with anonymous function
	let variableFunction = function(){
		console.log("Hello again!");
	}

	variableFunction();


// Function Declaration vs. Function Expression
	//1. Syntax - the syntx in creating function dclaration and function expression is different.
	//2. Hoisting - is a JavaScript mechanism where variables or function declarations are moved to the top of their scope before the code execution.
	// 3. Function declaration, you can reassign the function. Function declaration you can still reassign the function as long as the function expression is initialized using let and not const.

	// function declaration:
	declaredFunction();

	function declaredFunction(){
		console.log("Hello world from declaredFunction()!");
	}

	// Function expression

	// variableHoisting();

	let variableHoisting = function(){
		console.log("hello again from variableHoisting()!");
	}

	variableHoisting();

// [SECTION] Understanding Scope in JavaScript
	// Scope determines the accessibility of variables in JavaScript. Its like the boundaries that define where in your code voriables / function can be used and access.

	// 1. Global Scope - Global scope is the entire city of javascript

	//Global Scope Variable

	const globalVariable = "I'm global Variable!";

	function globalFunction(){
		console.log(globalVariable);
	}

	globalFunction();

	console.log(globalVariable);

	//2. Local Scope - There are two types of local scoping
		// Function Scope: the variable or function created inside a function will only be accessible inside the function.


		function localFunction(){
			const localVariable = "Im a local variable!";
			console.log(localVariable);
		}

		localFunction();

		// console.log(localVariable);

		// 2. Block scope - Variables declared within block will only be accessible inside the block.

		// Block scoping:
		{
			const blockVariable = "I'm block-scope variable";
			console.log(blockVariable);
		}

		// console.log(blockVariable);

// Return statement
	//return statement allows us to output a value from a function to be passed to the line of code that invoke the function

	function returnFullName(){
		return "Jeffrey Smith Bezos";
	}

	returnFullName();


	console.log(localFunction());
	console.log(returnFullName());

	function addNumbers(){
		
		let sum = 10 + 5;
		console.log(sum);
		// Keep in mind that you should have 1 return in function only.
		return sum;
		// This will not run.
		console.log("I am after the return!")
	}

	addNumbers();

	// console.log(addNumbers());
