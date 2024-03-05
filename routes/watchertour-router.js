const {getAllWatcherTours,sendWatcherTourById,addNewWatcherTour,modifyTourAssigned} = require('../controllers/watchertours.controller.js')

const watcherTourRouter = require('express').Router()

watcherTourRouter.route('/')
.get(getAllWatcherTours)
.post(addNewWatcherTour);

watcherTourRouter.route('/:watcher_tour_id')
.get(sendWatcherTourById)
.patch(modifyTourAssigned);



module.exports = watcherTourRouter