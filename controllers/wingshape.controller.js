const {selectAllShapes,selectShapeById} = require('../models/w_shape.models.js')

exports.getAllShapes = (req,res) => {
    selectAllShapes().then((shapes) => res.status(200).send({shapes}))
};

exports.sendShapeById = (req,res) => {
    const {wing_id} = req.params
    selectShapeById(wing_id).then((shape) => res.status(200).send({shape}))
};