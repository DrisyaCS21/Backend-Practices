//First thing that you need to do
console.log("Hello World!");

//Comments:
  //Comments are the parts of the code that gets ignored by the language
  //Comments are meant to describe the written code

  /* 
  There are two types of comments:
    1.The single-line comments and is denoted by two slash (//)
    2.The multi-line comments and is denoted by a slash and asterik (/*)
  */

//Section - Variables, Declarations and Initializations
   // Declaration of variable(creation of variable - tells our devices that a variable name is created and is ready to store data.)
  // Declaring a variable without giving it a value will automatically assign it with the value of "undefined"

//javascript has three ways of variable declarations:
//var
//let- used to declare a block-scoped local variable, optionally initializing it to a value
//const- declares a blocked scoped, read-only name constant.

// syntax:
// let variableName;
// const variableName;

let myvariable;

console.log(myvariable);

// console.log(hello);

// Declaration - Initialization
   // Initialization this is the process of asigning the first value for our variable.

/* 
Declaration
let firstName;

Initialization:
firstName = "Michael";
*/

let firstName = "Michael";
console.log(firstName);

// let let = "hello";
// we cannt give a name let becz;
// 'let' is a reserved keyword in js

// let is used if we want to reassign the value of our variable.
let productName = "desktop computer";
console.log(productName);

let productPrice = 18999;
console.log(productPrice);

// const is used if we dont want to change our value in variable.
const interest = 3.539;


//reassigning the value of variable name
productName = "laptop";
console.log(productName);

// what process occurs here?Declara and initia
// let friend = "kate";
// friend = "jane";
// console.log(friend);

let friend = "kate";
// reaassiging
friend = "jane";

// reassiging of const var will cause an error.
// interest = "4.489";

// while declaring const it should be together in same line.
const pi = 3.141;

// Section - Data Types

// Boolean Data
// Boolean values are used to store relating to the state of certain things.(true/false)

let isMarried = false;
let inGoodConduct = true;
console.log(isMarried);
console.log(inGoodConduct);

// null 
//null data is used to intentionally express the absense of value in a variable declaration or initialization.
// null simply means that the data type assigned to a variable does not hold any value/amount or is nullified

// null is used when you want to explicitly indicate that a variable has no value or intentionally empty.
let spouse = null;
console.log(spouse);


// Undefined - represents the state of a variable that ahs been declared but without an assigned value, below is the eg;

let fullName;
console.log(fullName);


// Numbers
// Integers/ whole numbers
let myNumber = 0;
let headCount = 26;
console.log(myNumber);
console.log(headCount);

// Decimal Numbers
let grade = 98.7;
console.log(grade);

// exponential Notation
let planetDistance = 2e10;
console.log(planetDistance);


// BigINt
// very large inetegers that cannot be exactly represented are automatically rounded.
// n is used to explicitly denote that the no. should be treated as a BigINt rather than a regular Javascript Number.
const bigInteger = 90007199254740992n;
console.log(bigInteger);

// strings - athey are a series of char that create a word, a phrase, or a sentence or anything related to creating a text.
let country = "Nepal";
let province = 'Manila';
console.log(country);
console.log(province);

let numberString = "2";
console.log(numberString);

// Arrays - In js, an array is a special type of object.
// Arrays are used to store ordered collection of values, and each value in an arrat is associated with a number index.

let gardes = [97.8, 92.1, 90.2, 94.6];
console.log(gardes);

// Objects - its another special kind of data type that is used to mimic real world object/items
// They are used to create cpmplete data

let myGrades = {
        firstGrading: 98.7,
        secondGrading: 92.1,
        thirdGrading: 90.2,
        fourthGrading: 94.6
    }

    console.log(myGrades);










