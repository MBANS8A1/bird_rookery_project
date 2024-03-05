const db = require('./index.js')
const {createWingsShape_rel,createBirdOrders_rel,createBirdFamilies_rel,createBirds_rel,createrookeryTour_rel,createbirdWatchers_rel,createwatcherTours_rel,insertIntoW_shapetbl,insertIntoB_orderstbl,insertIntoB_familiestbl,insertIntobirdstbl,insertIntoBirdWatcherstbl,insertIntoRookeryTourtbl,insertIntoWatcherTourstbl} = require('./manage-relations.js')
const{createWingsRef,createOrdersRef,createFamiliesRef,addWIdToOrders,addOIdToFamilies,addFIdToBirds} = require('../utility_funcs/utility_funcs.js')
const seed = ({wing_shapeData,birdsOrdersData,birdsFamiliesData,birdsData,birdwatchersData,rookeryTourData,watcherTourData}) =>{
      return db.query(`DROP TABLE IF EXISTS birds;`).then(()=>{
         return db.query(`DROP TABLE IF EXISTS bird_families;`)
      })
      .then(()=>{
        return db.query(`DROP TABLE IF EXISTS bird_orders;`)
      })
      .then(()=>{
        return db.query(`DROP TABLE IF EXISTS wing_shape;`)
      })
      .then(()=>{
        return db.query(`DROP TABLE IF EXISTS watchers_tours;`)
      })
      .then(()=>{
        return db.query(`DROP TABLE IF EXISTS birdwatchers;`)
      })
      .then(()=>{
        return db.query(`DROP TABLE IF EXISTS rookery_tour;`)
      })
      .then(()=>{
        return createWingsShape_rel()
      })
      .then(()=>{
        return createBirdOrders_rel()
      })
      .then(()=>{
        return createBirdFamilies_rel()
      })
      .then(()=>{
        return createBirds_rel()
      })
      .then(()=>{
        return createrookeryTour_rel()
      })
      .then(()=>{
        return createbirdWatchers_rel()
      })
      .then(()=>{
        return createwatcherTours_rel()
      }).then(()=>{
        return insertIntoBirdWatcherstbl(birdwatchersData)
      }).then(()=>{
        return insertIntoRookeryTourtbl(rookeryTourData)
      }).then(()=>{
         return insertIntoWatcherTourstbl(watcherTourData)
      })
      .then(()=>{
        return insertIntoW_shapetbl(wing_shapeData)
      })
      .then(({rows})=>{
            const ref = createWingsRef(rows)
            const swappedData = addWIdToOrders(birdsOrdersData,ref)
            return insertIntoB_orderstbl(swappedData)
      }).then(({rows})=>{
            const ref = createOrdersRef(rows)
            const swappedData = addOIdToFamilies(birdsFamiliesData,ref)
            return insertIntoB_familiestbl(swappedData)
      }).then(({rows})=>{
            const ref = createFamiliesRef(rows)
            const swappedData = addFIdToBirds(birdsData,ref)
            return insertIntobirdstbl(swappedData)
      })
}



module.exports = seed

