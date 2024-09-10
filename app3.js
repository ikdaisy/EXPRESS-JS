// Middleware in Node.js refers to functions that have access to the request and response objects,
//  and can modify the request or response before the final handler is called

const express = require("express"); // Import the Express framework for building web applications
const PORT = 3000; // Define the port number on which the server will listen
const app = express(); // Create an instance of the Express application

// Import the 'path' module for working with file paths
const path = require("path");

// Use the `express.static()` middleware to serve static files from the 'pages' directory
app.use(express.static("pages"));

// Route handler for the root path ('/')
app.get("/", (req, res) => {
  // Log the current directory path (for debugging purposes)
  console.log(__dirname);

  // Send the 'index.html' file from the 'pages' directory as the response
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});