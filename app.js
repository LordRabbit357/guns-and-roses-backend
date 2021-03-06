const express = require('express')
var bodyParser = require('body-parser')
const user = require("./user/routes")
const request_menu = require("./request/routes")
const weapons = require("./weapons/routes")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", user)
app.use("/request", request_menu)
app.use("/weapon", weapons)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

