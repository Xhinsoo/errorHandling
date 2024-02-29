Middleware
Express middlewares are function that run during the req/res lifecycle. It has access to req and res objects. res.send ends this cycle.

If we write or use some middleware that does not send a response back to the users client then you must call next() at the end of your middleware function. The next () tells express to move to the next middleware in the stack. But if you forget to call it then your app will pause and nothing will happen.

If we are to define custom error handling middleware: we need (err,req,res,next)

and we must specify: next(err) to move it to second error handle. If we do not include err, it will go to normal middle ware

--- 
npm i morgan
 const morgan = require('morgan')

app.use(morgan('common'))
it is a logger. can give us: time logs of user interaction and server responses

---
app.use 
It enables us to load middleware func into Express so that it knows to use it.
It runs for every incoming req
We can define error handling routes which will invoke 
everytime there is am error. instead of express default error handler
We can use it define 404 route:
    put app.use at the end of file, so if res/req cycle doesn't end, app.use will send 404 not found

---
app.get(path, callback, [callback])

this is another way of using app.get, we can add multiple callbacks
---
next() : it will call next middle ware


next(err): if we pass anything inside next, express will regard it as being an error and will skip anything non error handling routing and middleware functions.

---
