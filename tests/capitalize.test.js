import { capitalize } from "../src/capitalize.js";

test('hello should turn into Hello', ()=>{
    expect(capitalize("hello")).toBe("Hello");
})