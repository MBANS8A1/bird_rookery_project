const db = require('../db/index.js')

exports.selectAllWatcherTours= () =>{
    return db.query(`SELECT * FROM watchers_tours;`).then((result)=> result.rows)
}

exports.selectWatcherTourById = (watcher_tour_id) => {

    const letterRegex = /[^0-9]+/ig
    if(letterRegex.test(watcher_tour_id) && typeof watcher_tour_id === 'number'){
      return Promise.reject({status: 400, err: `Bad request: passed in watcher_tour id is not a valid id.`})
    }
    let queryStr = `SELECT * FROM watchers_tours WHERE watcher_tour_id = $1;`
    return db.query(queryStr,[watcher_tour_id]).then((result)=>{
      if(!(result.rowCount)){
        return Promise.reject({status: 404, err: `Watcher tour with that watcher_tour_id ${watcher_tour_id} cannot be found.`})
      }
      else{
        result.rows[0]
      }
    } )
}

exports.insertNewWatcherTour= (newWatcherTour) =>{

    if(Object.keys(newWatcherTour).length !== 2){
    return Promise.reject({status: 400, err :"malformed body or missing required fields"})
    }
    const {watcher_id ,tour_id} = newWatcherTour
    const fieldArrVals = [watcher_id ,tour_id]
    const queryString =`
      INSERT INTO watchers_tours
      (watcher_id ,tour_id)
      VALUES
      ($1,$2)
    RETURNING *;
    `
    return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])
  
  }

 exports.updateWatcherTour = (watcher_tour_id,tour_id) =>{

    const letterRegex = /[^0-9]+/ig
    if(letterRegex.test(watcher_tour_id) && typeof watcher_tour_id === 'number'){
    return Promise.reject({status: 400, err: `Bad patch request: passed in watcher_tour_id is not a valid id.`})
    }

    const queryStr = `UPDATE watchers_tours
    SET tour_id  = $1
    WHERE watcher_tour_id = $2
    RETURNING 
    *;
    `
return db.query(queryStr,[tour_id,watcher_tour_id]).then((result)=>result.rows[0])
 }