
const express = require("express");
const app = express();
const AppError = require('./appError')

// app.use((req, res, next) => {
//   console.log("first middleware");
//   return next(); //stops functions execution, i.e following line wont run
//   console.log("first middleware-after calling next");
// });

// app.use((req, res, next) => {
//   console.log("second middleware");
//   next();
// });

// defining our first middleware

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next(); //if we dont add this, next middleware wont run
  }
  throw new AppError('password required', 401)
}
//app.use matches every http inc request and fires back
app.use((req, res, next) => {
  req.requestTime = Date.now(); //adding method to req. So I have access to request time on every route handler
  console.log(req.method, req.path);
  next();
});

//after verifyPassword, whats next is the (req,res) callback. so it will run.
//Next() depends on where the middleware is run.
//protecting route
app.get("/secret", verifyPassword, (req, res) => {
  res.send("sometimes i dress like a carrot and sit on the yard");
});

app.get("/", (req, res) => {
  console.log(`request date: ${req.requestTime}`);
  res.send("hello from home"); //after this, whole req/res cycle stops
});

app.get("/chicken", (req, res) => {
  chicken.fly();
});
app.get('/admin', (req,res)=>{
  throw new AppError("you are not admin", 401)
})

app.use((req, res) => {
  res.status(404).send("not found");
});

//logging error and passing to default error handling
// app.use((err, req, res, next) => {
//   console.log("*******error*******");
//   console.log("*****************");
//   // res.status(500).send("oh we have error")
//   next(err); //if i dont write next, req/res cycle ends,
//   // we need to pass err in next() to let default error handling function
// });

//error handling, placed at last so it can fire after all other functions and middleware
app.use((err, req, res, next) => {
  const {status,message} = err
  res.status(status).send(message)


});


app.listen("3000", (req, res) => {
  console.log("listening to 3000");
});
