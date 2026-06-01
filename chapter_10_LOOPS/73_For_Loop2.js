/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: For loop with custom variable names and different iteration ranges.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Repeats a block of code while the condition evaluates to true.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped local variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 * 
 * Key Concepts:
 *   - Variable Naming: Loop counters can use any valid identifier (e.g., somya, _1).
 *   - Iteration Count: The number of times a loop runs depends on the condition.
 *   - Comments: Used to disable or explain code without executing it.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: For loop with custom variable names and different iteration ranges.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Repeats a block of code while the condition evaluates to true.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped local variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 * 
 * Key Concepts:
 *   - Variable Naming: Loop counters can use any valid identifier (e.g., somya, _1).
 *   - Iteration Count: The number of times a loop runs depends on the condition.
 *   - Comments: Used to disable or explain code without executing it.
 * ============================================================
 */

// for (let somya = 0; somya < 10; somya++) {
//     console.log(somya);
// }
// // 0 to 9, Times -> 10

// var, let, const

// for (let somya = 0; somya < 10; somya++) { // 0 to 9, Times -> 10
//     console.log(somya);
// }

for (let _1 = 0; _1 <= 10; _1++) { // 0 to 10, Times -> 11
    console.log(_1);
}