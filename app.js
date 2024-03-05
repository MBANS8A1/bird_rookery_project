
const apiRouter = require('./routes/api-router.js')
const express = require('express');
const app = express();
app.use(express.json())

app.use((req, res, next) => {
    console.log('Request method: ', req.method);
    console.log('Request url: ', req.url);
    let currentdate = new Date(); 
    let datetime = `Date and time request method made(format:day/month/year|hours:minutes:seconds): ${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()}|${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)
    next()
  });

 

const handle404 = (req, res) => {
  res.status(404).send({msg: "path not found"})
}

const handleBadRequest = (err,req,res,next) =>{
  if(err.status){
     res.status(err.status).send({err: err.err})
  }
  next(err)
}

//sql error
const handlepSqlErrors = (err,req,res,next) =>{

 if (err.code ==='23502'){
     res.status(406).send({msg: 'violates not-null constraint not acceptable request body or missing column or field'})
 }
 else if(err.code === '22P02'){
     res.status(400).send({msg: 'property-value is of the wrong datatype or request body is malformed'})

 }
 next(err)
}

//internal server error
const handleServerError = (err, req, res) => {
 console.log(err)
 res.status(500).send({msg: "internal server error"})
}

app.use('/api',apiRouter)

app.all('*', handle404)

app.use(handleBadRequest)

app.use(handlepSqlErrors)

app.use(handleServerError)

module.exports = app


