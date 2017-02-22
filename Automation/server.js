var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = "3000";

var app = express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');                                                                                                                                                                                                                                                                                                                                                                                
app.engine('html',require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname,'client/src')));


//app.set('trust proxy', 1);
//Set Session
app.use(session(
				{secret:"qwerty",resave:false,
				saveUninitialized: true,
  				cookie: { secure:false}// secure:true for https // Need to verify
  				}
		));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*app.get('/',function(req,res){
	sess = req.session;
	//Session set when user Request our app via URL
	if(sess.email) {
	    console.log("Session setted");
	}
	else {
	  console.log("Session not setted");
	}
});
*/

app.all('*',function(req, res,next){
	 //req.headers['x-forwarded-proto'] = 'https';
	//console.log(req.path);
	//console.log(req.originalUrl);
	session = req.session;	
	if(session.user){
		next();
	}else if(req.path == "/login"){
		next();
	}else{
		res.redirect("login");
		//next();
	}
});



app.use('/',require('./routes/index'));
app.use('/',require('./routes/login'));
app.use('/api',require('./routes/tasks'));




app.listen(port,function(){
	console.log("Server started on port "+port);
})
