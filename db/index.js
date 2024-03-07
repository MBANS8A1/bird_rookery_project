const {Pool} = require('pg')

//select right environment(test vs development vs production)

const ENV = process.env.NODE_ENV || "production"
const pathToEnvFile = `${__dirname}/../.env.${ENV}`
require("dotenv").config({path: pathToEnvFile})
const PGDATABASE = process.env.PGDATABASE

const configObj = {}

if(ENV === "production"){
    configObj.connectionString = process.ENV.DATABASE_URL
    configObj.max = 3

}

if(!process.env.PGDATABASE && !process.env.DATABASE_URL){
    throw new Error('PGDATABASE has not been configured and set to process.env global object API or DATABASE URL has not been set.')
}

module.exports = new Pool(configObj)