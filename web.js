var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());

var fichero=fs.readFileSync('index.html');


app.get('/', function(request, response) {
  response.send('Hello World 3!');
  response.send(fichero);
  reasponse.send("adios");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
