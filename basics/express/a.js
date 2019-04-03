const express = require("express");
// const bodyParser = require("body-parser");
const app = new express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//  默认找views目录
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(3000, "localhost");
