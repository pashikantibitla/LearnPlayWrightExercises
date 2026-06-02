/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: let block-scoping rules, reassignment, and the Temporal Dead Zone (TDZ)
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints values to the console to demonstrate scope visibility.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - let
 *     Description: Declares a block-scoped variable that cannot be redeclared in the same scope but can be reassigned.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope.
 *   - if statement
 *     Description: Conditional control structure that creates a new block scope when paired with curly braces {}.
 *     Input: Accepts a boolean condition provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; controls execution flow based on the condition.
 *   - typeof
 *     Description: Operator that returns the data type string of a variable; fails in TDZ for let/const.
 *     Input: Accepts a single operand provided as a variable, value, or expression.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "undefined").
 *
 * Key Concepts:
 *   - Block scope: Variables declared with let inside {} are only accessible within those braces.
 *   - No redeclaration: let prevents declaring a variable with the same name in the same scope (SyntaxError).
 *   - Reassignment allowed: A let variable can be updated with a new value after initialization.
 *   - ReferenceError: Accessing a block-scoped let variable outside its block throws an error.
 *   - Temporal Dead Zone (TDZ): The period from the start of a block until the let declaration is reached.
 * ============================================================
 */

// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared

// ❌ SyntaxError: redeclaration not allowed

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);   // 1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined

// {} - Block 
// if(){} 
// funcion name(){}


// let = loyal
// var = varirable / triator

/*
=====================================
DETAILED EXPLANATION
=====================================
This file explains let block-scoping rules, reassignment, and the Temporal Dead Zone (TDZ).
let allows you to change a variable's value but prevents you from declaring it twice in the same scope.
Variables declared with let inside curly braces cannot be accessed outside those braces.

CODE BREAKDOWN
=====================================
1. let a = 10;
   - Declares a block-scoped variable a.
2. let retryCount = 0; retryCount = retryCount + 1;
   - Shows that reassignment is perfectly legal with let.
3. let testStatus = "pending"; if block with executionTime
   - executionTime is declared with let inside the if block.
4. console.log(executionTime) outside the block
   - Throws ReferenceError because let respects block boundaries.

KEY CONCEPTS
=====================================
- Block Scope: let variables live only inside the nearest pair of {}.
- No Redeclaration: let x; let x; throws SyntaxError in the same scope.
- Reassignment Allowed: let is perfect for counters and accumulators.
- ReferenceError: Accessing a block-scoped variable outside its block is illegal.
- Temporal Dead Zone (TDZ): The period from block start until the let declaration line.

COMPARISON TABLE: let vs var
=====================================
| Feature          | let               | var               |
|------------------|-------------------|-------------------|
| Scope            | Block-scoped      | Function-scoped   |
| Redeclaration    | Not Allowed       | Allowed           |
| Reassignment     | Allowed           | Allowed           |
| Hoisting         | Hoisted to TDZ    | Hoisted with undefined |
| Loop Safety      | Safe (new binding)| Leaks outside loop   |

REAL-WORLD USE CASES
=====================================
- Loop counters that should not leak outside the loop.
- Temporary variables inside if/else or try/catch blocks.
- Retry counters and timeout flags in test automation.

COMMON MISTAKES
=====================================
- Redeclaring a let variable in the same scope and getting SyntaxError.
- Accessing a let variable before its declaration line (TDZ ReferenceError).
- Confusing let with var and expecting block variables to leak.

KEY TAKEAWAY
=====================================
let gives you safe, predictable block-level variables. Use it whenever a value needs to change but must stay confined to its block.
*/
