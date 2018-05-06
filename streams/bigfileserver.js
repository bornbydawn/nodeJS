const fs = require('fs');
const server = require('http').createServer();


server.on('request', (req, res) =>{

    //standard caching everything in memory
    // fs.readFile('./big.file', (err, data) => {

    //     if(err) throw err;

    //     res.end(data);
    // });

    //using stream
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000);