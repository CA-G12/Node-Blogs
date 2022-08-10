const http = require('http')
const router = require('./router')

require('dotenv').config()
const server = http.createServer(router)
PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`)
})
