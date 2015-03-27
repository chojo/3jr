// Consider this puzzle: by starting from the number 1 and repeatedly either
// adding 5 or multiplying by 3, an infinite amount of new numbers can be
// produced. How would you write a function that, given a number, tries to find
// a sequence of such additions and multiplications that produce that number?
// For example, the number 13 could be reached by first multiplying by 3 and
// then adding 5 twice, whereas the number 15 cannot be reached at all.

var findSolution = function findSolution(target) {
  function find(start, history) {
   if (start === target)
    return history;
  else if (start > target)
    return null;
  else
    return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
};

var isEven = function isEven(number) {
  number = Math.abs(number);
  if (number === 0)
    return true;
  else if (number === 1)
    return false;
  else
    return isEven(number - 2);
};

// Bean counting
//
// You can get the Nth character, or letter, from a string by writing
// "string".charAt(N), similar to how you get its length with "s".length. The
// returned value will be a string containing only one character (for example,
// "b"). The first character has position zero, which causes the last one to be
// found at position string.length - 1. In other words, a two-character string
// has length 2, and its characters have positions 0 and 1.
//
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters are in the string.
//
// Next, write a function called countChar that behaves like countBs, except it
// takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to make
// use of this new function.

var countBs = function countBs(string) {
  return countChar(string, "B");
};
//console.log(countBs("BBC"));
// → 2

var countChar = function countChar(string, char) {
  if (string.length === 0) {
    return 0;
  } else {
    var result = 0;
    console.log("string.length = " + string.length);
    for (var count = 0; count < string.length; count++) {
      if (string.charAt(count) === char) {
          result = result + 1;    
          console.log("string.charAt(" + count + ")");
      }
    }
    return result;    
  }
};
//console.log(countChar("kakkerlak", "k"));
// → 4
