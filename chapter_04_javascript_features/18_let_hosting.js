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