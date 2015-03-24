describe("square function", function() {
  beforeEach(function() {
    try {
      fs = require('fs');
      squareFs = fs.readFileSync('square.js', 'utf-8');
    } catch (e) {
      console.log('File not found!');
    }
  });

  it("should square a number", function() {        
    eval(squareFs);
    expect(square(3)).toEqual(9);
  }); 


});
