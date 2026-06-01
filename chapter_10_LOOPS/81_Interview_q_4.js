/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Using the continue keyword to skip an iteration in a for loop.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: A loop that iterates while the condition is true, incrementing after each pass.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped loop variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if (condition): keyword
 *     Description: Conditionally executes code when the expression evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - continue: keyword
 *     Description: Skips the rest of the current loop iteration and proceeds to the next one.
 *     Input: No input required; used directly as a keyword statement.
 *     Return Type: void (keyword behavior) — does not return a value; alters loop control flow.
 *   - strict equality (===): operator
 *     Description: Checks if two values are equal in both value and type without type coercion.
 *     Input: Takes two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if the operands are equal in value and type, otherwise false.
 * 
 * Key Concepts:
 *   - continue Statement: Used inside loops to bypass the remaining code in the current iteration.
 *   - Skipped Iteration: When i equals 1, the console.log is skipped.
 *   - Loop Control: How to selectively process items within a repeating structure.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Using the continue keyword to skip an iteration in a for loop.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - for (initialization; condition; increment): keyword
 *     Description: A loop that iterates while the condition is true, incrementing after each pass.
 *     Input: Takes an initialization expression, a condition expression, and an increment expression separated by semicolons.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped loop variable.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - if (condition): keyword
 *     Description: Conditionally executes code when the expression evaluates to true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - continue: keyword
 *     Description: Skips the rest of the current loop iteration and proceeds to the next one.
 *     Input: No input required; used directly as a keyword statement.
 *     Return Type: void (keyword behavior) — does not return a value; alters loop control flow.
 *   - strict equality (===): operator
 *     Description: Checks if two values are equal in both value and type without type coercion.
 *     Input: Takes two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true if the operands are equal in value and type, otherwise false.
 * 
 * Key Concepts:
 *   - continue Statement: Used inside loops to bypass the remaining code in the current iteration.
 *   - Skipped Iteration: When i equals 1, the console.log is skipped.
 *   - Loop Control: How to selectively process items within a repeating structure.
 * ============================================================
 */

for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}

