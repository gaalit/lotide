const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

function eqArrays(array1, array2) {
  if (array1 === array2) return true;
  if (array1 == null || array2 == null) return false;
  if (array1.length !== array2.length) return false;

  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// Using eqArrays create function which will take in two arrays and console.log an appropriate message to the console.

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) return(console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
  return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
}
