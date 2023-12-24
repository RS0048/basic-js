const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = n.toString().substring(1, n.length);
  for (let i = 1; i < n.toString().length; i += 1) {
    let partNewStringStart = n.toString().substring(0, i);
    let partNewStringEnd = n.toString().substring(i + 1, n.length);
    newNumber = partNewStringStart.concat(partNewStringEnd);
    if (newNumber > maxNumber) maxNumber = newNumber;
  }
  return parseInt(maxNumber);
}

module.exports = {
  deleteDigit
};
