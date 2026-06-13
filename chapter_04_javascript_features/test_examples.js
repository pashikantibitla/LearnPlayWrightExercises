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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates the critical difference between function declarations and function expressions,
as well as the danger of referencing a variable in its own initialization expression.
Function declarations are fully hoisted, so they can be called before their definition.
Function expressions assigned to let/const are NOT hoisted with their body and will throw ReferenceError in the TDZ.

CODE BREAKDOWN
=====================================
1. // sayHi(); // ReferenceError
   - A function expression assigned to const/let cannot be called before its declaration.
   - The variable is in the TDZ until the assignment line.
2. greet(); function greet() { ... }
   - Function declaration is fully hoisted, so the call before definition works perfectly.
3. let count = count + 1
   - count is in the TDZ during its own initialization.
   - Reading count on the right side before it is initialized results in NaN.

KEY CONCEPTS
=====================================
- Function Declaration Hoisting: Entire function is moved to the top, so calls can precede definitions.
- Function Expression Hoisting: Only the variable declaration is hoisted; the function body is not available until the assignment line.
- TDZ with Expressions: Function expressions assigned to let/const cannot be called before their declaration.
- NaN from TDZ: Using a let variable in its own initialization expression produces NaN.

COMPARISON TABLE: Function Declaration vs Expression
=====================================
| Feature              | Function Declaration      | Function Expression      |
|----------------------|---------------------------|--------------------------|
| Syntax               | function name() {}        | const name = function() {}|
| Hoisting             | Fully hoisted             | Variable only hoisted    |
| Call before def?     | Yes                       | No                       |
| TDZ applies?         | No                        | Yes                      |
| Typical use          | Named utilities           | Callbacks, closures      |

REAL-WORLD USE CASES
=====================================
- Organizing code with function declarations at the bottom for readability.
- Using function expressions as callbacks in array methods (map, filter, forEach).
- Avoiding hoisting surprises by using expressions when order matters.

COMMON MISTAKES
=====================================
- Calling a function expression before its assignment line.
- Self-referencing a variable during its own let initialization (produces NaN).
- Relying on hoisting for expressions instead of declarations.

KEY TAKEAWAY
=====================================
Function declarations are fully hoisted; expressions are not. Always place expressions before their first use, and never read a let variable during its own initialization.
*/