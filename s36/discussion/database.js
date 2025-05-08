// selecting a databes
// syntax: use db_name;

use course_booking;

// [SECTION] Create
// Insert Documents
//insertOne()
	//use to insert a single document into a collection.
	//db.collection_name.insertOne({document});

db.users.insertOne({
	firstName: "Jane",
	lastName: "Doe",
	age: 21,
	contact: {
		phone: "87654321",
		email: "janedoe@mail.com"
	},
	courses: ["CSS", "JavaScript", "Python"],
	department: "none"
})

db.users.insertOne({
	firstName: "John",
	lastName: "Doe",
	age: 21,
	contact: {
		phone: "87654321",
		email: "johndoe@mail.com"
	},
	courses: ["CSS", "JavaScript", "Python"],
	department: "none"
})

//insertMany()
//used to insert multiple documents into a collection
	// syntax: db.collection_name.insertMany([{document}, {document}, . . .]);

db.users.insertMany([
		{
			firstName: "Stephen",
			lastName: "Hawking",
			age: 76,
			contact: {
				phone: "87654321",
				email: "stephenhawking@gmail.com"
			},
			courses: ["Python", "React", "PHP"],
			department: "none"
		},
		{
			firstName: "Neil",
			lastName: "Armstrong",
			age: 82,
			contact: {
				phone: "87654321",
				email: "neilarmstrong@gmail.com"
			},
			courses: ["React", "Laravel", "Sass"],
			department: "none"
		}
	])

// [SECTION] Read/retrieve
//findOne()
	//find the first dociment that will match the search term will be returned
	//syntax: db.collection_name.findOne({field:value});

db.users.findOne({firstName: "stephen"});
db.users.findOne({lastName: "Doe"});

// find()
	//find multiple documents
	// syntax: db.collection_name.findMany({criteria});
db.users.find({lastName: "Doe"});

// [SECTION] Update
// updateOne()
	//it will update the first matching document.
	// syntax: db.collection_name.updateOne({criteria}, {$set: {fieldB: valueB}});

db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "00000000",
        email: "test@gmail.com"
    },
    courses: [],
    department: "none"
});

db.users.updateOne({firstName: "Test"},
	{
		$set: {
			firstName: "Bill",
			lastName: "Gates"
		}
	}
)

//updateMany()
	// db.collection_name.updateMany({criteria}, {updatedproperties});

db.users.updateMany({department: "none"},
	{
		$set: {department: "HR"}
	}
)


// Comparison Query Operators
//Greater than and greater than or equal
	//syntax:
		// db.collection_name.find({field : {$gt: value}});
		// db.collection_name.find({field : {$gte: value}});

db.users.find({age: {$gt : 50}});
db.users.find({age: {$gte : 50}});

//Less than and less than or equal
	//syntax:
		// db.collection_name.find({field : {$lt: value}});
		// db.collection_name.find({field : {$lte: value}});
db.users.find({age: {$lt : 50}});
db.users.find({age: {$lte : 50}});

// not equal operator
	//syntax: db.collection_name.find({field: {$ne : value}})

db.users.find({age: {$ne : 21}});

// In operator
//allows us to find documents with specific match criteria one field using different values
	//syntax: db.collection_name.find({field: { $in : [values]}});

db.users.find({lastName : { $in : ["Hawking", "Doe"]}});

// Or Operator
//allows us to find documents that match one or more of the specified criteria
	//syntax: db.collection_name.find({$or: [{fieldA: Value}, {fieldB: valueB}]})

db.users.find({$or: [{ firstName: "Neil"}, {age: 25}]});

// Field Projection
//retrieving documents are common operation that we and by default mongodb queries return the whole document as response

//Inclusion
	//allows us to include/add specific fields only when retrieving documents
	//db.collection_name.find({criteria}, {field: 1});

db.users.find({lastName: "Doe"}, { firstName: 1, lastName: 1, contact: 1});


//Exclusion
	//allows us to exclude/remove specific fields only when retrieving documents
	//db.collection_name.find({criteria}, {field: 0});

db.users.find({firstName: "Jane"}, {contact: 0, department: 0});

// suppressing ID field
db.users.find({lastName: "Doe"}, { firstName: 1, lastName: 1, contact: 1, _id: 0});

// Regex operator
	//allow us to find documents that match a regular expression
	//syntax: db.users.find({field: {$regex: 'value'}});

db.users.find({firstName: { $regex: 'ne', $options: 'i'}});
