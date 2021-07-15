var http=require('http');

var server=http.createServer(function( req, res) {
   res.end("welcome to my house") 
});

server.listen(1200);
console.log("all op bolte");

// to chcek  it go (localhost:1200)