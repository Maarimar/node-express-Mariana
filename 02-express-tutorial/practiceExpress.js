const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./new_public'));

// app.get('/', (req, res)=>{
// sendFile(path.resolve(__dirname,'./new_public/index.html'))
// })
// adding to static assets

app.get('/sample', (req, res)=>{
res.status(200).send('This is working')
})

app.all('*',(req,res)=>{
    res.status(404).send('Page not found')

})



app.listen(3000, (req,res)=>{
console.log('Server listening on port 3000')
})