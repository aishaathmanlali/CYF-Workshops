import { expect, jest, test } from "@jest/globals";

function sum(a, b) {
  return a + b;
}

expect(sum(5, 2)).toBe(7);
