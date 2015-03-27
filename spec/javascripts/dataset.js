  var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"],
    "foo bar": "foo"
  };

var journal = [];

var addEntry = function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
};

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);


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

