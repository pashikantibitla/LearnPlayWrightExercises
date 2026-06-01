/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Practical do...while loop example with a retry counter.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(message1: any, message2?: any): void
 *     Description: Outputs multiple arguments separated by a space to the console.
 *     Input: Accepts any data type as direct values, variables, or expressions.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Executes the loop body first, then checks the condition for subsequent iterations.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable to track retries.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases the retry counter by 1 after each attempt.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Retry Logic: A real-world pattern where an action is performed at least once before deciding to repeat.
 *   - Post-test Evaluation: The decision to continue happens after the action, not before.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Practical do...while loop example with a retry counter.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(message1: any, message2?: any): void
 *     Description: Outputs multiple arguments separated by a space to the console.
 *     Input: Accepts any data type as direct values, variables, or expressions.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Executes the loop body first, then checks the condition for subsequent iterations.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable to track retries.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases the retry counter by 1 after each attempt.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Retry Logic: A real-world pattern where an action is performed at least once before deciding to repeat.
 *   - Post-test Evaluation: The decision to continue happens after the action, not before.
 * ============================================================
 */

let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);