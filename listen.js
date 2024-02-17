const app = require('./app.js')
const PORT = 3000

app.listen(PORT,(err)=>{
    if(err) console.log(err)
    console.log(`Server listening on port ${PORT}...`)
})