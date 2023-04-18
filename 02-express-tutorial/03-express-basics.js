const express = require('express');

const app = express()

app.get('/', (req,res)=>{
    console.log('user hit the resource')
res.status(200).send('Home Page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('This is about the page ')
})

app.all('*', (req, res)=>{
    res.status(404).send('<h1>This does not exist</h1>')
})

app.listen(5003,()=>{
    console.log('serves is listenig on port 5003');

}
)