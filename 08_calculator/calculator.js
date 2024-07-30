const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function(array) {
  const sum = array.reduce((total, currentItem) => total + currentItem, 0);
  return sum;
  
};

const multiply = function(array) {
  const sum = array.reduce((total, currentItem) => total * currentItem, 1);
  return sum;

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
