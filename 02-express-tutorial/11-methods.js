const express = require('express');
const app = express();
let {people} = require('./data')


// statis asset

app.use(express.static('./methods-public'))

//parse from data
app.use(express.urlencoded({extended:false}))

// parse jason

app.use(express.json);

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})
app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
res.status(201).send({sucess: true, person:name});
})

app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
     if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
res.status(201).send({sucess: true, data:[...people, name]});
    
})

app.post('/login',(req,res)=>{
   const {name} = (req.body)
   if(name){
    return res.status(200).send(`Welcome ${name}`)
   }
res.status(401).send({sucess: true, person:name})
})

app.put('api/people/:id', (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    console.log(id,name)
    res.send('hello world')
})
app.listen(5004,(req, res)=>{
    console.log('Server listening to port 5004')
})