/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Grade calculator using an if-else-if ladder to map numeric marks to letter grades.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else if / else
 *     Description: Chained conditional keywords that check multiple conditions sequentially.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - >= (greater than or equal to operator)
 *     Description: Compares two values and returns true if the left value is greater than or equal to the right.
 *     Input: Accepts two operands (direct values, variables, or expressions) to compare.
 *     Return Type: boolean — returns true or false.
 *
 * Key Concepts:
 *   - if-else-if Ladder: Evaluates conditions from top to bottom; the first true condition determines the executed block.
 *   - Grade Mapping: Converts continuous numeric data (marks) into discrete categories (A, B, C, D, Fail).
 *   - Threshold Checks: Uses >= operators to define grade boundaries.
 *   - Fallback Handling: The final else block handles all marks below the lowest threshold (fail condition).
 * ============================================================
 */

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script maps numeric marks to letter grades using an if-else-if ladder.
It is a classic example of threshold-based classification and demonstrates
the importance of ordering conditions correctly.

CODE BREAKDOWN:
1. let marks = 85;               — Initialize marks.
2. if (marks >= 90) { ... }      — A grade threshold.
3. else if (marks >= 80) { ... } — B grade threshold.
4. else if (marks >= 70) { ... } — C grade threshold.
5. else if (marks >= 60) { ... } — D grade threshold.
6. else { ... }                   — Fail for anything below 60.

KEY CONCEPTS:
• Threshold Logic: >= includes the boundary value in the higher category.
• Top-Down Evaluation: The first true condition wins; subsequent branches are ignored.
• Fallback: The final else catches all unmatched (failing) scores.

COMPARISON TABLE — Grade Mapping:
| Marks Range | Grade |
|-------------|-------|
| 90 - 100    | A     |
| 80 - 89     | B     |
| 70 - 79     | C     |
| 60 - 69     | D     |
| 0 - 59      | Fail  |

REAL-WORLD USE CASES:
• School / university grading portals.
• Performance rating systems (Exceeds, Meets, Needs Improvement).
• Health risk categorization (BMI ranges).

COMMON MISTAKES:
• Writing >= 60 before >= 90; the lower threshold would match first and assign a D.
• Forgetting the final else, leaving scores unhandled.
• Using == instead of === when comparing (not an issue with numbers, but a habit to avoid).

KEY TAKEAWAY:
Arrange thresholds in descending order and always provide a catch-all else.
Test boundary values (e.g., 89, 90, 59, 60) to verify correctness.
================================================================================
*/
