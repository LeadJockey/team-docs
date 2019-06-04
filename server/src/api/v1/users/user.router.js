const express = require('express')
const router = express.Router()
const user = require('./user.model')

router.get('/list', (req, res) => user.getList(res))
router.get('/list/:email', (req, res) => user.getOneByEmail(req.params, res))
router.get('/delete/:email', (req, res) => user.remove(req.params, res))
router.post('/', (req, res) => user.create(req.body, res))
router.post('/update', (req, res) => user.update(req.body, res))

module.exports = router
