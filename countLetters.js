const assertEqual = require('./assertEqual')

const countLetters = function(letters) {
  letters = letters.replace(/\s/g, '');
  let resultObj = {};
  for(const letter of letters) {
    if (resultObj[letter]) {         // if that letter is already inside the Object--> add 1 to it
      resultObj[letter] += 1;
    } else {                          // if that letter isin't there yet ==> will equal 1
      resultObj[letter] = 1;
    }
    }
  return resultObj;
}

module.exports = countLetters;