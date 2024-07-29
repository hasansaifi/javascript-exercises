const convertToCelsius = function(tempF) {
  let c =  5/9 * (tempF-32);
  c = parseFloat(c.toFixed(1));
  return c;
}; 

const convertToFahrenheit = function(tempC) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
