/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Post-Increment Operation (variable++)
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Post-Increment (a++): Returns the original value of the variable before incrementing.
 *   - Example: let result = a++; assigns 34 to result, then increments a to 35.
 *   - Observation: console.log(result) prints 34, while console.log(a) prints 35.
 * ============================================================
 */

let a = 34;
let result = a++;
console.log(result);
console.log(a); 