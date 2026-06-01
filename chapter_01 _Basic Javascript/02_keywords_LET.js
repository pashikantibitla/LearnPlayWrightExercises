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