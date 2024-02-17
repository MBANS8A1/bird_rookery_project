const db = require('./index.js')
const format = require('pg-format')
const {createWingsShape_rel,createBirdOrders_rel,createBirdFamilies_rel,createBirds_rel,createrookeryTour_rel,createbirdWatchers_rel,createwatcherTours_rel} = require('./manage-relations.js')
const{parseObjToNestedArr,createWingsRef,createOrdersRef,createFamiliesRef,addWIdToOrders,addOIdToFamilies,addFIdToBirds} = require('../utility_funcs/utility_funcs.js')
const {birdsData,birdsFamiliesData,birdsOrdersData,birdwatchersData,wing_shapeData,rookeryTourData,watcherTourData} = require('../db/data/dev-data/index.js')
const seeder = ({wing_shapeData,birdsOrdersData,birdsFamiliesData,birdsData,birdwatchersData,rookeryTourData,watcherTourData}) =>{
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
            //console.log(swappedData)
            return insertIntoB_orderstbl(swappedData)
            //Whoopee works now!!
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

//Creating insertion functions

function insertIntoW_shapetbl(rawdata){//insert into wings_shape
    const formattedData = parseObjToNestedArr(rawdata)
    const queryStr = format(
        `INSERT INTO wing_shape
         (shape_name,w_description,image)
         VALUES
            %L
        RETURNING *;
        `,formattedData
    )
   return db.query(queryStr)
}



function insertIntoB_orderstbl(swappedData){//insert into bird_orders
    const formattedData = parseObjToNestedArr(swappedData)
    const queryStr = format(
       `INSERT INTO bird_orders
         (o_scientific_name,order_image,o_description,shape_id)
         VALUES
            %L
         RETURNING *;
         `,formattedData
    )
   return db.query(queryStr)
}


function insertIntoB_familiestbl(swappedData){//insert into bird_families
    const formattedData = parseObjToNestedArr(swappedData)
    const queryStr = format(`
         INSERT INTO bird_families
         (scientific_fam_name,f_description,clutch_size,no_of_genera,no_of_species,o_id)
         VALUES
            %L
         RETURNING *;
         `,formattedData
    )
   return db.query(queryStr)
}


function insertIntobirdstbl(swappedData){//insert into birds
    const formattedData = parseObjToNestedArr(swappedData)
    const queryStr = format(`
         INSERT INTO birds
         (common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id)
         VALUES
            %L
         RETURNING *;
        `,formattedData
    )
   return db.query(queryStr)
}


function insertIntoBirdWatcherstbl(rawdata){//insert into birdwatchers
    const formattedData = parseObjToNestedArr(rawdata)
    const queryStr = format(
        `INSERT INTO birdwatchers
         (formal_title,first_name,last_name,age,email_address)
         VALUES
            %L
        RETURNING *;
        `,formattedData
    )
   return db.query(queryStr)
}

function insertIntoRookeryTourtbl(rawdata){//insert into rookery_tour
    const formattedData = parseObjToNestedArr(rawdata)
    const queryStr = format(
        `INSERT INTO rookery_tour
         (tour_name,tour_type,length_minutes,location,cost_pennies,date)
         VALUES
            %L
         RETURNING *;
        `,formattedData
    )
   return db.query(queryStr)
}


function insertIntoWatcherTourstbl(rawdata){//insert into watchers_tours
    const formattedData = parseObjToNestedArr(rawdata)
    const queryStr = format(
        `INSERT INTO watchers_tours
         (watcher_id,tour_id)
         VALUES
           %L
         RETURNING *;
        `,formattedData
        )
    return db.query(queryStr)
}



module.exports = seeder

