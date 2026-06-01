/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Compound Assignment Operators (+=, -=, *=, /=, %=)
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
 *   - Compound Assignment: A shorthand that combines an arithmetic operation with assignment.
 *     - x += 10 is equivalent to x = x + 10.
 *     - x -= 3 is equivalent to x = x - 3.
 *     - x *= 2 is equivalent to x = x * 2.
 *     - x /= 17 is equivalent to x = x / 17.
 *     - x %= 2 is equivalent to x = x % 2.
 * ============================================================
 */

// Compund Operator

let x = 10;
x += 10; // x = x +10;
console.log(x);

x -= 3; //  x =x -3
console.log(x);

x *= 2; // x = x * 2;
console.log(x);

x /= 17;  // x = x/17;
console.log(x);

x %= 2;
console.log(x);

