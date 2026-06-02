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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates how let respects block boundaries and allows variable shadowing.
A let variable declared inside a function or an if block does NOT affect the outer scope.
Each pair of curly braces creates a new scope for let, keeping variables isolated.

CODE BREAKDOWN
=====================================
1. let a = 10; // Global Scope
   - Outer variable a is set to 10.
2. function printHello() { let a = 20; ... }
   - Function-local a shadows the global a without changing it.
3. if (true) { let a = 30; }
   - Block-scoped a = 30 lives only inside the if block.
4. console.log("G ->", a) prints 10
   - Confirms the global a was never modified.

KEY CONCEPTS
=====================================
- Block Scoping with let: Each {} creates a new scope for let.
- Shadowing: An inner let can have the same name as an outer variable.
- Scope Isolation: Changes to an inner let do not leak outside its block.

COMPARISON TABLE: let vs var in Nested Blocks
=====================================
| Scenario                    | let result        | var result          |
|-----------------------------|-------------------|---------------------|
| Variable inside if block    | Isolated to block | Leaks to function   |
| Variable inside function    | Isolated to function| Isolated to function|
| Shadowing outer variable    | Allowed, safe     | Allowed, confusing  |
| After block ends            | Clean, no trace   | Variable still exists|

REAL-WORLD USE CASES
=====================================
- Safe temporary variables inside loops and conditionals.
- Large functions where you want to avoid variable name collisions.
- Iteration variables that must not interfere with outer state.

COMMON MISTAKES
=====================================
- Thinking an inner let changes the outer variable (it does not).
- Confusing shadowing with overwriting.
- Using var instead of let and accidentally leaking block variables.

KEY TAKEAWAY
=====================================
let keeps variables exactly where you declare them. Use it to write predictable, leak-free code.
*/