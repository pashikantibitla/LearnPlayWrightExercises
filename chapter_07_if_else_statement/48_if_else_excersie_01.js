/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Basic if-else statement to check voting eligibility based on age.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else
 *     Description: Conditional keywords that execute code blocks based on a boolean condition.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - > (greater than operator)
 *     Description: Compares two values and returns true if the left value is greater than the right.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true or false.
 *
 * Key Concepts:
 *   - Conditional Statements: Using if-else to make decisions in code.
 *   - Comparison Operators: The > operator checks if age is greater than 18.
 *   - Boolean Evaluation: The condition inside if evaluates to true or false.
 * ============================================================
 */

let age = 20;

if (age > 18) {
    console.log("You are allowed to vote!")
} else {
    console.log("You are not allowed  to vote!")
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script demonstrates the most fundamental form of conditional logic in JavaScript:
the if-else statement. It checks whether a person's age is above the voting threshold (18)
and prints a corresponding eligibility message.

CODE BREAKDOWN:
1. let age = 20;          — Declares a block-scoped variable and initializes it to 20.
2. if (age > 18) { ... }  — Evaluates the condition. Because 20 > 18 is true, the if block runs.
3. console.log(...)       — Outputs "You are allowed to vote!" to the console.
4. else { ... }           — Skipped entirely because the condition was true.

KEY CONCEPTS:
• Condition: An expression that resolves to true or false (a boolean).
• Block: Curly braces {} group multiple statements; here each branch has one statement.
• Comparison Operator > : Returns true when the left operand is greater than the right.

COMPARISON TABLE — if-else vs switch:
|---------------------|-----------------------------------|-----------------------------------|
| Feature             | if-else                           | switch                            |
|---------------------|-----------------------------------|-----------------------------------|
| Best for            | Ranges, complex conditions        | Discrete, exact values            |
| Syntax style        | Boolean expressions               | Strict equality (===) matching    |
| Readability         | Great for few branches            | Great for many constant cases     |
| Fall-through        | Not applicable                    | Occurs when break is omitted      |
|---------------------|-----------------------------------|-----------------------------------|

REAL-WORLD USE CASES:
• Age verification for restricted content (alcohol, gambling, voting).
• Minimum order value checks in e-commerce.
• Login status checks before showing protected UI.

COMMON MISTAKES:
• Using a single = (assignment) instead of === or > in the condition.
• Forgetting curly braces when adding a second statement to a branch.
• Not handling the edge case where age exactly equals 18 (should use >=).

KEY TAKEAWAY:
Master the if-else structure first; it is the backbone of decision-making in code.
Always pay attention to boundary values (e.g., 18 in this example) and use the
correct comparison operator for the requirement.
================================================================================
*/
