// Modules are encapsulated code (we only share what we want, the minimum)
// CommonJS, every file is a module (we get them by default)
const saySayHi = require('./05-utils.js');
const name = require('./04-names.js')
const data = require('./06-alternative-flavor')

require('./07-mind-grenade')

// saySayHi('Mariana')
// saySayHi(name.eric);clear
// saySayHi(name.irma);