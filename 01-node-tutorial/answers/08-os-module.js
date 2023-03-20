const os = require('os');

// info about current user 

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)


// object with os properties

const currentOS = {
    name: os.type(),
    release: os.release(),
    totelMen: os.totalmem(),
    freeMen: os.freemem(),

};

console.log(currentOS);


