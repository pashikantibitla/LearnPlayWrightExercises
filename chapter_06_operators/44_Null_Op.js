/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Nullish Coalescing Operator (??)
 * 
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Accepts a variable name and an optional initial value as a direct value, variable, or expression.
 *     Return Type: void — the declaration does not return a value; it creates a variable binding in the current scope.
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Nullish Coalescing (??): Returns the right-hand operand when the left-hand operand is null or undefined; otherwise returns the left-hand operand.
 *   - Difference from ||: ?? only checks for null/undefined, whereas || treats all falsy values (0, "", false) as fallback triggers.
 *   - null Comparisons: null >= 0 is true because relational operators coerce null to 0, but null === 0 is false.
 * ============================================================
 */

//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

let amul = null;
let milk_quantity_required = amul ?? "sangam";
console.log(milk_quantity_required);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Nullish Coalescing Operator (??) in JavaScript.

Introduced in ES2020, ?? returns the right-hand operand ONLY when the left-hand
operand is null or undefined. Unlike the logical OR (||), it does NOT treat
other falsy values (0, "", false) as triggers for the fallback.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: console.log(null >= 0);
  - Relational operators coerce null to 0.
  - 0 >= 0 is true.
  - Output: true
  - WARNING: This is different from null == 0, which is false.

Step 2: console.log(null === 0);
  - Strict equality checks type and value.
  - null is not the same type or value as 0.
  - Output: false

Step 3: let amul = null;
  - Declares a variable explicitly set to null.

Step 4: let milk_quantity_required = amul ?? "sangam";
  - amul is null, so the ?? operator returns the fallback "sangam".
  - If amul were 0 or "", it would return 0 or "" (unlike ||).
  - milk_quantity_required becomes "sangam".

Step 5: console.log(milk_quantity_required);
  - Output: sangam

================================================================================
                             KEY CONCEPTS
================================================================================

Nullish Coalescing (??):
  - Returns right-hand side if left-hand side is null or undefined.
  - Returns left-hand side for ANY other value, including 0, "", and false.

Difference from ||:
  - || treats ALL falsy values (0, "", false, null, undefined, NaN) as triggers.
  - ?? only treats null and undefined as triggers.
  - ?? is safer when 0, "", or false are valid values you want to keep.

================================================================================
                          COMPARISON TABLE
================================================================================

| Value of x   | x || "fallback" | x ?? "fallback" | Notes                      |
|--------------|-----------------|-----------------|----------------------------|
| null         | "fallback"      | "fallback"      | Both trigger fallback      |
| undefined    | "fallback"      | "fallback"      | Both trigger fallback      |
| 0            | "fallback"      | 0               | ?? preserves valid 0       |
| ""           | "fallback"      | ""              | ?? preserves empty string  |
| false        | "fallback"      | false           | ?? preserves false         |
| NaN          | "fallback"      | NaN             | ?? preserves NaN           |
| "hello"      | "hello"         | "hello"         | Both return truthy value   |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Default Config Values (where 0 is valid):
   let timeout = config.timeout ?? 3000; // 0 is a valid timeout.

2. API Response Fallbacks:
   let username = apiResponse.username ?? "Anonymous";

3. Preserving Empty Strings:
   let displayName = userInput ?? "No name provided";
   // If userInput is "", it keeps the empty string, not the fallback.

4. Playwright Config:
   let retries = process.env.RETRIES ?? 2; // 0 retries is valid.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using || when you mean ??.
  let count = 0 || 10; // Returns 10. But 0 might be a valid count.
  let count = 0 ?? 10; // Returns 0. Correct.

Mistake 2: Combining ?? with && or || without parentheses.
  let x = a || b ?? c; // SyntaxError in some cases.
  let x = a || (b ?? c); // CORRECT: use explicit parentheses.

Mistake 3: Confusing null with undefined in object properties.
  let obj = { name: undefined };
  let val = obj.name ?? "default"; // "default" because undefined is nullish.
  let obj2 = { name: null };
  let val2 = obj2.name ?? "default"; // "default" because null is nullish.

================================================================================
                            KEY TAKEAWAY
================================================================================

Use ?? when you want to fallback ONLY for null or undefined, preserving other
falsy values like 0, "", and false. Use || when any falsy value should trigger
the fallback. Parenthesize mixed expressions to avoid syntax errors.
================================================================================
*/
