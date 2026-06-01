/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Demonstrating JavaScript truthy and falsy values in conditional statements.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else
 *     Description: Conditional keywords that coerce the condition to a boolean before evaluating.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Truthy Values: Non-empty strings, non-zero numbers, objects {}, and arrays [] evaluate to true in a condition.
 *   - Falsy Values: Empty strings "", null, undefined, NaN, and 0 evaluate to false in a condition.
 *   - Type Coercion in Conditions: JavaScript automatically converts the condition expression to a boolean.
 *   - Interview Relevance: Understanding truthy/falsy behavior is essential for writing robust conditionals and avoiding bugs.
 * ============================================================
 */

if ("hello") console.log("String is truthy"); // // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

if ("") console.log("Won't print");
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}