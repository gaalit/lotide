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

const eqArrays = function(arr1, arr2) {
 
  for (var i = 0; i < arr1.length; i++) {
    const valueOne = arr1[i]
    const valueTwo = arr2[i]
  
    if (valueOne !== valueTwo) {
      return false 
    }
  }
  return true
   
  }
  
  assertEqual(eqArrays([1, 3, 2], [1, 2, 3]), true);

//could also do it this way:

// function eqArrays(array1, array2) {
//   if (array1 === array2) return true;
//   if (array1 == null || array2 == null) return false;
//   if (array1.length !== array2.length) return false;

//   for (var i = 0; i < array1.length; ++i) {
//     if (array1[i] !== array2[i]) return false;
//   }
//   return true;
}


// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

