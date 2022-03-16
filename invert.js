module.exports = function getInvertedObject(obj){
    let invertedObject = {};
    for (let objKey in obj){
        invertedObject[obj[objKey]] = objKey;
    }
    return invertedObject;
}