/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Common interview questions and edge cases involving for loop conditions.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Executes a block of code repeatedly based on the condition.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if / else: keyword
 *     Description: Conditional statements that execute different blocks based on a boolean condition.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 * 
 * Key Concepts:
 *   - Condition Evaluation: If the initial condition is false, the loop body never executes.
 *   - Infinite Loop: Omitting the condition in a for loop creates an infinite loop.
 *   - Loop Scope: Variables declared with let inside a for loop are scoped to that loop.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Common interview questions and edge cases involving for loop conditions.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: Executes a block of code repeatedly based on the condition.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable for the loop counter.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if / else: keyword
 *     Description: Conditional statements that execute different blocks based on a boolean condition.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 * 
 * Key Concepts:
 *   - Condition Evaluation: If the initial condition is false, the loop body never executes.
 *   - Infinite Loop: Omitting the condition in a for loop creates an infinite loop.
 *   - Loop Scope: Variables declared with let inside a for loop are scoped to that loop.
 * ============================================================
 */

// // for (let pramod = 0; pramod > 1; pramod++) {
// //     console.log(pramod);
// // }

// // for (let pramod = 0; ; pramod++) {
// //     console.log(pramod);
// // }


// for (let somya = 0; somya < 18; somya++) {
//     if (somya > 15) {
//         console.log("Gift from papa, iphone this year")
//     } else {
//         console.log("No Gift,only barbie doll")
//     }
// }

for (let i = 0; i < 1; i++) {
    console.log(i);
}