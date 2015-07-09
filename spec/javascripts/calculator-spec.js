describe("require", function() {
  beforeEach(function() {
    try {
      fs = require('fs');
      calculatorFs = fs.readFileSync('calculator.js', 'utf-8');
    } catch (e) {
      console.log('File not found!');
    }
  });


  describe("multiplication", function() {

    it("should multiply 2 and 3", function () {
      eval(calculatorFs);
      var product = multiply(2, 3);
      expect(product).toBe(6);
    });

  });
});
