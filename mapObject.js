
module.exports = function mapObject(obj, cb){
    let mappedObject = {};
    for (let propertyName in obj){
        mappedObject[propertyName] = cb(obj[propertyName], propertyName);
    }
    return mappedObject;
}