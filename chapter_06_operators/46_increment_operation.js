/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Post-Increment Operation (variable++)
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
 *   - Post-Increment (a++): Returns the original value of the variable before incrementing.
 *   - Example: let result = a++; assigns 34 to result, then increments a to 35.
 *   - Observation: console.log(result) prints 34, while console.log(a) prints 35.
 * ============================================================
 */

let a = 34;
let result = a++;
console.log(result);
console.log(a); 

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Post-Increment Operation (variable++) in a focused,
minimal example. It reinforces the core concept that post-increment returns
the original value of the variable and THEN increments it by 1.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let a = 34;
  - Initializes a with the value 34.

Step 2: let result = a++;
  - a++ returns the CURRENT value of a, which is 34.
  - 34 is assigned to result.
  - AFTER the assignment completes, a is incremented to 35.
  - After this line: result = 34, a = 35.

Step 3: console.log(result);
  - Outputs the value stored in result.
  - Output: 34

Step 4: console.log(a);
  - Outputs the incremented value of a.
  - Output: 35

================================================================================
                             KEY CONCEPTS
================================================================================

Post-Increment Behavior:
  - Expression evaluates to the original value.
  - Side effect (increment) happens after the value is used.
  - This is why result receives 34 even though a becomes 35.

Pre-Increment Contrast:
  - If this were let result = ++a;
  - a would become 35 FIRST, then 35 would be assigned to result.
  - Both result and a would be 35.

================================================================================
                          COMPARISON TABLE
================================================================================

| Code              | result | a (final) | Explanation                  |
|-------------------|--------|-----------|------------------------------|
| let result = a++; | 34     | 35        | Old value assigned, then inc |
| let result = ++a; | 35     | 35        | Incremented first, then assign|
| a++; (alone)      | N/A    | 35        | No assignment, just increment|
| ++a; (alone)      | N/A    | 35        | No assignment, just increment|

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Return Current, Prepare Next:
   function getNextTicket() { return ticketCounter++; }
   // Returns current ticket number, then readies the next.

2. Array Traversal:
   while (ptr < arr.length) { process(arr[ptr++]); }
   // Uses current index, then moves forward.

3. Score Submission:
   let roundScore = totalScore++;
   // Captures current total before bonus points are added.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Forgetting the side effect happens AFTER.
  let a = 10;
  console.log(a++); // prints 10, not 11.
  console.log(a);   // prints 11 (side effect visible here).

Mistake 2: Using increment twice on the same variable in one expression.
  let x = a++ + a++; // Undefined behavior territory, avoid it.

Mistake 3: Confusing increment with addition.
  a++; // changes a permanently.
  a + 1; // calculates a+1 but does NOT change a.

================================================================================
                            KEY TAKEAWAY
================================================================================

With post-increment (a++), the original value is returned and the variable is
incremented afterward. This is ideal for "use current, then advance" patterns
like array indexing and ID generation, but always be mindful of when the
increment actually takes effect.
================================================================================
*/