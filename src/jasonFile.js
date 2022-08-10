const fs = require('fs')
const path = require('path')
const mime = require('mime')
const jasonFile = (res, myPost) => {
  pathFile = path.join(__dirname, 'posts.json')
  fs.readFile(pathFile, (err, data) => {
    if (err) {
      console.log(err)
      res.writeHead(200, { 'Content-Type': mime.getType(pathFile) })

      res.end('this page not found')
    } else {
      let myData = JSON.parse(data)
      myData[Date.now()] = myPost
      fs.writeFile('src/posts.json', JSON.stringify(myData), (error) => {
        console.log(error)
        // do something after the file has been written
      })
      res.writeHead(200, { 'Content-Type': mime.getType(pathFile) })
      res.end(data)
    }
  })
}
module.exports = jasonFile
