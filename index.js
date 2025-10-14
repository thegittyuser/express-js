const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server Started");
});

app.set("view engine", "ejs");

app.get("/views", (req, res) => {
  res.render("users");
});
