
let mapObjectValues = require('../mapObject.js');
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
console.log(mapObjectValues(testObject, cb = (value, key) => {
    return value + 30;
}));


console.log(mapObjectValues(testObject, cb = (value, key) => {
    return value + ` is the ${key}`;
}));

console.log(mapObjectValues(testObject, cb = (value, key) => {
    if (typeof value === 'number') return value * 2;
    else return value.repeat(2);
}));
