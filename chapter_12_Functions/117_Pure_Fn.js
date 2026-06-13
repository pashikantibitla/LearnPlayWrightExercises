// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.


// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));

// ❌ Impure — depends on external state

function isPassing(score) {
    return score >= threshold;  // depends on external variable
}

let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));


/*
================================================================================
                    DETAILED EXPLANATION: PURE vs IMPURE FUNCTIONS
================================================================================

1. WHAT IS A PURE FUNCTION?
----------------------------
A Pure Function is a function that satisfies two strict conditions:
  a) Deterministic: It ALWAYS returns the same output for the same input.
  b) No Side Effects: It does NOT modify any external state (variables outside
     its scope, DOM, global objects, console logs, network calls, etc.).

In the example above:
  calculatePassRate(10, 7)  →  ALWAYS returns "70.00"
  calculatePassRate(10, 7)  →  ALWAYS returns "70.00"

No matter how many times you call it, the result is predictable and consistent.


2. WHAT IS AN IMPURE FUNCTION?
-------------------------------
An Impure Function is a function that BREAKS at least one of the two rules:
  a) It returns DIFFERENT outputs for the same input (non-deterministic).
  b) It causes Side Effects by reading or modifying external state.

In the example above:
  isPassing(score) depends on the EXTERNAL variable `threshold`.
  When threshold = 70, isPassing(60) returns false.
  When threshold = 50, isPassing(60) returns true.

The SAME input (60) produces DIFFERENT outputs depending on the external world.
This makes the function unpredictable and harder to test in isolation.


3. WHY DO WE CARE?
------------------
| Pure Functions                          | Impure Functions                        |
|-----------------------------------------|------------------------------------------|
| Highly predictable & reliable           | Behavior changes with external state     |
| Easy to test (no mocking needed)        | Harder to test (requires environment setup)|
| Safe to run in parallel (no shared state)| Risk of race conditions & bugs          |
| Output can be cached (Memoization)      | Cannot be safely cached                  |
| Easier to debug & reason about          | Side effects can hide bugs deeply        |
| Self-contained & reusable               | Coupled to external context              |
| No hidden surprises                       | Can mutate data unexpectedly             |


================================================================================
                    COMPARISON TABLE: PURE vs IMPURE
================================================================================

| CRITERIA              | PURE FUNCTION                                      | IMPURE FUNCTION                                    |
|-----------------------|----------------------------------------------------|----------------------------------------------------|
| Definition            | Returns same output for same input, no side effects| May return different output for same input or has  |
|                       |                                                    | side effects                                       |
| External Dependencies | NONE. Uses only its arguments.                     | Reads/Writes variables outside its scope.          |
| Side Effects          | NO. Does not alter anything outside itself.        | YES. May change external state, log to console,    |
|                       |                                                    | call APIs, modify DOM, etc.                        |
| Predictability        | HIGH. Result is guaranteed by inputs alone.      | LOW. Result depends on hidden/external factors.    |
| Testability           | EASY. Just pass arguments and assert output.       | HARD. Requires mocking/stubbing external state.    |
| Reusability           | HIGH. Can be moved to any file/project easily.   | LOW. Tightly coupled to the environment it lives in|
| Memoization Safe      | YES. Output can be cached by input arguments.    | NO. Cached result may become stale/incorrect.      |
| Debugging             | SIMPLE. Trace the inputs to find the bug.          | COMPLEX. Must track external state changes.        |
| Parallel Execution    | SAFE. No shared state means no conflicts.        | RISKY. Shared state can cause race conditions.     |
| Example from file     | calculatePassRate(10, 7) → "70.00" (always)       | isPassing(60) → true/false based on `threshold`    |


================================================================================
                    QUICK CHECKLIST: IS YOUR FUNCTION PURE?
================================================================================

Ask yourself these 3 questions before calling a function "Pure":

  [ ] Q1: Does it return the same result EVERY time for the same arguments?
  [ ] Q2: Does it read any variables that are NOT passed as arguments?
  [ ] Q3: Does it change anything outside its own body (logs, DOM, global vars)?

  If Q1 is YES, Q2 is NO, and Q3 is NO  →  Your function is PURE ✅
  If any answer differs                  →  Your function is IMPURE ❌


================================================================================
                    KEY TAKEAWAY
================================================================================

  PURE FUNCTION  =  SAME INPUT  →  SAME OUTPUT  +  NO SIDE EFFECTS

Using pure functions makes your code more robust, testable, and maintainable.
While impure functions are sometimes necessary (e.g., fetching data, logging),
the goal is to MINIMIZE impurity and isolate side effects at the edges of your
application (e.g., in specific handler functions, not deep in business logic).

================================================================================
*/
