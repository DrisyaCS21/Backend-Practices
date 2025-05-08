// Checking if the js file is connected/linked with the html file properly.
console.log("Happy Teej!");

// [SECTION] Arithmetic Operators

let x = 1397;
let y = 7831;

// Addition(+)
let sum = x + y;
console.log("Result of addition operator: " + sum);

// Subtraction(-)
let difference = x - y;
console.log("Result of subtraction operator: " + difference);

// Multiplication (*)
let product = x * y;
console.log("Result of multiplication operator: " + product);

//Division (/)
let quotient = x / y;
console.log("Result of division operator: " + quotient);

//Assignment Operators

// Basic Assignment Operator (=)
// The assignment operator assigns the value of the right operand to a variable
let assignmentNumber = 8;

// Reassign value:
assignmentNumber = 10;
console.log(assignmentNumber);

//Addition Assignment Operator (+=)
// Addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable;
assignmentNumber += 2;
console.log("Result of addition assignment operator: " + assignmentNumber);

// Subtraction Assignment Operator(-=)
assignmentNumber -= 2;
console.log("Result of subtraction assignment operator: "+ assignmentNumber);

// Multiplication Assignment Operator (*=)
assignmentNumber *= 5;
console.log("Result of multiplication assignment operator: " + assignmentNumber);

// Division Assignment Operator (/=)
assignmentNumber /= 2;
console.log("Result of division assignment operator: " + assignmentNumber);

// [SECTION] Multiple Operators or parenthesis
// PEMDAS or MDAS or BODMAS

let mdas = 1 + 2 -3 * 4 / 5;
/*
   Order of evaluation:
      1. 3 * 4 = 12
      2. 12 / 5 = 2.4 (1 + 2 - 2.4)
      3. 1 + 2 = 3 (3 - 2.4)
      4. 3 - 2.4 = 0.6

*/
console.log ( "Result of Mdas operator: " + mdas);

// [SECTION] Incrementation and Decrementation
// Operators are used to add or subtract values by 1 and reassigns the value of the variable where the increment/ decrement was applied to;

let z = 1;

// Incrementation
++z;
console.log("Result of Incrementation: " + z);

// Two types of Incrementation
// Pre-Increment (++z);
   // THe value of variable is added by a value of one before returning the value and storing it in the variable;

// Post-Increment(z++);
z++;
console.log("Result of post increment: " + z);

// Decrementation
// Two types of Decrementation
// Pre-decrement(--z);
--z;
console.log("Result of pre-decrement: " + z);

// Post-decrement
z--;
console.log("result of post-decrement: " + z);

// [SECTION] Type Coercion
// Type coercion is the automatic or implicit conversion of values from one type to another.
//THis happens when operations are performed on different data types that would normally not be possible and yield irregukar results.
// values are automatically converted from one data type to another data type to resovle operations.

let numA = '10';
let numB = 12;

// check the data type of our variable by using the typeof operator

console.log(typeof numA);
console.log(typeof numB);

// when add a string and a number the result will be a string.
// It will automatically convert the number into string and concatenate them.
let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

let numC = 16;
let numD = 14;

let nonCoercion = numC + numD;
console.log(nonCoercion);
console.log(typeof nonCoercion);

// true = 1 and false = 0
let numE = true + 1;
console.log(numE);
console.log(typeof numE);

let numF = false + 1;
console.log(numF);
console.log(typeof numF);

// [SECTION] Equality Operator
// Checks whether the operands are equal/have the same value/content
// attempts to convert and compare operands of different data types
// return a boolean value
//if they the same content/value, it will return true otherwise false.

let juan = "juan";

// Equality Operator (==)
console.log(1 == 1);
console.log(1 == 2);
console.log( 1 == "1");
console.log(true == "true");
console.log(true == 1);
console.log(true == "1");

// Inequality Operator (!=)
// Checks whether the operamds are not equal/have different value
// attempts to convert and compare opearnds of different data types
console.log(1 != 1);
console.log(1 != 2);
console.log( 1 != "1");
console.log( true != "true");
console.log(true != 1);
console.log('juan' != juan);

//Strict Equality Operator(===)
// Check whether the operands are equal/have the same content
// also compares the data type of 2 values
// JavaScript is loosely type language meaning that values of different data types can be stored in variables.

console.log(1 === 1);
console.log( 1 === 2);
console.log(1 === '1');
console.log(0 === false);

// Strict Inequality Operator (!==)
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== "1");
console.log(1 !== true);

// [SECTION] Relational Operators
// comparison operators check whether one value is greater or less than to the other value

let a = 50;
let b = 65;

// GT or Greater Than Operator ( > )
let isGreaterThan = a > b;
console.log(isGreaterThan);

//LT or Less Than Operator ( > )
let isLessThan = a < b;
console.log(isLessThan);

//GTE or Greater Than or Equal Operator ( >= )
let isGTorEqual = a >= b;
console.log(isGTorEqual);

//LTE or Less Than or Equal Operator ( <= )
let isLTorEqual = a<=b;
console.log(isLTorEqual);

// type coercion/type casting
let numStr = "30";
console.log( a > numStr);

// it will not be possible
let str = "twenty";

// [SECTION] Logical Operators

let isLegalAge = true;
let isRegistered = false;

// Logical AND Operator (&& - Double Ampersand)
// Returns true if all operands are true
console.log(isLegalAge && isRegistered);

// Logical OR Operator (|| - Double Pipe)
// returns true if atleast one of the operands is true
console.log(isLegalAge || isRegistered);

// Logical NOT Operator (! - Exclamation point)
// Returns the opposite value
console.log(!isLegalAge);
