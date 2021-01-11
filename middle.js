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

module.exports = middle;