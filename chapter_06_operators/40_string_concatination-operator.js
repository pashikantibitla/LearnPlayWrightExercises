/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: String Concatenation using += Operator
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - += (Compound Assignment Operator)
 *     Description: Appends the right-hand value to the left-hand variable and assigns the result back to the variable.
 *     Input: Accepts a left-hand variable and a right-hand value as a direct value, variable, or expression.
 *     Return Type: Returns the new assigned value after the operation.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - String Concatenation: The += operator can be used to combine strings by appending one string to another.
 *   - Example: s += " Dev" appends " Dev" to the existing value of s, resulting in "Hi Dev".
 * ============================================================
 */

let s = "Hi";
s += " Dev";
console.log(s);