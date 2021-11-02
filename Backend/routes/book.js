const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
var Book = require('../models/Book')

router.get('/',(req,res)=>{
    Book.find({},(err,books)=>{
        if(err){
            res.statusCode = 400;
            res.json()
        }else{
            res.statusCode = 200
            res.json(books)
        }
    })
})


router.post('/',(req,res)=>{
    Book.create(req.body,(err,book)=>{
        if(err){
            console.log(err)
            res.statusCode = 400;
            res.json()
        }else{
            res.statusCode = 200;
            res.json()
        }
    })
})

router.delete('/',(req,res)=>{
    Book.findByIdAndDelete(req.body.id,(err,success)=>{
        if(err){
            res.statusCode = 400;
            res.json()
        }else{
            res.statusCode = 200;
            res.json()
        }
    })
})

router.put('/:id',(req,res)=>{
    Book.findByIdAndUpdate(req.params.id,req.body,(err,book)=>{
        if(err){
            res.statusCode = 400;
            res.json()
        }else{
            res.statusCode = 200;
            res.json()
        }
    })
})

module.exports = router