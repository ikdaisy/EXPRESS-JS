//BODY-PARSER

// Require the Express framework to build web applications
const express = require("express");

// Define the port number on which the server will listen
const PORT = 3000;

// Require the body-parser middleware for parsing request bodies
const bodyParser = require("body-parser");

// Create an Express application instance
const app = express();

// Use the body-parser middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded());

// Use the body-parser middleware to parse JSON data in request bodies
app.use(bodyParser.json());

// Route handler for the root path ('/') - GET request
app.get("/", (req, res) => {
  // Send a simple response "Hello" for the root path
  res.send("Hello");
});

// Route handler for the '/about' path - POST request
app.post("/about", (req, res) => {
  // Set the response status code to 200 (OK)
  res.status(200).send("Hey");

  // Log the request body to the console
  // This will be useful for debugging and seeing what data is being sent
  // in the POST request
  console.log(req.body);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});