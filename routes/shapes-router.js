
const {getAllShapes,sendShapeById} = require('../controllers/wingshape.controller.js')

const shapesRouter = require('express').Router()


shapesRouter.route('/')
.get(getAllShapes)


shapesRouter.route('/:wing_id')
.get(sendShapeById);



module.exports = shapesRouter