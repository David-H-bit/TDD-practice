import { analyzeArray } from "../src/analyze.js";

test("analyzes a basic array", () => {
  const result = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(result.average).toBe(4);
  expect(result.min).toBe(1);
  expect(result.max).toBe(8);
  expect(result.length).toBe(6);
});
