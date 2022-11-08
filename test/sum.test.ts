import { sum } from "../src/sum";
import { strict as assert } from "node:assert";

test("adds 1 + 2 to equal 3", () => {
  assert.equal(sum(1, 2), 3);
});
