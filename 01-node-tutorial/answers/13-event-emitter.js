const EventEmitter = require('events');

const costumeEmitter = new EventEmitter();

costumeEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name} with id:${id}`)
})

costumeEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

costumeEmitter.emit('response', 'Mariana', 34)