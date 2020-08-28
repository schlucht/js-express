const http = require('http')
const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('Hallo Schmid Lothar')
  next()
})

app.use((req, res, next) => {
  console.log('Hallo und nochmals dies ist noch eine')
  res.send(`<h1>So endlich eine Ausgabe</h1>`)
})

http.createServer(app).listen(3000)

