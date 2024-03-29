const db = require('../db/index.js')

exports.selectAllFamilies = (order1,order2,sort_byfirst,sort_bysecond) =>{

    const sortbyGreenList1 = ['clutch_size']
    const sortbyGreenList2 = ['scientific_fam_name']
    const orderbyGreenList = ['ASC','DESC']
    let queryStr = `SELECT family_id,scientific_fam_name,f_description,clutch_size,no_of_genera,no_of_species,o_id
    FROM bird_families INNER JOIN bird_orders ON bird_families.o_id = bird_orders.order_id`;


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


    if(sort_byfirst){
        queryStr += ` ORDER BY ${sort_byfirst}`;
    }
   
    if(order1 && sort_byfirst){
        queryStr += ` ${order1.toUpperCase()}`;
    }

    if(sort_bysecond && sort_byfirst){
        queryStr += `, ${sort_bysecond}`;
    }

    if(sort_bysecond && sort_byfirst && order2){
        queryStr += ` ${order2.toUpperCase()}`;
    }

    return db.query(queryStr).then((result)=> {
        if(!(result.rows.length)){
            return Promise.reject({status: 404, err: 'No results found for query'})

        }else{
            return result.rows
        }
    })
}

exports.selectFamilyById = (family_id) => {

    const letterRegex = /[^0-9]+/ig
    if(letterRegex.test(family_id) && typeof family_id === 'number'){
        return Promise.reject({status: 400, err: `Bad request: passed in family_id is not a valid id.`})
    }

    let queryStr = `SELECT * FROM bird_families WHERE family_id = $1;`
    return db.query(queryStr,[family_id]).then((result)=>{
        if(!(result.rowCount)){
           return Promise.reject({status: 404, err: `No record with that family_id ${family_id} can be found.`})
        }
        else{
           return result.rows[0]
        }
    } )
}

exports.insertNewFamily= (newFamily) =>{

    if(Object.keys(newFamily).length !== 6){
        return Promise.reject({status: 400, err :"malformed body or missing required fields"})
    }
    const {scientific_fam_name,f_description,clutch_size,no_of_genera,no_of_species,o_id} = newFamily
    const fieldArrVals = [scientific_fam_name,f_description,clutch_size,no_of_genera,no_of_species,o_id]
    const queryString =`
      INSERT INTO bird_families
      (scientific_fam_name,f_description,clutch_size,no_of_genera,no_of_species,o_id)
      VALUES
      ($1,$2,$3,$4,$5,$6)
       RETURNING *;
    `
    return db.query(queryString,fieldArrVals).then((result)=> result.rows[0])
  
  }

