const fs = require('fs')
const path = require('path')
const mime = require('mime/lite')

const public = (endPoint, res) => {
  pathFile = path.join(__dirname, '..', '..', 'public', endPoint)
  fs.readFile(pathFile, (err, data) => {
    if (err) {
      console.log(err)
      res.writeHead(500)

      res.end('this page not found')
    } else {
      res.writeHead(200, { 'Content-Type': mime.getType(pathFile) })
      res.end(data)
    }
  })
}
module.exports = public
