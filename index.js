var fs = require('fs');
var text = fs.readFileSync('index.html','utf8') 


var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(text)
})

var port = process.env.PORT || 8080;
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
