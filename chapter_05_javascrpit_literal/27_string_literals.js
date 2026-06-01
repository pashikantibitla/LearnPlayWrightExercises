/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: String literals in JavaScript using single quotes and double quotes, and understanding the string data type.
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
 *   - Single-quoted string: A string literal enclosed in single quotes (e.g., 'lovely morning').
 *   - Double-quoted string: A string literal enclosed in double quotes (e.g., "good morning").
 *   - Quote nesting: You can include double quotes inside a single-quoted string and vice versa without escaping.
 *   - typeof string: Returns "string" for all string literals, including single characters.
 * ============================================================
 */

// single quotes 
let a = 'lovely morning';
let ui = 'hi, "mounika"';
console.log(ui);

//double quotes
let b = "good mornig";
let uo = "nice to meet you 'mounika'";
console.log(uo);
console.log(typeof b, typeof uo);
console.log(typeof a, typeof ui);


// Single quotes
let single = 'Hello World';
let withDouble = 'She said "hi"';

// Double quotes
let double = "Hello World";
let withSingle = "It's a test";


let c = 'c';
let c1 = 'cc';
console.log(typeof c);
console.log(typeof c1);
console.log(typeof double);

// 'JavaScript prefers to use single code. '