import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./exercises.js";

test("1- Capitalize the first letter.", () => {
  expect(capitalize("practice")).toBe("Practice");
});

test("2- Reverse a string.", () => {
  expect(reverseString("Practice")).toBe("ecitcarP");
});

test("3- Calculator object with basic operations.", () => {
  expect(calculator().sum(4, 4)).toBe(8);
  expect(calculator().subtract(4, 4)).toBe(0);
  expect(calculator().divide(4, 4)).toBe(1);
  expect(calculator().multiply(4, 4)).toBe(16);
});

test("4- Caesar cipher a string by an offset.", () => {
  expect(caesarCipher("practice is secret", 3)).toBe("sudfwlfh lv vhfuhw");
});

test("5- An analyze Array object with average, min, max and length for the array.",()=>{
    expect(analyzeArray().average([1,2,3,4,5,6,7,8,9])).toBe(5);
    expect(analyzeArray().min([5,2,3,4,1,6,7,8,9])).toBe(1);
    expect(analyzeArray().max([1,2,3,4,9,6,7,8,5])).toBe(9);
    expect(analyzeArray().length([1,2,3,4,5,6,7,8,9])).toBe(9);
});
