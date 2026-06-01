/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Different techniques to create arrays in JavaScript.
 * 
 * Functions/Methods Used:
 *   - Array(length: number): Array
 *     Description: Constructor that creates an array of the given length when a single numeric argument is passed.
 *     Input: Accepts a single number as a direct value or variable to set the array length.
 *     Return Type: Array — a new array with the specified length.
 *   - Array.of(...elements: any[]): Array
 *     Description: Creates a new array from a variable number of arguments, regardless of type (avoids single-number length ambiguity).
 *     Input: Accepts any number of arguments of any type as direct values, variables, or expressions.
 *     Return Type: Array — a new array containing the provided elements.
 *   - Array.from(iterable: iterable): Array
 *     Description: Creates a shallow-copy array from an iterable object (e.g., a string is split into individual characters).
 *     Input: Accepts an iterable object (like a string or another array) as a direct value or variable.
 *     Return Type: Array — a new array created from the iterable's items.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Array literal []: The preferred and concise way to create arrays.
 *   - new Array() behavior: Single number argument sets length, not the value.
 *   - Array.of: Safer alternative to constructor for creating arrays with numbers.
 *   - Array.from: Useful for converting iterables (like strings) into arrays.
 * ============================================================
 */

// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(3);// here the 3 is length
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
let scores2 = new Array(1, 2, 3);
console.log(scores);
console.log(scores2);

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);

// let numbers1 = Array.from("123456789");
// console.log(numbers1);
