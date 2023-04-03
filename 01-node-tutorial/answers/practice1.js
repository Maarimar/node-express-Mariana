const theSentence = require('./practice2.js')

const {writeFile} = require('fs');

const chao = require('os');

writeFile('./content/practice.txt', `${theSentence} by ${chao.userInfo().username}`, function(err, data){})