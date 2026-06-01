/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Using if-else-if to handle different HTTP/API status codes and print appropriate messages.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else if / else
 *     Description: Conditional keywords that check multiple exclusive conditions.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - === (strict equality operator)
 *     Description: Compares two values for equality without type coercion.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if equal, otherwise false.
 *
 * Key Concepts:
 *   - Status Code Handling: Simulates API response handling by branching on numeric status codes.
 *   - Fallback Handling: The final else block acts as a catch-all for unmatched status codes.
 *   - Exclusive Branching: Only one branch executes, making it suitable for mutually exclusive states.
 * ============================================================
 */

let statusCode = 200;

if (statusCode === 200) {
    console.log("API are working fine!")
} else if (statusCode === 404) {
    console.log("API not found!")
} else {
    console.log("Not status code match!")
}

/*

*/