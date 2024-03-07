const app = require('./app.js')

const { PORT = 9091 } = process.env;

app.listen(PORT,(err)=>{
    if(err){ console.log(err)
    }else{
    console.log(`Server listening on port ${PORT}...`)
    }
})