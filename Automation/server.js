var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var port = "3000";

var app = express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');                                                                                                                                                                                                                                                                                                                                                                                
app.engine('html',require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'client/src')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',require('./routes/index'));
app.use('/api',require('./routes/tasks'));

app.listen(port,function(){
	console.log("Server started on port "+port);
})
