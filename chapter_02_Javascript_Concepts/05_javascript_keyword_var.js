/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Declaration and reassignment of variables using the
 *        var keyword in JavaScript.
 *
 * Functions/Methods Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - var keyword
 *     Description: Declares a function-scoped or globally-scoped variable.
 *     Input: Takes a variable name and an optional initial value, provided directly in a declaration statement.
 *     Return Type: undefined — the declaration statement itself does not evaluate to a value.
 *   - Variable declaration
 *     Description: Creates a named variable and optionally initializes it with a value.
 *     Input: Takes a variable name and an optional assignment with a value (direct literal, variable, or expression).
 *     Return Type: undefined — the declaration statement does not return a value.
 *   - Variable reassignment
 *     Description: Updates the value of an existing variable without re-declaring it.
 *     Input: Takes a variable name on the left and a new value (direct literal, variable, or expression) on the right.
 *     Return Type: Returns the assigned value after the update.
 *   - Primitive values
 *     Description: Immutable basic data types such as numbers, strings, booleans, etc.
 *     Input: Provided directly as literals (e.g., 10, 12) or via variables/expressions.
 *     Return Type: The literal value itself (e.g., number, string, boolean).
 * ============================================================
 */

var v = 10;
console.log(v);

v = 12;