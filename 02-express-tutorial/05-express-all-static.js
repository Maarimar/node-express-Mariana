const express = require('express');
const path = require('path')
const app = express();

// set up static and middleware
app.use(express.static('./public'))

app.all('*',(req, res)=>{
res.status(404).send('page not found')
})


app.listen(5001,(req, res)=>{
console.log('server is listening on port 5001...')
})