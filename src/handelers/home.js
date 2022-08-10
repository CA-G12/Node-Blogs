const fs = require('fs')
const path = require('path')
const home = (res) => {
  pathFile = path.join(__dirname, '..', '..', 'public', 'index.html')
  fs.readFile(pathFile, (err, data) => {
    if (err) {
      console.log(err)
      res.writeHead(200, { 'Content-Type': 'text/html' })

      res.end('this page not found')
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    }
  })
}
module.exports = home
