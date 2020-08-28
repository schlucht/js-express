
const express = require('express')
const path = require('path')
const rootDir = require('./util/path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

products = []
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(shopRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000)

