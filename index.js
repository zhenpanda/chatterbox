// server config
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// app config
const app = express();
const router = require('./router');

// db config
const mongoose = require('mongoose');

// seed
// const seeder = require('./seed');

/*
// db setup
const uristring = process.env.MONGODB_URI || 'mongodb://localhost:auth/auth';
mongoose.connect(uristring, function (err, res) {
  if (err) console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  else console.log ('Succeeded connected to: ' + uristring);
});

// auto seed
// seeder();
*/

// App setup
// middleware thru express
app.use(morgan('combined')); // logging debugging
app.use(bodyParser.json({ type: '*/*' })); // parse incoming request
router(app);

// Server setup
const port = process.env.PORT || 3010;
const server = http.createServer(app);
server.listen(port);
console.log('Server listen on:', port, 'captain!');
