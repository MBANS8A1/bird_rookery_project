const express = require('express');
const {getAllShapes,sendShapeById} = require('./controllers/wingshape.controller.js')
const {getAllBirds,sendBirdById,addNewBird,removeBird} = require('./controllers/birds.controller.js')
const {getAllFamilies,sendFamilyById,addNewFamily} = require('./controllers/family.controller.js')
const {getAllOrders,sendOrderById,addNewOrder} = require('./controllers/order.controller.js')
const {getAllBWatchers,sendBirdWatcherById,addNewBirdWatcher,modifyBirdWatcherEmail,removeBirdWatcher} = require('./controllers/bwatchers.controller.js')
const {getAllTours,sendTourById,addNewTour,modifyTourDate,modifyTourCost,modifyTourLength,removeTour} = require('./controllers/rtour.controller.js')
const {getAllWatcherTours,sendWatcherTourById,addNewWatcherTour,modifyTourAssigned} = require('./controllers/watchertours.controller.js')
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

  const errorLogger = (err,req,res,next) =>{
    console.log(`Error : ${err.message}`)
    next(err)
  }

  const handleNotFound = (req,res,next)=>{   
      res.status(404).send({message: 'HTTP 404 error: path cannot be found'})  
    next()
    
  }
  const errorResponder = (err,req,res,next) =>{
      if(err.statusCode  && err.message){
      res.status(err.statusCode).send({message: err.message})
      }
      next(err)
  }
  
  const handleServerError = (err, req,res,next) => {
    res.status(500).send(err.message)
  }



//GET-returns all the rows of rookery data
app.get('/api/shapes',getAllShapes)
app.get('/api/birds',getAllBirds)
app.get('/api/families',getAllFamilies)
app.get('/api/orders',getAllOrders)
app.get('/api/birdwatchers',getAllBWatchers)
app.get('/api/tours',getAllTours)
app.get('/api/watchertours',getAllWatcherTours)

//GET-returns rows by the id supplied
app.get('/api/shapes/:wing_id',sendShapeById)
app.get('/api/birds/:bird_id',sendBirdById)
app.get('/api/families/:family_id',sendFamilyById)
app.get('/api/orders/:order_id',sendOrderById)
app.get('/api/birdwatchers/:bw_id',sendBirdWatcherById)
app.get('/api/tours/:rtour_id',sendTourById)
app.get('/api/watchertours/:watcher_tour_id',sendWatcherTourById)

//POST- adding new row(s) to the bird rookery
app.post('/api/birdwatchers',addNewBirdWatcher)
app.post('/api/tours',addNewTour)
app.post('/api/watchertours',addNewWatcherTour) //needed to have posted new birdwatcher and tour
app.post('/api/orders',addNewOrder)
app.post('/api/families',addNewFamily)
app.post('/api/birds',addNewBird)

//PATCH -modifying record values for already seeded data
app.patch('/api/birdwatchers/:bw_id',modifyBirdWatcherEmail) //working
app.patch('/api/tours/cost/:rtour_id',modifyTourCost)//cost affects the date
app.patch('/api/tours/date/:rtour_id',modifyTourDate)
app.patch('/api/tours/length/:rtour_id',modifyTourLength)
app.patch('/api/watchertours/:watcher_tour_id',modifyTourAssigned)

//DELETE-to remove rows from the database while maintaining referential integrity


app.delete('/api/birdwatchers/:bw_id',removeBirdWatcher)
app.delete('/api/tours/:rtour_id',removeTour)
app.delete('/api/birds/:bird_id',removeBird)



app.use(errorLogger)
app.use(handleNotFound)
app.use(errorResponder)
app.use(handleServerError)


module.exports = app


