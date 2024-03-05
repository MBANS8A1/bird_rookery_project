
const {getAllBirds,sendBirdById,addNewBird,removeBird} = require('../controllers/birds.controller.js')


const birdsRouter = require('express').Router()


birdsRouter.route('/')
.get(getAllBirds)
.post(addNewBird);


birdsRouter.route('/:bird_id')
.get(sendBirdById)
.delete(removeBird);


module.exports = birdsRouter