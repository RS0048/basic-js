const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  const newArray = [];
  let indexNewArray = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i - 1] === '--discard-next') newArray[i] = 'Delete';
    if (arr[i] === '--discard-next') newArray[i] = 'Delete';
    if (arr[i] === '--discard-prev') {
      newArray[i - 1] = 'Delete';
      newArray[i] = 'Delete';
    }
    if (arr[i] === '--double-next') newArray[i] = arr[i + 1];
    if (arr[i] === '--double-prev') newArray[i] = newArray[i - 1];
    if (arr[i] !== '--discard-next' && arr[i - 1] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
      newArray[i] = arr[i];
    }
  }
  const finalArray =[];
  let indexFinalArray = 0;
  for (let j = 0; j < newArray.length; j += 1) {
    if (newArray[j] !== 'Delete' && newArray[j] !== undefined) {
      finalArray[indexFinalArray] = newArray[j];
      indexFinalArray += 1;
    }
  }
  return finalArray;
}

module.exports = {
  transform
};
