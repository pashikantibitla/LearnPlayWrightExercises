/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Post-Increment Operator (variable++)
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
 *   - Template Literals (`...${...}...`)
 *     Description: Allows embedded expressions inside string literals using backticks for formatted output.
 *     Input: Accepts string content with embedded expressions as direct values, variables, or expressions inside ${}.
 *     Return Type: string — returns the evaluated string with interpolated values.
 * 
 * Key Concepts:
 *   - Post-Increment (a++): Uses the current value of the variable in the expression FIRST, then increments it by 1.
 *   - Example: let b = a++; assigns the current value of a (10) to b, then increments a to 11.
 *   - Standalone b++: Increments b by 1 after its current value is used.
 * ============================================================
 */

// pre-increment value
let a = 10;
console.log(`the value of a is ${a}`);
let b = a++ ; // b=11
console.log(`the value of a is ${a}, the value of b is ${b} `);
b++; 
console.log(`the value if a is ${a} `);
console.log(`the value of b is ${b}`);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Post-Increment Operator (variable++) in JavaScript.

Post-increment uses the CURRENT value of the variable in the expression FIRST,
and THEN increments the variable by 1. This is the opposite of pre-increment,
which increments first and then uses the new value.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let a = 10;
  - Initializes a with the value 10.

Step 2: console.log(`the value of a is ${a}`);
  - Outputs the initial value.
  - Output: the value of a is 10

Step 3: let b = a++;
  - a++ returns the CURRENT value of a (10) and assigns it to b.
  - AFTER the assignment, a is incremented to 11.
  - After this line: b = 10, a = 11.

Step 4: console.log(`the value of a is ${a}, the value of b is ${b}`);
  - Outputs updated values.
  - Output: the value of a is 11, the value of b is 10

Step 5: b++;
  - Increments b by 1 after its current value is used.
  - Since it's standalone, b simply becomes 11.

Step 6: console.log(`the value if a is ${a}`);
  - a remains 11 (unchanged since step 3).
  - Output: the value if a is 11

Step 7: console.log(`the value of b is ${b}`);
  - b was incremented to 11 in step 5.
  - Output: the value of b is 11

================================================================================
                             KEY CONCEPTS
================================================================================

Post-Increment (variable++):
  - Returns the original value first.
  - Then increments the variable by 1.
  - Example: let b = a++; // b gets old value, a becomes a+1.

Pre-Increment (++variable):
  - Increments the variable first.
  - Returns the new incremented value.
  - Example: let b = ++a; // a becomes a+1, b gets new value.

================================================================================
                          COMPARISON TABLE
================================================================================

| Operation  | Initial a | Expression      | b gets | Final a | Description        |
|------------|-----------|-----------------|--------|---------|--------------------|
| let b=a++  | 10        | let b = a++     | 10     | 11      | Use old, increment   |
| let b=++a  | 10        | let b = ++a     | 11     | 11      | Increment, use new |
| a++;       | 10        | standalone      | N/A    | 11      | Simple increment     |
| ++a;       | 10        | standalone      | N/A    | 11      | Simple increment     |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Loop Counters:
   for (let i = 0; i < 5; i++) { ... } // classic post-increment in loops.

2. Array Indexing:
   let index = 0;
   let first = arr[index++]; // get arr[0], then move to next index.

3. ID Generation:
   let nextId = currentId++; // assign current, then prepare next.

4. Pagination:
   let currentPage = 1;
   console.log("Showing page " + currentPage++); // show then advance.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Expecting the incremented value immediately in the same line.
  let a = 5;
  let b = a++;
  console.log(b); // 5 (not 6!). a is 6, but b got the old value.

Mistake 2: Using post-increment when you need the new value.
  let a = 5;
  if (a++ > 5) { ... } // false, because 5 > 5 is false.
  // Use ++a if you want the incremented value in the comparison.

Mistake 3: Mixing pre and post in one expression.
  let x = a++ + ++a; // Confusing and hard to predict. Avoid this.

================================================================================
                            KEY TAKEAWAY
================================================================================

variable++ gives you the OLD value first, then increments. Use it when you
need the current value before advancing (e.g., array indexing, ID assignment).
Use ++variable when you need the NEW value immediately. Never mix both in a
single expression.
================================================================================
*/