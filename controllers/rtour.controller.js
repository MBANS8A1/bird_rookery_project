const {selectAllTours,selectTourById,insertNewTour,updateTourDate,updateTourCost,updateTourLength,deleteTour} = require('../models/r_tour.models.js')


exports.getAllTours = (req,res,next) =>{
   const{tour_type} = req.query//WHERE CLAUSE
   const{sort_byfirst} = req.query //cost
   const{sort_bysecond} = req.query //date
   const{order1} = req.query //[asc,desc]
   const{order2} = req.query //[asc,desc]
   selectAllTours(tour_type,sort_byfirst,sort_bysecond,order1,order2).then((tours)=> res.status(200).send({tours})).catch(next)
}

exports.sendTourById = (req,res,next) => {
    const {rtour_id} = req.params
    selectTourById(rtour_id).then((tour) => res.status(200).send({tour})).catch(next)
};

exports.addNewTour = (req,res,next) =>{
    const newTour = req.body
    insertNewTour(newTour).then((addedTour)=>{
    return res.status(201).send({addedTour})
    }).catch(next)
}

exports.modifyTourDate = (req,res,next) =>{
    const rtour_id = +req.params.rtour_id
    const {date} = req.body
    console.log(date)
    updateTourDate(rtour_id,date).then((updatedTourDate)=>{
        return res.status(200).send({updatedTourDate})
    }).catch(next)
}


exports.modifyTourCost = (req,res,next) =>{
    const rtour_id = +req.params.rtour_id
    const cost_pennies = +req.body.cost_pennies
    updateTourCost(rtour_id,cost_pennies).then((updatedTourCost)=>{
        return res.status(200).send({updatedTourCost})
    }).catch(next)

}
exports.modifyTourLength = (req,res,next) =>{
    const rtour_id = +req.params.rtour_id
    const length_minutes = +req.body.length_minutes
    updateTourLength(rtour_id,length_minutes).then((updatedTourLength)=>{
        return res.status(200).send({updatedTourLength})
    }).catch(next)

}

exports.removeTour = (req,res,next) =>{
    let {rtour_id} = req.params
    rtour_id *= 1;
    deleteTour(rtour_id).then(() => {
        return res.status(204).send(null)
    }).catch(next)
}

