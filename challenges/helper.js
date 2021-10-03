

const isString = value => {
    return typeof value === 'string' || value instanceof String
};


const sumReducer = (previousValue, currentValue) => previousValue + currentValue;

module.exports = {
    isString,
    sumReducer
};