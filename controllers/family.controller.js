const {selectAllFamilies,selectFamilyById,insertNewFamily} = require('../models/b_families.models.js')


exports.getAllFamilies = (req,res,next) =>{
 const {order1} = req.query
 const {order2} = req.query
 const{sort_byfirst} = req.query //clutch_size
 const{sort_bysecond} = req.query // scientific_fam_name:

 selectAllFamilies(order1,order2,sort_byfirst,sort_bysecond).then((families)=> res.status(200).send({families})).catch(next)
}

exports.sendFamilyById = (req,res,next) => {  
    const {family_id} = req.params
    selectFamilyById(family_id).then((family) => res.status(200).send({family})).catch(next)
}

exports.addNewFamily = (req,res,next) => {
    const newFamily = req.body
    insertNewFamily(newFamily).then((addedNewFamily)=>{
        return res.status(201).send({addedNewFamily})
    }).catch(next)
}