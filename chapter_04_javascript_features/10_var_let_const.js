/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Differences between var, let, and const declarations in JavaScript
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs a message to the console for debugging and demonstration.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - var
 *     Description: Declares a function-scoped variable that allows redeclaration and reassignment.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current function or global scope.
 *   - let
 *     Description: Declares a block-scoped variable that allows reassignment but not redeclaration in the same scope.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope.
 *   - const
 *     Description: Declares a block-scoped constant that cannot be reassigned or redeclared.
 *     Input: Takes a variable name and a required initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a read-only binding in the current block scope.
 *   - for loop
 *     Description: Iterates over a sequence; in this file, demonstrates that a var-declared loop counter leaks outside the block.
 *     Input: Accepts three optional expressions (initialization, condition, increment) separated by semicolons.
 *     Return Type: void — does not return a value; controls iteration flow.
 *   - function
 *     Description: Declares a reusable block of code that can be invoked multiple times.
 *     Input: Takes a function name, an optional parameter list enclosed in parentheses, and a function body wrapped in curly braces.
 *     Return Type: void (as a declaration statement) — does not return a value in the statement context; creates a named function object in the current scope.
 *
 * Key Concepts:
 *   - var redeclaration: var permits declaring the same variable name multiple times in the same scope.
 *   - var scope leakage: A var-declared loop variable exists outside the loop block, which can cause unexpected behavior.
 *   - Function definition and invocation: Functions are defined with the function keyword and called by name followed by parentheses.
 * ============================================================
 */

var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge"; // reassignment allowed

// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);
console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();