/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Number literals in JavaScript, including positive integers, negative integers, zero, and hexadecimal notation.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs the specified value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - typeof operand: string
 *     Description: Unary operator that returns a string indicating the data type of the operand.
 *     Input: Accepts any variable, value, or expression as its operand.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 *
 * Key Concepts:
 *   - Integer literal: A whole number without a fractional component (e.g., 100, -100, 0).
 *   - Hexadecimal literal: A number prefixed with 0x or 0X, representing a base-16 value (e.g., 0xff, 0xFF0000).
 *   - typeof number: In JavaScript, all numeric literals (including hex) are of type "number".
 * ============================================================
 */

let positive = 100;
let negative = -100;
let zero = 0; 
let c = 0xff;
let hexical = 0xFF0000;

console.log(typeof positive);
comsole.log(typeof negative);
console.log(typeof zero);
console.log(typeof c );

