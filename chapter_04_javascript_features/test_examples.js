/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Function hoisting vs function expression initialization order
 *
 * Functions/Methods Used:
 *   - greet(): void
 *     Description: A function declaration that is fully hoisted, allowing it to be called before its definition.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - sayHi(): void (commented)
 *     Description: A function expression assigned to a const/let variable; accessing before initialization throws ReferenceError due to TDZ.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - console.log(message: any): void
 *     Description: Prints output to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - function
 *     Description: Declares a named function that is hoisted with its body.
 *     Input: Takes a function name, an optional parameter list enclosed in parentheses, and a function body wrapped in curly braces.
 *     Return Type: void (as a declaration statement) — does not return a value in the statement context; creates a named function object in the current scope.
 *   - const / let
 *     Description: Variable declarations that create a TDZ for function expressions.
 *     Input: Takes a variable name and an optional (let) or required (const) initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope.
 *   - ReferenceError
 *     Description: Thrown when accessing a let/const variable before its declaration line.
 *     Input: (When used as a constructor) accepts an optional descriptive message string as a direct value or variable.
 *     Return Type: ReferenceError object — an error instance that can be thrown and caught.
 *
 * Key Concepts:
 *   - Function declaration hoisting: Entire function is moved to the top, so calls can precede definitions.
 *   - Function expression hoisting: Only the variable declaration is hoisted; the function body is not available until the assignment line.
 *   - TDZ with expressions: Function expressions assigned to let/const cannot be called before their declaration.
 *   - Undefined arithmetic: Using a let variable in its own initialization expression (count = count + 1) results in NaN because the variable is in TDZ and technically uninitialized during the read on the right side.
 * ============================================================
 */

// sayHi();//ReferenceError: Cannot access 'sayHi' before initialization
// const sayHi = function() { 
//     console.log("Hi"); 
// };

greet(); 
function greet() 
{ console.log("Hi"); }

let count = count + 1