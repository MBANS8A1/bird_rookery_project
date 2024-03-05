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
        return Promise.reject({status: 400, err: 'Invalid sort_byfirst query string'})
    }

    if(sort_bysecond && !sortbyGreenList2.includes(sort_bysecond)){
        return Promise.reject({status: 400, err: 'Invalid sort_bysecond query string'})
    }

    if(order1 && !orderbyGreenList.includes(order1.toUpperCase())){
        return Promise.reject({status: 400, err: 'Invalid order1 query string'})
    }

    if(order2 && !orderbyGreenList.includes(order2.toUpperCase())){
        return Promise.reject({status: 400, err: 'Invalid order2 query string'})
    }
   
    if(diet){
        queryValues.push(`%${diet}%`)
        queryStr += ` WHERE diet ILIKE $1`;
    }

    if(sort_byfirst){
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
            return Promise.reject({status: 404, err: 'No birds with that type of diet.'})
            
        }
        else{
            return result.rows
        }
    })
}

exports.selectBirdById = (bird_id) => {

     const letterRegex = /[^0-9]+/ig
    if(letterRegex.test(bird_id) && typeof bird_id === 'number'){
        return Promise.reject({status: 400, err: `Bad request: passed in bird_id is not a valid id.`})
    }

   
    let queryStr = `SELECT * FROM birds WHERE bird_id = $1;`;
    return db.query(queryStr,[bird_id]).then((result)=> {
    if(!(result.rowCount)){
       return Promise.reject({status: 404, err: `Bird with that bird_id ${bird_id} cannot be found.`})
    }else{
       return result.rows[0]
    }
   }
  )
}

exports.insertNewBird = (newBird) =>{

   
    if(Object.keys(newBird).length !== 11){
        return Promise.reject({status: 400, err :"malformed body or missing required fields"})
    }
    const {common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id} = newBird
    const fieldArrVals = [common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id]
    const queryString = `INSERT INTO birds (common_name,species_name,wing_colour,diet,can_Fly,length_cm,weight_g,lay_season,fun_fact,wingspan_cm,f_id)


    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    RETURNING *;`
    return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])
}

exports.deleteBird = (bird_id) => {
    const queryStr = `DELETE FROM birds
          WHERE bird_id = $1
          RETURNING
          *;`
  
     return db.query(queryStr,[bird_id]).then((result)=> {
        if(result.rows[0] === undefined){
          return Promise.reject({status: 404, err: `cannot delete-bird with that id was already deleted or id not in original dataset`})
    
        }
        return result.rows[0]
       })
}

