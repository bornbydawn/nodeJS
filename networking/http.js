const server = require('http').createServer();


server.on('request', (req, res) => {

    res.writeHead(200, {'content-type':'text/plain'});

res.end('response from http server\n');
});

server.listen(8000);