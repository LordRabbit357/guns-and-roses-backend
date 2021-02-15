const express = require('express')
const user = require("./user/routes")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", user)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

