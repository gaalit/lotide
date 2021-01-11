const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("returns false for [1, 2, 3] , [1, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 4]), false);
  });
  it("returns true for [1, 2, 3] , [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for [1, 2, 3] , [1, 2, 3, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it("returns false for [1, 2, 3] , [1, 3, 2]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 2]), false);
  });
  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});
