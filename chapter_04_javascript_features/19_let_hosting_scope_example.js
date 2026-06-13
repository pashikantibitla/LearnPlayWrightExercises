/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Temporal Dead Zone (TDZ) behavior with let inside block scopes
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints values to the console to verify let variable accessibility after declaration.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - let
 *     Description: Declares a block-scoped variable that enters the TDZ from the top of the block until its declaration.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope that starts in the Temporal Dead Zone.
 *   - if statement
 *     Description: Creates a block scope where the TDZ applies to let declarations inside the block.
 *     Input: Accepts a boolean condition provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; controls execution flow based on the condition.
 *
 * Key Concepts:
 *   - Temporal Dead Zone (TDZ): The region of code before a let/const declaration where accessing the variable throws ReferenceError.
 *   - Block-level hoisting: let is hoisted to the top of its block but remains in TDZ until the declaration line executes.
 *   - ReferenceError on early access: Any read or write to a let variable before its declaration triggers an error.
 *   - Global, function, and block scope: TDZ applies to let/const regardless of whether the scope is global, function, or block.
 * ============================================================
 */

// console.log("befoer declaration scope valu eis : ", scope) // ReferenceError: Cannot access 'scope' before initialization
// let scope =12;
// console.log("before block scope scope value is: ", scope)
// {
//     scope = "undefined";
//     console.log("in block scope is: ", scope);
// }

if(true)
{
    //console.log("befoer declaration in block x value is ", x); //TD zone starts here  -->ReferenceError: Cannot access 'x' before initialization
    let x = "scope"; //TD Z zone stops here
    console.log("after decalration x value is ", x); // scope

}

/*
note: in case of "let" we cannot variable before decation, if we do , we will get "referenceError"
*/

/*
The Temporal Dead Zone is the period between the entering of a scope and the actual declaration of a variable.
Block Scope: Variables declared with let and const are scoped to the nearest pair of curly braces {}.
The TDZ: When a block is entered, let and const variables are "hoisted" but not initialized. 
Any attempt to access them before the line where they are defined results in a ReferenceError.
Why the others are false:
A: TDZ applies whenever let or const are used, regardless of whether the scope is global, functional, or block-level.
C: TDZ specifically happens inside blocks when using block-scoped variables.D: var does not have a TDZ. 
It is hoisted and initialized with undefined, allowing it to be accessed before its declaration without throwing an error.
 */

/*
=====================================
DETAILED EXPLANATION
=====================================
This file provides a concrete example of the Temporal Dead Zone (TDZ) inside an if block.
The TDZ begins at the opening brace of the block and ends at the let declaration line.
Any attempt to read or write the variable during this window results in a ReferenceError.

CODE BREAKDOWN
=====================================
1. if (true) { ... }
   - Creates a new block scope.
2. // console.log("befoer declaration...", x);
   - This would throw ReferenceError because x is in the TDZ.
3. let x = "scope";
   - The TDZ ends here. From this point on, x is fully accessible.
4. console.log("after decalration x value is ", x);
   - Safely prints "scope".

KEY CONCEPTS
=====================================
- TDZ in Conditionals: The TDZ applies to let/const inside if, for, while, and plain blocks.
- ReferenceError on Early Access: Any read or write to a let variable before its declaration triggers an error.
- Block-Level Hoisting: let is hoisted to the top of its block but stays in TDZ until initialized.

COMPARISON TABLE: TDZ Applicability
=====================================
| Scope Type       | var behavior       | let/const behavior    |
|------------------|--------------------|------------------------|
| Global           | Hoisted, undefined| TDZ applies           |
| Function         | Hoisted, undefined| TDZ applies           |
| Block (if/for)   | Leaks to function | TDZ applies           |

REAL-WORLD USE CASES
=====================================
- Preventing accidental use of loop variables before the loop starts.
- Enforcing proper initialization order in complex conditional logic.
- Writing safer, more predictable block-scoped code.

COMMON MISTAKES
=====================================
- Assuming TDZ only exists in global scope (it exists in ALL scopes).
- Moving a let declaration to the bottom of a block and accessing it earlier.
- Thinking var has a TDZ (it does not; it gets undefined immediately).

KEY TAKEAWAY
=====================================
The Temporal Dead Zone exists from the top of any block until the let/const declaration is reached. Always declare block-scoped variables at the beginning of their block.
*/