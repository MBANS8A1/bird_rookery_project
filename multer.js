
const express = require('express');
const _app = express();
_app.use(express.json())
const multer  = require('multer')
const imageAmtAllowed = 2


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './bird_images/bird_order_pics')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
})
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 4
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            try{
              throw new Error('Invalid image mime type');
            }catch(err){
                console.warn(`${err.name}:${err.message}`)
            }finally{
                console.log('Reupload an image file(s) of the correct type please (png, jpg and jpeg accepted are file extensions)')
            }
        }
    }

})


const uploadSingleImage = upload.single('order-file');
const uploadMultipleImages = upload.array('order-files',imageAmtAllowed);



_app.use(express.static(`${__dirname}/public`));
_app.use('/bird_images/bird_order_pics', express.static('bird_order_pics'));

_app.post('/profile-upload-single', function (req, res) {

    uploadSingleImage(req, res, function (err) {

        if (err) {
            return res.status(400).send({status: 400, err: `Bad request: ${err.message}/ensure you have not exceed file upload limit` })
        }

        // Everything went fine.
        console.log((req.file))
      let response = `<a href="/">Home</a><br>`
      response += `File uploaded successfully.<br>`
      response += `<img src="${req.file.path}" alt=${req.file.filename}/><br>`
      return res.status(201).send(response)
    })
})

_app.post('/profile-upload-multiple', function (req, res) {

    uploadMultipleImages(req, res, function (err) {

        if (err) {
            return res.status(400).send({ message: `Bad request: ${err.message}/ensure you have not exceed file upload limit` })
        }

        // Everything went fine.
         let response = `<a href="/">Home</a><br>`
     response += `Files uploaded successfully.<br>`
     for(let i=0;i<req.files.length;i++){
        console.log(req.files[i])
        response += `<img src="${req.files[i].path}" alt=${req.files[i].filename}/><br>`
      }
    
      return res.send(response)
    })
})

module.exports = _app