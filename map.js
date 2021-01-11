const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);

// console.log(assertArraysEqual(map([1,2,3], function(element){return element +1}), [2,3,4]));
// console.log(assertArraysEqual(map([1,2,3], function(element){return element * 3000}), [2,3,4]));
// console.log(assertArraysEqual(map([1,2,3], function(element){return element / 30}), [2,3,4]));