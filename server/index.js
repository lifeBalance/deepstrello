require('dotenv').config();
var Deepstream  = require('deepstream.io');
var http        = require('http');
var express     = require('express');
var app         = express();

var deepstream = new Deepstream();

var server = http.createServer(app);

app.set('views', './server/views');
app.set('view engine', 'jade');

app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/deepstream.io-client-js/dist'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('client'));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Deepstrello'
  });
});

var boardsRouter = require('./routes/boardsRouter')();
app.use('/boards', boardsRouter);


deepstream.set('urlPath', '/deepstream');
deepstream.set('httpServer', server);
deepstream.start();

server.listen(3000, function(){
  console.log('Listening on http://localhost:3000')
  console.log('Press Ctrl-C to stop the server.')
});
