const express     = require('express');
const http        = require('http');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const app         = express();
const router      = require('./router');
const mongoose    = require('mongoose');
const cors        = require('cors')

// db setup
mongoose.connect('mongodb://chris:Auth123@ds147979.mlab.com:47979/react-auth')

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const port = process.env.port || 3090;
const server = http.createServer(app);
server.listen(port)
console.log('Auth Sever now running')

// 'mongodb://chris:Auth123@ds147979.mlab.com:47979/react-auth'
