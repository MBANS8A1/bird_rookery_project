const db = require('../db/index.js')

exports.selectAllFamilies = () =>{
    return db.query(`SELECT * FROM bird_families;`).then((result)=> result.rows)
}