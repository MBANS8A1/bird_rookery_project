const {getAllFamilies,sendFamilyById,addNewFamily} = require('../controllers/family.controller.js')


const familiesRouter = require('express').Router()


familiesRouter.route('/')
.get(getAllFamilies)
.post(addNewFamily);

familiesRouter.route('/:family_id')
.get(sendFamilyById);



module.exports = familiesRouter