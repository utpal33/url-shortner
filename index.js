const express = require('express')
const urlRouter = require('./routes/url')
const { connectMongoDB } = require('./connection')

const app = express()
const PORT = 3001

//! database connection
connectMongoDB('mongodb://127.0.0.1:27017/short-url')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/url', urlRouter )


app.listen(PORT, ()=> console.log('server is running'))