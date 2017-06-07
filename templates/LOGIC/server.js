//
'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
app.get('/', function(req, res) {
   console.log(__dirname);
   res.sendFile(__dirname + '/index.html');
});
app.listen(PORT);
console.log('Hello from <%= appName %>! I\'m so tiny, but proud that Node Server has started, at http://localhost:'+ PORT);
//console.log();
