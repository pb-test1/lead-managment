const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');

// Routes
const leads = require('./routes/leads');


const app = express();

const dbc = config.db;
mongoose.connect(dbc.protocol + '://' + dbc.host + ':' + dbc.port + '/' + dbc.dbName);

// Setting the view engine
app.set('view engine', 'pug');

// Using Cors Middleware
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());

// Using Routes
app.use('/leads', leads);

// Pages
app.get('/', function (req, res) {
	res.render('index', {});
});

// 404
app.get('*', (req, res) => {
	res.status(404);
	res.send('404');
});

// Listening to port
app.listen(config.port, () => {
	console.log(`ENV: ${config.env}, serving on localhost: ${config.port}`);
});