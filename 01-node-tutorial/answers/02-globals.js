/*GLOBAL VARIABLES  there no Window object on Node.js 

__dirname  - path to current directory 
__filename - file name 
require    - fucntion to use modules(CommonJS)
module     - info about current module (file)
process    - info about env where the program is being excecuted
 */


console.log(__dirname);


setInterval(()=>{
console.log('Hello World from Node!!');
},2000);