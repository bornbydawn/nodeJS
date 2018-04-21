const fs = require('fs');

//cb = () => {} is added as a default cb funciton in case none is specified which will happen in the case if the function is used with promises
const readFileAsArray = function (file, cb = () => { }) {
	//for promise
	return new Promise((resolve, reject) => {
		fs.readFile(file, function (err, data) {

			if (err) {
				//for promise
				reject(err);
				
				//for callback , this is not truly async, use process.nextTick for truly async
				return cb(err);
			}

			const lines = data.toString().trim().split('\n');
			
			//for promise
			resolve(lines);
			//for callback
			cb(null, lines);
		});
	});
};


//with promise
readFileAsArray(process.argv[2])
	.then(lines => {
		const numbers = lines.map(Number);
		const oddNumbers = numbers.filter(number => number % 2 === 1);
		console.log('odd numbers count:', oddNumbers.length);
	})
	.catch(console.error);


//with callback
readFileAsArray(process.argv[2], (err, lines) => {

	if (err) throw err;

	const numbers = lines.map(Number);
	const oddNumbers = numbers.filter(number => number % 2 === 1);
	console.log('odd numbers count: ', oddNumbers.length);
});

//with async/await
async function countOdd () {
	try{
		const lines = await readFileAsArray(process.argv[2]);
		const numbers = lines.map(Number);
		const oddNumbers = numbers.filter(number => number % 2 === 1);
		console.log('odd numbers count:', oddNumbers.length);
	}
	catch(err){
		console.error(err);
	}
}

countOdd();