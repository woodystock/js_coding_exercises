// function to check if the passed value is recognised as a string or not

const isString = value => {
    return typeof value === 'string' || value instanceof String
};

// function to add two numbers. Useful for Array.reduce();
const sum = (a, b) => a + b;

module.exports = {
    isString,
    sum
};