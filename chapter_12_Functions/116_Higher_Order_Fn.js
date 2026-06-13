// Higher-Order Functions
// A function that takes a function as argument or returns a function.

function runWithLoggin(testFn, testName) {
    let result = testFn();
    return result;
}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}

runWithLoggin(loginTest, "Login Test");
runWithLoggin(loginTestFAILED, "Dashboard Failed Test");


/*
================================================================================
                    DETAILED EXPLANATION: HIGHER-ORDER FUNCTIONS (HOF)
================================================================================

1. WHAT IS A HIGHER-ORDER FUNCTION?
------------------------------------
A Higher-Order Function (HOF) is any function that does AT LEAST ONE of the following:
  a) ACCEPTS another function as an argument.
  b) RETURNS another function as its result.

In JavaScript, functions are "First-Class Citizens," meaning they can be:
  - Stored in variables
  - Passed as arguments to other functions
  - Returned from other functions
  - Stored in arrays and objects

Because of this, Higher-Order Functions are extremely powerful and common in JS.


2. BREAKDOWN OF THE CODE ABOVE
-------------------------------

  function runWithLoggin(testFn, testName) {
      let result = testFn();
      return result;
  }

  >> This is the Higher-Order Function.
  >> It accepts `testFn` (a function) as its FIRST parameter.
  >> Inside the body, it CALLS/EXECUTES `testFn()`.
  >> It captures the returned value in `result` and returns it.

  NOTE: The parameter `testName` is received but currently NOT used inside the
  function body. This is likely a placeholder for future enhancement (e.g.,
  logging the test name before execution).

  function loginTest() {
      return "pass";
  }

  function loginTestFAILED() {
      return "fail";
  }

  >> These are regular functions (often called CALLBACKS or PREDICATES when
  >> passed into HOFs). They represent specific test cases.

  runWithLoggin(loginTest, "Login Test");
  runWithLoggin(loginTestFAILED, "Dashboard Failed Test");

  >> Here we are PASSING the function definitions as arguments.
  >> We do NOT write `loginTest()` with parentheses when passing it,
  >> because we want to pass the function ITSELF, not the result of calling it.
  >> The HOF (`runWithLoggin`) decides WHEN and HOW to execute it.


3. TYPES OF HIGHER-ORDER FUNCTIONS
-----------------------------------

| Type                    | Description                                           | Example in this file                    |
|-------------------------|-------------------------------------------------------|------------------------------------------|
| Function as Argument    | Accepts another function to execute inside its body   | `runWithLoggin(testFn, testName)`        |
| Function as Return Value| Returns a new function (Factory / Closures)           | Not shown in this file (see below)       |


4. BUILT-IN JAVASCRIPT HIGHER-ORDER FUNCTIONS
----------------------------------------------
JavaScript provides many native HOFs, especially for arrays:

  - Array.map(fn)       : Transforms each element, returns new array
  - Array.filter(fn)    : Keeps elements where fn returns true
  - Array.reduce(fn, init): Reduces array to a single value
  - Array.forEach(fn)   : Executes fn for each element (side effects)
  - Array.find(fn)      : Returns first element where fn returns true
  - Array.sort(fn)      : Sorts array based on compare function
  - setTimeout(fn, ms)  : Executes fn after a delay
  - setInterval(fn, ms): Executes fn repeatedly every X milliseconds

All of these follow the same pattern: they accept a function (callback) and
apply logic around it.


5. EXAMPLE: FUNCTION RETURNING A FUNCTION (Factory Pattern)
------------------------------------------------------------
Although not in this file, HOFs can also RETURN functions:

  function createMultiplier(multiplier) {
      return function(number) {
          return number * multiplier;
      };
  }

  const double = createMultiplier(2);
  const triple = createMultiplier(3);

  console.log(double(5));  // 10
  console.log(triple(5));  // 15

This creates specialized functions dynamically and is a core concept behind
CLOSURES in JavaScript.


6. WHY USE HIGHER-ORDER FUNCTIONS?
-----------------------------------

| Benefit                  | Explanation                                                |
|--------------------------|------------------------------------------------------------|
| ABSTRACTION              | Hide common logic (looping, logging, validation) in the HOF|
| REUSABILITY              | Same HOF can work with many different callback functions   |
| COMPOSABILITY            | Small functions can be combined to build complex logic     |
| DECLARATIVE CODE         | Describe WHAT to do, not HOW to loop/implement it        |
| LESS CODE DUPLICATION    | Avoid writing the same boilerplate control structures      |


7. PURE vs IMPURE HIGHER-ORDER FUNCTIONS
-----------------------------------------
A HOF itself can be Pure or Impure depending on what the callback does:

  // Pure HOF: No side effects, predictable
  function applyTwice(fn, value) {
      return fn(fn(value));
  }

  // Impure HOF: Has side effects (logging to console)
  function runWithLoggin(testFn, testName) {
      console.log("Running: " + testName); // side effect
      return testFn();
  }

In this file, `runWithLoggin` currently has no side effects, but if `testName`
logging were added, it would become impure. The key is: the HOF structure is
just a pattern; purity depends on the implementation details.


8. COMMON MISTAKES TO AVOID
----------------------------

  [ ] Passing a function CALL instead of the function itself:
      WRONG:  runWithLoggin(loginTest(), "Login Test")
      RIGHT:  runWithLoggin(loginTest, "Login Test")
      >> `loginTest()` executes immediately and passes the string "pass",
      >> not the function. The HOF will crash trying to execute "pass" as a function.

  [ ] Not handling callback errors inside the HOF.
      If `testFn()` throws an error, `runWithLoggin` will fail unless wrapped
      in a try-catch block.

  [ ] Accepting parameters in callbacks but not forwarding them:
      If `loginTest` needed arguments, `runWithLoggin` should accept and pass them:
      function runWithLoggin(testFn, testName, ...args) {
          return testFn(...args);
      }


9. KEY TAKEAWAY
----------------

  HIGHER-ORDER FUNCTION = Function that takes a function as input
                          OR returns a function as output.

They are the foundation of functional programming in JavaScript and allow us
to write cleaner, more modular, and more reusable code. Always remember:

  - Pass the function reference (name only, no `()`).
  - Let the HOF control when and how the callback executes.
  - Combine small, focused functions using HOFs for powerful compositions.

================================================================================
*/
