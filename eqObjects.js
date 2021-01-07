const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

//They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object