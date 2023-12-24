const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Massive = s1.split('').sort();
  const s2Massive = s2.split('').sort();
  let sumCopyElements = 0;
  let position = 0;
  for (let i = 0; i < s1Massive.length; i += 1) {
    for (let j = 0 + position; j < s2Massive.length; j += 1) {
      if (s2Massive[j] === s1Massive[i]) {
        sumCopyElements += 1;
        position = j + 1;
        break;
      }
    }
  }
  return sumCopyElements;
}

module.exports = {
  getCommonCharacterCount
};
