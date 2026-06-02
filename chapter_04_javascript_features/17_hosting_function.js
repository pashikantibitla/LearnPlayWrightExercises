/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: var hoisting inside a function scope
 *
 * Functions/Methods Used:
 *   - getUserStatus(): void
 *     Description: Demonstrates that var declarations inside a function are hoisted to the top of that function.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - console.log(message: any): void
 *     Description: Outputs the value of a hoisted variable before and after assignment.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - var
 *     Description: Declares a function-scoped variable that is hoisted within the function body, not the global scope.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current function scope initialized with undefined when hoisted.
 *   - function
 *     Description: Declares a named function that provides its own local scope for hoisting.
 *     Input: Takes a function name, an optional parameter list enclosed in parentheses, and a function body wrapped in curly braces.
 *     Return Type: void (as a declaration statement) — does not return a value in the statement context; creates a named function object in the current scope.
 *
 * Key Concepts:
 *   - Function-scoped hoisting: var declarations inside a function are hoisted to the top of that function.
 *   - Hoisting initialization: Hoisted var variables start as undefined until the assignment line executes.
 *   - Scope isolation: Hoisting does not leak var declarations from inside a function to the global scope.
 * ============================================================
 */


function getUserStatus() { // JS Engine
    //var status_code; JS Engine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();





// Note: var is function-scoped, so status is hosted to
// the top of getUserStatus(), NOT the global scope.

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates that var hoisting is contained within the function scope.
var declarations inside a function are hoisted to the TOP of that function, not the global scope.
This encapsulation is why functions are used to create private variable spaces.

CODE BREAKDOWN
=====================================
1. function getUserStatus() { ... }
   - A new function scope is created.
2. console.log(status_code); var status_code = "Active";
   - Inside the function, status_code is hoisted to the top with undefined.
   - The first log prints undefined; the second log prints "Active".
3. getUserStatus();
   - Invokes the function to demonstrate the behavior.

KEY CONCEPTS
=====================================
- Function-Scoped Hoisting: var declarations inside a function are hoisted to the top of that function.
- Hoisting Initialization: Hoisted var variables start as undefined until the assignment line executes.
- Scope Isolation: Hoisting does not leak var declarations from inside a function to the global scope.

COMPARISON TABLE: Global vs Function Hoisting
=====================================
| Location of var  | Hoisted to where?           | Leaks outside? |
|--------------------|-----------------------------|----------------|
| Global scope       | Top of global scope         | N/A            |
| Inside function    | Top of that function only   | No             |
| Inside block {}    | Top of enclosing function   | Yes            |

REAL-WORLD USE CASES
=====================================
- Creating modular code with encapsulated variables.
- Using IIFE (Immediately Invoked Function Expressions) for privacy.
- Preventing global namespace pollution in large applications.

COMMON MISTAKES
=====================================
- Expecting hoisted vars inside a function to be accessible globally.
- Forgetting that var hoisting stops at the function boundary.
- Confusing function-scoped hoisting with block-scoped let/const behavior.

KEY TAKEAWAY
=====================================
var hoisting is contained within the function it lives in. Use functions to encapsulate variables and prevent global leaks.
*/