const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  const newNames = [];
  newNames[0] = names[0];
  for (i = 1; i < names.length; i += 1) {
    let copy = 0;
    for (j = 0; j < i; j += 1) {
      if (names[i] === names[j]) copy += 1;
      }
      if (copy === 0) newNames[i] = names[i];
      if (copy > 0) newNames[i] = names[i] + '(' + copy + ')';
    }
    const newNames2 = [];
    newNames2[0] = newNames[0];
    for (i = 1; i < newNames.length; i += 1) {
      copy = 0;
      for (j = 0; j < i; j += 1) {
        if (newNames[i] === newNames[j]) copy += 1;
        }
        if (copy === 0) newNames2[i] = newNames[i];
        if (copy > 0) newNames2[i] = newNames[i] + '(' + copy + ')';
      }
  return newNames2;
}

module.exports = {
  renameFiles
};
