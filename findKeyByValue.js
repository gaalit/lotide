const findKeyByValue = function(objects,value){
  
  for(let obj of Object.keys(objects)) {
    if(value === obj) {
      return objects[obj];
  }
}
  return;
}

console.log(findKeyByValue({"sci_fi": "The Expanse", "comedy": "Brooklyn Nine-Nine", "drama":  "The Wire"}, "drama"));




