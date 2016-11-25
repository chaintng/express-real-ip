var express = require('express')
var app = express()

app.enable('trust proxy')

app.get('/', function (req, res) {
  output = "req.ip = " + JSON.stringify(req.ip) + "\n<br/>";
  output += "req.ips = " + JSON.stringify(req.ips) + "\n<br/>";
  output += "req.headers['x-forwarded-for'] = " + req.headers['x-forwarded-for'] + "\n<br/>";
  output += "req.connection.remoteAddress = " + req.connection.remoteAddress + "\n<br/>";
  res.send(output)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
