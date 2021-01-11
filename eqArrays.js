const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) { // must check first if the arrays are equal in length
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    const valueOne = arr1[i]
    const valueTwo = arr2[i]
  
    if (valueOne !== valueTwo) {
      return false 
    }
  }
  return true
   
  }
  
module.exports = eqArrays;




