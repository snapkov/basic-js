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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const s1Freq = {};
  const s2Freq = {};
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1Freq.hasOwnProperty(s1[i])) {
      s1Freq[s1[i]]++;
    }
    else {
      s1Freq[s1[i]] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (s2Freq.hasOwnProperty(s2[i])) {
      s2Freq[s2[i]]++;
    }
    else {
      s2Freq[s2[i]] = 1;
    }
  }

  for (let key in s1Freq) {
    if (s2Freq.hasOwnProperty(key)) {
      count += Math.min(s1Freq[key], s2Freq[key]);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
