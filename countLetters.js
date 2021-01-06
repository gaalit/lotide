// const assertEqual = function(actual, expected) {
//   let a = actual;
//   let b = expected;
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`);
//   }
// };

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countLetters = function(letters) {
  letters = letters.replace(/\s/g, '');
  let resultObj = {};
  for(const letter of letters) {
    if (resultObj[letter]) {         // if that letter is already inside the Object--> add 1 to it
      resultObj[letter] += 1;
    } else {                          // if that letter isin't there yet ==> will equal 1
      resultObj[letter] = 1;
    }
    }
  return resultObj;
}

console.log(countLetters("lighthouse in the house"))

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }