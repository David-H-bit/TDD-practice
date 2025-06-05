import { calculate } from "../src/calculate.js";

test("adds 2 + 3 to equal 5", () => {
    expect(calculate(2, 3, "+")).toBe(5);
});

test("subtracts 5 - 2 to equal 3", () => {
    expect(calculate(5, 2, "-")).toBe(3);
});

test("multiplies 4 * 3 to equal 12", () => {
    expect(calculate(4, 3, "*")).toBe(12);
});

test("divides 10 / 2 to equal 5", () => {
    expect(calculate(10, 2, "/")).toBe(5);
});

test("throws error for invalid operator", () => {
    expect(() => calculate(1, 2, "%")).toThrow("Invalid operator");
});
