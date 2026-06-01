/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Logical Operators (&&, ||, !)
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
 *   - Logical AND (&&): Returns true only if both operands are true.
 *   - Logical OR (||): Returns true if at least one operand is true.
 *   - Logical NOT (!): Inverts the boolean value of the operand.
 *   - Inequality (!=): Checks if two values are not equal (loose inequality).
 * ============================================================
 */

// && -> AND Gate
// || -> OR Gate

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // Not

console.log(5 != "g");  // Value 5, g ! that true, 