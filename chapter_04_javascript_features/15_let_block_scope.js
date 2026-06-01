/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: let block scoping and variable shadowing inside functions and conditionals
 *
 * Functions/Methods Used:
 *   - printHello(): void
 *     Description: Demonstrates that let-declared variables inside a function and an if block do not affect the outer scope.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - console.log(message: any): void
 *     Description: Outputs values to the console to show scope isolation.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - let
 *     Description: Declares a block-scoped variable that respects function and block boundaries.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope.
 *   - if statement
 *     Description: Creates a conditional block where a new let variable can shadow an outer one.
 *     Input: Accepts a boolean condition provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; controls execution flow based on the condition.
 *   - function
 *     Description: Declares a named function that introduces a new function scope.
 *     Input: Takes a function name, an optional parameter list enclosed in parentheses, and a function body wrapped in curly braces.
 *     Return Type: void (as a declaration statement) — does not return a value in the statement context; creates a named function object in the current scope.
 *
 * Key Concepts:
 *   - Block scoping with let: Each pair of curly braces {} creates a new scope for let.
 *   - Shadowing: A let variable inside a block can have the same name as an outer variable without overwriting it.
 *   - Scope isolation: Changes to a block-scoped let variable do not leak outside its containing block.
 * ============================================================
 */

let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}
console.log("G ->", a);

printHello();
/**
 * 10
G -> 10
Hello TheTestingAcademy!
20
30
F -> 20
 */