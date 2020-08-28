
const express = require('express')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

products = []
const app = express()
app.use(express.urlencoded({ extended: false }))

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
  res.status(404).send('<div><h1>Page not found</h1></div>')
})

app.listen(3000)

