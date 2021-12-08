const { assert } = require("chai");
const fn = require("../src/sync");

suite("sync", () => {
  test("it should return something", () => {
    assert.match(fn(), /sync/);
  });
});
