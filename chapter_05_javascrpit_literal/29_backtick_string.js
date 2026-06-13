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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file compares single quotes, double quotes, and backticks (template literals) in JavaScript.
Single and double quotes are functionally identical for simple static strings.
Backticks are special: they enable variable interpolation, expression evaluation, and multi-line text.
The file also contrasts the old concatenation style with the modern template literal approach.

CODE BREAKDOWN
=====================================
1. let single = 'Hello World'; and let double = "Hello World";
   - Both produce the same simple static string.
2. let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
   - Backtick string with variable interpolation.
3. let multiLine = `Line 1\n  Line 2\n  Line 3`;
   - Multi-line string using backticks without explicit \n or concatenation.
4. let sum = `10 + 20 = ${10 + 20}`;
   - Expression evaluation directly inside the string.
5. Old way vs New way product/price example:
   - Demonstrates how backticks eliminate messy + concatenation.

KEY CONCEPTS
=====================================
- Single-Quoted String: Plain string literal; no interpolation allowed.
- Double-Quoted String: Plain string literal; behavior identical to single quotes.
- Backtick / Template Literal: Supports ${var}, ${expression}, and multi-line text.
- String Concatenation (old way): Combining strings with + operator; verbose and error-prone.
- Expression Inside ${}: Any valid JavaScript expression can be embedded in a template literal.

COMPARISON TABLE: Quotes vs Backticks
=====================================
| Feature              |  '' or ""  |  ``                        |
|----------------------|------------|----------------------------|
| Simple text          |     Yes    |   Yes                      |
| Variable injection   |     No     |   Yes -> ${var}            |
| Multi-line           |     No     |   Yes (preserves newlines) |
| Expression inside    |     No     |   Yes -> ${a + b}          |
| Readability          | Good       | Better for dynamic strings |

REAL-WORLD USE CASES
=====================================
- Email templates with personalized names and dates (template literals).
- Dynamic SQL queries with injected table names or filters.
- HTML generation with embedded class names and content.
- Log messages that include status, duration, and timestamps.
- Configuration strings that combine environment names and hostnames.

COMMON MISTAKES
=====================================
- Using + concatenation when template literals would be cleaner and safer.
- Trying to interpolate variables inside regular quotes (results in literal ${var}).
- Losing indentation control in multi-line template literals.
- Forgetting that backticks inside template literals must be escaped.

KEY TAKEAWAY
=====================================
Use backticks for any string that needs variables, expressions, or multiple lines. Use regular quotes for simple, static strings. Modern JavaScript favors template literals for readability and maintainability.
*/