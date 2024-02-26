const db = require('../db/index.js')

exports.selectAllTours = (tour_type,sort_byfirst,sort_bysecond,order1,order2) =>{
    const sortbyGreenList1 = ['cost_pennies','length_minutes']
    const sortbyGreenList2 = ['location','date']
    const orderbyGreenList = ['ASC','DESC']
    let queryValues = [];
    let queryStr = `SELECT rtour_id,tour_name,tour_type,length_minutes,location,cost_pennies,date
    FROM rookery_tour`;

  if(sort_byfirst && !sortbyGreenList1.includes(sort_byfirst)){
      return Promise.reject({status: 400, message: 'Invalid sort_byfirst query string'})
  }

  if(sort_bysecond && !sortbyGreenList2.includes(sort_bysecond)){
      return Promise.reject({status: 400, message: 'Invalid sort_bysecond query string'})
  }

  if(order1 && !orderbyGreenList.includes(order1.toUpperCase())){
      return Promise.reject({status: 400, message: 'Invalid order1 query string'})
  }

  if(order2 && !orderbyGreenList.includes(order2.toUpperCase())){
      return Promise.reject({status: 400, message: 'Invalid order2 query string'})
  }

  if(tour_type){
    queryValues.push(tour_type)
    queryStr += ` WHERE tour_type = $1`;
  }

  if(sort_byfirst){
    queryStr += ` ORDER BY ${sort_byfirst}`;
  }

  if(sort_byfirst && order1){
    queryStr += ` ${order1.toUpperCase()}`;
  }

  if(sort_bysecond && sort_byfirst){
    queryStr += `, ${sort_bysecond}`;
  }

  if(sort_bysecond && sort_byfirst && order2){
    queryStr += ` ${order2.toUpperCase()}`;
  }
  
  return db.query(queryStr,queryValues).then((result)=> {
    if(!(result.rows.length)){
        return Promise.reject({status: 404, err: 'No results found for query'})

    }else{
        return result.rows
    }
  })
 
}

exports.selectTourById= (rtour_id) => {
    return db.query(`SELECT * FROM rookery_tour WHERE rtour_id = $1;`,[rtour_id]).then((result)=> result.rows[0])
}

exports.insertNewTour= (newTour) =>{
    const {tour_name,tour_type,length_minutes,location,cost_pennies,date } = newTour
    const fieldArrVals = [tour_name,tour_type,length_minutes,location,cost_pennies,date]
    const queryString =`
      INSERT INTO rookery_tour
      (tour_name,tour_type,length_minutes,location,cost_pennies,date)
      VALUES
      ($1,$2,$3,$4,$5,$6)
       RETURNING *;
    `
    return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])
  
  }

  exports.updateTourDate = (rtour_id,date) =>{
    const queryStr = `UPDATE rookery_tour
          SET date = $1
          WHERE rtour_id = $2
          RETURNING 
          *;`
    return db.query(queryStr,[date,rtour_id]).then((result)=>result.rows[0])
  }

  exports.updateTourCost = (rtour_id,cost_pennies) =>{
    const queryStr = `UPDATE rookery_tour
          SET cost_pennies = $1
          WHERE rtour_id  = $2
          RETURNING 
          *;`
    return db.query(queryStr,[cost_pennies,rtour_id]).then((result)=>result.rows[0])
  }
  
  exports.updateTourLength = (rtour_id ,length_minutes) =>{
    const queryStr = `UPDATE rookery_tour
          SET length_minutes = $1
          WHERE rtour_id  = $2
          RETURNING 
          *;
          `
    return db.query(queryStr,[length_minutes,rtour_id]).then((result)=>result.rows[0])
  }

  exports.deleteTour  = (rtour_id) =>{
    const queryStr = `DELETE FROM rookery_tour
          WHERE rtour_id = $1
          RETURNING
          *;`
  
     return db.query(queryStr,[rtour_id]).then(()=> null)
  }