/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: let hoisting and the Temporal Dead Zone (TDZ)
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the value of a block-scoped let variable after its declaration.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - let
 *     Description: Declares a block-scoped variable that is hoisted but remains uninitialized until its declaration line.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope that starts in the Temporal Dead Zone.
 *   - typeof
 *     Description: Operator that normally returns a type string, but throws ReferenceError when used inside the TDZ.
 *     Input: Accepts a single operand provided as a variable, value, or expression.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "undefined").
 *   - {} (block)
 *     Description: Creates a block scope where let variables are isolated.
 *     Input: Contains a sequence of statements wrapped in curly braces.
 *     Return Type: void — does not return a value; defines a new block scope.
 *
 * Key Concepts:
 *   - TDZ (Temporal Dead Zone): The period from the start of a block until the let declaration is reached.
 *   - Hoisting without initialization: let is hoisted but not initialized, unlike var which is initialized with undefined.
 *   - ReferenceError: Accessing a let variable in its TDZ results in a runtime error.
 *   - Block scope isolation: let variables declared inside {} are only accessible within that block.
 * ============================================================
 */

//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 100;

{
    //console.log(score); // ReferenceError: Cannot access 'b' before initialization
    //score =12; // ReferenceError: Cannot access 'b' before initialization
    //typeof score;  // ReferenceError: Cannot access 'b' before initialization
    //==TDZ ===
    let score = 100;
    console.log("the sore value is: " , score);
}

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates let hoisting and the Temporal Dead Zone (TDZ).
Unlike var, let IS hoisted to the top of its block, but it is NOT initialized.
From the start of the block until the declaration line, the variable is in the TDZ.
Accessing it during this period throws a ReferenceError.

CODE BREAKDOWN
=====================================
1. let b = 100;
   - Declared at the top level. Accessing before this line would throw ReferenceError.
2. { ... let score = 100; ... }
   - Inside the block, score enters the TDZ from the opening brace.
   - The commented-out lines show operations that would fail in the TDZ:
     console.log(score), score = 12, typeof score.
   - After let score = 100, the variable is safe to use.

KEY CONCEPTS
=====================================
- TDZ (Temporal Dead Zone): The period from block entry until the let declaration.
- Hoisting without Initialization: let is hoisted but remains uninitialized, unlike var.
- ReferenceError: Accessing a let variable in its TDZ results in a runtime error.
- Block Scope Isolation: let variables inside {} are only accessible within that block.

COMPARISON TABLE: var vs let Hoisting
=====================================
| Aspect           | var                      | let                     |
|------------------|--------------------------|-------------------------|
| Hoisted?         | Yes                      | Yes                     |
| Initial value    | undefined                | Uninitialized (TDZ)     |
| Early access     | Returns undefined        | Throws ReferenceError   |
| typeof before    | "undefined"              | Throws ReferenceError   |

REAL-WORLD USE CASES
=====================================
- Enforcing clean code structure by preventing use-before-declaration.
- Avoiding subtle bugs from partially initialized variables.
- Understanding modern JavaScript interview questions.

COMMON MISTAKES
=====================================
- Thinking let is NOT hoisted at all (it is, but into TDZ).
- Using typeof on a let variable before its declaration (throws ReferenceError).
- Trying to assign to a let variable before its declaration line.

KEY TAKEAWAY
=====================================
let IS hoisted, but the Temporal Dead Zone prevents you from using it until the declaration line. This is a feature, not a bug — it catches errors early.
*/