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

  it("should check if a given integer number is even", function() {        
    eval(puzzleFs);
    expect(isEven(24)).toEqual(true);
    expect(isEven(55)).toEqual(false);
    expect(isEven(-1)).toEqual(false);
  }); 
  
  it("should print the quantity of a given character", function() {        
    eval(puzzleFs);
    expect(countChar("JoANNA", "N")).toEqual(2);
    expect(countChar("JoANNA", "J")).toEqual(1);
    expect(countBs("BMBXBX", "B")).toEqual(3);
  }); 
});
