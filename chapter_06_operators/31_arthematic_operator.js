/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Arithmetic Operators (+, -, *, /)
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
 *   - Addition (+): Returns the sum of two numbers.
 *   - Subtraction (-): Returns the difference between two numbers.
 *   - Multiplication (*): Returns the product of two numbers.
 *   - Division (/): Returns the quotient of two numbers (may produce a floating-point result).
 *   - Multiple Variable Declaration: let a = 10, b = 3; declares multiple variables in one statement.
 * ============================================================
 */

// Arithmetic Operators

let a = 10, b = 3;
console.log(a);
console.log(b);

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the four basic Arithmetic Operators in JavaScript:
Addition (+), Subtraction (-), Multiplication (*), and Division (/).

These operators perform mathematical calculations on numeric operands and
return the result, which can then be stored in variables or used directly.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let a = 10, b = 3;
  - Declares two variables, a and b, in a single statement.
  - a is initialized to 10; b is initialized to 3.

Step 2: console.log(a); console.log(b);
  - Prints the raw values of a and b to verify initialization.

Step 3: let sum = a + b;
  - The + operator adds 10 and 3, producing 13.
  - The result (13) is assigned to the variable sum.

Step 4: let sub = a - b;
  - The - operator subtracts 3 from 10, producing 7.
  - The result (7) is assigned to the variable sub.

Step 5: let mul = a * b;
  - The * operator multiplies 10 by 3, producing 30.
  - The result (30) is assigned to the variable mul.

Step 6: let div = a / b;
  - The / operator divides 10 by 3, producing 3.3333... (a floating-point number).
  - JavaScript does NOT have integer division by default; it returns decimals.
  - The result is assigned to the variable div.

Step 7: console.log(sum); console.log(sub); console.log(mul); console.log(div);
  - Prints all four calculated results.

================================================================================
                             KEY CONCEPTS
================================================================================

Addition (+):
  - Adds two numbers. If used with strings, it performs concatenation instead.

Subtraction (-):
  - Finds the difference between two numbers. Always returns a number.

Multiplication (*):
  - Returns the product of two numbers.

Division (/):
  - Returns the quotient. In JavaScript, division of integers can yield a float.

Multiple Variable Declaration:
  - You can declare multiple variables separated by commas in one let statement.

================================================================================
                          COMPARISON TABLE
================================================================================

| Operator | Name           | Example      | Result | Notes                        |
|----------|----------------|--------------|--------|------------------------------|
| +        | Addition       | 10 + 3       | 13     | Also used for string concat  |
| -        | Subtraction    | 10 - 3       | 7      | Always numeric               |
| *        | Multiplication | 10 * 3       | 30     | Always numeric               |
| /        | Division       | 10 / 3       | 3.333  | Returns float, not integer   |
| %        | Modulus        | 10 % 3       | 1      | Remainder of division        |
| **       | Exponentiation | 2 ** 3       | 8      | 2 raised to power 3          |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Shopping Cart Total:
   let total = price * quantity; // calculates total cost.

2. Temperature Conversion:
   let fahrenheit = (celsius * 9/5) + 32; // formula using +, *, /.

3. Game Physics:
   let newPosition = currentPosition + (velocity * time); // motion calculation.

4. Financial Interest:
   let interest = principal * rate * time / 100; // simple interest formula.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Expecting integer division.
  let result = 5 / 2; // Returns 2.5, NOT 2.
  // Use Math.floor(5 / 2) if you need an integer result.

Mistake 2: Using + with mixed types.
  let x = "5" + 3; // Returns "53" (string concatenation), NOT 8.
  // Use parseInt() or Number() to convert strings to numbers first.

Mistake 3: Division by zero.
  let result = 10 / 0; // Returns Infinity, NOT an error.
  // Always validate denominators in critical calculations.

================================================================================
                            KEY TAKEAWAY
================================================================================

JavaScript arithmetic operators work like standard math, but remember:
- Division always returns a float (use Math functions for integers).
- The + operator switches to string concatenation if either operand is a string.
================================================================================
*/
