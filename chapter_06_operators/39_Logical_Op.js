/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Logical Operators (&&, ||, !)
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
 *   - Logical AND (&&): Returns true only if both operands are true.
 *   - Logical OR (||): Returns true if at least one operand is true.
 *   - Logical NOT (!): Inverts the boolean value of the operand.
 *   - Inequality (!=): Checks if two values are not equal (loose inequality).
 * ============================================================
 */

// && -> AND Gate
// || -> OR Gate

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // Not

console.log(5 != "g");  // Value 5, g ! that true, 

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates Logical Operators in JavaScript: AND (&&), OR (||),
and NOT (!). These operators are used to combine or invert boolean conditions
and are essential for building complex conditional logic.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let a = true; let b = false;
  - Initializes a boolean variable a to true.
  - Initializes a boolean variable b to false.

Step 2: console.log(a && b);
  - The && (AND) operator returns true ONLY if both operands are true.
  - true && false -> false.
  - Output: false

Step 3: console.log(a || b);
  - The || (OR) operator returns true if AT LEAST ONE operand is true.
  - true || false -> true.
  - Output: true

Step 4: console.log(!a);
  - The ! (NOT) operator inverts the boolean value.
  - !true -> false.
  - Output: false

Step 5: console.log(5 != "g");
  - The != operator checks loose inequality.
  - Number 5 vs string "g": they are not equal.
  - Output: true
  - Note: !== is the strict inequality counterpart and is generally preferred.

================================================================================
                             KEY CONCEPTS
================================================================================

Logical AND (&&):
  - Returns true only if BOTH sides are true.
  - Truth table: true && true = true; all other combos = false.
  - Also supports short-circuit evaluation: if the left side is false, the
    right side is not evaluated at all.

Logical OR (||):
  - Returns true if AT LEAST ONE side is true.
  - Truth table: false || false = false; all other combos = true.
  - Also supports short-circuit evaluation: if the left side is true, the
    right side is not evaluated at all.

Logical NOT (!):
  - Inverts the boolean value.
  - !true = false; !false = true.
  - Double negation (!!) can coerce a value to its boolean equivalent.

================================================================================
                          COMPARISON TABLE
================================================================================

| a     | b     | a && b | a || b | !a    | !b    |
|-------|-------|--------|--------|-------|-------|
| true  | true  | true   | true   | false | false |
| true  | false | false  | true   | false | true  |
| false | true  | false  | true   | true  | false |
| false | false | false  | false  | true  | true  |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Login Validation:
   if (isLoggedIn && hasPermission) { openDashboard(); }

2. Default Values (before ?? operator):
   let username = input || "Guest"; // fallback if input is falsy.

3. Feature Flags:
   if (featureEnabled && user.isBetaTester) { showNewFeature(); }

4. Guard Clauses:
   if (!data) { return; } // exit early if data is missing.

5. Range Checks:
   if (age >= 18 && age <= 65) { console.log("Eligible"); }

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Using & or | instead of && or ||.
  & and | are BITWISE operators, not logical. They operate on binary digits.
  Use && and || for boolean logic.

Mistake 2: Assuming || returns a boolean.
  let x = 0 || "default"; // Returns "default", not true.
  // || returns the first truthy value or the last operand.

Mistake 3: Complex conditions without parentheses.
  if (a && b || c) // Ambiguous. Use: if ((a && b) || c) for clarity.

Mistake 4: Confusing != with !==.
  5 != "5"  // false (loose).
  5 !== "5" // true (strict). Prefer !== in modern code.

================================================================================
                            KEY TAKEAWAY
================================================================================

Logical operators (&&, ||, !) are the building blocks of decision-making in
code. Remember short-circuit behavior, always use strict equality/inequality
(===, !==), and parenthesize complex conditions for readability.
================================================================================
*/