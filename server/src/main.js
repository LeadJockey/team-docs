require('dotenv').config()
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
const { SERVER_LISTENING, CONNECTED_DB } = require('./msg')
// db
db.on('error', console.error)
db.once('open', CONNECTED_DB)
// mongoose
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, dbName: process.env.DB_NAME })
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }))
app.use(cors())
app.use(logger('common'))
app.use('/api/v1/user', require('./api/v1/users/user.router'))
app.use('/', (req, res) => res.json({ code: 200, msg: 'hello index page' }))
// server
app.listen(process.env.SERVER_PORT, SERVER_LISTENING)
