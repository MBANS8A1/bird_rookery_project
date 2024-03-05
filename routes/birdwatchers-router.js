const {getAllBWatchers,sendBirdWatcherById,addNewBirdWatcher,modifyBirdWatcherEmail,removeBirdWatcher} = require('../controllers/bwatchers.controller.js')


const birdwatcherRouter = require('express').Router()


birdwatcherRouter.route('/')
.get(getAllBWatchers)
.post(addNewBirdWatcher);


birdwatcherRouter.route('/:bw_id')
.get(sendBirdWatcherById)
.patch(modifyBirdWatcherEmail)
.delete(removeBirdWatcher);


module.exports = birdwatcherRouter