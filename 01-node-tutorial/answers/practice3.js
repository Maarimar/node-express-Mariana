const { findSourceMap } = require('module');


fs = require('fs').promises;

const firstSentence = 'This is the first line.'

 async function makeFile(){
try{
    await fs.writeFile('./content/practice2.txt', `${firstSentence}`);

    for(let i =1; i<11; i++){
await fs.writeFile('./content/practice2.txt', `This is linr ${i}\n`, {flag:'a' })
    }
        
    }
    catch(error){
        console.log(error)
    }

};

makeFile()