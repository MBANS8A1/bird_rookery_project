const _app = require('./multer.js')
const PORT = 3001

 _app.listen(PORT,(err)=>{
    if(err) console.log(err)
    console.log(`Server listening on port ${PORT}...`)
})