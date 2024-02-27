Middleware
It has access to req and res objects

If we are to define custom error handling middleware: we need (err,req,res,next)

and we must specify: next(err) to move it to second error handle. If we do not include err, it will go to normal middle ware

--- 
npm i morgan
 const morgan = require('morgan')

app.use(morgan('common'))
it is a logger

---
app.use
runs for every incoming req
we can use it define 404 route:
    put app.use at the end of file, so if res/req cycle doesn't end, app.use will send 404 not found