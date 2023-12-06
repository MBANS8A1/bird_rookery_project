const db = require('./index.js')
const{parseObjToNestedArr,createWingsRef,createOrdersRef,createFamiliesRef,addWIdToOrders,addOIdToFamilies,addFIdToBirds} = require('../utility_funcs/utility_funcs.js')


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

function createBirdOrders_rel(){//bird_orders table
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
        clutch_size int4range, 
        habitats text ARRAY,
        predators text ARRAY,
        o_id INT REFERENCES bird_orders(order_id)
    )
    `)
}

function createBirds_rel(){ //birds table
    return db.query(`
    CREATE TABLE birds (
        bird_id SERIAL PRIMARY KEY,
        common_name VARCHAR(50) UNIQUE NOT NULL,
        species_name VARCHAR(70) UNIQUE NOT NULL,
        wing_colour VARCHAR(25) NOT NULL,
        diet text ARRAY,
        can_Fly BOOLEAN NOT NULL,
        length_cm INT,
        weight_g INT,
        lay_season VARCHAR(50),
        f_id INT REFERENCES bird_families(family_id),
        fun_fact TEXT,
        wingspan_cm INT
    )
    `)
}

function createrookeryTour_rel(){//rookery_tour table
    return db.query(`
    CREATE TABLE rookery_tour (
        rtour_id SERIAL PRIMARY KEY,
        tour_name VARCHAR(50) UNIQUE NOT NULL,
        tour_type VARCHAR(13) NOT NULL,
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
        tour_id INT REFERENCES rookery_tour(rtour_id),
        watcher_id INT REFERENCES birdwatchers(bw_id)
      )
    `)
}



module.exports = {createWingsShape_rel,createBirdOrders_rel,createBirdFamilies_rel,createBirds_rel,createrookeryTour_rel,createbirdWatchers_rel,createwatcherTours_rel}


