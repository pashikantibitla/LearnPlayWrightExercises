/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: var hoisting and the JavaScript engine's two-phase compilation/execution
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the value of a variable before and after assignment to demonstrate hoisting.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - var
 *     Description: Declares a variable that is hoisted to the top of its scope and initialized with undefined.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding initialized with undefined when hoisted.
 *   - console.log
 *     Description: Built-in debugging method to output values to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Hoisting: JavaScript moves var declarations to the top of their scope during compilation, leaving assignments in place.
 *   - undefined: The default value assigned to hoisted var variables before their actual assignment is executed.
 *   - JIT Compilation: JavaScript engines compile code just-in-time, processing declarations before execution.
 *   - Two-phase execution: Phase 1 scans for declarations; Phase 2 executes line-by-line.
 * ============================================================
 */

// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Pramod";
console.log(a);