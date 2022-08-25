/*Write tests for the following, and then make the tests pass!

4- A caesarCipher function that takes a string and returns it with each character “shifted”.
5- An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.*/

//1- A capitalize function that takes a string and returns it with the first character capitalized.
export function capitalize(string) {
  let firstLetter = string[0];
  firstLetter = firstLetter.toUpperCase();
  string = string.substring(1);
  string = firstLetter.concat(string);
  return string;
}

//2- A reverseString function that takes a string and returns it reversed.
export function reverseString(string) {
  let array = Array.from(string);
  array = array.reverse();
  string = array.toString();
  string = string.replaceAll(",", "");
  return string;
}

/*3- A calculator object that contains functions for the basic operations: add, subtract,
divide, and multiply. Each of these functions should take two numbers and return the correct
calculation.*/
export const calculator = () => {
  const sum = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const divide = (a, b) => {
    return a / b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  return { sum, subtract, divide, multiply };
};
