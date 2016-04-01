var Deepstream  = require('deepstream.io');
var http        = require('http');
var express     = require('express');
var app         = express();

var deepstream = new Deepstream();

var server = http.createServer(app);

app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/deepstream.io-client-js/dist'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('client'));

app.get('/', function (req, res) {
  sendfile(__dirname + '../client/index.html');
})

deepstream.set('urlPath', '/deepstream');
deepstream.set('httpServer', server);
deepstream.start();

server.listen(3000, function(){
  console.log('Listening on http://localhost:3000')
  console.log('Press Ctrl-C to stop the server.')
});
