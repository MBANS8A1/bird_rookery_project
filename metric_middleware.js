
const apimetrics = (req, res, next) => {
    console.log('Request method: ', req.method);
    console.log('Request url: ', req.url);
    let currentdate = new Date(); 
    let datetime = `Date and time request method made(format:day/month/year|hours:minutes:seconds): ${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()}|${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`
    console.log(datetime)
    next()
  }

  module.exports = apimetrics