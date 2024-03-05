const db = require('../db/index.js')

exports.selectAllShapes = () => {
    return db.query(`SELECT * FROM wing_shape;`).then((result) => result.rows )
}

exports.selectShapeById = (wing_id) => {

    const letterRegex = /[^0-9]+/ig
    if(letterRegex.test(wing_id) && typeof wing_id === 'number'){
      return Promise.reject({status: 400, err: `Bad request: passed in wing shape id is not a valid id.`})
    
    }
    let queryStr = `SELECT * FROM wing_shape WHERE wing_id = $1;`
    return db.query(queryStr,[wing_id]).then((result)=> {
        if(!(result.rowCount)){
            return Promise.reject({status: 404, err: `No record with that wing shape id ${wing_id} can be found.`})
        }else{
            return result.rows[0]
        }
    })
}