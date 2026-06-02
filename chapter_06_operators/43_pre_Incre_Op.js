/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Pre-Increment Operator (++variable)
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
 *   - Pre-Increment (++a): Increments the variable value by 1 BEFORE the value is used in the expression.
 *   - Example: let b = ++a; first increments a to 11, then assigns 11 to b.
 *   - Standalone ++b: Increments b by 1 directly.
 * ============================================================
 */

// pre-increment value
let a = 10;
console.log(`the value of a is ${a}`);
let b = ++a ; // b=11
console.log(`the value of a is ${a}, the value of b is ${b} `);
++b; 
console.log(`the value if a is ${a} `);
console.log(`the value of b is ${b}`);

/*
================================================================================
                           DETAILED EXPLANATION
================================================================================

This file demonstrates the Pre-Increment Operator (++variable) in JavaScript.

Pre-increment increases the variable's value by 1 BEFORE the value is used in
the current expression. This is a crucial distinction from post-increment,
where the original value is used first and then incremented.

================================================================================
                           STEP-BY-STEP CODE BREAKDOWN
================================================================================

Step 1: let a = 10;
  - Initializes a with the value 10.

Step 2: console.log(`the value of a is ${a}`);
  - Outputs the initial value of a.
  - Output: the value of a is 10

Step 3: let b = ++a;
  - ++a increments a FIRST: a becomes 11.
  - THEN the new value (11) is assigned to b.
  - After this line: a = 11, b = 11.

Step 4: console.log(`the value of a is ${a}, the value of b is ${b}`);
  - Outputs both values.
  - Output: the value of a is 11, the value of b is 11

Step 5: ++b;
  - Increments b by 1 directly.
  - b becomes 12.

Step 6: console.log(`the value if a is ${a}`);
  - a was not changed in step 5, so a is still 11.
  - Output: the value if a is 11

Step 7: console.log(`the value of b is ${b}`);
  - b was incremented in step 5, so b is now 12.
  - Output: the value of b is 12

================================================================================
                             KEY CONCEPTS
================================================================================

Pre-Increment (++variable):
  - Increments the variable first.
  - The incremented value is then used in the expression.
  - Example: let b = ++a; // a becomes 11, then b = 11.

Post-Increment (variable++):
  - Uses the current value in the expression first.
  - Then increments the variable afterward.
  - Example: let b = a++; // b = 10, then a becomes 11.

================================================================================
                          COMPARISON TABLE
================================================================================

| Operation | Initial a | Expression    | Result b | Final a | Description        |
|-----------|-----------|---------------|----------|---------|--------------------|
| let b=++a| 10        | let b = ++a   | 11       | 11      | Increment, assign  |
| let b=a++| 10        | let b = a++   | 10       | 11      | Assign, increment  |
| ++a;     | 10        | standalone    | N/A      | 11      | Just increment a   |
| a++;     | 10        | standalone    | N/A      | 11      | Just increment a   |

================================================================================
                          REAL-WORLD USE CASES
================================================================================

1. Zero-Based Index Adjustment:
   let index = -1;
   let item = array[++index]; // get the first element (index 0).

2. Counter Updates in Loops:
   while (counter < limit) { process(++counter); }

3. Game Turn Management:
   let currentPlayer = 0;
   let next = ++currentPlayer; // move to next player immediately.

4. Pagination:
   let page = 0;
   let nextPage = ++page; // increment then use.

================================================================================
                          COMMON MISTAKES TO AVOID
================================================================================

Mistake 1: Confusing pre and post in assignments.
  let a = 5;
  let b = a++; // b = 5, a = 6 (post).
  let c = ++a; // a = 7, c = 7 (pre).

Mistake 2: Using increment in complex expressions without clarity.
  let result = ++a + a++; // Confusing and behavior varies. Split into two lines.

Mistake 3: Incrementing a const variable.
  const x = 5;
  ++x; // ERROR: cannot reassign a const.

================================================================================
                            KEY TAKEAWAY
================================================================================

++variable increments FIRST and returns the new value. variable++ returns the
old value and increments AFTER. In standalone use, they behave identically,
but inside expressions, the difference is critical. Choose the one that matches
your logic and avoid mixing both in a single expression.
================================================================================
*/