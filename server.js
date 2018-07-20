#!/usr/bin/env nodejs
var http = require('http');
var fs=require('fs');
//sending 404 error
fuction send4O4Response(response){
response.write(404,{"Content-text":"text/plain"});
response.write("ERROR 404:Page not found!");
response.end();
}
//handle a user request
function onRequest(request,response){
if(request.method=='GET'&&request.url=='/'){
response.writeHead(200,{"Content-text":"text/plain"});
fs.createReadStream("index.html").pipe(response);
}
else if(request.method=='GET'&&request.url=='/aboutus'){ 
response.writeHead(200,{"Content-text":"text/plain"});
fs.createReadStream("aboutus.html").pipe(response);
}
else if(request.method=='GET'&&request.url=='/contactus'){ 
response.writeHead(200,{"Content-text":"text/plain"});
fs.createReadStream("contactus.html").pipe(response);
}
else if(request.method=='GET'&&request.url=='/locateus'){ 
response.writeHead(200,{"Content-text":"text/plain"});
fs.createReadStream("locateus.html").pipe(response);
}
else if(request.method=='GET'&&request.url=='/menu'){ 
response.writeHead(200,{"Content-text":"text/plain"});
fs.createReadStream("menu.html").pipe(response);
}
else{
send4O4Request(response);
}
}
http.createServer(onRequest).listen(8888);
console.log("Server is now running.....");

