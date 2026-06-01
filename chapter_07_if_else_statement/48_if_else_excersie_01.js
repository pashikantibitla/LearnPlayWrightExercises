/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Basic if-else statement to check voting eligibility based on age.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else
 *     Description: Conditional keywords that execute code blocks based on a boolean condition.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - > (greater than operator)
 *     Description: Compares two values and returns true if the left value is greater than the right.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true or false.
 *
 * Key Concepts:
 *   - Conditional Statements: Using if-else to make decisions in code.
 *   - Comparison Operators: The > operator checks if age is greater than 18.
 *   - Boolean Evaluation: The condition inside if evaluates to true or false.
 * ============================================================
 */

let age = 20;

if (age > 18) {
    console.log("You are allowed to vote!")
} else {
    console.log("You are not allowed  to vote!")
}