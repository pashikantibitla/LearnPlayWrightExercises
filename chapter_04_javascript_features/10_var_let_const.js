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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates the core differences between var, let, and const in JavaScript.
It shows that var allows redeclaration and reassignment, while let and const have stricter rules.
The for-loop example reveals a classic var pitfall: the loop counter i leaks outside the block.
Finally, it introduces function declarations and invocations.

CODE BREAKDOWN
=====================================
1. var v = 10; let l = 30; const c = 3.14;
   - Three variables declared with different keywords.
2. var browser = "chrome"; var browser = "firefox";
   - var permits redeclaration in the same scope without error.
3. for (var i = 0; i < testCases.length; i++) { ... }
   - Using var inside a loop causes the variable to exist in the outer scope.
4. console.log("Loop counter leaked outside:", i);
   - i is accessible here because var is function-scoped, not block-scoped.
5. function say() { ... } and say();
   - A named function is declared and then invoked twice.

KEY CONCEPTS
=====================================
- var: Function-scoped, can be redeclared and reassigned.
- let: Block-scoped, can be reassigned but not redeclared in the same scope.
- const: Block-scoped, cannot be reassigned or redeclared; must be initialized.
- Scope Leakage: var declarations inside loops or if-blocks escape to the enclosing function or global scope.

COMPARISON TABLE: var vs let vs const
=====================================
| Feature          | var               | let               | const             |
|------------------|-------------------|-------------------|-------------------|
| Scope            | Function-scoped   | Block-scoped      | Block-scoped      |
| Redeclaration    | Allowed           | Not Allowed       | Not Allowed       |
| Reassignment     | Allowed           | Allowed           | Not Allowed       |
| Hoisting Value   | undefined         | TDZ (uninitialized)| TDZ (uninitialized)|
| Must Initialize  | No                | No                | Yes               |

REAL-WORLD USE CASES
=====================================
- Use const for configuration values like API base URLs or fixed test data.
- Use let for counters, loop indices, or any value that needs to change.
- Avoid var in modern JavaScript to prevent accidental global pollution and scope leakage.

COMMON MISTAKES
=====================================
- Redeclaring a var variable by accident and overwriting an important value.
- Expecting a loop variable to stay private to the loop block when using var.
- Trying to reassign a const primitive value, which throws a TypeError.

KEY TAKEAWAY
=====================================
Always prefer const by default. Use let only when reassignment is necessary. Avoid var to eliminate scope-related bugs and make your code more predictable.
*/