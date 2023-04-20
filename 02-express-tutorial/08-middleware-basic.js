const express = require('express');
const app = express();

// req => middleware => res

const logger = (req, res, next)=>{
const method =req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time)
    next();
}

app.get('/',logger,(req, res)=>{
    res.send('Home')
});

app.get('/about', (req,res)=>{
    res.send('About'); 

})

app.listen(5003, ()=>{
console.log('Server us litening to port 5003');
})