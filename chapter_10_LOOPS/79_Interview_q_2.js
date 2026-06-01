/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Count-down logic using a while loop and decrement operator.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats code while the specified boolean condition evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a mutable, block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the numeric value by 1 after evaluation.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Count-down: A loop that starts high and decrements toward a lower bound.
 *   - Loop Termination: The condition i > 0 ensures the loop stops when i reaches 0.
 *   - Pre-test Loop: The condition is checked before every iteration, including the first.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Count-down logic using a while loop and decrement operator.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats code while the specified boolean condition evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a mutable, block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the numeric value by 1 after evaluation.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Count-down: A loop that starts high and decrements toward a lower bound.
 *   - Loop Termination: The condition i > 0 ensures the loop stops when i reaches 0.
 *   - Pre-test Loop: The condition is checked before every iteration, including the first.
 * ============================================================
 */

let i = 5;
while (i > 0) {
    console.log(i);
    i--;
}