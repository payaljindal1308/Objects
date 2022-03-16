
module.exports = function getKeysOfObjects(obj) {
    let arrayOfKeys= [];
    for( property in obj){
        arrayOfKeys.push(property);
    }
    return arrayOfKeys;
}
