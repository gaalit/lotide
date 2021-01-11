const takeUntil = function(array, callback) {     
  
  let newArray = [];  
  
  for(let num of array){ 
             
    if(callback(num)) { // plugging num (which is each element as an array) which then replaces the x..
      break;
   } else {
     newArray.push(num);
   }
  }
  return newArray;
}

module.exports = takeUntil;
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
                                     
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);            

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);             //[ 'I\'ve', 'been', 'to', 'Hollywood' ]