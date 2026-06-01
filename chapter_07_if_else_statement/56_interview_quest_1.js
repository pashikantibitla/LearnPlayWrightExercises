/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Demonstrates that an if statement can execute a single statement without curly braces.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if
 *     Description: Conditional keyword that executes the next statement if the condition is true.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keyword; does not return a value).
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
 *   - Single-Line if Statement: JavaScript allows omitting curly braces {} when the if body contains only one statement.
 *   - Best Practice Note: While valid, omitting braces can lead to bugs during maintenance; braces are recommended for clarity.
 *   - Interview Relevance: Tests understanding of valid JavaScript syntax and statement blocks.
 * ============================================================
 */

let x = 10;
if (x > 5)
    console.log("x is big");