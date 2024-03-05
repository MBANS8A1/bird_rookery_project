
const {getAllTours,sendTourById,addNewTour,modifyTourDate,modifyTourCost,modifyTourLength,removeTour} = require('../controllers/rtour.controller.js')
const toursRouter = require('express').Router()

toursRouter.route('/')
.get(getAllTours)
.post(addNewTour);


toursRouter.route('/:rtour_id')
.get(sendTourById)
.delete(removeTour);


toursRouter.route('/cost')
.patch('/:rtour_id', modifyTourCost);

toursRouter.route('/date')
.patch('/:rtour_id', modifyTourDate);

toursRouter.route('/length')
.patch('/:rtour_id',modifyTourLength);



module.exports = toursRouter