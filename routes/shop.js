const express = require('express')
const path = require('path')
const router = express.Router()

const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
  let p = path.join(rootDir, 'views', 'shop.html')
  res.sendFile(p)
})

module.exports = router