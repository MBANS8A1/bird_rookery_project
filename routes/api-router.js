
const apiRouter = require('express').Router();
const birdsRouter = require('./birds-router.js')
const familiesRouter = require('./families-router.js')
const ordersRouter = require('./orders-router.js')
const toursRouter = require('./tours-router.js')
const birdwatcherRouter = require('./birdwatchers-router.js')
const shapesRouter = require('./shapes-router.js')
const watcherTourRouter = require('./watchertour-router.js')
apiRouter.use('/birds',birdsRouter)
apiRouter.use('/families',familiesRouter)
apiRouter.use('/orders',ordersRouter)
apiRouter.use('/tours',toursRouter)
apiRouter.use('/birdwatchers',birdwatcherRouter)
apiRouter.use('/shapes',shapesRouter)
apiRouter.use('/watchertours',watcherTourRouter)

// apiRouter.get('/',(req,res)=>{
//     res.status(200).send("API Router is functioning")
// })


module.exports = apiRouter

