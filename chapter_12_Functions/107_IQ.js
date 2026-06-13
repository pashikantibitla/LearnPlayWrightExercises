function runTest(name, status, duration) {
    return `${name}: ${status} (${duration}ms)`;
}
const r = runTest("Login", "pass", 320);
console.log(r);


/*
================================================================================
                    DETAILED EXPLANATION: FUNCTION WITH MULTIPLE PARAMETERS
================================================================================

1. CONTEXT OF THIS FILE
------------------------
This file demonstrates a simple but realistic function that accepts
multiple parameters and returns a formatted string using a template literal.

  Scenario: Representing a test run result with name, status, and duration.


2. CODE BREAKDOWN
------------------

  function runTest(name, status, duration) {
      return `${name}: ${status} (${duration}ms)`;
  }

  >> `name`     → String parameter representing the test name (e.g., "Login").
  >> `status`   → String parameter representing pass/fail (e.g., "pass").
  >> `duration` → Number parameter representing execution time in milliseconds.

  const r = runTest("Login", "pass", 320);
  >> Arguments passed:
     - name     = "Login"
     - status   = "pass"
     - duration = 320
  >> The template literal builds: "Login: pass (320ms)"
  >> Stores the result in constant variable `r`.

  console.log(r);
  >> Output: Login: pass (320ms)


3. PARAMETER ORDER MATTERS
-----------------------------
JavaScript matches arguments to parameters POSITIONALLY (by order).

  runTest("Login", "pass", 320);
         ↓        ↓        ↓
       name    status   duration

  If you mix up the order:
    runTest(320, "Login", "pass");
    → Result: "320: Login (passms)"  ← Nonsensical!

  Best Practice:
    Always pass arguments in the same order as the parameters.
    For functions with many parameters, consider passing an object instead.


4. ALTERNATIVE: OBJECT DESTRUCTURING
-------------------------------------
For functions with many parameters, using an object can prevent order mistakes:

  function runTest({ name, status, duration }) {
      return `${name}: ${status} (${duration}ms)`;
  }

  runTest({ status: "pass", name: "Login", duration: 320 });
  >> Order does not matter anymore! Named properties match to parameters.


5. WHEN TO USE SIMPLE MULTIPLE PARAMETERS?
-------------------------------------------
Use positional parameters when:
  - There are 3 or fewer parameters.
  - The order is intuitive and unlikely to be confused.
  - You want the shortest, cleanest call syntax.

  Use object parameters when:
  - There are 4+ parameters.
  - Some parameters are optional.
  - Readability and flexibility are more important than brevity.


6. KEY TAKEAWAY
----------------
  Functions can accept multiple parameters separated by commas.
  Arguments are matched positionally.
  Template literals are great for combining parameters into readable output strings.
  For many params, consider using an object to avoid order confusion.

================================================================================
*/
