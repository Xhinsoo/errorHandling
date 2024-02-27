Middleware

If we are to define custom error handling middleware: we need (err,req,res,next)

and we must specify: next(err) to move it to second error handle. If we do not include err, it will go to normal middle ware