/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Practical do...while loop example with a retry counter.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(message1: any, message2?: any): void
 *     Description: Outputs multiple arguments separated by a space to the console.
 *     Input: Accepts any data type as direct values, variables, or expressions.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Executes the loop body first, then checks the condition for subsequent iterations.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable to track retries.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases the retry counter by 1 after each attempt.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Retry Logic: A real-world pattern where an action is performed at least once before deciding to repeat.
 *   - Post-test Evaluation: The decision to continue happens after the action, not before.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Practical do...while loop example with a retry counter.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(message1: any, message2?: any): void
 *     Description: Outputs multiple arguments separated by a space to the console.
 *     Input: Accepts any data type as direct values, variables, or expressions.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - do...while (condition): keyword
 *     Description: Executes the loop body first, then checks the condition for subsequent iterations.
 *     Input: Takes a boolean expression or condition that evaluates to true or false.
 *     Return Type: void (keyword behavior) — does not return a value; controls program flow.
 *   - let: keyword
 *     Description: Declares a block-scoped variable to track retries.
 *     Input: Takes a variable identifier and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void (keyword behavior) — does not return a value; binds the identifier to the value in the current scope.
 *   - increment operator (++): operator
 *     Description: Increases the retry counter by 1 after each attempt.
 *     Input: Takes a single numeric variable (prefix or postfix).
 *     Return Type: number — returns the incremented value if used as an expression, otherwise modifies the variable in place.
 * 
 * Key Concepts:
 *   - Retry Logic: A real-world pattern where an action is performed at least once before deciding to repeat.
 *   - Post-test Evaluation: The decision to continue happens after the action, not before.
 * ============================================================
 */

let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file presents a practical, real-world example of the do...while loop:
a retry counter. In many applications, you need to attempt an action at least
once and then decide whether to try again based on the outcome. The do...while
loop is perfect for this because it guarantees that the first attempt occurs
before any condition is checked.

The loop executes a block of code (simulated by console.log statements) and
increments a retry counter. After each execution, it checks whether the retry
counter has reached the maximum allowed attempts (3). Because the check happens
after the body, the code runs for attempt 0, 1, and 2, then stops when retry
becomes 3 and the condition retry < 3 evaluates to false.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: let retry = 0;
        - Initializes a counter to track how many times the action has been
          attempted. This must happen before the do...while block.

Step 2: do { ... } while (retry < 3);
        - The do keyword signals that the body will execute before the
          condition is evaluated.

Step 3: console.log("Execute a code!");
        - Simulates the primary action that needs to be retried.
        - This runs on EVERY attempt, including the very first one.

Step 4: console.log("Retrying.....", retry);
        - Prints the current retry number. The comma separator adds a space
          between the string and the number automatically.
        - Output: "Retrying..... 0", "Retrying..... 1", "Retrying..... 2".

Step 5: retry++;
        - Increments the counter after each attempt.
        - Without this, the condition would never become false.

Step 6: while (retry < 3);
        - After the third increment, retry equals 3.
        - 3 < 3 is false, so the loop terminates.
        - Total executions: exactly 3.

KEY CONCEPTS:
-------------
- Retry Pattern: A common design pattern where an operation is attempted and,
  if it fails, is attempted again up to a maximum number of times.
- Post-test Guarantee: The do...while ensures the operation runs at least
  once, which is essential when you don't know the outcome until you try.
- Counter Tracking: A simple numeric variable is sufficient to track state
  across loop iterations.
- Console Output with Multiple Arguments: console.log can accept multiple
  arguments separated by commas, inserting a space between them.

COMPARISON TABLE: Retry Patterns
----------------------------------
| Pattern            | Loop Type     | Guarantees 1st Try? | Best For              |
|--------------------|---------------|---------------------|-----------------------|
| Pre-check, then act| while         | No                  | Known bad state       |
| Act, then check    | do...while    | Yes                 | Unknown outcome       |
| Fixed N times      | for           | Yes                 | Deterministic tasks   |
| Act until success  | while/break   | Depends             | Conditional exit      |

REAL-WORLD USE CASES:
---------------------
- API Requests: Attempt a fetch, and if it fails (network timeout), retry up
  to 3 times before giving up and showing an error to the user.
- Database Connections: Try to open a database connection. If it fails, wait
  2 seconds and retry up to a maximum of 5 attempts.
- User Prompts: Ask a user for their age. If the input is invalid (negative
  or not a number), prompt again until valid or until max attempts reached.
- File Uploads: Try uploading a file chunk. If the server responds with an
  error, retry the chunk before moving to the next one.
- Batch Processing: Process a batch of records. If any record fails, retry
  the entire batch up to a configured limit.

COMMON MISTAKES TO AVOID:
-------------------------
1. Forgetting the semicolon after while (condition); in a do...while.
   This is one of the few places in JavaScript where a semicolon is mandatory.
2. Incrementing the counter before logging it, which shifts the displayed
   numbers and makes debugging confusing.
3. Using the wrong comparison, e.g., retry <= 3, which results in 4 attempts
   instead of 3.
4. Not implementing a delay between retries, which can overwhelm a server
   or network with instantaneous repeated requests.
5. Using do...when a simple for loop would be cleaner, just because you are
   excited about the "guaranteed execution" feature. Choose the right tool.

KEY TAKEAWAY:
-------------
The do...while loop is the standard tool for "try at least once, then decide"
scenarios. In retry logic, user menus, and any situation where the outcome
is unknown until after the first attempt, prefer do...while over while. Track
your attempts with a counter, validate your boundary condition carefully, and
always remember the mandatory semicolon at the end.

================================================================================
*/