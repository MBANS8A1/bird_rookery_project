const db = require('../db/index.js')

exports.selectAllTours = () =>{
    return db.query(`SELECT * FROM rookery_tour;`).then((result)=> result.rows)
}