const express = require('express');
const {getAllShapes,sendShapeById} = require('./controllers/wingshape.controller.js')
const {getAllBirds,sendBirdById} = require('./controllers/birds.controller.js')
const {getAllFamilies,sendFamilyById} = require('./controllers/family.controller.js')
const {getAllOrders,sendOrderById} = require('./controllers/order.controller.js')
const {getAllBWatchers,sendBirdWatcherById} = require('./controllers/bwatchers.controller.js')
const {getAllTours,sendTourById} = require('./controllers/rtour.controller.js')
const {getAllWatcherTours,sendWatcherTourById} = require('./controllers/watchertours.controller.js')
const app = express();
app.use(express.json())

//returns all the rows of rookery data
app.get('/api/shapes',getAllShapes)
app.get('/api/birds',getAllBirds)
app.get('/api/families',getAllFamilies)
app.get('/api/orders',getAllOrders)
app.get('/api/birdwatchers',getAllBWatchers)
app.get('/api/tours',getAllTours)
app.get('/api/watchertours',getAllWatcherTours)

//returns rows by the id supplied
app.get('/api/shapes/:wing_id',sendShapeById)
app.get('/app/birds/:bird_id',sendBirdById)
app.get('/app/families/:family_id',sendFamilyById)
app.get('/app/orders/:order_id',sendOrderById)
app.get('/app/birdwatchers/:bw_id',sendBirdWatcherById)
app.get('/app/tours/:rtour_id',sendTourById)
app.get('/app/watchertours/:watcher_tour_id',sendWatcherTourById)

module.exports = app


