import { assert } from "chai";
import { Example } from "./example";

suite("Example", () => {
  let o: Example;

  setup(() => {
    o = new Example();
  });

  test("sync", () => {
    assert.equal(o.sync(), "sync");
  });

  test("asyncCallback", (done) => {
    o.asyncCallback((value) => {
      assert.equal(value, "asyncCallback");
      done();
    });
  });

  test("asyncPromise", async () => {
    const value = await o.asyncPromise();
    assert.equal(value, "asyncPromise");
  });
});
