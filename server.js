const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./app/routes.js');
routes(app);

const configDB = require('./config/database.js');
mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: true 
}));
app.use(session({
	secret: 'heool',
	saveUninitialized: true,
	resave: true
}));

// app.use('/', function(req,res){
// 	res.send('hello, world');
// 	console.log(req.cookies);
// 	console.log('=======================');
// 	console.log(req.session);
// });




app.listen(port);
console.log('server run on port '+port);