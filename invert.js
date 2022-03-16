module.exports = function getInvertedObject(obj){
    let invertedObject = {};
    for (let objKey in obj){
        invertedObject[JSON.stringify(obj[objKey])] = objKey;
    }
    return invertedObject;
}