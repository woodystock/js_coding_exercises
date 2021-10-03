const isString = value => {
    return typeof value === 'string' || value instanceof String
};


const sum = (a, b) => a + b;


module.exports = {
    isString,
    sum
};