let getDefaults = require('../defaults.js');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaultObject = { occupation: 'Software Developer', language: 'English'};
console.log(getDefaults(testObject, defaultObject)); 


const anySimpleObject = { 1: 'The', 2: 'blue', 3: 'sky' };
const differentKeyTypeObject = { 125: 'hello', 'second' : 'world', 10: 'program' }; 
console.log(getDefaults(anySimpleObject, differentKeyTypeObject)); 