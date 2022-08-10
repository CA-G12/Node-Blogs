const fs = require('fs')
const path = require('path')
const jasonFile = require('./jasonFile')

const createPost = (req, res) => {
  let allPost = ''
  req.on('data', (chunkOfData) => {
    // do something
    allPost += chunkOfData
  })

  req.on('end', () => {
    const SearchParma = new URLSearchParams(allPost)
    const myPost = SearchParma.get('post')
    jasonFile(res, myPost)

    res.writeHead(302, { Location: '/' })
    res.end()
  })
}
module.exports = createPost
