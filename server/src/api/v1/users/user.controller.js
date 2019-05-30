const User = require('./user.schema')

const create = data => {
  const user = new User(data)
  user.save((err, user) => {
    if (err) return console.log('err', err)
    console.log(`${user.email} saved to users collection`)
  })
}

module.exports = {
  create: create
}
