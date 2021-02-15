var express = require('express')
const fs = require("fs")

var router = express.Router()
let rawdata = fs.readFileSync('./users.json');
let users = JSON.parse(rawdata);


router.get('/:userId', function (req, res) {
  var id = req.params["userId"]
  res.send(users.find(user => user["userId"] == id))
})


router.post('/login', function (req, res) {
  res.send('TBD')
})

module.exports = router
