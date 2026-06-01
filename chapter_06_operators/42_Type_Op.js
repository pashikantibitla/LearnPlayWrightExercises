/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: typeof Operator
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - typeof operand: string
 *     Description: Returns a string indicating the data type of the unevaluated operand.
 *     Input: Accepts any operand as a direct value, variable, or expression.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 * 
 * Key Concepts:
 *   - typeof "hello" returns "string".
 *   - typeof 123 returns "number" (both integers and floats are of type number in JavaScript).
 *   - typeof true returns "boolean".
 *   - typeof undefined returns "undefined".
 *   - typeof null returns "object" (a well-known legacy bug in JavaScript).
 *   - typeof [] returns "object" (arrays are technically objects).
 * ============================================================
 */

console.log(typeof "hello");
console.log(typeof 123); // int -> number
console.log(typeof 31.4); // float -> number
// typeof true
// typeof undefined  -> undefined
// typeof null  -> object
// typeof [] -> object
console.log(typeof []); // -> object