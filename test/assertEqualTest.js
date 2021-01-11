const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs', 'Bootcamp'", () => {
    assert.strictEqual(assertEqual('Lighthouse Labs', 'Bootcamp'));
  });
});





