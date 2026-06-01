/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Modulus Operator (%)
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
 *   - Modulus (%): Returns the remainder of the division of the left operand by the right operand.
 *   - Even/Odd Check: n % 2 === 0 indicates an even number; n % 2 === 1 indicates an odd number.
 * ============================================================
 */

// % = Modulus
// a%b -> it will return the remainder


let result = 13 % 7;
console.log(result);


console.log(101 % 2);
console.log(100 % 2);
console.log(37 % 2);
console.log(36 % 2);

//  n%2 == 1 - odd number, [ n%2 == 0 , even]