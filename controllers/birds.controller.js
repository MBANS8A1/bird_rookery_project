const {selectAllBirds} = require('../models/birds.models.js')


exports.getAllBirds = (req,res) =>{

 selectAllBirds().then((birds)=> res.status(200).send({birds}))
}