let getKeyValuePairs = require('../pairs.js');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(getKeyValuePairs(testObject)); 
const arrayObject = ['The', 'blue', 'sky'];
console.log(getKeyValuePairs(arrayObject)); 

const anySimpleObject = { 1: 'The', 2: 'blue', 3: 'sky' };
console.log(getKeyValuePairs(anySimpleObject)); 

const differentKeyTypeObject = { 125: 'hello', 'second' : 'world', 10: 'program' }; 
console.log(getKeyValuePairs(differentKeyTypeObject)); 
console.log(getKeyValuePairs('string')); 
console.log(getKeyValuePairs(34)); 
console.log(getKeyValuePairs());    