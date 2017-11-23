//dependencies
const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const bucketlist = require('./controllers/bucketlist');

//initialize
const app = express();
const port = 3000;

//connect mongo server
mongoose.connect(config.database, {useMongoClient:true});

//using middleware
app.use(cors());

//helps  parsing url and json
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//static files location
app.use(express.static(path.join(__dirname, 'public')));

//invalid url requrest
app.get('/', (req,res)=>{
	res.send("Invalid page");
});

//listening on port
app.listen(port, ()=>{
	console.log('Starting server @ port '+port);
});

app.use('/bucketlist', bucketlist);


