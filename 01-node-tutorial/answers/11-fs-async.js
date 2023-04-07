const {readFile, writeFile} = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
const second = result 
writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('done with this task');
})
    })
})

console.log('starting a new task')


// const _ = require('lodash');

// const items = [1, [2,[3,[4]]]];

// const newItems = _.flatMapDeep(items);

// console.log(newItems);


// /////




// const {readFile, writeFile} = require('fs').promises

// // const util = require('util');
// // const readFilePromise = util.promisify(readFile);
// // const writeFilePromise = util.promisify(writeFile);

// getText('./content/first.txt').then(result=>console.log(result))
// .catch((err)=> console.log(err))


// const start = async()=>{
//     try{
//     const first =  await readFile('./content/first.txt')
//     const second = await readFile('./conent/second.txt')
//     await writeFilePromise('./content/result-mind-granade.txt',
//     `THIS IS AWSOEM: ${first} ${second}`, 
//     {flag: 'a'})
//     console.log(first,second)
//     }catch(error){
//         console.log(error)
//     }
// }

// start();

// // const getText =(path)=>{
// //     return new Primise((resolve, reject)=>{
// // readFile(path, 'utf8', (err, data)=>{
// //     if(err){
// //         reject(err)
// //     } else{
// //         resolve(data)
// //     }
// // });
// //     })
// // }

