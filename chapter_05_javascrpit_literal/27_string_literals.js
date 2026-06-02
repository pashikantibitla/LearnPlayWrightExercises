/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: String literals in JavaScript using single quotes and double quotes, and understanding the string data type.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs the specified value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - typeof operand: string
 *     Description: Unary operator that returns a string indicating the data type of the operand.
 *     Input: Accepts any variable, value, or expression as its operand.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 *
 * Key Concepts:
 *   - Single-quoted string: A string literal enclosed in single quotes (e.g., 'lovely morning').
 *   - Double-quoted string: A string literal enclosed in double quotes (e.g., "good morning").
 *   - Quote nesting: You can include double quotes inside a single-quoted string and vice versa without escaping.
 *   - typeof string: Returns "string" for all string literals, including single characters.
 * ============================================================
 */

// single quotes 
let a = 'lovely morning';
let ui = 'hi, "mounika"';
console.log(ui);

//double quotes
let b = "good mornig";
let uo = "nice to meet you 'mounika'";
console.log(uo);
console.log(typeof b, typeof uo);
console.log(typeof a, typeof ui);


// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";


let c = 'c';
let c1 = 'cc';
console.log(typeof c);
console.log(typeof c1);
console.log(typeof double);

// 'JavaScript prefers to use single code. '

/*
=====================================
DETAILED EXPLANATION
=====================================
This file explores string literals in JavaScript using single quotes and double quotes.
Both quote styles are functionally identical — they create the same string primitive.
The file also demonstrates quote nesting, where you can include one quote type inside the other without escaping.

CODE BREAKDOWN
=====================================
1. let a = 'lovely morning';
   - Single-quoted string literal.
2. let ui = 'hi, "mounika"';
   - Single quotes containing double quotes without escaping.
3. let b = "good mornig";
   - Double-quoted string literal.
4. let uo = "nice to meet you 'mounika'";
   - Double quotes containing single quotes without escaping.
5. typeof checks on c, c1, and double
   - Single character and multiple characters are both type "string".

KEY CONCEPTS
=====================================
- Single-Quoted String: Enclosed in '' (apostrophes).
- Double-Quoted String: Enclosed in "" (quotation marks).
- Quote Nesting: You can include double quotes inside single-quoted strings and vice versa.
- typeof string: Returns "string" for all string literals regardless of length.

COMPARISON TABLE: Single Quotes vs Double Quotes
=====================================
| Feature              | Single Quotes ('')      | Double Quotes ("")       |
|----------------------|-------------------------|--------------------------|
| String creation      | Yes                     | Yes                      |
| Can contain double   | Yes (without escaping)  | Yes (must escape)        |
| Can contain single     | Yes (must escape)       | Yes (without escaping)   |
| Preferred by style   | Some teams (Airbnb)     | Some teams (Google)      |

REAL-WORLD USE CASES
=====================================
- HTML attributes often use double quotes, so JS strings with HTML may prefer single quotes.
- JSON requires double quotes for keys and string values.
- Writing UI labels, error messages, and test descriptions.

COMMON MISTAKES
=====================================
- Mismatched quotes (starting with single and ending with double).
- Escaping unnecessarily when the other quote type would suffice.
- Thinking single and double quotes produce different types or behaviors.

KEY TAKEAWAY
=====================================
Choose one quote style and stick to it for consistency. Both create identical string primitives. Use the style that minimizes escaping in your specific context.
*/