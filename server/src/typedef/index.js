const { mergeTypeDefs } = require('@graphql-tools/merge');

const { loadFilesSync } = require('@graphql-tools/load-files');

const path = require('path');
// Load the type definitions from separate files

//find path
// console.log(path.join(__dirname, './customer.js')); 
const userTypeDefs = loadFilesSync(path.join(__dirname, './user.js'));

// Merge the type definitions
// const mergedTypeDefs = mergeTypeDefs([userTypeDefs]);
module.exports = userTypeDefs