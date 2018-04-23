process.stdout.write('\u001B[2]\u001B[0;0f');

const server = require('net').createServer();

server.on('connection',socket =>{

    console.log('Client connected');
    socket.write('Welcome new client!\n');

	socket.on('data', data => {
	
	console.log('data is:', data);	
	socket.write('data is: ');

	//output encoding as the second parameter as node does not take any defa	//ult encoding
		
	socket.write(data, 'utf8');

	//socket.write(data)
	});
	//set default encoding as utf8, now stream is converted to string
	//socket.setEncoding('utf8');


	socket.on('end', () => {

	console.log('Client disconnected');
	});
});

server.listen(8000, ()=> console.log('Server bound'));
