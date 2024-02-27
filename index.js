const { Experimental_CssVarsProvider } = require("@mui/material");
const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("first middleware");
//   return next(); //stops functions execution, i.e following line wont run
//   console.log("first middleware-after calling next");
// });

// app.use((req, res, next) => {
//   console.log("second middleware");
//   next();
// });

// defining our first middleware, it runs first

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next(); //if we dont add this, next middleware wont run
  }else{
    res.send('sorry you need a password')
  }
};
app.use((req, res, next) => {
  req.requestTime = Date.now(); //adding method to req. So I have access to request time on every route handler
  console.log(req.method, req.path);
  next();
});


//after verifyPassword, whats next is the (req,res) callback. so it will run. 
//Next() depends on where the middleware is run. 
app.get('/secret',verifyPassword, (req,res)=>{ 
    res.send("sometimes i dress like a carrot and sit on the yard")
})
app.get("/", (req, res) => {
  console.log(`request date: ${req.requestTime}`);
  res.send("hello from home"); //after this, whole req/res cycle stops
});

app.use((req,res)=>{
    res.status(404).send("not found")
})
app.listen("3000", (req, res) => {
  console.log("listening to 3000");
});
