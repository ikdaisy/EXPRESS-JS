//without using body-parser

const express = require("express");
const PORT = 3000;
const app = express();

// Use middlewares for parsing request bodies (typically at the top)
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GET");
});

app.post("/about", (req, res) => {
  res.status(200).send("POST");
  console.log(req.body); // Now you can access form data here
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});