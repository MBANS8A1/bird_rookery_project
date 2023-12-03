const format = require('pg-format')
const{parseObjToNestedArr,createWingsRef,createOrdersRef,createFamiliesRef,addWIdToOrders,addOIdToFamilies,addFIdToBirds} = require('../utility_funcs/utility_funcs.js')
//creating the tables
function createWingsShape_rel(){//wing_shape table
    return db.query(`
    CREATE TABLE wing_shape (
        wing_id SERIAL PRIMARY KEY,
        shape_name VARCHAR (60) NOT NULL,
        w_description TEXT,
        image bytea
    )
    `)
}

function createBirdOrders_rel(){//bird_orders table
    return db.query(`
    CREATE TABLE bird_orders (
        order_id SERIAL PRIMARY KEY,
        o_scientific_name VARCHAR (40) UNIQUE NOT NULL,
        order_image bytea,
        shape_id INT REFERENCES wing_shape(wing_id),//switch out shape
        o_description TEXT
    )
    `)
}

function createBirdFamilies_rel(){//bird_families table
    return db.query(`
    CREATE TABLE bird_families (
        family_id SERIAL PRIMARY KEY,
        scientific_fam_name VARCHAR(55) UNIQUE NOT NULL,
        f_description TEXT,
        clutch_size int4range, 
        habitats text ARRAY,
        predators text ARRAY,
        o_id INT REFERENCES bird_orders(order_id)//switchout order
    )
    `)
}

function createBirds_rel(){ //birds table
    return db.query(`
    CREATE TABLE birds (
        bird_id SERIAL PRIMARY KEY,
        common_name VARCHAR UNIQUE (50) NOT NULL,
        species_name VARCHAR UNIQUE (70) NOT NULL,
        wing_colour VARCHAR(25) NOT NULL,
        diet text ARRAY,
        can_Fly BOOLEAN NOT NULL,
        length_cm INT,
        weight_g INT,
        lay_season: VARCHAR(50),
        f_id INT REFERENCES bird_families(family_id)switch out family
        fun_fact TEXT
        wingspan_cm INT
    )
    `)
}

function createrookeryTour_rel(){//rookery_tour table
    return db.query(`
    CREATE TABLE rookery_tour (
        rtour_id SERIAL PRIMARY KEY,
        tour_name VARCHAR (50) UNIQUE NOT NULL
        tour_type VARCHAR (13) NOT NULL,
        length_minutes: INT,
        location VARCHAR (40),
        cost_pennies: BIGINT,
        date: timestampz,
    )
    `)
}

function createbirdWatchers_rel(){//birdwatchers table
    return db.query(`
    CREATE TABLE birdwatchers (
        bw_id SERIAL PRIMARY KEY,
        formal_title VARCHAR(4) NOT NULL
        first_name: VARCHAR(30) NOT NULL
        last_name: VARCHAR(45) NOT NULL
        age: INT NOT NULL,
        email_address VARCHAR (35) UNIQUE 
    )
    `)
}

function createwatcherTours_rel(){ //watchers_tours table
    return db.query(`
    CREATE TABLE watchers_tours(
        watcher_tour_id SERIAL PRIMARY KEY,
        tour_id INT REFERENCES rookery_tour(rtour_id)
        watcher_id INT REFERENCES rookery_tour(bw_id)
    )
    `)
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



function insertIntoB_orderstbl(rawdata){//insert into bird_orders
    const swapOut = addWIdToOrders(rawdata,createWingsRef)
    const formattedData = parseObjToNestedArr(swapOut)
    const queryStr = format(
        `INSERT INTO bird_orders
         (o_scientific_name,order_image,shape_id,o_description)
         VALUES
            %L
        RETURNING *;
        `,formattedData
    )
   return db.query(queryStr)
}



function insertIntoB_familiestbl(rawdata){//insert into bird_families
    const swapOut = addOIdToFamilies(rawdata,createOrdersRef)
    const formattedData = parseObjToNestedArr(swapOut)
    const queryStr = format(
        `INSERT INTO bird_families
         (scientific_fam_name,f_description,clutch_size,habitats,predators,o_id)
         VALUES
            %L
        RETURNING *;
        `,formattedData
    )
   return db.query(queryStr)
}


function insertIntobirdstbl(rawdata){//insert into birds
    const swapOut = addFIdToBirds(rawdata,createFamiliesRef)
    const formattedData = parseObjToNestedArr(swapOut)
    const queryStr = format(
        `INSERT INTO birds
         (common_name ,species_name,wing_colour,can_Fly,length_cm,weight_g,lay_season,f_id,fun_fact,wingspan_cm)
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
             (tour_id, watcher_id)
             VALUES
                %L
            RETURNING *;
            `,formattedData
        )
       return db.query(queryStr)
}

module.exports = {createWingsShape_rel,createBirdOrders_rel,createBirdFamilies_rel,createBirds_rel,createrookeryTour_rel,createbirdWatchers_rel,createwatcherTours_rel,insertIntoW_shapetbl,insertIntoB_orderstbl,insertIntoB_familiestbl,insertIntobirdstbl,insertIntoBirdWatcherstbl,insertIntoRookeryTourtbl,insertIntoWatcherTourstbl}


