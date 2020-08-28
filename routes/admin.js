const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
  let p = path.join(__dirname, '..', 'views', 'add-product.html')
  res.sendFile(p)
})
router.post('/product', (req, res, next) => {
  let prod = req.body.title
  console.log(req.body)
  products.push(prod)
  let str = '<ul>'
  for(let pro of products) {
    str += `<li>${pro}</li>`
  }
  str += '</ul>'
  res.send(`
    ${str}
  `)
})

module.exports = router