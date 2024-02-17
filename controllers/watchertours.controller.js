const {selectAllWatcherTours} = require('../models/watchertours.models.js')

exports.getAllWatcherTours = (req,res) =>{

    selectAllWatcherTours().then((watcher_tours)=> res.status(200).send({watcher_tours}))
}