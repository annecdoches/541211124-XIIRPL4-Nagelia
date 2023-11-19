const express = require('express')
const app = express()
const userrouter = require('./router/users')
const cors = require('cors');

const port = 3000

app.use(express.json()) // for parsing application/json
app.use(cors())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(userrouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})