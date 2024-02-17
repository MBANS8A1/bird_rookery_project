const db = require('../db/index.js')

exports.selectAllBWatchers = () =>{
    return db.query(`SELECT * FROM birdwatchers;`).then((result)=> result.rows)
}