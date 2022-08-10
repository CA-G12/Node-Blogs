const createPost = require('./creatPost')
const home = require('./handelers/home')
const public = require('./handelers/public')
const jasonFile = require('./jasonFile')

const router = (req, res) => {
  const endPoint = req.url
  if (endPoint === '/') {
    home(res)
  } else if (
    endPoint === '/main.css' ||
    endPoint === '/script.js' ||
    endPoint === '/favicon.ico'
  ) {
    public(endPoint, res)
  } else if (endPoint === '/img/logo1.png') {
    res.end()
  } else if (endPoint === '/posts') {
    jasonFile(res)
  } else if (endPoint === '/create-post') {
    createPost(req, res)
  } else {
    res.end()
  }
}
module.exports = router
