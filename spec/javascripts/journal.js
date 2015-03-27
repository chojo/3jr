var JOURNAL = require('./fixtures/jacques_journal');

// if (typeof module != "undefined" && module.exports)
//  module.exports = JOURNAL;

var hasEvent = function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
};

var tableFor = function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
};

// console.log(tableFor("pizza", JOURNAL));

//For binary (Boolean) variables, the phi coefficient (ϕ) provides a good measure of correlation and is relatively easy to compute. To compute ϕ, we need a table n that contains the number of times the various combinations of the two variables were observed.

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434

// console.log(day1.squirrel)
// console.log day1["foo bar"]

