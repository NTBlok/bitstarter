var fs = require('fs');
var buffer = new Buffer(30);
buffer.write(fs.readFileSync('index.html'),"utf-8")


var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
