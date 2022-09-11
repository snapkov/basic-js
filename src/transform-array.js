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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformedArr = [];
  let controlArr = arr.slice();

  for (let i = 0; i < controlArr.length; i++) {
    switch(controlArr[i]) {
      case '--discard-next':
        if (i + 1 < controlArr.length) {
          controlArr[i + 1] = undefined;
          i++;
        }
        break;
      case '--discard-prev':
        if ((i - 1 > -1) && (controlArr[i - 1] !== undefined)) {
          transformedArr.pop();
        }
        break;
      case '--double-next':
        if (i + 1 < controlArr.length) {
          transformedArr.push(controlArr[i + 1]);
        }
        break;
      case '--double-prev':
        if ((i - 1 > -1) && (controlArr[i - 1] !== undefined)) {
          transformedArr.push(controlArr[i - 1]);
        }
        break;
      default:
        transformedArr.push(controlArr[i]);
    }
  }

  return transformedArr;
}

module.exports = {
  transform
};
