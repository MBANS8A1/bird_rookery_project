const {selectAllBWatchers} = require('../models/b_watchers.models.js')


exports.getAllBWatchers = (req,res) =>{
    selectAllBWatchers().then((birdwatchers)=> res.status(200).send({birdwatchers}))
   }