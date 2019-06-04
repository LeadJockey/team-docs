require('colors')

module.exports = {
  SERVER_LISTENING: () => console.log(`[express-server] server is listening on port ${process.env.SERVER_PORT}`.yellow),
  CONNECTED_DB: () => console.log(`[mongo-DB] connected to mongoDB`.cyan)
}
