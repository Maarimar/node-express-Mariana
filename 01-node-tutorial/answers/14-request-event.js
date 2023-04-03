const http = require('http');

//using Event Emitter API
const server = http.createServer()

server.on('request', (req, res)=>{
    res.end('welcome')
})

server.listen(5000)