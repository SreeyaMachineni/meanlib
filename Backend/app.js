const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('./db/db')


const server = app.listen(port,()=>{
    console.log('listening')
})

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors({origin:'*'}))

const authorRoute = require('./routes/author')
const bookRoute = require('./routes/book')

app.use('/author',authorRoute)
app.use('/book',bookRoute)
