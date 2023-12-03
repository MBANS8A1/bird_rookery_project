function createWingsShape_rel(){
    return db.query(`
    CREATE TABLE wing_shape (
        wing_id SERIAL PRIMARY KEY,
        shape_name VARCHAR (60) NOT NULL,
        w_description TEXT,
        image bytea
    )
    `)
}

function createBirdOrders_rel(){
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

function createBirdFamilies_rel(){
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

function createBirds_rel(){
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

function createrookeryTour_rel(){
    return db.query(`
    CREATE TABLE rookery_tour (
        rtour_id SERIAL PRIMARY KEY,
        tour_name VARCHAR (50) UNIQUE NOT NULL
        tour_type VARCHAR (13) NOT NULL,
        length: INT,
        location VARCHAR (40),
        cost_pennies: BIGINT,
        date: timestampz,
    )
    `)
}

function createbirdWatchers_rel(){
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

function createwatcherTours_rel(){
    return db.query(`
    CREATE TABLE watchers_tours(
        watcher_tour_id SERIAL PRIMARY KEY,
        tour_id INT REFERENCES rookery_tour(rtour_id)
        watcher_id INT REFERENCES rookery_tour(bw_id)
    )
    `)
}

