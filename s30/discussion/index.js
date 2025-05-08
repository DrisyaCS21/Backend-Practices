console.log("B458 is now hungry!");

// Non-Mutator methods
	//these are methods that do not modify or change the original array;

let countries = ['US', 'PH', 'NP', 'SG', 'TH', 'PH', 'FR', 'DE'];

	//1. indexOf()
		//return the index number of the first matching element found in array
		//if no match was found, the resut will be -1.
		//the search process will start from first element proceeding to the last element.
			/*
				arrayName.indexOf(searchValue);
				arrayName.indexOf(searchValue, startingIndex);
			*/
	console.log(countries);
	// Example of indexOf():
	let firstIndex = countries.indexOf('PH');
	console.log(firstIndex);

	console.log(countries.indexOf('PH', 2));
	console.log("After the non-mutator method:");
	console.log(countries);
	//2. lastIndexOf()
		// returns the index number of the last matching element found in array.
		//The search process will be done from last element proceeding to the first element.
		/*
			arrayName.lastIndexOf(searchValue);
			arrayName.lastIndexOf(searchValue, startingIndex);

		*/

	let lastIndex = countries.lastIndexOf('PH');
	console.log('Result of lastIndexOf method: ' + lastIndex);

	let lastIndexStart = countries.lastIndexOf('PH', 0);
	console.log('Result of lastIndexOf method: ' + lastIndexStart);


	//3. slice()
		// portion/slice elements from an array AND returns it as a new array
		/*
			arrayName.slice(startingIndex);
			arrayName.slice(startingIndex, endingIndex);

		*/

	let slicedArrayA = countries.slice(2);
	console.log('Results from slice method:');
	console.log(slicedArrayA);
	console.log(countries);

	let slicedArrayB = countries.slice(2, 6);
	console.log('Results from slice method:');
	console.log(slicedArrayB);

	let slicedArrayC = countries.slice(-4);
	console.log('Results from slice method:');
	console.log(slicedArrayC);

	// 4. toString();
		//returns an array as a string separated by commas
		/*
			arrayName.toString();
		*/


	let stringArray = countries.toString();
	console.log('Result from toString():');
	console.log(stringArray);

	//5. concat()
		//combines array with an array or with an element and returns the combined result
		/*
			arrayA.concat(arrayB);
			arrayA.concat(elementA);
		*/

	let tasksArrayA = ['drink HTML', 'eat Javascript'];
	let tasksArrayB = ['inhale css', 'breathe sass'];
	let tasksArrayC = ['get git', 'be node'];

	// concatenating an array with another array
	let tasks = tasksArrayA.concat(tasksArrayB);
	console.log('Result from Concat Method: ');
	console.log(tasks);

	let secondTasks = tasksArrayB.concat(tasksArrayA);
	console.log(secondTasks);

	// combine multiple arrays
	let allTasks = tasksArrayA.concat(tasksArrayB, tasksArrayC);
	console.log('Result from Concat Method: ');
	console.log(allTasks);

	// Combine array with elements
	let combinedTasks = tasksArrayA.concat('smell express', 'throw react', tasksArrayB);
	console.log('Result from Concat Method: ');
	console.log(combinedTasks);

	//6. join()
		//returns an array as a string separated by specified sepator string.
		/*
			arrayName.join(separatorString);

		*/

	let users = ['John', 'Jane', 'Joe', "Robert"];

	console.log(users.join(' - '));
	console.log(users.join());

// Iterator Methods
	//Iterator methods are loops designed to perform repitive task on array
	//Iterator methods loops over all items in an array
	//Useful for manipulating array data resulting in complex task

	// 1. forEach()
		// similar to a for loop that iterates on each array element
		/*
			arrayName.forEach(function(indivElement){statement});
		*/

	console.log(allTasks);
	//7 elements, the function will run 7 times
	// task parameter, the argument/value that will pass there will be the element from array
	allTasks.forEach(function(task){
		console.log(task);
	})

	console.log(users.forEach(function(name){
			console.log('My name is ' + name);
		}))

	//2. map()
		// iterate on each elemenet and returns new array with different values depending on result of the function's opertion
	/*
		let/const resultArray = arrayName.map(function);

	*/

 	let numbers = [1, 2, 3, 4, 5];
 	console.log(numbers);
 	//[1, 4, 9, 16, 25]
 	let numberMap = numbers.map(function(number){
 		console.log(number);

 		return number * 2;
 	})

 	console.log(numbers);

 	console.log(numberMap);

 	numbers.forEach(function(number){
 		console.log(number);
 	})

 	//3. every()
 		//checks if all elements in an array meet the given condition
 		//this is useful for validating data stored in arrays when dealing with large amount of data
 		//return true if all elements meet the condition and false otherwise
		/*
			Syntax:
				let/const resultArray = arrayName.every(function(indivElement){
					return (condition);
				})
		*/

 	let allValid = numbers.every(function(number){
 		return (number < 10);
 	})

 	console.log(allValid);

 	// 4. some()
 		//check if at least one element in the array meets the given condition
 		//returns a true value and false otherwise.
 		/*
			let/const resultArray = arrayName.some(function(indivElement{
				return (condition);
			}))
 		*/

 	let someValid = numbers.some(function(number){
 		return (number < 0);
 	})

 	console.log(someValid);

 	//5. filter()
 		//return a new array tha contains elements which meets the given condition
 		//return an empty array if no elements were found
 		/*
			let/const resultArray = arrayName.filter(funciton(indivElement){
				return (condition);
			})
 		*/


 	let filterValid = numbers.filter(function(number){
 		return (number < 0);
 	})

 	console.log(filterValid);

 	//6. includes()
 		//includes method checks if the argument passed can be found in an array
 		//it return a boolean valuee, true if the argument is found in the array and otherwise false
 		/*
			arrayName.inclues(elementToBeChecked);
 		*/

 	let products = ["Mouse", 'Keyboard', 'Laptop', "Monitor"];
 	let productFound1 = products.includes("mouse");
 	console.log(productFound1);

 	//7. reduce()
 		//evaluate elements from left to right/reduces the array into a single value;
 		/*
			let/const resultArray = arrayName.reduce(function(accumulator, current value){
				return (condition);
			})
 		*/

 	console.log(numbers);
 	/*
		[1, 2, 3, 4, 5]
		1. 1 * 2 = 2;
		2. 2 * 3 = 6;
		3. 6 * 4 = 24;
		4. 24 * 5 = 120


		1. 1 + 2 = 3;
		2. 3 + 3 = 6;
		3. 6 + 4 = 10;
		4. 10 + 5 = 15;



 	*/
 	let reducedArray = numbers.reduce(function(x, y){
 		return x + y;
 	})

 	console.log(reducedArray)
