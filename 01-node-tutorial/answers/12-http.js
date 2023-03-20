const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
   res.end('Hello Mariana, this is a server')
   }
   if(req.url === '/about'){
    res.end('this is about')
   }
  req.end(`<h1>Oooopsssss</h1>
  <a href='/'>Back home</a>`)
   
    

})

server.listen(4000)