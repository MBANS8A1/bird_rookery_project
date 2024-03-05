//custom error handler
exports.handleBadRequest = (err,req,res,next) =>{
    if(err.status){
       res.status(err.status).send({err: err.err})
    }
    next(err)
}

//sql error
exports.handlepSqlErrors = (err,req,res,next) =>{

   if (err.code ==='23502'){
       res.status(406).send({msg: 'violates not-null constraint-undefined/missing column or field'})
   }
   else if(err.code === '22P02'){
       res.status(err.status).send({err: err.err})

   }
   next(err)
}


//internal server error
exports.handleServerError = (err, req, res) => {
   console.log(err)
   res.status(500).send({msg: "internal server error"})
}