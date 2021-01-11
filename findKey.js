const findKey = function(object,callback){
  let matchingKey = "";

  for(let key in object){
    if(callback(object[key])) {
      matchingKey = key;
      break;
    }
  }
    return matchingKey;
  }
  
  module.exports = findKey;
