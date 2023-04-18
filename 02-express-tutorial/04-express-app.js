const express = require('express');
const path = require('path')
const app = express();

// set up static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
// sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
// adding to static assets


app.all('*',(req, res)=>{
res.status(404).send('page not found')
})


app.listen(5001,(req, res)=>{
console.log('server is listening on port 5001...')
})