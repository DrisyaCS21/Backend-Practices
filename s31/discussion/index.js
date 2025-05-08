console.log("Hello B458");


// [Section] Objects in JavaScript
	//An object is data type that is used to represent real world objects
	//it is a collection of related data and/or functionalities
	// In JavaScript, most core javascript features like strings and arrays are objects.
	//information stored in object are represented in a "key: value" pair
		//the key is also referred to as a "property" of an object

	//Different data type may be stored in object's property creating complex data structures.


//[SECTION] Create Object using the Object() class
	//Object() is a built-in class in JavaScript that allows creation of an object
	/*
		let objectName = new Object();

	*/

// instantiation - is the proce of creating an instance from a class
//instance - a copy of a bluepring that lets us developer create multiple copies data.
// the new operator signals creation of a new instance of the object that will be stored in our variable;
let myComputer = new Object();
console.log(myComputer);

//[SECTION] Creating Objects using Object Initializers / literal notation
	//This creates/declars an object and also initializes/assigns it's properties upon creation
	/*
		let objectName = {
			keyA: valueA,
			keyB: valueB,
			. . .
		}
	
	*/

let cellphone = {
	name: 'Nokia 3210',
	manufactureDate: 1999
}

console.log(cellphone);
console.log(typeof cellphone);


// [SECTION] Creating Objects using Constructor Function
	//creates a resubale function to create several objects that have the same data structure.
	//An instance is concrete occurence of any object which emphasize distinct/unique identity
	/*
		function ObjectName(keyA, keyB){
			this.keyA = keyA;
			this.keyB = keyB;
		}

	*/

//this keyword allows us to assign new object's property by associating them with values received from a constructor function's parameter

// This will serve as a blueprint.
function Laptop(name, manufactureDate){
	this.name = name;
	this.manufactureDate = manufactureDate;
	this.price = "250 USD";
}

// Instance of Laptop constructor:
let laptop = new Laptop('Lenovo', 2008);
console.log(laptop)

let laptopSecond = new Laptop('Acer', 2022);
console.log("laptop second:");
console.log(laptopSecond);

let laptopThird = Laptop('Acer', 2022);
console.log(laptopThird);


//[SECTION] Accessing Object Propeties
	//dot notation
	/*
		objectName.propertyName;


	*/

console.log(laptop.name);
console.log(laptop.manufactureDate);
console.log(laptop.price);

// Access property of an object inside an array;

// the elements of our array is an object
let array = [laptop, laptopSecond];

// target the name property of laptopSecond;

console.log(array[1].name);

// bracket notation
console.log(array[1]['name']);

// target the price of laptop object
console.log(array[0].price);
console.log(array[0]['price']);


// Adding property on our Object:
let car = {};
console.log("Car Object: ");
console.log(car);

// add property
car.name = 'Honda Civic';
console.log(car);

// reassigment of value
car.name = "Ford Raptor";
console.log(car);

// delete a property
delete car.name;
console.log(car);

const dog = { 
	name: "Chris"
}

console.log(dog);

dog.name = "Christopher";

delete dog.name;
console.log(dog);

//Initializing/adding object properties using object methods
let person = {
	name: 'John',
	talk : function(){
		console.log('Hello my name is ' + this.name);
	}
}

console.log(person);
console.log('Result from object method: ');


person.name = "Peter";

person.talk();

// add method to an object

person.walk = function(){
	console.log(this.name + ' walked 25 steps forward.');
}

person.walk();

// Example of method

let friend = {
	firstName: 'Steve',
	lastName: 'Kerr',
	address: {
		city: 'Austin',
		country: 'Texas'
	},
	emails: ['joe@mail.com', 'joesmith@email.xyz'],
	introduction: function(){
		console.log("Hello my name is " + this.firstName + ' ' + this.lastName + ". I live in " + this.address.city + ', ' + this.address.country + ". My email is " + this.emails[1]);
	}
}

friend.firstName = 'Lebron';
friend.lastName = "James";

friend.introduction();

// Pokemon Game

// constructor function to create pokemon
function Pokemon(name, level){

	// properties
	this.name = name;
	this.level = level;
	this.health = level * 2;
	this.attack = level;

	// methods
	this.tackle = function(targetPokemon){
		console.log(this.name + ' tackled ' + targetPokemon.name);
		console.log("targetPokemon's health is now to _targetPokemonHealth_");
	}

	this.faint = function(){
		console.log(this.name + " fainted.");
	}
}

let pikachu = new Pokemon("Pikachu", 16);
let rattata = new Pokemon("Rattata", 8);

pikachu.tackle(rattata);

rattata.tackle(pikachu);
