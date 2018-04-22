process.stdout.write('\u001B[2]\u001B[0;0f');

const server = require('net').createServer();

server.on('connection',socket =>{

    console.log('Client connected');
    socket.write('Welcome new client!\n');
});

server.listen(8000, ()=> console.log('Server bound'));