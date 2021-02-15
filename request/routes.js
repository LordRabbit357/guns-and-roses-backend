var express = require('express')
const path = require("path")
const fs = require("fs")

var router = express.Router()
requests = []
request_counter = 0


router.get('/byUser/:userId', function (req, res) {
  var id = req.params["userId"]
  filtered = requests.filter(request => request["userId"] == id)
  res.send(filtered)
})

router.get('/', (req, res) => {
  res.send(requests)
})

router.post('/', function (req, res) {
  requests.push({
    "startDate" : req.body.startDate,
    "endDate" : req.body.endDate,
    "reason" : req.body.reason,
    "userId" : req.body.userId, 
    "status" : req.body.status,
    "reqId" : request_counter++
  })
  res.send({"reqId" : request_counter - 1})
})

router.put('/:reqId', function (req, res) {
  var id = req.params["reqId"]
  index = requests.findIndex(request => request["reqId"] == id)
  requests[index]["status"] = req.body.status
  res.send(req.body.status)
})

router.get('/:reqId', function (req, res) {
  var id = req.params["reqId"]
  res.send(requests.find(request => request["reqId"] == id))
})

router.post('/PullWeapon/:reqId', function (req, res) {
  var id = req.params["reqId"]
  index = requests.findIndex(request => request["reqId"] == id)
  requests[index]["weapon"] = req.body.weapon
  requests[index]["status"] = "pulled"
  res.send(req.body.weapon)
})


module.exports = router
