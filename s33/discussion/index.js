// console.log("Hello World");

// Syntax:
/*
	{
		"propertyA" : "valueA",
		"propertyB" : "valueB"
	}
*/

/*
	// This is how JSON formatted object look like:
	{
		"city": "Quezon City",
		"province" : "Metro Manila",
		"country " : "Philippines"
	}
	
	// This is how JSON formatted collection of objects looks like:
	"cities": [
		{ "city": "Quezon City", "province" : "Metro Manila","country " : "Philippines"},
		{ "city": "Manila City", "province" : "Metro Manila","country " : "Philippines"},
		{ "city": "Kathmandu City", "province" : "Bagmati Province", "country " : "Nepal"}
	]
*/

// A. Transporting JS objects to other application/s, converting JS objects into JSON format

// Example 1: Converting JS objects into JSON format
let batchesArr = [
	{
		batchName: "Batch X"
	},
	{
		batchName: 'Batch Y'
	}
];

// The "stringify" method is used to convert JavaScript objects into a string (JSON format) 
console.log('Result of stringify method');
console.log(JSON.stringify(batchesArr));


// Example 2: Creating a JSON formatted data directly using "stringify" method
let data = JSON.stringify({
	name: "John",
	age: 31,
	address: {
		city: "Manila",
		country: "Philippines"
	}
});



console.log(data);

// B. JS Reading or Coverting JSON formatted objects/data
/*
App A - js object -> json

json data

App B - json -> object
*/

let batchesJSON = `[{"batchName": "BatchX"}, {"batchName": "BatchY"}]`;

// "parse" to convert JSON formatted data into an accessible and modifiable object (JS Object)
console.log("Result from parse method");
console.log(JSON.parse(batchesJSON));

// Since it is already a JS object/array, using javaScript we could now add, edit, delete an object. 
let newArray = JSON.parse(batchesJSON);
newArray.push({batchName: "Batch Z"});

// We updated the batchesJSON with the added object
batchesJSON = newArray;
console.log(batchesJSON);
























