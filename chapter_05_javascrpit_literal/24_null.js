/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Number literals in JavaScript, including positive integers, negative integers, zero, and hexadecimal notation.
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
 *   - Integer literal: A whole number without a fractional component (e.g., 100, -100, 0).
 *   - Hexadecimal literal: A number prefixed with 0x or 0X, representing a base-16 value (e.g., 0xff, 0xFF0000).
 *   - typeof number: In JavaScript, all numeric literals (including hex) are of type "number".
 * ============================================================
 */

let positive = 100;
let negative = -100;
let zero = 0; 
let c = 0xff;
let hexical = 0xFF0000;

console.log(typeof positive);
comsole.log(typeof negative);
console.log(typeof zero);
console.log(typeof c );

/*
=====================================
DETAILED EXPLANATION
=====================================
This file focuses on number literals in JavaScript, including positive integers,
negative integers, zero, and hexadecimal notation.
All numeric literals in JavaScript share the same type: "number".
Hexadecimal values are commonly used for color codes and bitwise operations.

CODE BREAKDOWN
=====================================
1. let positive = 100;
   - Positive integer literal.
2. let negative = -100;
   - Negative integer literal.
3. let zero = 0;
   - Zero literal.
4. let c = 0xff;
   - Hexadecimal literal for 255.
5. let hexical = 0xFF0000;
   - Hexadecimal literal for 16711680 (pure red in RGB).
6. console.log(typeof ...)
   - Confirms all values are of type "number".

KEY CONCEPTS
=====================================
- Integer Literal: A whole number without a fractional component.
- Hexadecimal Literal: A number prefixed with 0x or 0X, representing base-16.
- typeof number: In JavaScript, all numeric literals are of type "number".

COMPARISON TABLE: Number Literal Formats
=====================================
| Format       | Prefix | Example     | Decimal Value | Common Use       |
|--------------|--------|-------------|---------------|------------------|
| Decimal      | None   | 100         | 100           | General counting |
| Negative     | -      | -100        | -100          | Temperatures, balances |
| Hexadecimal  | 0x     | 0xff        | 255           | Colors, memory   |

REAL-WORLD USE CASES
=====================================
- Representing RGB color values in web development (e.g., 0xFF0000 for red).
- Calculating memory addresses and bitwise flags.
- Financial calculations, coordinate systems, and inventory counts.

COMMON MISTAKES
=====================================
- Thinking hexadecimal numbers are a different type (they are still "number").
- Typing comsole.log instead of console.log (causes ReferenceError).
- Confusing 0x prefix with 0o (octal) or 0b (binary) prefixes.

KEY TAKEAWAY
=====================================
JavaScript has one number type. Hexadecimal is just another way to write numbers, commonly used for colors and low-level programming tasks.
*/