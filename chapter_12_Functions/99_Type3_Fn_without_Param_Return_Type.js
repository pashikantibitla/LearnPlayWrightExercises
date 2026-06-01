/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-3 Function — no parameters, but has a return value.
 *
 * Functions/Methods Used:
 *   - goToRelativeHouse(): string
 *     Description: A user-defined function that prints a message and returns a greeting string.
 *     Input: No input parameters (empty parentheses).
 *     Return Type: string — the function explicitly returns the string literal "Hello".
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-3 Function: A function that takes no input but returns a value using the `return` keyword.
 *   - return Keyword: Stops function execution and passes the specified value back to the caller.
 *   - Return Type: Determined by the expression following `return`; here it is `string`.
 * ============================================================
 */

function goToRelativeHouse() {
    console.log('Hi');
    return "Hello";
}


let relative = goToRelativeHouse();
console.log(relative);