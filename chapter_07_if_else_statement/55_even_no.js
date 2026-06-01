/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Checking whether a number is even or odd using the modulo operator in an if-else statement.
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
 *     Description: Returns the remainder of a division; num % 2 === 0 means the number is evenly divisible by 2.
 *     Input: Accepts two numeric operands (direct values, variables, or expressions).
 *     Return Type: number — returns the remainder of the division.
 *   - === (strict equality operator)
 *     Description: Compares two values for equality without type coercion.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if equal, otherwise false.
 *   - + (string concatenation operator)
 *     Description: Combines strings and values to form a complete message.
 *     Input: Accepts two operands (direct values, variables, or expressions) to concatenate or add.
 *     Return Type: string or number — returns the concatenated string if either operand is a string, otherwise the numeric sum.
 *
 * Key Concepts:
 *   - Even/Odd Logic: A number is even if dividing it by 2 yields a remainder of 0; otherwise it is odd.
 *   - Modulo Operator: Fundamental arithmetic operator for remainder-based checks and cyclic logic.
 *   - Conditional Branching: Demonstrates binary decision making (two mutually exclusive outcomes).
 * ============================================================
 */

let num = 7;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}