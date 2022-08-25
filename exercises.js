//Write tests for the following, and then make the tests pass!

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

//4- A caesarCipher function that takes a string and returns it with each character “shifted”.
export function caesarCipher(string, offset) {
  let shiftedString = "";
  let re = /[a-z]/;
  for (let i = 0; i < string.length; i++) {
    if (re.test(string.charAt(i)))
      shiftedString += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + offset) % 26) + 97
      );
    else shiftedString += string.charAt(i);
  }
  return shiftedString;
}

/*5- An analyzeArray function that takes an array of numbers and returns an object
with the following properties: average, min, max, and length.*/
export const analyzeArray = () => {
  const average = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      sum += element;
    }
    return sum / array.length;
  };

  const min = (array) => {
    let arraySorted = array.sort((a, b) => a - b);
    return arraySorted[0];
  };

  const max = (array) => {
    let arraySorted = array.sort((a, b) => a - b);
    return arraySorted[arraySorted.length - 1];
  };

  const length = (array) => {
    return array.length;
  };

  return { average, min, max, length };
};
