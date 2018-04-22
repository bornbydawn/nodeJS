const EventEmiiter = require('events');

class WithLog extends EventEmiiter{
    execute(taskFunc){

        console.log('Before Executing');
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log('After executing');
    }
}

const withlog = new WithLog();

withlog.on('begin', ()=> console.log('About to execute'));
withlog.on('end', ()=> console.log('Done with execute'));

withlog.execute(()=> console.log('*** Executing task ***'));