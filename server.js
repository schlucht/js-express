
const express = require('express')
const path = require('path')
const rootDir = require('./util/path')
const adminDates = require('./routes/admin')
const shopRoutes = require('./routes/shop')


const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(shopRoutes)
app.use('/admin', adminDates.routes)

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page not Found'})
})

app.listen(3000)

