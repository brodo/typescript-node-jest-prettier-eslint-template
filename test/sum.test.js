"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/sum");
const node_assert_1 = require("node:assert");
test("adds 1 + 2 to equal 3", () => {
    node_assert_1.strict.equal((0, sum_1.sum)(1, 2), 3);
});
