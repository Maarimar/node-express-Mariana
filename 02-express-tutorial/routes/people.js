const express = require('express');
const router = express.Router(); 
let { people } = require('../data')

const {
     getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

app.get('/',getPeople)

app.post('/',createPerson)

app.post('/postman', createPersonPostman)

app.put('/:id', updatePerson)

app.delete('/:id', deletePerson)

module.exports = router 