
const apiRouter = require('./routes/api-router.js')
const {handle404} = require('./controllers/404.controller.js')
const {handleBadRequest,handlepSqlErrors,handleServerError} = require('./errors/index.errors.js')
const apimetrics = require('./metric_middleware.js')
const express = require('express');
const app = express();
app.use(express.json())

app.use(apimetrics);

app.use('/api',apiRouter)

app.all('*', handle404)

app.use(handleBadRequest)

app.use(handlepSqlErrors)

app.use(handleServerError)

module.exports = app


