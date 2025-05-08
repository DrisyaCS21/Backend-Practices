// http module lets Node.js transfer data using the Hypet Text transfer Protocol
// Also allos the transfer of data between applications (client-server apps)
// require is directive keyword that allows us to call a module, package or dependency from Node Package Manager
let http = require('http');

const port = 4000;

// let items = ["Laptop", "Deskptop", "Tablet"];

// createServer() method allows us to create a server that listens to a specified port to process request and response.
// listen() method allows us to declare the port where our server will listen
// We can only assign 1 port per an application.
const app = http.createServer(function (request, response) {

	if(request.url == '/greeting') {
		// Use the writeHead method to:
		// Set a status code 200 - means OK.
		// Set the Content-Type of response to a plain text message.
		response.writeHead(200, {'Content-Type': 'text/plain'});

		// Send the response with a text containing "Hello World!"
		response.end('Hello World Again!');
	} else if (request.url == '/homepage') {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('This is the Homepage.');
	} else if (request.url == '/items' && request.method === "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end("Laptop, Desktop, Tablet");
	} else if (request.url == '/items' && request.method === "POST"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end("This route will be used to add another item");
	} else {
		response.writeHead(404, {'Content-Type': 'text/plain'})
		response.end('Page not found.')
	}

	

});


app.listen(port);

// To confirm if the server is running on the specified port number
console.log('Server running at localhost:4000')