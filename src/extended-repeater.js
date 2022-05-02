const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const separatorDefault = "+";
  const additionSeparatorDefault = "|";
  let repeatStrArr = [];
  let repeatStr = "";
  let addStrArr = [];
  let addStr = "";

  if (options.hasOwnProperty("additionRepeatTimes")) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addStrArr.push(options.addition === null ? "null" : options.addition.toString());
    }

    if (options.hasOwnProperty("additionSeparator")) {
      addStr = addStrArr.join(options.additionSeparator);
    }
    else {
      addStr = addStrArr.join(additionSeparatorDefault);
    }
  } 
  else if (options.hasOwnProperty("addition")) {
    if (typeof(options.addition) === "object") {
      addStr += options.addition; 
    }
    else {
      addStr = options.addition.toString();
    }
  }

  if (options.hasOwnProperty("repeatTimes")) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (typeof(str) === "object") {
        repeatStrArr.push(str + addStr);
      }
      else {
        repeatStrArr.push(str.toString() + addStr);
      }
    }

    if (options.hasOwnProperty("separator")) {
      repeatStr = repeatStrArr.join(options.separator);
    }
    else {
      repeatStr = repeatStrArr.join(separatorDefault);
    }
  } 
  else {
    repeatStr = str.toString() + addStr;
  }

  return repeatStr;
}

module.exports = {
  repeater
};
