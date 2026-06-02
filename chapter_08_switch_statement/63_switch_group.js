/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Grouping multiple case labels in a switch statement — demonstrates how
 *        several values can share the same execution block without repetition.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - let browser: string
 *     Description: Declares a block-scoped variable named browser and initializes it with a string value.
 *     Input: Receives a variable name and an optional initial value directly assigned via =.
 *     Return Type: undefined (no return; it binds a value to an identifier in the current scope).
 *
 * Built-in Methods/Keywords Used:
 *   - switch (expression)
 *     Description: Evaluates an expression and matches its value against case labels using strict equality (===).
 *     Input: Accepts an expression, variable, or direct value to evaluate and compare.
 *     Return Type: void (undefined) — does not return a value; controls program flow.
 *   - case value
 *     Description: Labels a block of code; multiple consecutive case labels can point to the same block.
 *     Input: Receives a literal value, variable, or expression to compare against the switch expression.
 *     Return Type: void (undefined) — does not return a value; serves as a flow-control label.
 *   - break
 *     Description: Immediately exits the nearest enclosing switch, loop, or labeled statement.
 *     Input: No input required; used as a standalone keyword.
 *     Return Type: void (undefined) — does not return a value; only alters control flow.
 *   - default
 *     Description: Labels a block of code to execute when no case matches the switch expression.
 *     Input: No input required; used as a standalone keyword in a switch statement.
 *     Return Type: void (undefined) — does not return a value; serves as a fallback flow-control label.
 *
 * Key Concepts:
 *   - Case grouping (fall-through by design): Stacking case labels without break between them causes them to share the same block.
 *   - Common behavior for related values: Useful when different inputs should trigger the same logic (e.g., browsers based on Chromium).
 *   - Strict equality matching: switch uses === to compare the expression with each case value.
 *   - console.log: Used to output the classification of the matched browser group.
 * ============================================================
 */

let browser = "Firefox";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple browser — uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknown browser — manual testing needed");

}

/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script demonstrates case grouping in a switch statement. Multiple case labels
can be stacked together so they share the same block of code. This is useful when
different inputs belong to the same category (e.g., multiple Chromium-based browsers).

CODE BREAKDOWN:
1. let browser = "Firefox";          — Input string.
2. case "Chrome": case "Edge": ...    — Grouped cases with no break between them.
3. console.log("Chromium Project!"); — Shared output for the group.
4. break;                             — Exits after the shared block.
5. case "Firefox": ...               — Separate block for Mozilla.
6. default: ...                       — Catch-all for unknown browsers.

KEY CONCEPTS:
• Case Grouping: Stacking case labels causes them to fall-through intentionally into
  the same execution block.
• Shared Behavior: Reduces duplication when many values need the same logic.
• Strict Equality: Strings must match exactly in value and case.

COMPARISON TABLE — Grouped vs Individual Cases:
| Style      | Code Duplication | Readability | Best For                  |
|------------|------------------|-------------|---------------------------|
| Grouped    | Low              | High        | Related values            |
| Individual | High             | Medium      | Unique actions per value  |

REAL-WORLD USE CASES:
• Browser-specific polyfills (Chromium vs Gecko vs WebKit).
• Region-based pricing (US, CA, MX → North America).
• Role grouping (admin, super-admin → full access).

COMMON MISTAKES:
• Accidentally adding a break between grouped cases, preventing the shared block from running.
• Forgetting the final break after the grouped block.
• Case-sensitive string mismatches ("chrome" vs "Chrome").

KEY TAKEAWAY:
Group cases to keep switch statements DRY (Don't Repeat Yourself). Always double-check
that grouped cases do not have unintended breaks between them.
================================================================================
*/
