const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
var Author = require('../models/Author')

router.get('/',(req,res)=>{
    Author.find({},(err,auths)=>{
        if(err){
            res.statusCode = 400;
            res.json()
        }else{
            res.statusCode = 200
            res.json(auths)
        }
    })
})

router.get('/:id',(req,res)=>{
    res.send('auther detail not yet implemented')
})

router.delete('/',(req,res)=>{
    Author.findByIdAndDelete(req.body.id,(err,success)=>{
        if(err){
            res.statusCode = 400;
            res.json()
        }else{
            res.statusCode = 200;
            res.json()
        }
    })
    // res.send('author delete not yet implemented')

})

router.post('/',(req,res)=>{
    Author.create(req.body,(err,auth)=>{
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
    Author.findByIdAndUpdate(req.params.id,req.body,(err,author)=>{
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