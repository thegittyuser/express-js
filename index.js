const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server Started");
});
// default route as home page ( / ) OR localhost:3000

// Single Route
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

// Double/nested Route

app.get("/about/profile", (req, res) => {
  res.send("<h1>Profile Page</h1>");
});

// Parameter Route like calling a digit
app.get("/about/profile/:bookno", (req, res) => {
  res.send(req.params);
});

// Query Route like ?name=ali
app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send("You Search For: " + name + " & Your Age is: " + age);
});
