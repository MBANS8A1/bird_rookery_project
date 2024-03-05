const {selectAllBWatchers,selectBirdWatcherById,insertNewBirdWatcher,updateBirdWatcherEmail,deleteBirdWatcherRecord} = require('../models/b_watchers.models.js')


exports.getAllBWatchers = (req,res,next) =>{
    const{sort_by} = req.query
    const{email_address} = req.query
    const{order} = req.query
    selectAllBWatchers(sort_by,email_address,order).then((birdwatchers)=> res.status(200).send({birdwatchers})).catch(next)
   }

exports.sendBirdWatcherById = (req,res,next) =>{
    const bw_id = +req.params.bw_id
    selectBirdWatcherById(bw_id).then((birdwatcher) => res.status(200).send({birdwatcher})).catch(next)
}

exports.addNewBirdWatcher = (req,res,next) => {
    const newBirdWatcher = req.body
    insertNewBirdWatcher(newBirdWatcher).then((addedBirdWatcher)=>{
        return res.status(201).send({addedBirdWatcher})
    }).catch(next)
}


exports.modifyBirdWatcherEmail = (req,res,next) =>{
    let {bw_id} = req.params
    const {email_address} = req.body
    bw_id *= 1;
    updateBirdWatcherEmail(bw_id,email_address).then((updatedEmail)=>{
        return res.status(200).send({updatedEmail})
    }).catch(next)
}

exports.removeBirdWatcher = (req,res,next) =>{
    let {bw_id} = req.params
    bw_id *= 1;
    deleteBirdWatcherRecord(bw_id).then(() => {
        return res.status(204).send(null)
    }).catch(next)
}



