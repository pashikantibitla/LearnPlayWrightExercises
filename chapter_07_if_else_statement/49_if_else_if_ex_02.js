/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Using an if-else-if ladder to determine a letter grade from a numeric score.
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
 *   - if-else-if Ladder: Allows checking multiple conditions in sequence; only the first matching block executes.
 *   - Grade Mapping: Demonstrates mapping numeric ranges to categorical outputs (A, B, C, D, F).
 *   - Sequential Evaluation: Conditions are checked top-to-bottom, so order matters.
 * ============================================================
 */

let score = 78;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F- Fail");
    console.log("Rewartch all videoa nd give the test again");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script implements an if-else-if ladder to convert a numeric score into a letter grade.
The conditions are checked from top to bottom, and the first true block executes while
the rest are ignored.

CODE BREAKDOWN:
1. let score = 78;               — Initialize the test score.
2. if (score >= 90) { ... }      — Check for an A; false, so skip.
3. else if (score >= 80) { ... }  — Check for a B; false, so skip.
4. else if (score >= 70) { ... }  — Check for a C; 78 >= 70 is true, so print "C".
5. else if / else                 — Remaining branches are skipped.

KEY CONCEPTS:
• Sequential Evaluation: JavaScript evaluates conditions in order; order matters.
• Threshold Logic: Using >= ensures the boundary value belongs to the higher grade.
• Mutual Exclusivity: Only one grade can be assigned.

COMPARISON TABLE — Grade boundaries:
| Score Range | Grade |
|-------------|-------|
| >= 90       | A     |
| >= 80       | B     |
| >= 70       | C     |
| >= 60       | D     |
| < 60        | F     |

REAL-WORLD USE CASES:
• Academic grading systems.
• Loyalty tier assignment (Bronze, Silver, Gold).
• Risk-level classification (Low, Medium, High).

COMMON MISTAKES:
• Reversing the order (checking >= 60 before >= 90) causes everyone to get a D.
• Using > instead of >= excludes the exact boundary student.
• Forgetting the final else, leaving some scores unhandled.

KEY TAKEAWAY:
When building a ladder, always arrange conditions from most specific (highest threshold)
to least specific (lowest threshold) and include a final catch-all else.
================================================================================
*/
