const mongoose = require('mongoose')

//! Schema
const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL : {
        type: String,
        required : true
    },
    visitHistory : [{timestamp : {type: Number}}]
}, {timestamps: true})

//! model
const URL = mongoose.model('urls', urlSchema ) 

module.exports = URL