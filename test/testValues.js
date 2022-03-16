let getValues = require('../values.js');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

console.log(getValues(testObject)); // output: [ 'Bruce Wayne', 36, 'Gotham' ]

const arrayObject = ['The', 'blue', 'sky'];
console.log(getValues(arrayObject)); // output : [ 'The', 'blue', 'sky' ]

const anySimpleObject = { 1: 'The', 2: 'blue', 3: 'sky' };
console.log(getValues(anySimpleObject)); // output : [ 'The', 'blue', 'sky' ]

const differentKeyTypeObject = { 125: 'hello', 'second' : 'world', 10: 'program' }; 
console.log(getValues(differentKeyTypeObject)); // output : [ 'program', 'hello', 'world' ]
console.log(getValues('string')); // output: [ 's', 't', 'r', 'i', 'n', 'g' ]
console.log(getValues(34)); // output : []
console.log(getValues());    // output : []