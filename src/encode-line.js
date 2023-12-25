const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrayStr = str.split('');
  const newArray = [];
  let indexNewArray = 0;
  let copySymbol = 1;
  for (let i = 0; i < arrayStr.length; i += 1) {
    if (arrayStr[i] === arrayStr[i - 1]) copySymbol += 1;
    if (arrayStr[i] !== arrayStr[i + 1]) {
      if (copySymbol === 1) newArray[indexNewArray] = arrayStr[i];
      if (copySymbol > 1) newArray[indexNewArray] = copySymbol + arrayStr[i];
      copySymbol = 1;
      indexNewArray += 1;
    }
  }
  return newArray.join('');
}

module.exports = {
  encodeLine
};
