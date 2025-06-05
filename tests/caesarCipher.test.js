import { caesarCipher } from "../src/caesarCipher.js";

test("shifts lowercase letters", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("wraps around z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifts uppercase letters", () => {
  expect(caesarCipher("ABC", 2)).toBe("CDE");
});

test("ignores punctuation", () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("handles negative shifts", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
});
