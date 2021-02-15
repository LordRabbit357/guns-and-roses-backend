var express = require('express')
const path = require("path")
const fs = require("fs")

var router = express.Router()
let rawdata = fs.readFileSync(path.resolve(__dirname, "./users.json"));
let users = JSON.parse(rawdata);


router.get('/:userId', function (req, res) {
  var id = req.params["userId"]
  user = users.find(user => user["userId"] == id)
  delete user["password"]
  delete user["roles"]
  res.send(user)
})


router.post('/login', function (req, res) {
  var id = req.body.userId
  var password = req.body.password
  user = users.find(user => user["userId"] == id)
  if(user["password"] == password)
  {
      delete user["password"]
      res.send(user)
  }
  else
  {
      res.send('Wrong Password')
  }
})

module.exports = router
