const {selectAllFamilies} = require('../models/b_families.models.js')


exports.getAllFamilies = (req,res) =>{

 selectAllFamilies().then((families)=> res.status(200).send({families}))
}