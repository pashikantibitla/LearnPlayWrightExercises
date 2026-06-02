(function () {
    console.log("Hi");
})();


(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();


(() => {
    console.log("Setup complete");
})();


/*
================================================================================
                    DETAILED EXPLANATION: IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
================================================================================

1. WHAT IS AN IIFE?
--------------------
IIFE stands for "Immediately Invoked Function Expression."
It is a function that is DEFINED and EXECUTED immediately in the same line.

  Syntax Pattern:
    (function() {
        // code runs immediately
    })();

  Or with arrow functions:
    (() => {
        // code runs immediately
    })();

  Breakdown:
    - Outer `()` wrap the function, turning it into an EXPRESSION.
    - The final `()` at the end immediately INVOKES (calls) that expression.


2. CODE BREAKDOWN
------------------

  (function () {
      console.log("Hi");
  })();
  >> Classic IIFE using a normal anonymous function.
  >> Output: "Hi" (runs immediately when the script loads).

  (function () {
      // playwright to run the test
  })();
  >> Empty body with a comment. Demonstrates a common use case:
     Encapsulating a test setup block so variables don't leak globally.

  (function () {
      console.log("Staging")
  })();
  >> Another classic IIFE. Often used for environment-specific setup.

  (() => {
      console.log("Setup complete");
  })();
  >> Arrow function IIFE. More concise, modern ES6+ style.
  >> Output: "Setup complete"


3. WHY USE IIFEs?
------------------

| Benefit            | Explanation                                                  |
|--------------------|--------------------------------------------------------------|
| SCOPE ISOLATION    | Variables declared inside do NOT leak to the global scope.   |
| AVOID POLLUTION    | Prevents naming collisions with other scripts/libraries.     |
| PRIVATE DATA       | Creates a private scope where internal variables are hidden. |
| ONE-TIME EXECUTION | Perfect for setup/configuration code that runs only once.    |

  Example of Scope Isolation:
    (function() {
        let secret = "password";
        console.log(secret);  // Works inside
    })();
    console.log(secret);      // ReferenceError! secret is not defined outside.


4. COMMON USE CASES IN REAL PROJECTS
-------------------------------------
  - Module Pattern: Creating self-contained modules before ES6 modules existed.
  - Polyfills: Running feature detection and patches immediately.
  - Initialization: Setting up configuration, event listeners, or state once.
  - Testing Snippets: Isolating test code from the rest of the application.


5. IIFE vs NORMAL FUNCTION
---------------------------

| Feature              | Normal Function                  | IIFE                              |
|----------------------|----------------------------------|-----------------------------------|
| Invocation           | Must be called separately        | Runs immediately upon definition  |
| Reusability          | Can be called multiple times     | Runs only once                    |
| Scope Leak           | Variables may leak if not careful| Variables are fully encapsulated  |
| Syntax               | function name() {}             | (function() {})() or (()=>{})()  |


6. KEY TAKEAWAY
----------------
  IIFE = Define + Run Immediately + Keep Variables Private
  Wrap any code in `(function(){ ... })()` to protect the global namespace.
  The arrow function version `(()=>{ ... })()` is the modern, concise preference.

================================================================================
*/
