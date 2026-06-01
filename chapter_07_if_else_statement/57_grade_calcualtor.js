/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Grade calculator using an if-else-if ladder to map numeric marks to letter grades.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else if / else
 *     Description: Chained conditional keywords that check multiple conditions sequentially.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - >= (greater than or equal to operator)
 *     Description: Compares two values and returns true if the left value is greater than or equal to the right.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true or false.
 *
 * Key Concepts:
 *   - if-else-if Ladder: Evaluates conditions from top to bottom; the first true condition determines the executed block.
 *   - Grade Mapping: Converts continuous numeric data (marks) into discrete categories (A, B, C, D, Fail).
 *   - Threshold Checks: Uses >= operators to define grade boundaries.
 *   - Fallback Handling: The final else block handles all marks below the lowest threshold (fail condition).
 * ============================================================
 */

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}