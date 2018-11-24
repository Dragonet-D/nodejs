const express = require("express");
const app = new express();
const session = require("express-session");

app.use(session({
  secret: "this is string key",
  resave: false,
  saveUninitialized: true
}));

app.get("/", (req, res) => {
  if (req.session.userinfo) {
    res.send("welcome back");
  } else {
    res.send("hello express");
  }
});

app.listen(3000, "localhost");