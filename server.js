// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.get('/colorchange/:entityId/:color', (req, res) => {
  console.log(`The entity selected is: ${req.params.entityId}`);
  console.log(`The color selected is: ${req.params.color}`);
  io.emit('color change', req.params.entityId, req.params.color);
  res.end('Done!');
});

app.post('/sizechange/:entityId', (req, res) => {
  console.dir(req.body);
  io.emit('size change', req.params.entityId, req.body.sizes);
  res.end('Done!');
});

app.post('/positionchange/:entityId', (req, res) => {
  console.dir(req.body);
  io.emit('position change', req.params.entityId, req.body.position);
  res.end('Done!');
});

app.post('/addentity', (req, res) => {
  console.dir(req.body);
  io.emit('entity add', req.body.entityData);
  res.end('Done!');
});

app.get('/spin/:entityId/stop', (req, res) => {
  io.emit('spin stop', req.params.entityId);
  res.end('Stopping!');
});

app.get('/spin/:entityId/:axis?/:speed?', (req, res) => {
  io.emit('spin start', req.params.entityId, req.params.axis, parseFloat(req.params.speed));
  res.end('Spinning!');
});

app.get('/dreams', function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = http.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
