describe("puzzle", function() {
  beforeEach(function() {
    try {
      fs = require('fs');
      puzzleFs = fs.readFileSync('puzzle.js', 'utf-8');
    } catch (e) {
      console.log('File not found!');
    }
  });

  it("should find a sequence of number with the operations '* 3' and '+ 5' to produce a given number", function() {        
    eval(puzzleFs);
    expect(findSolution(24)).toEqual("(((1 * 3) + 5) * 3)");
  }); 

});
