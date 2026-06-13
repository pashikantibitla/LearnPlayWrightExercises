/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Comparison Operators (>, <, >=, <=)
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Comparison Operators: Evaluate the relationship between two values and return a boolean (true or false).
 *   - Greater Than (>): Returns true if the left value is larger than the right.
 *   - Less Than (<): Returns true if the left value is smaller than the right.
 *   - Greater Than or Equal To (>=): Returns true if the left value is greater than or equal to the right (logical OR of > and ===).
 *   - Less Than or Equal To (<=): Returns true if the left value is less than or equal to the right (logical OR of < and ===).
 * ============================================================
 */

// Comparsion Op - true / false - boolean

// > , < , >= , <= , == , === , !, !=, !===

// = -> Assignment opearator
// == -> losse comparsion ( sikh vs hindu )
// === -> strict comparsion ( sikh vs hindu , languge, living)


console.log(3 > 4);
console.log(3 < 4);
console.log(4 >= 4); // 4 > 4 or 4===4 -> or gate -> 
console.log(3 <= 4); // 3<4 or 3===4

// 10 > 5      // true
//10 < 5      // false
// 10 >= 10    // true
// 10 <= 9     // false

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates Relational Comparison Operators in JavaScript.

These operators evaluate the mathematical relationship between two values and
always return a boolean: true if the relationship holds, and false otherwise.
They are the foundation of conditional logic in programming.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: console.log(3 > 4);
  - Is 3 greater than 4? No.
  - Output: false

Step 2: console.log(3 < 4);
  - Is 3 less than 4? Yes.
  - Output: true

Step 3: console.log(4 >= 4);
  - Is 4 greater than OR equal to 4? Yes (equal condition is met).
  - Output: true
  - The >= operator is like an OR gate: (4 > 4) OR (4 === 4).

Step 4: console.log(3 <= 4);
  - Is 3 less than OR equal to 4? Yes (less than condition is met).
  - Output: true
  - The <= operator is like an OR gate: (3 < 4) OR (3 === 4).

================================================================================
                             KEY CONCEPTS
================================================================================

Greater Than (>):
  - Returns true if the left operand is strictly larger than the right.

Less Than (<):
  - Returns true if the left operand is strictly smaller than the right.

Greater Than or Equal To (>=):
  - Returns true if left is larger OR equal to the right.
  - Combines > and === with logical OR logic.

Less Than or Equal To (<=):
  - Returns true if left is smaller OR equal to the right.
  - Combines < and === with logical OR logic.

================================================================================
                          COMPARISON TABLE
================================================================================

| Operator | Meaning                  | 3 ? 4  | 4 ? 4  | 5 ? 4  |
|----------|--------------------------|--------|--------|--------|
| >        | Greater Than             | false  | false  | true   |
| <        | Less Than                | true   | false  | false  |
| >=       | Greater Than or Equal    | false  | true   | true   |
| <=       | Less Than or Equal       | true   | true   | false  |
| ===      | Strict Equal             | false  | true   | false  |
| !==      | Strict Not Equal         | true   | false  | true   |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Age Verification:
   if (age >= 18) { console.log("Adult"); }

2. Stock Threshold Check:
   if (stock <= 10) { console.log("Reorder needed"); }

3. Grade Classification:
   if (score > 90) { grade = "A"; } else if (score >= 80) { grade = "B"; }

4. Temperature Alerts:
   if (temperature < 0) { console.log("Freezing warning!"); }

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Confusing >= with => (arrow function syntax).
  if (x => 5) { ... } // WRONG: this declares an arrow function, not a comparison.
  if (x >= 5) { ... } // CORRECT.

Mistake 2: Confusing > with < (direction).
  if (5 > 10) { ... } // false; ensure the larger value is on the correct side.

Mistake 3: Comparing strings expecting numeric order.
  "10" < "2" // true, because string comparison is lexicographic (alphabetical).
  // Convert to numbers first: Number("10") < Number("2") // false.

================================================================================
                            KEY TAKEAWAY
================================================================================

Relational operators (> , < , >= , <=) return booleans and are essential for
making decisions in code. Remember that >= and <= are inclusive (they allow
equality), and always be cautious when comparing values of different types.
================================================================================
*/
