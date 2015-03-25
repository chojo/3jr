var square = function(x) {
  return x * x;
};

var multiply = function(x, y) {
  return x * y;
};

var power = function(base, exponent) {
  if (exponent === 0)
    return 1;
  else
    var result = 1;
    for (var count = 0; count < exponent; count++)
      result *= base;
      return result;
};

var subtract = function (first) {
  return function(second) {
    return first - second;
  };
};

// var sub = subtract(5);
// console.log(sub(2)); // -> 3
