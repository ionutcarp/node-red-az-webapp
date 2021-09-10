var express = require('express'),
    RED = require('node-red'),
    http = require('http'),
    settings = require('./settings.js');

var app = express(),
    server = http.createServer(app);

//work around to add manually the required directory to the path in the server.js file
//process.env.Path =  'D:\\Program Files\\Git\\cmd;D:\\Program Files\\Git\\usr\\bin;' + process.env.Path;

RED.init(server,settings);

app.use(settings.httpAdminRoot,RED.httpAdmin);
app.use(settings.httpNodeRoot,RED.httpNode);
 
server.listen(settings.uiPort);
console.log(`listening port:${settings.uiPort}`);
RED.start();