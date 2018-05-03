//process.stdout.write('\u001B[2]\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {

	socket.id = counter++;
	//sockets[socket.id] = socket;

	console.log('Client connected');
	socket.write('Please type your name: ');

	socket.on('data', data => {

		if(!sockets[socket.id]){

			socket.name = data.toString().trim();
			socket.write(`Welcome ${socket.name}!\n`);
			sockets[socket.id] = socket;
			return;
		}

		Object.entries(sockets).forEach(([key, cs]) => {

		if(key == socket.id) return;

		cs.write(`${socket.name}: `);
		cs.write(data);
		
			
		});
		//writing data written by client to the console of server	
		//console.log('data is:', data);
		//socket.write('data is: ');

		//socket.write(`${scoket.id}: `);

		//output encoding as the second parameter as node does not take any defa	//ult encoding

		//socket.write(data, 'utf8');

		//socket.write(data)
	});
	//set default encoding as utf8, now stream is converted to string
	//socket.setEncoding('utf8');


	socket.on('end', () => {

		//delete the disconnected client from the sockets object
		delete sockets[socket.id];
		console.log('Client disconnected');
	});
});

server.listen(8000, () => console.log('Server bound'));
