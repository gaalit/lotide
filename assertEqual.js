// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + a + " === " + b);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + a + " !== " + b);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);