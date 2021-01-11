const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)  ", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});



// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(tail(words.length, 3)); // original array should still have 3 elements!
// assertEqual(tail(words[0], "Lighthouse")); // ensure first element is "Lighthouse"
// assertEqual(words[1], "Labs"); // ensure second element is "Labs"
