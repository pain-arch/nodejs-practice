// Core module
var http=require('http');



var server=http.createServer(function(req, res){

    // Home page url
    if (req.url=="/") {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is Home page</h1>')
        res.end();
    }

    // About page url
    else if (req.url=="/about") {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is About page</h1>')
        res.end();
    }
    
    // Contct page url
    else if (req.url=="/contact") {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>This is Contact page</h1>')
        res.end();
    }
    



});

// localhost server 
server.listen(1000);
console.log("all set");