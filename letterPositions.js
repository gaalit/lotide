const letterPositions = function(sentence) {
  
  // sentence = sentence.replace(/\s/g, '');
  let result = {};
  
  for(var i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
     if(result[sentence[i]]) {
      result[sentence[i]].push(i);
      } else {
      result[sentence[i]] = [i];
    }
  } 
}
  return result;
 
};


console.log(letterPositions(("lighthouse in the house")));


// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }