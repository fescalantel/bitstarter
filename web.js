var express = require('express');
var fs=require('fs');

var app = express.createServer(express.logger());

var fichero=fs.readFileSync('index.html').toString();


app.get('/', function(request, response) {
  response.send(fichero);
  response.send('Hello World 5!');
  reasponse.send("adiossss");
  
  reasponse.send("adios");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
