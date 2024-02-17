const db = require('../db/index.js')

exports.selectAllBirds = () =>{
    return db.query(`SELECT * FROM birds;`).then((result)=> result.rows)
}