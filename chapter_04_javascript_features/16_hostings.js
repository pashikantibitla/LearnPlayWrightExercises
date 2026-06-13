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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates var hoisting, JavaScript's behavior of moving declarations to the top of their scope.
When the JS engine compiles code, it first scans for var declarations and initializes them with undefined.
Only in the execution phase does the assignment happen at its original line.

CODE BREAKDOWN
=====================================
1. console.log(greeting); var greeting = "Hello";
   - greeting is hoisted with value undefined, so first log prints undefined.
   - After the assignment line, greeting becomes "Hello".
2. console.log(a); var a = "Pramod";
   - Same pattern: first log is undefined, second log is "Pramod".

KEY CONCEPTS
=====================================
- Hoisting: Declarations are moved to the top of the scope during compilation.
- undefined: The default value assigned to hoisted var variables before their assignment line.
- JIT Compilation: JavaScript engines compile just-in-time in two phases.
- Two-Phase Execution: Phase 1 scans declarations; Phase 2 executes line-by-line.

COMPARISON TABLE: Hoisting Behavior
=====================================
| Declaration    | Hoisted? | Initial Value | Usable before line? |
|----------------|----------|---------------|---------------------|
| var            | Yes      | undefined     | Yes (but undefined) |
| let            | Yes      | TDZ (none)    | No (ReferenceError) |
| const          | Yes      | TDZ (none)    | No (ReferenceError) |
| function       | Yes      | Full body     | Yes                 |

REAL-WORLD USE CASES
=====================================
- Understanding why variables can be referenced before their declaration in legacy code.
- Debugging undefined values that appear unexpectedly.
- Answering common JavaScript interview questions.

COMMON MISTAKES
=====================================
- Relying on hoisting and using variables before their declaration.
- Thinking undefined means "not declared" — it means "declared but not assigned yet".
- Expecting let and const to behave the same way as var with hoisting.

KEY TAKEAWAY
=====================================
Hoisting moves declarations, not assignments. Always declare variables at the top of their scope to avoid confusion.
*/