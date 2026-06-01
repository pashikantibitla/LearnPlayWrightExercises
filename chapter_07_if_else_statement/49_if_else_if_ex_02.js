/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Using an if-else-if ladder to determine a letter grade from a numeric score.
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
 *   - if-else-if Ladder: Allows checking multiple conditions in sequence; only the first matching block executes.
 *   - Grade Mapping: Demonstrates mapping numeric ranges to categorical outputs (A, B, C, D, F).
 *   - Sequential Evaluation: Conditions are checked top-to-bottom, so order matters.
 * ============================================================
 */

let score = 78;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F- Fail");
    console.log("Rewartch all videoa nd give the test again");
}