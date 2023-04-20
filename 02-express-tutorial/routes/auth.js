const express = require('express');
const router = express.Router();


app.post('/',(req,res)=>{
   const {name} = (req.body)
   if(name){
    return res.status(200).send(`Welcome ${name}`)
   }
res.status(401).send({sucess: true, person:name})
})

module.exports = router