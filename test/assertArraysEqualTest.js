const assert = require('chai').assert;
const assertArraysEqual= require("../assertArraysEqual");

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] , [1, 2, 3]", () => {
    assert.deepEqual(["1", "2", "3"], ["1", "2", "3"]);
  });
});