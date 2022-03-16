let getInvertedObject = require('../invert.js');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(getInvertedObject(testObject)); // output : { '36': 'age', 'Bruce Wayne': 'name', Gotham: 'location' }

const arrayObject = ['The', 'blue', 'sky'];
console.log(getInvertedObject(arrayObject)); // output : { The: '0', blue: '1', sky: '2' }

const anySimpleObject = { 1: {'The' : 3, 'sky': 4}, 2: 'blue', 3: 'color' };
console.log(getInvertedObject(anySimpleObject)); // output : { The: '1', blue: '2', sky: '3' }

const differentKeyTypeObject = { 125: 'hello', 'second' : 'world', 10: 'program' }; 
console.log(getInvertedObject(differentKeyTypeObject)); // output : { program: '10', hello: '125', world: 'second' }

console.log(getInvertedObject('string')); // output: { s: '0', t: '1', r: '2', i: '3', n: '4', g: '5' }

console.log(getInvertedObject(34)); // output : {}
console.log(getInvertedObject());    // output : {}