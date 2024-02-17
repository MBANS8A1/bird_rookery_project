const db = require('../db/index.js')

exports.selectAllShapes = () => {
    return db.query(`SELECT * FROM wing_shape;`).then((result) => result.rows )
}

exports.selectShapeById = (wing_id) => {
    return db.query(`SELECT * FROM wing_shape WHERE wing_id = $1;`,[wing_id]).then((result)=> result.rows[0])
}