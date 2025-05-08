console.log("Happy Monday!");

// Manipulating Arrays with Array Methods
// JavaScript has built-in functions and methods for arrays. This will allow us to manipulate and access array items.
	// There are 3 types of JS Array methods
	// 1. Non - Mutator Method - allows us to manage and perform tasks on an array without updating the contents of the original array.
	// 2. Mutator Methods - allows us to manage and performa tasks on array by updating the contents of the original.
	// 3. Iterator Methods - allow is to loop over elements/items in an array and performs tasks with them. 

// Array:
let fruits = ['Apple', 'Orange', 'Kiwi', 'Dragon Fruit'];

	for(let index = 0; index < fruits.length; index++){
		console.log(fruits[index]);
	}
	//1. push();
		// adds element at the end of the array AND returns the array's updated length.
		/*
			arrayName.push("item/sToPush");
		*/

	console.log('Current Array: ');
	console.log(fruits);

	let fruitsLength = fruits.push('Mango'); //return fruits.length
	console.log(fruitsLength);

	console.log('Mutated array from push method: ');
	console.log(fruits);

	// Add Multiple elements
	fruitsLength = fruits.push('Avocado', 'Guava');
	console.log(fruitsLength);
	console.log('Mutated array from push method: ');
	console.log(fruits);

	/*
		function push(element){
			array[array.length] = element;
			return array.length;
		}

	*/

	// use push method in a function
	function addFruit(fruit){
		fruits.push(fruit);
	}

	addFruit("PineApple");
	console.log(fruits);

	// 2. pop();
		//removes the last element in an array AND returns the removed item;
		/*
			Syntax:
				arrayName.pop();
		*/


	console.log("Array before the pop Method:");
	console.log(fruits);

	let removedFruit = fruits.pop();
	console.log(removedFruit);

	console.log("Mutated array from the pop method:");
	console.log(fruits);

	// lets try in a function

	function removeFruit(){
		fruits.pop();
	}

	removeFruit();
	console.log(fruits);

	//3. unshift()
		//add one or more elements at the beginning of an array AND it will return the updated length of the array
		/*
			Syntax:
				arrayName.unshift('element/sToBeAdded');
		*/

	console.log("Array before unshift Method: ")
	console.log(fruits)
	fruitsLength = fruits.unshift('Lime', 'Banana');
	console.log(fruitsLength);

	console.log("Mutated array after the unshift method:")
	console.log(fruits);


	// lets try to use it in a function
	function unshiftFunction(fruit){
		fruits.unshift(fruit);
	}

	unshiftFunction('Calamansi');
	console.log(fruits)

	// 4. shift()
		//removes element at the beginning of an array AND returns the removed element.
		/*
			Syntax:
				arrayName.shift();
		*/

	removedFruit = fruits.shift()
	console.log(removedFruit);

	console.log('Mutated Array from shift method:')
	console.log(fruits);

	// let us try to use shift method in a function
	function shiftFruit(){
		fruits.shift();
	}

	shiftFruit();
	console.log(fruits);

	// 5. splice()
		// simultaneosly removes elements from a specified number and adds elements AND it will return an array that contains the remove item/s
		/*
			Syntax:
				arrayName.splice(startingIndex, deleteCount, elementsTobeAdded);

		*/

	removedFruit = fruits.splice(0, 2);
	console.log(removedFruit);
	console.log(fruits);


	//6. sort()
		// rearranges the array elements in alphanumeric order and it will return return the sorted array.

	console.log(fruits.sort());
	console.log('Mutated array from sort method: ');
	console.log(fruits);