const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res, next) => {
  let p = path.join(__dirname, '..', 'views', 'shop.html')
  res.sendFile(p)
})

module.exports = router