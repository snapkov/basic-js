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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let maxNum = 0;
  let numToStr = n.toString().split("");
  let currentNum = 0;
  let spliceNum = [];

  for (let i = 0; i < numToStr.length; i++) {
    spliceNum = [...numToStr];
    spliceNum.splice(i, 1);
    currentNum = parseInt(spliceNum.join(""));
    if (currentNum > maxNum) {
      maxNum = currentNum;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
