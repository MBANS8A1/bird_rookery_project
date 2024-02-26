const {selectAllOrders,selectOrderById,insertNewOrder} = require('../models/b_orders.models.js')


exports.getAllOrders = (req,res,next) =>{
 const{sort_by} = req.query
 const{order} = req.query
 selectAllOrders(sort_by,order).then((orders)=> res.status(200).send({orders})).catch(next)
}

exports.sendOrderById = (req,res,next)=>{
   const {order_id} = req.params
   selectOrderById(order_id).then((order)=> res.status(200).send({order})).catch(next)
}

exports.addNewOrder = (req,res,next) => {
   const newOrder = req.body
   insertNewOrder(newOrder).then((addedOrder)=>{
       return res.status(201).send({addedOrder})
   }).catch(next)
}