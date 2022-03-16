
let getKeys = require('../keys.js');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(getKeys(testObject)); // output: [ 'name', 'age', 'location' ]

const arrayObject = ['The', 'blue', 'sky'];
console.log(getKeys(arrayObject)); // output : ['0', '1', '2']

const anySimpleObject = { 1: 'The', 2: 'blue', 3: 'sky' };
console.log(getKeys(anySimpleObject)); // output : ['1', '2', '3']

const differentKeyTypeObject = { 125: 'hello', 'second' : 'world', 10: 'program' }; 
console.log(getKeys(differentKeyTypeObject)); // output : [ '10', '125', 'second' ]

console.log(getKeys('string')); // output: [ '0', '1', '2', '3', '4', '5' ]
console.log(getKeys(34)); // output : []
console.log(getKeys());    // output : []