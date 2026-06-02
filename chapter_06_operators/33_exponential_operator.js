/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Exponential Operator (**)
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Exponentiation (**): Raises the left operand (base) to the power of the right operand (exponent).
 *   - Example: 2 ** 3 evaluates to 8 (2 raised to the power of 3).
 * ============================================================
 */

console.log(2 ** 3);
// 2^3

let x = 10;
let y = 3;
console.log(x ** y);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Exponential Operator (**) in JavaScript.

The exponentiation operator raises the first operand (the base) to the power
of the second operand (the exponent). It is a concise replacement for the
older Math.pow() method and was introduced in ES2016 (ES7).

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: console.log(2 ** 3);
  - 2 is the base, 3 is the exponent.
  - 2 raised to the power of 3 = 2 * 2 * 2 = 8.
  - Output: 8

Step 2: let x = 10; let y = 3;
  - Declares two variables for dynamic calculation.

Step 3: console.log(x ** y);
  - 10 raised to the power of 3 = 10 * 10 * 10 = 1000.
  - Output: 1000

================================================================================
                             KEY CONCEPTS
================================================================================

Exponentiation (**):
  - Computes base^exponent.
  - Equivalent to Math.pow(base, exponent).
  - Supports fractional exponents (e.g., 4 ** 0.5 = 2, which is the square root).

Associativity:
  - ** is right-associative: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512.
  - NOT left-associative like + or *.

================================================================================
                          COMPARISON TABLE
================================================================================

| Expression    | Math.pow Equivalent | Result | Description              |
|---------------|---------------------|--------|--------------------------|
| 2 ** 3        | Math.pow(2, 3)      | 8      | 2 cubed                  |
| 10 ** 3       | Math.pow(10, 3)     | 1000   | 10 cubed                 |
| 4 ** 0.5      | Math.pow(4, 0.5)    | 2      | Square root of 4         |
| 2 ** -1       | Math.pow(2, -1)     | 0.5    | Reciprocal of 2          |
| 2 ** 3 ** 2   | 2 ** (3 ** 2)       | 512    | Right-associative demo   |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Area of a Square:
   let area = side ** 2; // side squared.

2. Volume of a Cube:
   let volume = side ** 3; // side cubed.

3. Compound Interest Calculation:
   let amount = principal * (1 + rate) ** years;

4. Pixel Distance Calculation (Pythagorean theorem):
   let distance = (dx ** 2 + dy ** 2) ** 0.5;

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using ^ instead of **.
  let x = 2 ^ 3; // WRONG: ^ is the bitwise XOR operator, returns 1.
  let x = 2 ** 3; // CORRECT: returns 8.

Mistake 2: Negative base with fractional exponent.
  let x = (-4) ** 0.5; // Returns NaN (not a real number in standard math).
  // Use Math.sqrt() with checks, or handle imaginary numbers separately.

Mistake 3: Forgetting parentheses for negative bases.
  let x = -4 ** 2; // Parsed as -(4 ** 2) = -16.
  let x = (-4) ** 2; // CORRECT: returns 16.

================================================================================
                            KEY TAKEAWAY
================================================================================

The ** operator is the modern, readable way to perform exponentiation in
JavaScript. Remember it is right-associative, and always wrap negative bases
in parentheses to avoid unexpected results.
================================================================================
*/