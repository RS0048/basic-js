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
function getSeason(date) {
  try {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (typeof date !== 'object') throw new Error('Invalid date!'); 
    if (typeof date === 'object' && !('getMonth' in date)) throw new Error('Invalid date!'); 
    date.toDateString();
    if (date.getMonth() === undefined) throw new Error('Invalid date!'); 
    if (date.getMonth() >= 2 && date.getMonth() < 5) return 'spring';
    if (date.getMonth() >= 5 && date.getMonth() < 8) return 'summer';
    if (date.getMonth() >= 8 && date.getMonth() < 11) return 'fall';
    if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) return 'winter';
  } catch (err) {
    throw new Error('Invalid date!'); 
  } 
}


module.exports = {
  getSeason
};
