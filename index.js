const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
  console.log("first middleware-after calling next");
});

app.use((req, res, next) => {
  console.log("second middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("hello from home");
});
app.listen("3000", (req, res) => {
  console.log("listening to 3000");
});
