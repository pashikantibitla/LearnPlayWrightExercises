/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: const declaration rules, immutability of binding, and local redeclaration
 *
 * Functions/Methods Used:
 *   - say(): void
 *     Description: A function that locally declares a let variable to demonstrate local scope redeclaration.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only demonstrates scope.
 *   - console.log(message: any): void
 *     Description: Prints output to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - const
 *     Description: Declares a block-scoped constant that must be initialized at declaration and cannot be reassigned.
 *     Input: Takes a variable name and a required initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a read-only binding in the current block scope.
 *   - let
 *     Description: Declares a block-scoped variable that can be reassigned but not redeclared in the same scope.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope.
 *   - {} (block)
 *     Description: A plain block statement that creates a local scope for let/const variables.
 *     Input: Contains a sequence of statements wrapped in curly braces.
 *     Return Type: void — does not return a value; defines a new block scope.
 *   - TypeError
 *     Description: Thrown when attempting to reassign or redeclare a const variable or perform an invalid operation.
 *     Input: (When used as a constructor) accepts an optional descriptive message string as a direct value or variable.
 *     Return Type: TypeError object — an error instance that can be thrown and caught.
 *
 * Key Concepts:
 *   - const immutability: The variable binding is fixed; the identifier cannot be reassigned to a new value.
 *   - const initialization requirement: const declarations must include an initializer value.
 *   - Scope-based redeclaration: let and const can be redeclared in a different block or function scope.
 *   - Functions vs blocks: Functions can be invoked repeatedly, whereas plain blocks execute only once inline.
 * ============================================================
 */

const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";  // TypeError: Assignment to constant variable. --> redeclaration not possible
//BASE_URL = "https:/ / staging.thetestingacademy.com";  // TypeError: Assignment to constant variable. --> reassignment is not possible



let name = "pending";
name = "done"; // re-assignement is possible
{
    let name = "Dutta"; // in loal scope re-decalaration is possible for 'let'
}
// block is not possible to call again and again
function say() {
    let name = "Dutta";
} //function is called again
say();
say();
