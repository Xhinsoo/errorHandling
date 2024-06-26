Middleware
Express middlewares are function that run during the req/res lifecycle. It has access to req and res objects. res.send ends this cycle.

If we write or use some middleware that does not send a response back to the users client then you must call next() at the end of your middleware function. The next () tells express to move to the next middleware in the stack. But if you forget to call it then your app will pause and nothing will happen.

If we are to define custom error handling middleware: we need (err,req,res,next)

and we must specify: next(err) to move it to second error handle. If we do not include err, it will go to normal middle ware. Anything passed into next() will be viewed as error and move onto another error handling middleware.

---

npm i morgan
const morgan = require('morgan')

app.use(morgan('common'))
it is a logger. can give us: time logs of user interaction and server responses

---

app.use
It enables us to load middleware func into Express so that it knows to use it.
It runs for every incoming req
We can define error handling routes which will invoke everytime there is am error. instead of express default error handler
We can use it define 404 route:
put app.use at the end of file, so if res/req cycle doesn't end, app.use will send 404 not found


app.get(path, callback, [callback])

this is another way of using app.get, we can add multiple callbacks

next() : it will call next middle ware



error handling middleware
app.use(err,req,res,next)
next(err): if we pass anything inside next, express will regard it as being an error and will skip anything non error handling routing and middleware functions.



class AppError extends Error { //its extending the default error handler
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;}
}
module.exports = AppError

we can use this class to throw new error 
throw new AppError("not allowed", "404")


anytime we are interacting with DB with mongoose, model methods like save, findById, findByBdAndUpdate takes time. These are all async functions and can go wrong.

Anytime we want to throw error from these async route handlers, we will have to use next() middleware.

app.get("/", (req,res,next)=>{
    if(!product){
        return next(new AppError("not found","404")) //returns stops rendering of ejs templates
    }
    res.render("home")
})


next() with value passed in will trigger the next error handler
