
module.exports = function valuesOfObject(obj){
    let arrayOfPropertyValues = [];
    for (keyOfObj in obj){
        arrayOfPropertyValues.push( obj[keyOfObj]);
    }
    return arrayOfPropertyValues;
}

