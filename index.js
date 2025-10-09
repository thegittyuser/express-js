const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server Started");
});
// Response Methods

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/expressapi", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "admin",
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob@example.com",
        role: "editor",
      },
      {
        id: 3,
        name: "Charlie Davis",
        email: "charlie@example.com",
        role: "viewer",
      },
    ],
  });
});

app.get("/about", (req, res) => {
  res.redirect("https://www.google.com");
});

app.get("/users", (req, res) => {
  res.sendStatus(404);
});

app.get("/files", (req, res) => {
  // res.sendFile(__dirname + "/files/randomText.pdf");

  res.download(__dirname + "/files/randomText.pdf");
});
