import { capitalize, reverseString, calculator } from "./exercises.js";

test("1- Capitalize the first letter.", () => {
  expect(capitalize("practice")).toBe("Practice");
});

test("2- Reverse a string.", () => {
  expect(reverseString("Practice")).toBe("ecitcarP");
});

test("3- Calculator object with basic operations",
  () => {
    expect(calculator().sum(4, 4)).toBe(8);
    expect(calculator().subtract(4, 4)).toBe(0);
    expect(calculator().divide(4, 4)).toBe(1);
    expect(calculator().multiply(4, 4)).toBe(16);
  });

  