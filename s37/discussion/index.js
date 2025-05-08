// MongoDB Aggregation
	//used to generate manipulated data and perform operations to create filtered results that helps in analytzing data
	//compared to crud operations on our data from previous session, aggregation gives us access to manipulate, filter and compute for results providing us with information to make necessary development decicions having to create a frontend application

//$match operator
	// the match operator is used to pass the documents that meet the specified condition(s) to the next pipeline stage/aggregation process.
	
	/*
		Syntax: 
			{$match: {field: value}}
	*/

//$group operators
	//group operator is used to group elements together and field-value pairs using the data from the grouped elements

	/*
		Syntax: 
			{$group: {_id: 'value', fieldResult: "valueResult"}}

	*/

//$sum operator
	//sum operator will get the total values of all fields in the returned documents that are found in the pipeline.

// count the number of stocks of all onSale fruits
db.fruits.aggregate([
		{$match: { onSale: true}},
		{$group: {_id: "$supplier_id", total : {$sum: "$stock"}}}
	])


// field projection
	// $project operator can be used when aggregating data to include/exclude fields from the returned result

db.fruits.aggregate([
		{$match: { onSale: true}},
		{$group: {_id: "$supplier_id", total : {$sum: "$stock"}}},
		{$project: {_id: 0}}
	])

// Sort aggregated result
	//the sort can be sued to change order of aggregated results
	//possible value 1 and -1

db.fruits.aggregate([
		{$match: { onSale: true}},
		{$group: {_id: "$supplier_id", total : {$sum: "$stock"}}},
		{$sort: { total: -1 }}
	])


// aggregating results based on array fields
	//the $unwind operator deconstructs an array field with an array value to output result for each element.
	/*
		{$unwind: field}
	*/

db.fruits.aggregate([
		{$unwind: "$origin"}
	])

// what if we want to count all the kinds of fruits from one origin
db.fruits.aggregate([
		{$unwind: "$origin"},
		{$group: {_id: "$origin", kinds: {$sum: 1}}
	])