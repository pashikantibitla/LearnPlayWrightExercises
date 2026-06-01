/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Comparison of single quotes, double quotes, and backticks (template literals) in JavaScript, including multi-line strings and expression interpolation.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs the specified value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable name and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void — does not return a value; it binds the identifier to the value in the current scope.
 *
 * Key Concepts:
 *   - Single-quoted string: A plain string literal enclosed in single quotes (e.g., 'Hello World'); no variable interpolation is allowed.
 *   - Double-quoted string: A plain string literal enclosed in double quotes (e.g., "Hello World"); behavior is identical to single quotes.
 *   - Backtick / Template literal: A string literal enclosed in backticks (`) that supports variable interpolation (${var}) and multi-line text.
 *   - String concatenation (old way): Combining strings and variables using the + operator, which is more verbose and harder to read than template literals.
 *   - Expression inside ${}: Any valid JavaScript expression can be evaluated and embedded directly within a template literal.
 *   - Multi-line string: Template literals preserve line breaks and indentation within the backticks, making them ideal for formatted text.
 * ============================================================
 */

// ============================================================
// Topic: Single Quote vs Double Quote vs Backtick in JS
// File: 29_Backtick_single_double.js
// ============================================================

/*
  ONE SIMPLE EXPLANATION:

  Single ('') and Double ("") quotes are almost the same — both create simple strings.
  Backticks (``) are special — they allow variables inside (${}) and multi-line text.

  Think of it like this:
  - '' or "" -> Plain text
  - ``       -> Smart text (can inject values & line breaks)
*/


// --------------------------------------------------------
// 1. Single Quotes
// --------------------------------------------------------
let single = 'Hello World';
console.log("Single Quote:", single);


// --------------------------------------------------------
// 2. Double Quotes
// --------------------------------------------------------
let double = "Hello World";
console.log("Double Quote:", double);

// NOTE: Single and Double are identical in behavior.
// Use whichever you prefer, just be consistent.


// --------------------------------------------------------
// 3. Backticks (Template Literals)
// --------------------------------------------------------
let name = "Harish";
let age = 25;

// Variable interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Backtick with variable:", greeting);

// Multi-line string
let multiLine = `
  Line 1
  Line 2
  Line 3
`;
console.log("Backtick multi-line:", multiLine);

// Expression inside ${}
let sum = `10 + 20 = ${10 + 20}`;
console.log("Backtick expression:", sum);


// --------------------------------------------------------
// 4. Quick Comparison
// --------------------------------------------------------

/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/


// --------------------------------------------------------
// 5. Real Example
// --------------------------------------------------------

let product = "Laptop";
let price = 50000;

// Old way (using + to combine)
let oldWay = "The " + product + " costs " + price + " rupees.";

// New way (using backticks)
let newWay = `The ${product} costs ${price} rupees.`;

console.log("Old way:", oldWay);
console.log("New way:", newWay);


// ============================================================
// END
// ============================================================