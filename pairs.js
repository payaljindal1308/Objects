module.exports = function getKeyValuePairs(obj) {
    let keyValuePairs = [];
    for( let objectKey in  obj){
        keyValuePairs.push( [ objectKey, obj[objectKey]]);
    }
    return keyValuePairs;
}