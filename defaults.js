module.exports = function getDefaultValues(obj, defaultProps){
    for (let property in defaultProps){
        if(!obj[property]){
            obj[property] = defaultProps[property];
        }
    }
    return obj;
}