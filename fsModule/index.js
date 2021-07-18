var fs=require('fs');
var http=require('http');


var server=http.createServer(function(req,res) {
    
    if (req.url="/") {

        //Async
        fs.readFile('index.html', function(error, data){
            res.writeHead(200, {'content-type':'text/html'});
            res.write(data);
            res.end();
            
        })
        
    }
});
server.listen(1200);
console.log("all set les GO")