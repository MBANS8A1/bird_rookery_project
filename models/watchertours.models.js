const db = require('../db/index.js')

exports.selectAllWatcherTours= () =>{
    return db.query(`SELECT * FROM watchers_tours;`).then((result)=> result.rows)
}