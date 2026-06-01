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