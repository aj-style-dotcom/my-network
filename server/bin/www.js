#!/usr/bin/env node

var app = require('../app');
var http = require('http');


// Get port from environment and store in Express.


var port = process.env.PORT || 4000
app.set('port', port);


// Create HTTP server.

var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
 

server.listen(port);
server.on('error', (err)=>{
console.log("error while starting server ❌ \n"+ err)});
server.on('listening',  ()=>{
console.log("server started ✔️")});