const mongoose = require('mongoose')

async function connectMongoDB(url){
    return mongoose.connect(url)
    .then(()=>console.log('database connected'))
    .catch((err)=> console.log('error : ', err))
}

module.exports={
    connectMongoDB
}