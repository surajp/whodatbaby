var express = require('express');
var app = express();
app.listen(8000);
app.use(express.bodyParser());
app.get('/',function(req,res){
//	console.log("Request received for "+req.param.name);
	res.sendfile('./views/index.html');
});


app.get('/getbaby/:id/:friend',function(req,res){
	console.log("Request received for getbaby "+req.params.id+" "+req.params.friend);
//	res.writeHead(200,{"Content-type":"application/json"});
	res.send({"name":["Jack","Dan","Johnny"]});
});

app.get('/getParent/:id',function(req,res){
	console.log("Request received for getbaby "+req.params.id);
//	res.writeHead(200,{"Content-type":"application/json"});
	res.send({"name":["Bob","Jim","Jill"]});
});

app.get(/^\/?(.*)$/,function(req,res){
	console.log("Request received for "+req.params[0]);
	var fileName = req.params[0];
	if(fileName.match(/.html$/)!=null)
		res.sendfile('./views/'+fileName);
	else	if(fileName.match(/.js$/)!=null)
		res.sendfile('./js/'+fileName);
	else	if(fileName.match(/.css$/)!=null)
		res.sendfile('./css/'+fileName);
	else{
		//res.writeHead(500,{"Content-type":"text/plain"});
		res.send("Invalid request");
	}
});
