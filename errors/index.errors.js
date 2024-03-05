
  //custom error handler for errors
  exports.handleBadRequest = (err,req,res,next) =>{
    if(err.status){
       res.status(err.status).send({err: err.err})
    }
    next(err)
  }
  
  //psql errors
  exports.handlepSqlErrors = (err,req,res,next) =>{
  
   if (err.code ==='23502'){
       res.status(406).send({msg: 'violates not-null constraint not acceptable request body or missing column or field'})
   }
   else if(err.code === '22P02'){
       res.status(400).send({msg: 'property-value is of the wrong datatype or request body is malformed'})
  
   }
   next(err)
  }
  
  //internal server error
  exports.handleServerError = (err, req, res) => {
   console.log(err)
   res.status(500).send({msg: "internal server error"})
  }