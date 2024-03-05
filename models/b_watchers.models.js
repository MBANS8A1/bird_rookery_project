const db = require('../db/index.js')

exports.selectAllBWatchers = (sort_by,email_address,order) =>{
  const sortbyGreenList = ['first_name','last_name','age']
  const orderGreenList = ['ASC','DESC']
  let queryStr = `SELECT bw_id,formal_title,first_name,last_name,age,email_address FROM birdwatchers`;
  let queryValues = []

  if(sort_by && !sortbyGreenList.includes(sort_by)){
    return Promise.reject({status: 400, err: 'Invalid sort_by query string.'})
  }

  if(order && !orderGreenList.includes(order.toUpperCase())){
    return Promise.reject({status: 400, err: 'Invalid order query string.'})
  }

  if(email_address){
    queryValues.push(`%${email_address}%`)
    queryStr += ` WHERE email_address ILIKE $1`;
  }

  if(sort_by){
    queryStr += ` ORDER BY ${sort_by}`;
  }

  if(sort_by && order){
    queryStr += ` ${order.toUpperCase()}`;
  }

  return db.query(queryStr,queryValues).then((result)=>{
    if(!(result.rows.length)){
        return Promise.reject({status: 404, err: 'No record(s) with that email pattern.'})

    }else{
        return result.rows
    }
})

}

exports.selectBirdWatcherById = (bw_id) =>{

    const letterRegex = /[^0-9]+/ig
    if(letterRegex.test(bw_id) && typeof bw_id === 'number'){
      return Promise.reject({status: 400, err: `Bad request: passed in birdwatcher is is not a valid id.`})
    }

    let queryStr = `SELECT * FROM birdwatchers WHERE bw_id = $1;`
    return db.query(queryStr,[bw_id]).then((result)=>{
     if(!(result.rowCount)){
      return Promise.reject({status: 404, err: `No record with that birdwatcher id ${bw_id} can be found.`})
     }else{
      return result.rows[0]
     }
    })

}

exports.insertNewBirdWatcher = (newBirdWatcher) =>{
  if(Object.keys(newBirdWatcher).length !== 5){
    return Promise.reject({status: 400, err :"malformed body or missing required fields"})
 }
  const {formal_title,first_name,last_name,age,email_address} = newBirdWatcher
  const fieldArrVals = [formal_title,first_name,last_name,age,email_address]
  const queryString =`
    INSERT INTO birdwatchers
    (formal_title,first_name,last_name,age,email_address)
    VALUES
    ($1,$2,$3,$4,$5)
     RETURNING *;
  `
  return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])

}

exports.updateBirdWatcherEmail = (bw_id,email_address) =>{

if(!email_address){
  return Promise.reject({status: 400, err :"malformed body or missing required fields"})

}

const letterRegex = /[^0-9]+/ig
if(letterRegex.test(bw_id) && typeof bw_id === 'number'){
  return Promise.reject({status: 400, err: `Bad patch request: passed in birdwatcher id is not a valid id.`})
}


   const emailregex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!(emailregex.test(email_address))){
    return Promise.reject({status: 400, err: `Bad patch request: property has wrong datatype attached`})
  }



  const queryStr = `UPDATE birdwatchers
        SET email_address = $1
        WHERE bw_id = $2
        RETURNING 
        *;
        `
  return db.query(queryStr,[email_address,bw_id]).then((result)=>result.rows[0])
}

exports.deleteBirdWatcherRecord = (bw_id) =>{



  
  const queryStr = `DELETE FROM birdwatchers
        WHERE bw_id = $1
        RETURNING
        *;`
  
    

   return db.query(queryStr,[bw_id]).then((result)=>{
    if(result.rows[0] === undefined){
      return Promise.reject({status: 404, err: `cannot delete-birdwatcher with that id was already deleted or id not in original dataset`})

    }
    return result.rows[0]
   })
}