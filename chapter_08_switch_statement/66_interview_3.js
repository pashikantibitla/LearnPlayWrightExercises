/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Duplicate case values in a switch statement — demonstrates that JavaScript
 *        only honors the first duplicate case and the second one is unreachable.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - let x: number
 *     Description: Declares a block-scoped variable named x and initializes it with a number value.
 *     Input: Receives a variable name and an optional initial value directly assigned via =.
 *     Return Type: undefined (no return; it binds a value to an identifier in the current scope).
 *   - let b1: number / let b2: number
 *     Description: Declares block-scoped variables inside individual case blocks and initializes them with number values.
 *     Input: Receives a variable name and an optional initial value directly assigned via =.
 *     Return Type: undefined (no return; it binds a value to an identifier in the current scope).
 *
 * Built-in Methods/Keywords Used:
 *   - switch (expression)
 *     Description: Evaluates an expression and matches its value against case labels using strict equality (===).
 *     Input: Accepts an expression, variable, or direct value to evaluate and compare.
 *     Return Type: void (undefined) — does not return a value; controls program flow.
 *   - case value
 *     Description: Labels a block of code; duplicate values after the first are ignored and unreachable.
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
 *   - Duplicate cases: JavaScript does not throw an error for duplicate case values, but only the first one can ever match.
 *   - Unreachable code: The second case 10 is unreachable because the first case 10 handles the match and then breaks.
 *   - Block scoping with let: Variables declared with let inside a case exist in the block scope of the switch.
 *   - console.log: Used to display the value of the variable defined inside the first matched case.
 * ============================================================
 */

let x = 10;
switch (x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 2;
        console.log(b2);
        break;
    default:
        console.log("d");

}

// IT will allow you to have the duplicate case with first as the usage. 

/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script proves that JavaScript allows duplicate case values in a switch statement,
but only the first matching case is ever reachable. The second duplicate is dead code.
This is a common interview trap question.

CODE BREAKDOWN:
1. let x = 10;                      — Expression to match.
2. case 10: let b1 = 1; ... break;  — First match runs; b1 is declared and logged.
3. case 10: let b2 = 2; ... break;  — Unreachable because the first case 10 already handled the match.
4. default: console.log("d");       — Skipped because a case matched.

KEY CONCEPTS:
• Duplicate Cases: Permitted by syntax, but the second is unreachable.
• Unreachable Code: Statements that can never execute; linters often flag them.
• Block Scope with let: Variables declared inside a case exist in the switch block scope.
  Be cautious because duplicate let declarations in the same block can throw a
  SyntaxError even if one is unreachable.

COMPARISON TABLE — First vs Second Duplicate:
| Property     | First case 10          | Second case 10       |
|--------------|------------------------|----------------------|
| Reachability | Reachable              | Unreachable          |
| Execution    | Runs if x === 10       | Never runs           |
| Best Practice| Keep unique case values| Remove duplicates    |

REAL-WORLD USE CASES:
• Understanding legacy code that may have accidental duplicates.
• Writing linters or code-review checklists.
• Interview preparation for JavaScript edge cases.

COMMON MISTAKES:
• Thinking JavaScript will throw an error for duplicate cases (it does not at parse time).
• Declaring the same let variable in two cases without braces, causing a SyntaxError.
• Relying on fall-through to reach the second duplicate (it won't happen).

KEY TAKEAWAY:
Never duplicate case values. It creates confusion and can trigger subtle scope errors
with let and const. Keep switch cases unique and well-documented.
================================================================================
*/
