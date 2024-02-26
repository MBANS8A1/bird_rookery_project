const {selectAllBirds,selectBirdById,insertNewBird,deleteBird} = require('../models/birds.models.js')


exports.getAllBirds = (req,res,next) =>{
 const {order1} = req.query
 const {order2} = req.query
 const {sort_byfirst} = req.query
 const {sort_bysecond} = req.query
 const {diet} = req.query
 selectAllBirds(sort_byfirst,order1,diet,sort_bysecond,order2).then((birds)=> res.status(200).send({birds})).catch(next)
}

exports.sendBirdById = (req,res,next) => {
    const {bird_id} = req.params
    selectBirdById(bird_id).then((bird) => res.status(200).send({bird})).catch(next)
};

exports.addNewBird = (req,res,next) => {
    const newBird = req.body
    insertNewBird(newBird).then((addedBird)=>{
        return res.status(201).send({addedBird})
    }).catch(next)
}

exports.removeBird = (req,res,next) =>{
    let {bird_id} = req.params
    bird_id *= 1;
    deleteBird(bird_id).then(() => {
        return res.status(204).send(null).catch(next)
    })
}