const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const matrixNewArray = matrix.flat();
  let sumMatrix = 0;
  let k = 0;
  for (let i = 0; i < (matrixNewArray.length / matrix.length); i += 1) {
    while (matrixNewArray[i + k] !== 0 && matrixNewArray[i + k] !== undefined) {
      sumMatrix += matrixNewArray[i + k];
      k += matrixNewArray.length / matrix.length;
    }
    k = 0
  }
  return sumMatrix;
}

module.exports = {
  getMatrixElementsSum
};
