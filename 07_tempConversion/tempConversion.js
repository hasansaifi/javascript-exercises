const convertToCelsius = function(tempF) {
  // Convert f to c
  let c =  5/9 * (tempF-32);
  //Reduce decimal to 1 and convert string to float
  c = parseFloat(c.toFixed(1));
  return c;
}; 

const convertToFahrenheit = function(tempC) {
  // Convert c to f
  let f = (tempC * 9/5) + 32;
  //Reduce decimal to 1 and convert string to float
  f = parseFloat(f.toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
