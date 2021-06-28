var express = require("express");
const http = require('http');

var app = express();

app.use('/', express.static('app'))

var server = http.createServer({}, app);
server.listen(3006, () => console.log('Listening on 3006...'));
