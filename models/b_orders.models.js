const db = require('../db/index.js')

exports.selectAllOrders = () =>{
    return db.query(`SELECT * FROM bird_orders;`).then((result)=> result.rows)
}