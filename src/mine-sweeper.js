const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const heightMiner = matrix.length;
  const widthMiner = matrix[0].length;
  let matrixMiner = [];
  for (i = 0; i < heightMiner; i += 1) {
    matrixMiner[i] = [];
    for (j = 0; j < widthMiner; j += 1) {
      let numberMine = 0;
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) numberMine += 1;
      if (i > 0 && matrix[i - 1][j] === true) numberMine += 1;
      if (i > 0 && j < widthMiner - 1 && matrix[i - 1][j + 1] === true) numberMine += 1;
      if (j > 0 && matrix[i][j - 1] === true) numberMine += 1;
      if (j < widthMiner - 1 && matrix[i][j + 1] === true) numberMine += 1;
      if (i < heightMiner - 1 && j > 0 && matrix[i + 1][j - 1] === true) numberMine += 1;
      if (i < heightMiner - 1 && matrix[i + 1][j] === true) numberMine += 1;
      if (i < heightMiner - 1 && j < widthMiner - 1 && matrix[i + 1][j + 1] === true) numberMine += 1;
      matrixMiner[i][j] = numberMine;
    }
  }
  return matrixMiner;
}

module.exports = {
  minesweeper
};
