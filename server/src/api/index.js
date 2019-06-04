const encodePWD = obj => (obj.pwd ? Object.assign(obj, { pwd: '***' }) : obj)

const createSendData = (status, msg, data) => ({ status, msg, data })

module.exports = {
  encodePWD,
  createSendData
}
