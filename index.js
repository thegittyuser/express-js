// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server Started");
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Services" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.get("/blog", (req, res) => {
  res.render("blog", { title: "Blog" });
});
