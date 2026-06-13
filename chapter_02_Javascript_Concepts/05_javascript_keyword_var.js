/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Declaration and reassignment of variables using the
 *        var keyword in JavaScript.
 *
 * Functions/Methods Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - var keyword
 *     Description: Declares a function-scoped or globally-scoped variable.
 *     Input: Takes a variable name and an optional initial value, provided directly in a declaration statement.
 *     Return Type: undefined — the declaration statement itself does not evaluate to a value.
 *   - Variable declaration
 *     Description: Creates a named variable and optionally initializes it with a value.
 *     Input: Takes a variable name and an optional assignment with a value (direct literal, variable, or expression).
 *     Return Type: undefined — the declaration statement does not return a value.
 *   - Variable reassignment
 *     Description: Updates the value of an existing variable without re-declaring it.
 *     Input: Takes a variable name on the left and a new value (direct literal, variable, or expression) on the right.
 *     Return Type: Returns the assigned value after the update.
 *   - Primitive values
 *     Description: Immutable basic data types such as numbers, strings, booleans, etc.
 *     Input: Provided directly as literals (e.g., 10, 12) or via variables/expressions.
 *     Return Type: The literal value itself (e.g., number, string, boolean).
 * ============================================================
 */

var v = 10;
console.log(v);

v = 12;

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file focuses on the 'var' keyword and the concept of
reassignment. A variable 'v' is declared and initialized to 10,
printed, and then updated to 12. This tiny script illustrates
that variables declared with var are mutable: their values can
be changed after creation. It also sets the stage for comparing
var with let and const, which is a recurring theme in modern
JavaScript education.

CODE BREAKDOWN:
Step 1: var v = 10;
        - Declares a function-scoped variable 'v' and sets it to 10.

Step 2: console.log(v);
        - Prints the current value (10) to the console.

Step 3: v = 12;
        - Reassigns the existing variable to a new value (12).
        - No keyword is used because we are not redeclaring,
          only updating the stored value.

KEY CONCEPTS:
- var: Declares a variable with function or global scope.
- Initialization: Giving a variable its first value at declaration.
- Reassignment: Updating an existing variable with a new value.
- Mutable state: The ability of a variable to change over time.

COMPARISON TABLE: var vs let vs const reassignment behavior
| Action                  | var          | let          | const        |
|-------------------------|--------------|--------------|--------------|
| Declare without value   | Allowed      | Allowed      | Not allowed  |
| Reassign value          | Allowed      | Allowed      | Error        |
| Redeclare in same scope | Allowed      | Error        | Error        |
| Hoisting behavior       | Initialized  | Not init.    | Not init.    |
|                         | undefined    | (TDZ)        | (TDZ)        |

REAL-WORLD USE CASES:
- A score counter in a game that increments as the player wins.
- A shopping-cart total that gets recalculated when items are added.
- A loop index that advances on each iteration.

COMMON MISTAKES TO AVOID:
- Using var inside a block (like an if statement) and expecting
  it to stay inside that block; var leaks to the entire function.
- Accidentally redeclaring a variable with var in the same scope,
  which silently overwrites it instead of throwing an error.
- Confusing reassignment (v = 12) with redeclaration (var v = 12).
  Both are allowed with var, but redeclaration with let is illegal.

KEY TAKEAWAY:
var allows declaration and reassignment, but its loose scoping
rules make it risky in large programs. Learn var so you can
maintain legacy code, but prefer let and const for new projects.
*/