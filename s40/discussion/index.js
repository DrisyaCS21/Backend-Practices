const express = require("express");
const mongoose = require("mongoose");

const app = express();


const port = 4000


// [SECTION] Connecting to MongoDB Atlas
mongoose.connect("mongodb+srv://RupertRamos09:admin123@zuitt-batch224.re3gm0t.mongodb.net/B458-to-do?retryWrites=true&w=majority&appName=Zuitt-Batch224")


// Sets notification for connection success or failure
let db = mongoose.connection;

// If a connection error occured, output in the console
// console.error.bind(console) allows us to print errors in the browser consle and in the terminal.
db.on("error", console.error.bind(console, "connection error"));

// If the connection is successful, output in the console:
db.once("open", () => console.log("Connected to MongoDB Atlas"));


// [SECTION] Mongoose Schemas

// Use the Schema() constructor of the Mongoose module to create a new Schema object.
// The "new" keyword creates a new Schema.
const taskSchema = new mongoose.Schema({
	// Define the fields with its corresponding data types
	name: String,
	status: {
		type: String,
		// Default values are predefined value for a field if we don't put any value.
		default: "pending"
	}
});


// The variable/object "Task" can now be used to run commands for interactive with our database.
// Task is writter with capitalized first letter following the MVC approach for naming convention.
// Using Mongoose, the package was programmed well enough that it automatically converts the sigular form of the model into plural form when creating a collection in our database. (from task ----> tasks)
const Task = mongoose.model("Task", taskSchema);



// Creating a new Task

// Business Logic - algorithm of the function on how to excute the function to get an expected result.

/*
	1. Add a functionality/validation to check if there are duplicate tasks.
		- If the task already exist in the database, we return an error message.
		- If the task doesn't exist in the DB, we add/save it in the DB.
	2. The task data will be coming from the request's body.
	3. Use the model to create a new Task object with a name field/property.
	4. The status property, it does not need to be provided with a value because our Schema sets a default value "pending" for the task object upon its creation.
*/

// Middlewares:
app.use(express.json());

app.use(express.urlencoded({extended:true}));




app.post("/tasks", (req, res) => {
	console.log(req.body.name)
	Task.findOne({name: req.body.name}).then((result, err) => {
		if(result != null && result.name == req.body.name) {
			return res.send("Duplicate task found.");
		} else {
			let newTask = new Task({
				name: req.body.name
			})

			newTask.save().then((savedTask, saveErr) => {
				if(saveErr) {
					return console.error(saveErr);
				} else {
					return res.send("New Task Created")
				}
			});

		};

	})
});




// Tells if the server is running and listening to a port.
if(require.main === module) {
	app.listen(port, () => console.log(`Server running at port ${port}`));
}

// Exports app module for checking
module.exports = { app, mongoose };