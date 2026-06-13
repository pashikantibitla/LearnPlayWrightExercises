function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
}


retry("Login Test");
retry("Registeration Test", 5, 2000);


/*
================================================================================
                    DETAILED EXPLANATION: DEFAULT PARAMETERS
================================================================================

1. WHAT ARE DEFAULT PARAMETERS?
--------------------------------
Default Parameters allow you to assign a FALLBACK VALUE to a function parameter.
If the caller does NOT provide an argument for that parameter, the default
value is used automatically.

  Syntax:
    function functionName(param = defaultValue) {
        // body
    }

  If `param` is passed → uses the passed value.
  If `param` is omitted → uses `defaultValue`.


2. CODE BREAKDOWN
------------------

  function retry(testName, maxRetries = 3, delay = 1000) {
      console.log(`Retrying ${testName} up to ${maxRetries} times, ${delay}ms apart`);
  }

  >> `testName`       → Required parameter (no default).
  >> `maxRetries = 3` → Default value of 3 if not provided.
  >> `delay = 1000`   → Default value of 1000ms if not provided.

  retry("Login Test");
  >> testName = "Login Test"
  >> maxRetries uses DEFAULT → 3
  >> delay uses DEFAULT → 1000
  >> Output: Retrying Login Test up to 3 times, 1000ms apart

  retry("Registeration Test", 5, 2000);
  >> testName = "Registeration Test"
  >> maxRetries = 5 (OVERRIDES default)
  >> delay = 2000 (OVERRIDES default)
  >> Output: Retrying Registeration Test up to 5 times, 2000ms apart


3. RULES OF DEFAULT PARAMETERS
-------------------------------
  - Defaults are evaluated LEFT to RIGHT.
  - A parameter with a default can use PREVIOUS parameters as its default.

  Example:
    function greet(name, greeting = `Hello, ${name}`) {
        console.log(greeting);
    }
    greet("Pramod");  // Hello, Pramod

  - If you want to use the default for a later parameter but pass an earlier one,
    you must use `undefined` as a placeholder:
    retry("Test", undefined, 500);  // maxRetries=3 (default), delay=500


4. DEFAULT PARAMETERS vs OVERLOADING
-------------------------------------
In languages like Java or C++, you use "Method Overloading" to handle
multiple signatures. JavaScript does NOT support true overloading, but
Default Parameters achieve a similar result with cleaner syntax.

  Java-style overload (NOT possible in JS):
    void retry(String testName) { ... }
    void retry(String testName, int max) { ... }

  JavaScript equivalent (using defaults):
    function retry(testName, maxRetries = 3, delay = 1000) { ... }


5. WHEN TO USE DEFAULT PARAMETERS?
-----------------------------------
Use default parameters when:
  - You want to make a function flexible without requiring all arguments.
  - You have sensible fallback values (e.g., default timeout = 5000ms).
  - You want to reduce the need for manual `if (param === undefined)` checks.

  Examples:
    - API request functions with default timeout and retry counts.
    - Pagination functions with default page size.
    - Logger functions with default log level.


6. KEY TAKEAWAY
----------------
  Default Parameters = "If not provided, use this value."
  They make functions more flexible and calling code shorter.
  Place defaults on the RIGHT side of the parameter list for best readability.

================================================================================
*/
