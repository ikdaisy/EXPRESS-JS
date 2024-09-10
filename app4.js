//Function of a middleware

const express = require("express"); // Import the Express framework for building web applications
const PORT = 3000; // Define the port number on which the server will listen
const app = express(); // Create an instance of the Express application

// Define a middleware function named Token
function Token(req, res, next) {
    console.log("Middleware executed"); // Log a message to indicate the middleware is running
    next(); // Call the next middleware or route handler in the chain
}

// Route handler for the root path ('/')
app.get("/", (req, res) => {
  console.log("Router executed"); // Log a message to indicate the route handler is running
  res.send("GET");
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});