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

/*
============================================================
DETAILED EXPLANATION
============================================================

This file explores the different ways to create arrays in JavaScript.
While the literal syntax [] is the most common, understanding the
Array constructor, Array.of(), and Array.from() helps you handle
edge cases and convert data from other formats.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let browsers = ["Chrome", "Firefox", "Safari"];
        The standard, preferred way: an array literal.
        Clean, readable, and unambiguous.

Step 2: let scores = new Array(3);
        Calls the Array constructor with ONE numeric argument.
        WARNING: This does NOT create [3]; it creates an empty array
        with length 3 (three empty slots).
        We then manually assign scores[0], scores[1], scores[2].

Step 3: let scores2 = new Array(1, 2, 3);
        Calls the Array constructor with MULTIPLE arguments.
        This creates the array [1, 2, 3].
        The behavior differs based on argument count and type!

Step 4: let numbers = new Array(100, 200, 300, 400);
        Another multi-argument constructor call creating [100,200,300,400].

Step 5: let test = Array.of(10, 20, 30, 40, 50);
        Array.of() is safer because it always treats arguments as elements,
        even if you pass a single number.
        Array.of(3) creates [3], whereas new Array(3) creates an empty
        array of length 3.

Step 6: let chars = Array.from("hello");
        Array.from() converts an iterable (like a string) into an array.
        "hello" is split into individual characters: ["h", "e", "l", "l", "o"].
        This is extremely useful for converting NodeLists, Sets, and Maps.

============================================================
KEY CONCEPTS (Plain English)
============================================================

Array Literal []:
  The "just do it" method. Always works, always clear, zero surprises.

new Array() Constructor Ambiguity:
  A single number creates empty slots; multiple numbers become values.
  This inconsistency is why many developers avoid the constructor.

Array.of():
  The "safe constructor." Every argument becomes an array element,
  no matter what type or how many.

Array.from():
  The "converter." Turns anything iterable into a real array so you
  can use array methods like .map() and .filter().

============================================================
COMPARISON TABLE: Array Creation Methods
============================================================

| Method           | Syntax                    | Result with (5)    | Mutates? | Best For               |
|------------------|---------------------------|--------------------|----------|------------------------|
| Literal []       | [1, 2, 3]                 | N/A                | N/A      | Everyday use           |
| new Array()      | new Array(3)              | Empty, length 3    | N/A      | Rarely recommended     |
| Array.of()       | Array.of(3)               | [3]                | N/A      | Safe numeric creation  |
| Array.from()     | Array.from("abc")         | ["a","b","c"]      | N/A      | Converting iterables   |

============================================================
REAL-WORLD USE CASES
============================================================

- Array.from(document.querySelectorAll('div')) converts a NodeList
  into a real array so you can call .forEach() reliably across browsers.
- Array.of(7) guarantees a single-element array when dynamically
  generating test data where the value happens to be numeric.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. new Array(5) expecting [5]:
   This is the #1 pitfall. You get an array with 5 empty slots.
   Use Array.of(5) or [5] instead.

2. Using Array.from on non-iterables:
   Passing a plain object to Array.from() throws a TypeError
   because objects are not iterable by default.

3. Ignoring empty slots:
   Empty slots behave differently from undefined values in some
   array methods (e.g., .map() may skip empty slots).

============================================================
KEY TAKEAWAY
============================================================

Prefer the literal [] for clarity. Use Array.of() when you need a
constructor-like behavior without ambiguity, and use Array.from()
when converting iterables (strings, NodeLists, Sets) into true arrays.
*/
