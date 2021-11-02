const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AuthorSchema = new Schema({
    firstName:{
        type:String,
        trim:true,
        required:true
    },
    lastName:{
        type:String,
        trim:true,
        required:true
    },
    yearOfBirth:{
        type:Number
    },
    yearOfDeath:{
        type:Number
    }
},{timestamps:true})

var Author = mongoose.model('Author',AuthorSchema)
module.exports = Author