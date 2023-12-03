const {Pool} = require('pg')

//select right environment(test vs development)

const ENV = process.env.NODE_ENV || "development"
const pathToEnvFile = `${__dirname}/../.env.${ENV}`
require("dotenv").config({path: pathToEnvFile})
const PGDATABASE = process.env.PGDATABASE

if(!process.env.PGDATABASE){
    throw new Error('PGDATABASE has not been configured and set to process.env global object API ')
}

module.exports = new Pool()