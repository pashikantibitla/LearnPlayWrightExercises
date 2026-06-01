/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Edge case do...while loop where the condition is false after the first execution.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Runs the body once, then repeats only while the condition is true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the variable value by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Single Execution: Because i starts at 0 and becomes -1, the condition i > 0 is false immediately after the first run.
 *   - Post-test Behavior: The body executes before the condition is evaluated, guaranteeing at least one output.
 *   - Interview Edge Case: Demonstrates understanding that do...while always runs at least once.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Edge case do...while loop where the condition is false after the first execution.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Runs the body once, then repeats only while the condition is true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - decrement operator (--): operator
 *     Description: Decreases the variable value by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the decremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Single Execution: Because i starts at 0 and becomes -1, the condition i > 0 is false immediately after the first run.
 *   - Post-test Behavior: The body executes before the condition is evaluated, guaranteeing at least one output.
 *   - Interview Edge Case: Demonstrates understanding that do...while always runs at least once.
 * ============================================================
 */

let i = 0;
do {
    console.log(i);
    i--;
} while (i > 0);