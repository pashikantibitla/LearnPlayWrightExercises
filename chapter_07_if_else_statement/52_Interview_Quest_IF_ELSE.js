/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Demonstrating JavaScript truthy and falsy values in conditional statements.
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped variable.
 *     Input: Accepts a variable name and optionally an initial value assigned via direct value, variable, or expression.
 *     Return Type: void (declaration statement; does not return a value).
 *   - if / else
 *     Description: Conditional keywords that coerce the condition to a boolean before evaluating.
 *     Input: Accepts a boolean expression or any value coerced to boolean (direct value, variable, or expression).
 *     Return Type: void (control flow keywords; do not return a value).
 *   - console.log(value: any): void
 *     Description: Outputs a message to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Truthy Values: Non-empty strings, non-zero numbers, objects {}, and arrays [] evaluate to true in a condition.
 *   - Falsy Values: Empty strings "", null, undefined, NaN, and 0 evaluate to false in a condition.
 *   - Type Coercion in Conditions: JavaScript automatically converts the condition expression to a boolean.
 *   - Interview Relevance: Understanding truthy/falsy behavior is essential for writing robust conditionals and avoiding bugs.
 * ============================================================
 */

if ("hello") console.log("String is truthy"); // // "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");

if ("") console.log("Won't print");
if (null) console.log("Won't print");
if (undefined) console.log("Won't print");
if (NaN) console.log("Won't print");
if (0) console.log("Won't print");

// ANY NUMBER = 1,2,,3,34,32,2,- TRUTH
// 0= FALSE

let name = 0;
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}
/*
================================================================================
                         COMPREHENSIVE EXPLANATION
================================================================================

DETAILED EXPLANATION:
This script is a quick reference for JavaScript truthy and falsy values.
In a boolean context (like an if condition), JavaScript coerces values to true or false.
Knowing which values are truthy and which are falsy is essential for writing robust conditionals.

CODE BREAKDOWN:
1. if ("hello") ...      — Non-empty string → truthy.
2. if (42) ...             — Non-zero number → truthy.
3. if ({}) ...             — Any object, even empty → truthy.
4. if ([]) ...             — Any array, even empty → truthy.
5. if ("") ...             — Empty string → falsy.
6. if (null) ...           — null → falsy.
7. if (undefined) ...      — undefined → falsy.
8. if (NaN) ...            — Not-a-Number → falsy.
9. if (0) ...              — Zero → falsy.
10. let name = 0; if(name) ... — Demonstrates variable coercion.

KEY CONCEPTS:
• Type Coercion: JavaScript implicitly converts non-boolean values to boolean in conditions.
• Truthy: Any value not on the falsy list evaluates to true.
• Falsy: false, 0, "", null, undefined, NaN, and document.all (legacy).

COMPARISON TABLE — Truthy vs Falsy:
| Value           | Boolean Result | Category |
|-----------------|----------------|----------|
| "hello"         | true           | Truthy   |
| 42              | true           | Truthy   |
| {}              | true           | Truthy   |
| []              | true           | Truthy   |
| ""              | false          | Falsy    |
| 0               | false          | Falsy    |
| null            | false          | Falsy    |
| undefined       | false          | Falsy    |
| NaN             | false          | Falsy    |

REAL-WORLD USE CASES:
• Guard clauses: if (!user) return; — handles null/undefined.
• Form validation: if (input.value.trim()) { ... }.
• Feature flags: if (process.env.ENABLE_X) { ... }.

COMMON MISTAKES:
• Assuming empty object {} or array [] are falsy (they are truthy!).
• Forgetting that 0 is falsy, causing bugs in numeric checks like if (count) ...
• Confusing null and undefined; both are falsy but have different semantics.

KEY TAKEAWAY:
Memorize the six core falsy values. When in doubt, use explicit comparisons
(e.g., if (name !== null && name !== undefined)) rather than relying solely on truthiness.
================================================================================
*/
