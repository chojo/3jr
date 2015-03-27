describe("dataset", function() {
  beforeEach(function() {
    try {
      fs = require('fs');
      datasetFs = fs.readFileSync('dataset.js', 'utf-8');
    } catch (e) {
      console.log('File not found!');
    }
  });

  it("should print first, second and last item in the array", function() {        
    eval(datasetFs);
    var first = day1.events[0];
    var second = day1.events[1];
    var last = day1.events[day1.events.length - 1];
    expect(first).toEqual("work");
    expect(second).toEqual("touched tree");
    expect(last).toEqual("television");
  }); 

}); 

