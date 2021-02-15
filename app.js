const express = require('express')
var bodyParser = require('body-parser')
const user = require("./user/routes")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", user)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

