import { reverseString } from "../src/reverse.js";

test("hello should be olleh", ()=>{
    expect(reverseString("hello")).toBe("olleh");
})