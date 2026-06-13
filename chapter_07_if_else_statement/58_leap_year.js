/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Determining whether a given year is a leap year using logical and arithmetic operators.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else
 *     Description: Conditional keywords that execute blocks based on a boolean expression.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - % (modulo operator)
 *     Description: Returns the remainder of a division; used here to test divisibility.
 *     Input: Accepts two numeric operands (direct values, variables, or expressions).
 *     Return Type: number — returns the remainder of the division.
 *   - === (strict equality operator)
 *     Description: Compares two values for equality without type coercion.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if equal, otherwise false.
 *   - !== (strict inequality operator)
 *     Description: Compares two values and returns true if they are not equal.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if not equal, otherwise false.
 *   - && (logical AND operator)
 *     Description: Returns true only if both operands are true.
 *     Input: Accepts two operands (direct values, variables, or expressions) to combine.
 *     Return Type: boolean — returns true if both operands are truthy, otherwise false.
 *   - || (logical OR operator)
 *     Description: Returns true if at least one operand is true.
 *     Input: Accepts two operands (direct values, variables, or expressions) to combine.
 *     Return Type: boolean — returns true if at least one operand is truthy, otherwise false.
 *   - + (string concatenation operator)
 *     Description: Combines strings and values to form a complete message.
 *     Input: Accepts two operands (direct values, variables, or expressions) to concatenate or add.
 *     Return Type: string or number — returns the concatenated string if either operand is a string, otherwise the numeric sum.
 *
 * Key Concepts:
 *   - Leap Year Rules: A year is a leap year if divisible by 4 but not by 100, OR if divisible by 400.
 *   - Divisibility Test: Using modulo (%) to check if a number divides evenly by another.
 *   - Complex Boolean Logic: Combining && and || to encode multi-rule conditions in a single expression.
 *   - Order of Operations: Parentheses are used to group conditions and ensure correct logical evaluation.
 * ============================================================
 */

// Leap Year Check

Rules:

// Divisible by 4 AND not divisible by 100 → Leap year
// OR divisible by 400 → Leap year
// Else → Not a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script calculates whether a given year is a leap year. It encodes the Gregorian
calendar rules into a single boolean expression using modulo, logical AND, and logical OR.

CODE BREAKDOWN:
1. let year = 2024;                                          — Year to test.
2. if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { ... }
   — Rule 1: Divisible by 4 but NOT by 100.
   — Rule 2: OR divisible by 400.
3. console.log(year + " is a Leap Year")                      — True branch.
4. else { console.log(year + " is NOT a Leap Year") }         — False branch.

KEY CONCEPTS:
• Divisibility Test: year % N === 0 means N divides year evenly.
• Logical AND && : Both sub-conditions must be true.
• Logical OR || : At least one sub-condition must be true.
• Parentheses: Control evaluation order in complex expressions.

COMPARISON TABLE — Leap Year Rules:
| Condition                         | Result     |
|-----------------------------------|------------|
| Divisible by 4 AND not by 100     | Leap Year  |
| Divisible by 400                  | Leap Year  |
| Divisible by 100 but not by 400   | Not Leap   |
| All other years                   | Not Leap   |

REAL-WORLD USE CASES:
• Calendar applications (February 29 handling).
• Scheduling systems that depend on day-of-year counts.
• Date-validation in forms.

COMMON MISTAKES:
• Forgetting the year % 100 !== 0 part, causing century years like 1900 to be marked leap.
• Using a single | or & (bitwise) instead of || and &&.
• Misplacing parentheses, altering the logic precedence.

KEY TAKEAWAY:
Break complex rules into small boolean expressions and group them with parentheses.
Test edge cases like 1900, 2000, and 2024 to ensure correctness.
================================================================================
*/
