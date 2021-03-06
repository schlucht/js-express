
const express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/error')


const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use(shopRoutes)
app.use('/admin', adminRoutes.routes)

app.use(errorController.get404)

app.listen(3000)

