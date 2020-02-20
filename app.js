const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("hello from docker");
});

app.listen(3000, function() {
  console.log("app is listening on 3000");
});
