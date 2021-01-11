const tail = require("../tail");




// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(words[1], "Labs"); // ensure second element is "Labs"

console.log(tail([1,2,3,4])); // [2,3,4]