const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;

