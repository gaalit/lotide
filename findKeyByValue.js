const findKeyByValue = function(objects,value){
  
  for(let obj of Object.keys(objects)) {
    if(value === obj) {
      return objects[obj];
  }
}
  return;
}

module.exports = findKeyByValue;


