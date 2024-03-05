const {getAllShapes,sendShapeById} = require('./controllers/wingshape.controller.js')
const {getAllBirds,sendBirdById,addNewBird,removeBird} = require('./controllers/birds.controller.js')
const {getAllFamilies,sendFamilyById,addNewFamily} = require('./controllers/family.controller.js')
const {getAllOrders,sendOrderById,addNewOrder} = require('./controllers/order.controller.js')
const {getAllBWatchers,sendBirdWatcherById,addNewBirdWatcher,modifyBirdWatcherEmail,removeBirdWatcher} = require('./controllers/bwatchers.controller.js')
const {getAllTours,sendTourById,addNewTour,modifyTourDate,modifyTourCost,modifyTourLength,removeTour} = require('./controllers/rtour.controller.js')
const {getAllWatcherTours,sendWatcherTourById,addNewWatcherTour,modifyTourAssigned} = require('./controllers/watchertours.controller.js')
const apiRouter = require('./routes/api-router.js')
const express = require('express');
const app = express();
app.use(express.json())
app.use('/api',apiRouter)

app.use((req, res, next) => {
    console.log('Request method: ', req.method);
    console.log('Request url: ', req.url);
    let currentdate = new Date(); 
    let datetime = `Date and time request method made(format:day/month/year|hours:minutes:seconds): ${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()}|${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)
    next()
  });

 
 
//   const errorLogger = (err, req, res, next) => {
//     console.log(err)
//     console.log( `Error:  ${err.status}, ${err.message}!`) 
//     next(err) // calling next middleware
//   }

 

//   const errorResponder = (err,req,res,next) =>{
//     err.statusCode = err.status || 400
//     if(err.status && err.message){
//     res.status(err.statusCode).send({status: err.statusCode, message: err.message})
//     }else{
//     next(err)
//     }
//  }

  
//   const handleBadRequest = (req,res,next)=>{ 
//     res.status(400).send({status: 400, message: "bad request"})
    
//     next()
 
//   }

//   const handleNotFound = (req,res,next)=>{   
//     res.status(404).send({status: 404, message: "path not found"}) 

//     next()
    
//   }
  
  
//   const handleServerError = (err, req,res,next) => {
//     res.status(500).send('Internal server error')
//   }
// const errorLogger = (err, req, res, next) => {
//   console.log( `error: ${err.message}`) 
//   next(err) 
// }

// const errorResponder = (err, req, res, next) => {
    
//   const status = err.status || 400
//   res.status(status).send(err.message)
// }

// const invalidPathHandler = (req, res, next) => {
//   res.status(404)
//   res.send("HTTP 404 error: invalid path")
// }

// app.use((err, req, res, next) => {
//   // handle custom errors
//   if (err.status && err.message) {
//     res.status(err.status).send({ message: err.message });
//   }
//   // handle specific psql errors
//   else if (err.code === '22P02') {
//     res.status(400).send({ message: err.message || 'Bad Request' });
//   } else {
//     // if the error hasn't been identified,
//     // respond with an internal server error
//     console.log(err);
//     res.status(500).send({ message: 'Internal Server Error' });
//   }
// });

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




app.all('*', handle404)


app.use(handleBadRequest)

app.use(handlepSqlErrors)


app.use(handleServerError)

// // app.use(errorLogger)
// app.use(errorResponder)

// app.use(handleNotFound)

// app.use(handleBadRequest)
// app.use((err,res,req,next)=>{
//   if (err.code === '22P02') {
//     res.status(400).send({ message: err.message || 'Bad Request' });
//   }else{
//    res.status(500).send({ message: 'Internal Server Error' })
//   }
// })
// app.use(handleServerError)


module.exports = app


