/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Introduction to the problem of repetition and how loops solve it.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Repetition: Manually writing multiple console.log statements is inefficient.
 *   - For Loop: A control structure that repeats a block of code a specified number of times.
 * ============================================================
 */

/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Introduction to the problem of repetition and how loops solve it.
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Repetition: Manually writing multiple console.log statements is inefficient.
 *   - For Loop: A control structure that repeats a block of code a specified number of times.
 * ============================================================
 */

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log("...");
console.log(10);

// For Loop
// Help you to repeat a block of code.

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file illustrates the fundamental problem that loops solve: repetition.
Without loops, if you want to print numbers 1 through 10, you must manually
write ten separate console.log statements. This approach is tedious, error-
prone, and does not scale. If you needed to print 1 to 10,000, it would be
impossible to write each line individually.

Loops are control structures that allow a block of code to be executed multiple
times. The "for" loop, in particular, is designed for situations where you know
in advance how many times you want to repeat an action (or you can calculate it).

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: console.log(1); through console.log(5);
        - Manually prints the first five numbers.
        - Demonstrates the verbosity and inefficiency of manual repetition.

Step 2: console.log("...");
        - A placeholder indicating that many more lines would be needed.

Step 3: console.log(10);
        - The final manual print statement.

Step 4: // For Loop
        // Help you to repeat a block of code.
        - A comment indicating the solution: using a for loop to automate
          the repetition that was done manually above.

KEY CONCEPTS:
-------------
- DRY Principle: "Don't Repeat Yourself." Loops help you avoid writing the
  same code over and over again.
- Repetition Structure: Any task that follows a pattern can usually be
  expressed as a loop.
- Scalability: A for loop can print 10 numbers, 10,000 numbers, or even an
  infinite series (with caution) using the same compact syntax.
- Counter Variable: A variable that tracks how many times the loop has run.

COMPARISON TABLE: Manual Repetition vs For Loop
------------------------------------------------
| Aspect             | Manual console.logs    | For Loop                 |
|--------------------|------------------------|--------------------------|
| Code Length        | Grows with each item   | Constant (3-4 lines)     |
| Maintainability    | Very Hard              | Very Easy                |
| Scalability        | None                   | Excellent                |
| Error Chance       | High (typos, skipping) | Low                      |
| Flexibility        | None                   | High (dynamic conditions)  |
| Performance        | Same                   | Same                     |

REAL-WORLD USE CASES:
---------------------
- Generating HTML table rows from an array of data.
- Processing every item in a shopping cart to calculate the total price.
- Animating 100 particles in a game engine using a single loop body.
- Sending follow-up emails to a list of 10,000 subscribers.
- Validating every field in a large form.

COMMON MISTAKES TO AVOID:
-------------------------
1. Writing repetitive console.log statements instead of recognizing a loop
   opportunity. Always ask: "Is there a pattern here that a loop could handle?"
2. Miscounting in manual repetition (e.g., skipping a number or duplicating one).
3. Hard-coding values that should be dynamic. Use variables and loops so the
   code adapts to different sizes of data.
4. Forgetting that loops exist when learning programming; beginners often
   write pages of repetitive code because they haven't internalized loop syntax.

KEY TAKEAWAY:
-------------
Whenever you find yourself writing the same or very similar lines of code
more than twice, stop and consider using a loop. The for loop is your primary
tool for counted repetition. It makes your code shorter, cleaner, easier to
maintain, and infinitely more scalable.

================================================================================
*/