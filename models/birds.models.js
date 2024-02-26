const db = require('../db/index.js')

exports.selectAllBirds = (sort_byfirst,order1,diet,sort_bysecond,order2) =>{


    const sortbyGreenList1 = ['length_cm','weight_g','wingspan_cm']
    const sortbyGreenList2 = ['common_name']

    const orderbyGreenList = ['ASC','DESC']
    let queryValues = [];
    let queryStr = `SELECT bird_id,common_name,species_name,wing_colour,diet,can_Fly
    ,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id FROM birds
     INNER JOIN bird_families ON birds.f_id = bird_families.family_id`;

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
   
    if(diet){
        queryValues.push(`%${diet}%`)
        queryStr += ` WHERE diet ILIKE $1`;
    }

    if(sort_byfirst){//AMEND HERE
        queryStr += ` ORDER BY ${sort_byfirst}`;  

    }
 
    if(order1 && sort_byfirst){
        queryStr += ` ${order1.toUpperCase()}`;
    }

    if(order2 && sort_bysecond && sort_byfirst){
        queryStr += `, ${sort_bysecond} ${order2.toUpperCase()}`;
    }

    return db.query(queryStr,queryValues).then((result)=>{
        if(!(result.rows.length)){
            return Promise.reject({status: 404, err: 'No results found for query'})

        }else{
            return result.rows
        }
    })
}

exports.selectBirdById = (bird_id) => {
    return db.query(`SELECT * FROM birds WHERE bird_id = $1;`,[bird_id]).then((result)=> result.rows[0])
}

exports.insertNewBird = (newBird) =>{
    const {common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id
    } = newBird
    const fieldArrVals = [common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id
    ]
    const queryString =`
      INSERT INTO birds
      (common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id)
      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING *;
    `
    return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])
}

exports.deleteBird = (bird_id) => {
    const queryStr = `DELETE FROM birds
          WHERE bird_id = $1
          RETURNING
          *;`
  
     return db.query(queryStr,[bird_id]).then(()=> null)
}

