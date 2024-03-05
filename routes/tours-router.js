
const {getAllTours,sendTourById,addNewTour,modifyTourDate,modifyTourCost,modifyTourLength,removeTour} = require('../controllers/rtour.controller.js')
const toursRouter = require('express').Router()

toursRouter.route('/')
.get(getAllTours)
.post(addNewTour);


toursRouter.route('/:rtour_id')
.get(sendTourById)
.delete(removeTour);


toursRouter.route('/cost/:rtour_id')
.patch(modifyTourCost);

toursRouter.route('/date/:rtour_id')
.patch(modifyTourDate);

toursRouter.route('/length/:rtour_id')
.patch(modifyTourLength);



module.exports = toursRouter