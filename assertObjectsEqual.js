const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1); // a,b
  const array2 = Object.keys(object2); // b,a
  
  if(array1.length !== array2.length) {
  return false;
  }

  for(let key of array1){

    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
      var check =  eqArrays(object1[key], object2[key]);
      if(check === false){
        return false;
      }
    } else if(object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
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

  const assertObjectsEqual = function(actual, expected) {
    if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
    else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };