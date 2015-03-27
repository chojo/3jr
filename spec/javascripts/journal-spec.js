describe("dataset", function() {
  beforeEach(function() {
    try {
      fs = require('fs');
      journalFs = fs.readFileSync('journal.js', 'utf-8');
    } catch (e) {
      console.log('File not found!');
    }
  });

  it("should search correlation for pizza", function() {        
    eval(journalFs);
    var pizza = tableFor("pizza", JOURNAL);
    expect(pizza).toEqual([76, 9, 4, 1]);
  }); 

}); 

