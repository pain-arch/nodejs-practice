
var http=require('http');

var URL=require('url');


var server=http.createServer(function (req, res) {

    var myURL="http://opera.com/contact.html?yaer=2021&month=march";

    var myUrlObj= URL.parse(myURL,true);

    var myHostName=myUrlObj.host;
    var myPathName=myUrlObj.pathname;
    var mySearchName=myUrlObj.search;
    
    res.writeHead(200, {'content-type':'text/html'});
    res.write(myHostName);

    res.write(myPathName);
    
    res.write(mySearchName);
    res.end();
    
});

server.listen(1000);
console.log("you are all set");