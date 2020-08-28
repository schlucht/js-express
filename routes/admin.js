const express = require('express')
const router = express.Router()

router.get('/add-product', (req, res, next) => {
  res.send(`<form method="POST" action="/admin/product">
              <input type="text" name="title">
              <button type="submit">Add Product</button>
            </form>
  `)
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