const {getAllOrders,sendOrderById,addNewOrder} = require('../controllers/order.controller.js')

const ordersRouter = require('express').Router()


ordersRouter.route('/')
.get(getAllOrders)
.post(addNewOrder);

ordersRouter.route('/:order_id')
.get(sendOrderById);




module.exports = ordersRouter