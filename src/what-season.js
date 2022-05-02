const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  function isInvalidDate(date) {
    if (!(date instanceof Date)) {
      // && !isNaN(Date.parse(date))
      // if (!(Object.prototype.toString.call(date) === "[object Date]")) {
        throw "Invalid date!";
      }
  }

  try {
    isInvalidDate(date);
  } catch (e) {
    console.error(e);
  }

  let monthBySeason = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];
  
  return monthBySeason[date.getMonth()];
}

module.exports = {
  getSeason
};
