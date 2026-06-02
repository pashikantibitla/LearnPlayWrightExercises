function makeRetryTracker(max) {
    let attempts = 0;
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries (${max})`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }

    return tryAgain;


}

let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));


/*
================================================================================
                    DETAILED EXPLANATION: CLOSURES (PART 3 — API REAL-WORLD)
================================================================================

1. PURPOSE OF THIS FILE
------------------------
This file demonstrates a real-world closure pattern: a RETRY TRACKER.
It simulates tracking API call retry attempts with a maximum limit.
This is exactly how retry logic works in test automation and API clients.


2. CODE BREAKDOWN
------------------

  function makeRetryTracker(max) {
      let attempts = 0;
      >> `attempts` is a private variable tracking how many times we tried.
      >> `max` is also captured in the closure.

      function tryAgain(testName) {
          attempts++;
          >> Increments the private `attempts` counter every time `tryAgain` is called.

          if (attempts > max) {
              return `${testName} exceeded max retries (${max})`;
          }
          >> If we have crossed the max limit, return a failure message.

          return `Attempt ${attempts}/${max} for ${testName}`;
          >> Otherwise, return the current attempt status.
      }

      return tryAgain;
      >> Returns the inner function, which "remembers" both `attempts` and `max`.
  }

  let retry = makeRetryTracker(3);
  >> Creates a retry tracker with `max = 3`.
  >> `attempts` starts at 0 and is hidden inside the closure.

  console.log(retry("Login"));
  >> attempts becomes 1. 1 <= 3.
  >> Output: "Attempt 1/3 for Login"

  console.log(retry("Login"));
  >> attempts becomes 2. 2 <= 3.
  >> Output: "Attempt 2/3 for Login"

  console.log(retry("Login"));
  >> attempts becomes 3. 3 <= 3.
  >> Output: "Attempt 3/3 for Login"

  console.log(retry("Login"));
  >> attempts becomes 4. 4 > 3.
  >> Output: "Login exceeded max retries (3)"


3. WHY IS THIS A CLOSURE?
--------------------------
  - `makeRetryTracker` finished executing after `let retry = makeRetryTracker(3)`.
  - However, `attempts` and `max` are NOT destroyed.
  - The returned `tryAgain` function still references them.
  - Every call to `retry()` updates the SAME `attempts` variable.
  - This is a classic closure maintaining PRIVATE STATE across multiple calls.


4. REAL-WORLD APPLICATIONS
---------------------------
This exact pattern is used in:
  - HTTP Request Libraries: Axios, Fetch retry interceptors.
  - Test Automation: Playwright/Puppeteer retry configurations.
  - Rate Limiters: Tracking request counts per user.
  - Token Buckets: Managing API quota over time.

  Example API Retry Flow:
    retry("GET /users")    → Attempt 1/3
    retry("GET /users")    → Attempt 2/3
    retry("GET /users")    → Attempt 3/3
    retry("GET /users")    → FAIL: exceeded max retries


5. COMPARISON: WITH vs WITHOUT CLOSURES
----------------------------------------
  WITHOUT Closure (Bad):
    let attempts = 0; // Global! Any code can mess with it.
    function retry() { attempts++; ... }

  WITH Closure (Good):
    function makeRetryTracker(max) {
        let attempts = 0; // Private! Protected from outside access.
        function tryAgain() { attempts++; ... }
        return tryAgain;
    }

  Closures give us clean, safe, encapsulated state management.


6. KEY TAKEAWAY
----------------
  Closures let functions "remember" their creation environment.
  In API testing, this means tracking attempts, timeouts, and tokens safely.
  The retry tracker pattern is one of the most practical closure examples
  you will encounter in real-world JavaScript development.

================================================================================
*/
