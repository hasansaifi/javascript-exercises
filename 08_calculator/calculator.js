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

const power = function(numOne, numTwo) {
  return Math.pow(numOne, numTwo);
	
};

const factorial = function(num) {
	function factorial(n) { 
    let ans = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans;}
  
  return factorial(num);
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
