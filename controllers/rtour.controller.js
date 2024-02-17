const {selectAllTours} = require('../models/r_tour.models.js')


exports.getAllTours = (req,res) =>{

 selectAllTours().then((tours)=> res.status(200).send({tours}))
}