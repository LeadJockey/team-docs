const User = require('./user.schema')

const create = (body, res) => {
  const { email, pwd } = body
  const user = new User({ email, pwd })
  user.save((err, user) => {
    if (err) {
      res.json({ code: err.code, msg: err.errmsg })
      return console.log('err', err)
    }
    res.json({ code: 200, msg: `${user.email} saved to users collection` })
  })
}
const update = opts => {}
const remove = (req, res) => {}
const getList = res => {
  User.find({}, (err, users) => {
    if (err) return console.log('err', err)
    res.json(users.map(u => Object.assign(u, { pwd: '***' })))
  })
}
const getOneByEmail = (params, res) => {
  const { email } = params
  User.findOne({ email: email }, (err, user) => {
    if (err) return console.log('err', err)
    if (!user) return res.json({ code: 404, msg: `can not find email : ${email}` })
    res.json(Object.assign(user, { pwd: '***' }))
  })
}

module.exports = {
  create,
  update,
  remove,
  getList,
  getOneByEmail
}
