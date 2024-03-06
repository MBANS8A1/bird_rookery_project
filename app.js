
const apiRouter = require('./routes/api-router.js')
const multer  = require('multer')
const {handle404} = require('./controllers/404.controller.js')
const {handleBadRequest,handlepSqlErrors,handleServerError} = require('./errors/index.errors.js')
const apimetrics = require('./metric_middleware.js')
const express = require('express');
const app = express();
app.use(express.json())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './bird_images/bird_order_pics')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

app.use(apimetrics);

app.use('/api',apiRouter)

app.use(express.static(`${__dirname}/public`));
app.use('/bird_images/bird_order_pics', express.static('bird_order_pics'));

//route to upload a single image
app.post('/profile-upload-single', upload.single('order-file'), function (req, res, next) {
    // req.file is the `order-file` file
    // req.body will hold the text fields, if there were any
    console.log((req.file))
    let response = `<a href="/">Home</a><br>`
    response += `File uploaded successfully.<br>`
    response += `<img src="${req.file.path}" /><br>`
    return res.send(response)
  })

//route to upload multiple images
app.post('/profile-upload-multiple', upload.array('order-files', 12), function (req, res, next) {
    // req.files is array of `order-files` files
    // req.body will contain the text fields, if there were any
    var response = `<a href="/">Home</a><br>`
    response += `Files uploaded successfully.<br>`
    for(let i=0;i<req.files.length;i++){
        response += `<img src="${req.files[i].path}" /><br>`
    }


    
    return res.send(response)
})

app.all('*', handle404)

app.use(handleBadRequest)

app.use(handlepSqlErrors)

app.use(handleServerError)

module.exports = app


