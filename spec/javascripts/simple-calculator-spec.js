describe("calculator", function() {
  beforeEach(function() {
    try {
      fs = require('fs');
      calculatorFs = fs.readFileSync('simple-calculator.js', 'utf-8');
    } catch (e) {
      console.log('File not found!');
    }
  });

  it("should square a number", function() {        
    eval(calculatorFs);
    expect(square(3)).toEqual(9);
  }); 

  it("should multiply two numbers", function() {        
    eval(calculatorFs);
    expect(multiply(2, 3)).toEqual(6);
  }); 
  
  it("should return the power of a number", function() {        
    eval(calculatorFs);
    expect(power(2, 3)).toEqual(8);
  }); 

  it("should subtract two numbers", function() {        
    eval(calculatorFs);
    var sub = subtract(5);
    expect(sub(2)).toEqual(3);
  }); 
});
