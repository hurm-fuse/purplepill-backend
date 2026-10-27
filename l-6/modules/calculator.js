// First function
function sum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// Second function
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

// Dono functions ek object mein export kiye
module.exports = {
    sum: sum,
    multiply: multiply
};