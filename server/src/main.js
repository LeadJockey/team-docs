require('dotenv').config()

const express = require('express')
const session = require('express-session')
const uuidv4 = require('uuid/v4')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
const { SERVER_LISTENING, CONNECTED_DB } = require('./msg')
const user = require('./api/v1/users/user.controller')

db.on('error', console.error)
db.once('open', CONNECTED_DB)
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, dbName: process.env.DB_NAME })
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }))
app.use(cors())
app.use(logger('common'))

app.use('/', (req, res) => {
  var date = new Date()
  user.create({
    name: 'shawn',
    email: uuidv4(),
    pwd: '1234'
  })
  res.send('hello world')
})

app.listen(process.env.SERVER_PORT, SERVER_LISTENING)
