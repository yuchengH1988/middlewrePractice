// app.js
const express = require('express')
const timestamp = require('time-stamp')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const DATE = timestamp('YYYY-MM-DD HH:mm:ss')
  const startTime = Date.now()
  res.on('finish', () => {
    let finishTime = Date.now()
    let duration = finishTime - startTime
    console.log(`${DATE} | ${req.method} from ${req.originalUrl} | total time : ${duration} ms`)
  })

  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})