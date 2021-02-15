var express = require('express')
const path = require("path")
const fs = require("fs")

var router = express.Router()
let rawdata = fs.readFileSync(path.resolve(__dirname, "./weapons.json"));
let weapons = JSON.parse(rawdata);



router.get('/:weaponId', function (req, res) {
  var id = req.params["weaponId"]
  weapon = weapons.find(weapon => weapon["id"] == id)
  res.send(weapon)
})

router.get('/', function (req, res) {
    res.send(weapons)
  })

module.exports = router
