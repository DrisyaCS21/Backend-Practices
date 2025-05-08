console.log("Good evening!");

// [SECTION] While Loop
// a while loop takes in an expression/condition
//Expressions areany unit of code that can be evaluated to a value
// If the condition evaluates to be true, the statements inside the code block will be executed
// A statement is a command that the programmer gives to the computer
// The loop will iterate a certain number of time until the expression/conditio is met
// Iteration is the term given the repitition of statements.
/*
	Syntax:
		while(expression/condition){
			statement/s;
			decrementation/incrementation;
		}


*/

let count = 1;
// While the value of count is not equal to zero our loop will run here.
while (count !== 0){
	// The current value of count is printed out.
	console.log("While: "+ count);

	// Decreases the value of count by 1 after every iteration to stop the loop when it reaches 0
	//That loops occupy a significant amount of memory space in our device
	// Make sure that expression/condition in loops have their corresponding increment/decrement operators to stop the loop.
	// Forgetting to include a stopper in loop will make our application run an infinite loop which will eventually crash our device
	// After running the script, if a slow response from the browser is experienced or an infinite loops is seen in the console quickly close the application/browser/ tab to exit the situation.
	count--;
}


// [Section] Do While
// A do-while loop works a lot like a while loop. But unlike while loops, do-while loops guarantee that the code will be executed/run atleast once.
/*
	Syntax:
	do{
		statement;
		increment/decrement;
	}while(condition/expression)
*/

//Number function works similarly to the parseInt function
// let number = Number(prompt("Give me a number: "));

// do {
// 	//the current value of number is printed out
// 	console.log("Do While: " + number);

// 	number += 1; // this is same with number++;

// }while (number < 10)

//[SECTION] For Loop
// A for loop is more flexible than while loop and do while loop. It has 3 parts:
	// 1. THe "initialization" value that will track the progression of the loop
	//2. the "expession/condition" that wil; be evaluated which will determine whether the loop will run one more time or not
	//3. The "finalExpression" indicates how the advance the loop

/*
	Syntax:
		for(initialization; expression/condition; finalexpression){
			statement/s;
		}
*/
/*
	Will create a loop that will start from 0 and end at 20

*/

for(let count = 0; count <= 20; count++){
	console.log('For Loop: ' + count);

}

let myString = "Hello, I am Drisya!";
// characters in string may be counted using the .length property
// Strings are special compared to other data types in that it has access to functions and other pieces of information that other data types might not have.
console.log(myString.length);

// Access characters of a string
// Individual characters of a string may be accessed using it's index number. It starts with 0 and plus to the ff. charaters.
// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);

// console.log(myString[myString.length - 1]);
// console.log(myString.length - 1);

// using a for loop we want to console all its character
for(let x = 0; x <= myString.length - 1; x++){
	console.log(myString[x]);
}

// we are going to create a loop that will print out the letters of the name individually and print out the number 3 instead when the letter to be printed out is a vowel.

let myName = "Drisya";
/*
	3
	l
	3
	x
	
	Mandira
	M
	3
	n
	d
	3
	r
	3
*/
// myName = myName.toLowerCase();
for(let i = 0; i<= myName.length -1 ; i++){
	// console.log(myName[i]);

	if(myName[i].toLowerCase() === "a" || myName[i].toLowerCase() === "e" || myName[i].toLowerCase() === "i" || myName[i].toLowerCase() === "o" || myName[i].toLowerCase() === "u"){
		console.log(3);
	}else{
		console.log(myName[i]);
	}
}