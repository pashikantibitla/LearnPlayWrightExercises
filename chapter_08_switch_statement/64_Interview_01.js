/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Switch statement fall-through with string values — demonstrates what
 *        happens when no break is used and the input does not match any case.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - let fruit: string
 *     Description: Declares a block-scoped variable named fruit and initializes it with a string value.
 *     Input: Receives a variable name and an optional initial value directly assigned via =.
 *     Return Type: undefined (no return; it binds a value to an identifier in the current scope).
 *
 * Built-in Methods/Keywords Used:
 *   - switch (expression)
 *     Description: Evaluates an expression and matches its value against case labels using strict equality (===).
 *     Input: Accepts an expression, variable, or direct value to evaluate and compare.
 *     Return Type: void (undefined) — does not return a value; controls program flow.
 *   - case value
 *     Description: Labels a block of code to execute when the switch expression matches this value.
 *     Input: Receives a literal value, variable, or expression to compare against the switch expression.
 *     Return Type: void (undefined) — does not return a value; serves as a flow-control label.
 *   - default
 *     Description: Labels a block of code to execute when no case matches the switch expression.
 *     Input: No input required; used as a standalone keyword in a switch statement.
 *     Return Type: void (undefined) — does not return a value; serves as a fallback flow-control label.
 *
 * Key Concepts:
 *   - Fall-through behavior: Without break, a matched case executes and continues into all subsequent cases.
 *   - No match scenario: When no case matches, execution jumps directly to the default block.
 *   - String comparison: case values are compared to the switch expression using strict equality, so strings must match exactly.
 *   - console.log: Used to trace which labels are reached during execution.
 * ============================================================
 */

let fruit = "bmango";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
    case "banana":
        console.log("Banana selected");
    case "cherry":
        console.log("Cherry selected");
    case "date":
        console.log("Date selected");
    default:
        console.log("Default reached");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script illustrates two switch behaviors: (1) fall-through when break is omitted,
and (2) the default case executing when no case matches. The input "bmango" does not
match any fruit case, so execution jumps directly to default.

CODE BREAKDOWN:
1. let fruit = "bmango";             — Input string (note the typo / prefix 'b').
2. case "apple": ...                 — No match.
3. case "banana": ...               — No match.
4. case "cherry": ...               — No match.
5. case "date": ...                 — No match.
6. default: console.log("Default reached"); — Executes because no case matched.

KEY CONCEPTS:
• No Match → Default: When strict equality fails for all cases, default runs.
• Fall-Through: If a case had matched without break, all subsequent cases would also run.
• String Sensitivity: "bmango" is not the same as "mango" or "banana".

COMPARISON TABLE — Matched vs Unmatched:
| Input     | Match Found? | Output (no break)                         |
|-----------|--------------|-------------------------------------------|
| "apple"   | Yes (case 0) | Apple, Banana, Cherry, Date, Default      |
| "bmango"  | No           | Default reached                           |

REAL-WORLD USE CASES:
• Input sanitization (unknown commands trigger a help message).
• Feature flags (unrecognized flag falls back to safe defaults).
• Menu-driven applications (invalid choice → "Please select a valid option").

COMMON MISTAKES:
• Assuming default only runs after a matched case; it runs when NO case matches.
• Typos in strings ("bmango" instead of "mango") leading to unexpected default.
• Omitting break on purpose without understanding the consequences.

KEY TAKEAWAY:
The default case is your safety net for unhandled values. Use it to provide meaningful
feedback rather than silent failures. Pay close attention to string accuracy in case labels.
================================================================================
*/
