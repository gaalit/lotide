const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

function eqArrays(array1, array2) {
  if (array1 === array2) return true;
  if (array1 == null || array2 == null) return false;
  if (array1.length !== array2.length) return false;

  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) return(console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
  return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
}

function without(source, itemsToRemove) {
 var newArr = [];
 for(var i = 0; i < source.length; i++){
   if(source[i] !== itemsToRemove[i]){
    newArr.push(source[i]);
   }
 }
 return newArr;
}