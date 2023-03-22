const http = require('http');

const serverTry = http.createServer((req, res)=>{
   if(req.url === '/'){
   res.end('Hello Mariana, this is a server')
   }
   if(req.url === '/about'){
    res.end('this is about')
   }
  resgit .end(`<h1>Oooopsssss</h1>
  <a href='/'>Back home</a>`)
   
    

})

serverTry.listen(4000)