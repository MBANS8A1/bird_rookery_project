const db = require('./index.js')
const format = require('pg-format')
const{parseObjToNestedArr} = require('../utility_funcs/utility_funcs.js')


//creating the tables
function createWingsShape_rel(){//wing_shape table
    return db.query(`
    CREATE TABLE wing_shape (
        wing_id SERIAL PRIMARY KEY,
        shape_name VARCHAR(60) NOT NULL,
        w_description TEXT,
        image bytea
    )
    `)
}

function createBirdOrders_rel(){//bird_orders tablek
    return db.query(`
    CREATE TABLE bird_orders (
        order_id SERIAL PRIMARY KEY,
        o_scientific_name VARCHAR(40) UNIQUE NOT NULL,
        order_image bytea,
        shape_id INT REFERENCES wing_shape(wing_id),
        o_description text
    )
    `)
}

function createBirdFamilies_rel(){//bird_families table
    return db.query(`
    CREATE TABLE bird_families (
        family_id SERIAL PRIMARY KEY,
        scientific_fam_name VARCHAR(55) UNIQUE NOT NULL,
        f_description TEXT,
        clutch_size INT, 
        no_of_genera INT,
        no_of_species INT,
        o_id INT REFERENCES bird_orders(order_id)
    )
    `)
}

function createBirds_rel(){ //birds table
    return db.query(`
    CREATE TABLE birds (
        bird_id SERIAL PRIMARY KEY,
        common_name VARCHAR(60) UNIQUE NOT NULL,
        species_name VARCHAR(70) UNIQUE NOT NULL,
        wing_colour VARCHAR(60) NOT NULL,
        diet VARCHAR(60),
        can_Fly BOOLEAN NOT NULL,
        length_cm INT,
        weight_g INT,
        lay_season VARCHAR(50),
        fun_fact text,
        wingspan_cm INT,
        f_id INT REFERENCES bird_families(family_id)
    )
    `)
}

function createrookeryTour_rel(){//rookery_tour table
    return db.query(`
    CREATE TABLE rookery_tour (
        rtour_id SERIAL PRIMARY KEY,
        tour_name VARCHAR(70) UNIQUE NOT NULL,
        tour_type VARCHAR(20) NOT NULL,
        length_minutes INT,
        location VARCHAR(40),
        cost_pennies BIGINT,
        date TIMESTAMPTZ
    )
    `)
}

function createbirdWatchers_rel(){//birdwatchers table
    return db.query(`
    CREATE TABLE birdwatchers (
        bw_id SERIAL PRIMARY KEY,
        formal_title VARCHAR(4) NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(45) NOT NULL,
        age INT NOT NULL,
        email_address VARCHAR (35) UNIQUE 
    )
    `)
}

function createwatcherTours_rel(){ //watchers_tours table
    return db.query(`
    CREATE TABLE watchers_tours(
        watcher_tour_id SERIAL PRIMARY KEY,
        watcher_id INT REFERENCES birdwatchers(bw_id) ON DELETE CASCADE,
        tour_id INT REFERENCES rookery_tour(rtour_id) ON DELETE CASCADE
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




module.exports = {createWingsShape_rel,createBirdOrders_rel,createBirdFamilies_rel,createBirds_rel,createrookeryTour_rel,createbirdWatchers_rel,createwatcherTours_rel,insertIntoW_shapetbl,insertIntoB_orderstbl,insertIntoB_familiestbl,insertIntobirdstbl,insertIntoBirdWatcherstbl,insertIntoRookeryTourtbl,insertIntoWatcherTourstbl}


