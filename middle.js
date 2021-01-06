// const eqArrays = function(arr1, arr2) {
 
//   for (var i = 0; i < arr1.length; i++) {
//     const valueOne = arr1[i]
//     const valueTwo = arr2[i]
  
//     if (valueOne !== valueTwo) {
//       return false 
//     }
//   }
//   return true
   
//   }

//   const assertArraysEqual = function(array1, array2) {
//     if (!eqArrays(array1, array2)) return(console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
//     return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
//   }

  const middle = function(array) {
    let arrayMiddle = [];

    if(array.length === 1 || array.length === 0){
      return arrayMiddle;
    }
    
    if (array.length % 2 === 0){
      arrayMiddle.push(array[array.length/2 - 1]);
      arrayMiddle.push(array[array.length/2]);
    
    } else {
      arrayMiddle.push(array[Math.floor(array.length/2)]);
    }
    return arrayMiddle;
  }


  //  create an empty array that will comtain the output
  // create a condition for arrays that are a pair number
  //create a condition for arrays that are not a pair number

  
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1,2,3])) // => 2