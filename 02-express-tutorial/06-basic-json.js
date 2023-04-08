
const express = require('express');

const app = express();

const {products}= require('./data.js')

app.get('/', (req,res)=>{
    res.json(products)
})

app.listen(5001,()=>{
    console.log('Server is listeging to por 5000...')
})