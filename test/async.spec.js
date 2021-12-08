const { assert } = require("chai");
const fn = require("../src/async");

suite("async", () => {
  test("it should return something", (done) => {
    fn(() => {
      assert.ok(1);
      done();
    });
  });
});
