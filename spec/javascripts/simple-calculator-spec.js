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

});
