const express = require("express");
const app = new express();

app.get('/', (req, res) => {
  res.send("hello express");
});

app.listen(3000, "localhost");
