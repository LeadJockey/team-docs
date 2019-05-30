const mongoose = require('mongoose')

const thumbSchema = new mongoose.Schema({
  url: {
    type: String
  },
  width: {
    type: Number,
    default: 0,
    min: 0,
    max: 50
  },
  height: {
    type: Number,
    default: 0,
    min: 0,
    max: 50
  }
})

const userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  pwd: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    default: ''
  },
  position: {
    type: String,
    enum: ['팀원', '팀장']
  },
  img: thumbSchema
})

userSchema.index({ name: 1 }, { unique: true })

userSchema.pre('save', next => {
  console.log('user schema 저장 전..')
  next()
})

userSchema.post('find', result => {
  console.log('저장 완료', result)
})

module.exports = mongoose.model('User', userSchema, 'users')
