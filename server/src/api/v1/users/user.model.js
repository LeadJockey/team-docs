const User = require('./user.schema')
const { encodePWD, createSendData } = require('./../../index')

const create = (body, res) => {
  const { email, pwd } = body
  const user = new User({ email, pwd })
  user.save((err, result) => {
    if (err) return res.json(createSendData(500, 'ERROR', err))
    return res.json(createSendData(200, 'SUCCESS', result))
  })
}

const update = (body, res) => {
  const { email, data } = body
  User.updateOne({ email: email }, data, (err, result) => {
    if (err) return res.json(createSendData(500, 'ERROR', err))
    return res.json(createSendData(200, 'SUCCESS', result))
  })
}

const remove = (params, res) => {
  const { email } = params
  User.deleteOne({ email: email }, (err, result) => {
    if (err) return res.json(createSendData(500, 'ERROR', err))
    return res.json(createSendData(200, 'SUCCESS', result))
  })
}

const getList = res => {
  User.find({}, (err, users) => {
    if (err) return res.json(createSendData(500, 'ERROR', err))
    return res.json(createSendData(200, 'SUCCESS', users.map(user => encodePWD(user))))
  })
}

const getOneByEmail = (params, res) => {
  const { email } = params
  User.findOne({ email: email }, (err, user) => {
    const { code, errmsg } = err
    if (err) return res.json(createSendData(code, errmsg, err))
    if (!user) return res.json(createSendData(404, 'NOT FOUND', {}))
    return res.json(createSendData(200, 'SUCCESS', encodePWD(user)))
  })
}

module.exports = {
  create,
  update,
  remove,
  getList,
  getOneByEmail
}
