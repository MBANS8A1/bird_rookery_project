const db = require('../db/index.js')

exports.selectAllOrders = (sort_by,order) =>{
    const sortbyGreenList = ['o_scientific_name']
    const orderbyGreenList = ['ASC','DESC']
    let queryStr = `SELECT order_id,o_scientific_name,order_image,shape_id,o_description
    FROM bird_orders INNER JOIN wing_shape ON bird_orders.shape_id = wing_shape.wing_id`;

    if(sort_by && !sortbyGreenList.includes(sort_by)){
        return Promise.reject({status: 400, message: 'Invalid sort_by query string'})
    }

    if(order && !orderbyGreenList.includes(order.toUpperCase())){
        return Promise.reject({status: 400, message: 'Invalid order query string'})
    }

    if(sort_by){
        queryStr += ` ORDER BY ${sort_by}`
    }

    if(order && sort_by){
        queryStr += ` ${order.toUpperCase()}`

    }

    return db.query(queryStr).then((result)=>{
        if(!(result.rows.length)){
            return Promise.reject({status: 404, err: 'No results found for query'})

        }else{
            return result.rows
        }
    })
}



exports.selectOrderById = (order_id) => {
    return db.query(`SELECT * FROM bird_orders WHERE order_id = $1;`,[order_id]).then((result)=> result.rows[0])
}

exports.insertNewOrder = (newOrder) =>{
    const {o_scientific_name,order_image,shape_id,o_description} = newOrder
    const fieldArrVals = [o_scientific_name,order_image,shape_id,o_description]
    const queryString =`
      INSERT INTO bird_orders 
      (o_scientific_name,order_image,shape_id,o_description)
      VALUES
      ($1,$2,$3,$4)
       RETURNING *;
    `
    return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])
  
  }

 
  