const mongoose = require('mongoose')
const Schema = mongoose.Schema
const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    summary: {type: String, required: true},
    genre:{type:String,required:true}
},{timestamps:true})

var Book = mongoose.model('Book',BookSchema)
module.exports = Book