const db = require('../db/index.js')

exports.selectAllWatcherTours= () =>{
    return db.query(`SELECT * FROM watchers_tours;`).then((result)=> result.rows)
}

exports.selectWatcherTourById = (watcher_tour_id) => {
    return db.query(`SELECT * FROM watchers_tours WHERE watcher_tour_id = $1;`,[watcher_tour_id]).then((result)=> result.rows[0])
}

exports.insertNewWatcherTour= (newWatcherTour) =>{
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
    const queryStr = `UPDATE watchers_tours
    SET tour_id  = $1
    WHERE watcher_tour_id = $2
    RETURNING 
    *;
    `
return db.query(queryStr,[tour_id,watcher_tour_id]).then((result)=>result.rows[0])
 }