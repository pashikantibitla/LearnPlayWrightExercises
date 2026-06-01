/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Detailed while loop examples showing initialization, condition, and update.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats a block of code as long as the boolean condition remains true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares block-scoped variables for loop counters.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases a numeric variable by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Initialization: Setting the starting state before entering the loop.
 *   - Condition: The boolean expression that determines whether the loop continues.
 *   - Updation: Modifying the loop variable inside the body to progress toward termination.
 *   - Multiple While Loops: A single file can contain multiple independent while loops.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Detailed while loop examples showing initialization, condition, and update.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - while (condition): keyword
 *     Description: Repeats a block of code as long as the boolean condition remains true.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares block-scoped variables for loop counters.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases a numeric variable by 1.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Initialization: Setting the starting state before entering the loop.
 *   - Condition: The boolean expression that determines whether the loop continues.
 *   - Updation: Modifying the loop variable inside the body to progress toward termination.
 *   - Multiple While Loops: A single file can contain multiple independent while loops.
 * ============================================================
 */

let attempt = 0; // Init
while (attempt < 3) { // Condition
    console.log(attempt);
    attempt++; // Updation
}

let modi = 1;
while (modi <= 15) { // 1 to 15,Times -> 

    console.log("Modi will do 15+ years");
    modi++;

}