const {selectAllWatcherTours,selectWatcherTourById,insertNewWatcherTour,updateWatcherTour} = require('../models/watchertours.models.js')

exports.getAllWatcherTours = (req,res,next) =>{

    selectAllWatcherTours().then((watcher_tours)=> res.status(200).send({watcher_tours})).catch(next)
}

exports.sendWatcherTourById = (req,res,next) => {
    const {watcher_tour_id} = req.params
    selectWatcherTourById(watcher_tour_id ).then((watcher_tour) => res.status(200).send({watcher_tour})).catch(next)
}

exports.addNewWatcherTour = (req,res,next) =>{
    const newWatcherTour = req.body
    insertNewWatcherTour(newWatcherTour).then((addedWatcherTour)=>{
    return res.status(201).send({addedWatcherTour})
    }).catch(next)
}

exports.modifyTourAssigned = (req,res,next) =>{
    let {watcher_tour_id} = req.params
    const {tour_id} = req.body
    watcher_tour_id *= 1;
    updateWatcherTour(watcher_tour_id,tour_id).then((updatedWatcherTour)=>{
        return res.status(200).send({updatedWatcherTour})
    }).catch(next)
}