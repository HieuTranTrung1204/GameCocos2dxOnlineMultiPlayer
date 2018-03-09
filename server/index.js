var app = require('express')(); 
var http = require('http').Server(app); 

app.get('/', function (req, res) { 
    res.send('<h1>Hello world</h1>'); 
}); 

http.listen(3000, function () { 
    console.log('run with http://localhost:3000/ \n listening on *:3000'); 
});