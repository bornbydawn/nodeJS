const { Readable } = require('stream');


// //this approach is called pushing, not optimal
// const inStream = new Readable();
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// //pushing null signifies that the stream has ended
// inStream.push(null);

const inStream = new Readable({

    read(size) {

        setTimeout(() => {

            if (this.currentCharCode > 90){
                //this.push('\n');
                this.push(null);
                return;                    
            }

            this.push(String.fromCharCode(this.currentCharCode++));

            

        }, 100);



    }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

process.on('exit', () => {

    console.error(`\n\ncurrentCharCode is ${inStream.currentCharCode}`);
});

//to remove the error caused by the head command
process.stdout.on('error', process.exit);