const http = require('http');

const req = http.request(

    {hostname : 'www.google.com', method : 'GET'},
    (res) => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', (data)=> {
            console.log(data.toString());
        });
        
    }
);

req.on('error', (err) => {

    console.log(err);
});

req.end();
//we can also do req.write() in case of post requests