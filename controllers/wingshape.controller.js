const {selectAllShapes,selectShapeById} = require('../models/w_shape.models.js')

exports.getAllShapes = (req,res,next) => {
    selectAllShapes().then((shapes) => res.status(200).send({shapes})).catch(next)
};

exports.sendShapeById = (req,res,next) => {
    // const {wing_id} = req.params
    const wing_id = +req.params.wing_id

    selectShapeById(wing_id).then((shape) => res.status(200).send({shape})).catch(next)
};