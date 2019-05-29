require('dotenv').config()

const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()
const { SERVER_LISTENING, CONNECTED_DB } = require('./msg')

db.on('error', console.error)
db.once('open', CONNECTED_DB)
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
app.use(cors())
app.use(logger('common'))
app.use('/', (req, res) => res.send('hello world'))

app.listen(process.env.SERVER_PORT, SERVER_LISTENING)
