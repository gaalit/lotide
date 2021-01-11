const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');

  const assertObjectsEqual = function(actual, expected) {
    if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
    else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  module.exports = assertObjectsEqual;