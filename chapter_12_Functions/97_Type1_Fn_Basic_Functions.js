/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-1 Basic Function — no parameters, no return value.
 *
 * Functions/Methods Used:
 *   - greet(): undefined
 *     Description: A user-defined function that prints "Hi" to the console.
 *     Input: No input parameters (empty parentheses).
 *     Return Type: undefined — no explicit return statement; implicitly returns undefined.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-1 Function: A function with no parameters and no return value.
 *   - Implicit Return: When no `return` is written, JavaScript returns `undefined`.
 *   - Function Invocation: Calling a function executes its body and produces a return value.
 * ============================================================
 */

// Define
function greet() { // parameter
    console.log("Hi");
}

// This is a Basic type-1 function, which means no argument, no return. 
// Call
greet(); // calling argument

let a = greet();
console.log(a);