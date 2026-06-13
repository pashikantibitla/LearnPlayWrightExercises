/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Differences between let and var, for loop iteration,
 *        function definitions, and pre-increment operator
 *
 * Functions/Methods Used:
 *   - printing_int_values(x: number, y: number, a: number): void
 *     Description: Logs the current values of x, y, and a to the console.
 *     Input: Accepts three numbers as variables or direct values passed
 *            as arguments in a function call.
 *     Return Type: void (undefined) — returns nothing; only logs to console.
 *   - console.log(message: any, ...optionalParams: any[]): void
 *     Description: Prints provided arguments to the console.
 *     Input: Accepts any data types as direct values, variables, or expressions,
 *            including multiple optional parameters.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Keywords/Methods Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it.
 *     Input: Takes a variable name and an optional initial value assignment
 *            via direct value, variable, or expression.
 *     Return Type: undefined — the declaration itself does not return a value.
 *   - var
 *     Description: Declares a function-scoped or globally-scoped variable.
 *     Input: Takes a variable name and an optional initial value assignment
 *            via direct value, variable, or expression.
 *     Return Type: undefined — the declaration itself does not return a value.
 *   - for
 *     Description: Creates a loop that consists of three optional expressions:
 *                  initialization, condition, and final expression.
 *     Input: Requires an initialization statement (variable declaration or assignment),
 *            a condition expression, and a final expression (e.g., increment).
 *     Return Type: void — the loop statement does not return a value;
 *                  iteration is controlled by the condition.
 *   - ++ (pre-increment)
 *     Description: Increments the variable by one before the value
 *                    is used in the expression.
 *     Input: Operates on a numeric variable directly; the variable is modified in place.
 *     Return Type: number — returns the incremented value of the variable.
 *
 * Key Concepts:
 *   - var vs let: var is function-scoped; let is block-scoped.
 *   - for loop: Repeats code while a condition is true, updating each iteration.
 *   - pre-increment (++x): Increments the value before assignment or evaluation.
 *   - function declaration: Defines a reusable block of code with parameters.
 * ============================================================
 */

let a = 34;
console.log("the integer value of a is ", a);
var x=6, y=3;
let i =0;
for( i=0; i<=a; i++)
{
    printing_int_values(x, y, a);
    x = ++i;
    y = ++a;
    console.log("the value of x, y, a after function are: ", x, y, a);
}


function printing_int_values(x, y, a)
{
    console.log(" the value of variables x, y, a are: ", x, y, a);
}

printing_int_values(x, y , a);

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file contrasts the behavior of 'let' and 'var' while
demonstrating loops, pre-increment operators, and custom functions.
A variable 'a' is declared with let, while 'x' and 'y' use var.
The script runs a for loop that repeatedly calls a helper
function and modifies the loop variables using the ++i syntax.
Understanding why let is safer inside loops than var is a major
milestone in writing reliable JavaScript.

CODE BREAKDOWN:
Step 1: let a = 34;
        - Declares a block-scoped integer variable 'a'.

Step 2: console.log("the integer value of a is ", a);
        - Prints the initial value of 'a'.

Step 3: var x=6, y=3;
        - Declares two function-scoped variables on one line.

Step 4: let i =0;
        - Block-scoped counter for the upcoming loop.

Step 5: for( i=0; i<=a; i++) { ... }
        - Loop runs while i is less than or equal to 34.
        - Inside: calls printing_int_values, then mutates x, y, a
          using pre-increment (++i and ++a).

Step 6: function printing_int_values(x, y, a) { ... }
        - A function declaration that logs the three arguments.

Step 7: printing_int_values(x, y , a);
        - Invokes the function one final time after the loop ends.

KEY CONCEPTS:
- let: Block-scoped; safe to use in loops and conditionals.
- var: Function-scoped; can leak outside blocks and cause bugs.
- Pre-increment (++x): Increments the value BEFORE it is used.
- Post-increment (x++): Uses the current value, THEN increments.
- Function declaration: Creates a reusable block of code that
  can accept inputs (parameters) and perform actions.

COMPARISON TABLE: var vs let inside a loop
| Scenario                         | var                          | let                          |
|----------------------------------|------------------------------|------------------------------|
| Scope inside for loop            | Function / Global            | Block (just the loop)        |
| Value after loop finishes        | Retains final loop value     | Retains final loop value if  |
|                                  | and leaks outside block      | declared outside; otherwise  |
|                                  |                              | block variable is destroyed  |
| Recommended for loop counters?   | No (prone to closure bugs)   | Yes                          |

REAL-WORLD USE CASES:
- Iterating over a list of products to calculate a total price.
- Repeating an API call with incremented page numbers.
- Running a simulation step thousands of times and logging state.

COMMON MISTAKES TO AVOID:
- Using var for a loop counter and later discovering the counter
  variable has leaked into surrounding code with its final value.
- Confusing ++i with i++. In this file, ++i changes the value
  before assignment, which can make loop behavior hard to predict.
- Mutating the loop boundary variable ('a') inside the loop with
  ++a; this creates an infinite or unexpectedly long loop.

KEY TAKEAWAY:
Prefer let over var in modern JavaScript, especially for loop
counters and temporary variables. Understand pre-increment vs
post-increment so you can read and write loop logic with confidence.
*/