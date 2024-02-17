const {selectAllOrders} = require('../models/b_orders.models.js')


exports.getAllOrders = (req,res) =>{

 selectAllOrders().then((orders)=> res.status(200).send({orders}))
}