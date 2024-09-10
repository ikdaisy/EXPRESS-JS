//STARTING AN EXPRESS APPLICATION AND REQUEST HANDLER USING app.get() and app.post()

const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application instance
const PORT = 3000; // Define the port number

// Route handler for the root path (/)
app.get("/", (req, res) => {
  // Send a response with the message "Hello World!!"
  res.send("Hello World!!");
});

// Route handler for the /about path but will return ERROR
app.post("/about", (req, res) => {
  // Send a response with the message "About Page"
  res.send("About Page");
});



// app.get("*",(req,res)=>{
//     res.status(404).send("Invalid");
// })



// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


