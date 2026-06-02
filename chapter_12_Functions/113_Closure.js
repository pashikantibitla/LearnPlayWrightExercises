function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined


/*
================================================================================
                    DETAILED EXPLANATION: CLOSURES (PART 1 — BASICS)
================================================================================

1. WHAT IS A CLOSURE?
----------------------
A Closure is a function that REMEMBERS the variables from its OUTER scope
even AFTER the outer function has finished executing.

  In simpler words:
    - An inner function that "closes over" (captures) variables from its parent.
    - The inner function keeps those variables ALIVE in memory.
    - Even when the parent function is done, the child function can still access them.


2. CODE BREAKDOWN
------------------

  function outer() {
      let message = "hello";
      >> Local variable inside `outer()`.

      console.log("Outer CALLED!");
      >> Prints when outer() runs.

      function inner() {
          console.log(message);
          >> `inner()` accesses `message` from its PARENT scope (`outer`).
          >> This is the CLOSURE: `inner` "remembers" `message`.
      }

      return inner;
      >> Instead of calling `inner()`, we RETURN the function itself!
      >> We are passing the function reference out of `outer()`.
  }

  let fn_inner = outer();
  >> Calls `outer()`. Output: "Outer CALLED!"
  >> `outer()` finishes execution and its local scope SHOULD normally disappear.
  >> BUT: `inner()` was returned, and JavaScript keeps `message` alive
     because `fn_inner` still has a reference to it (closure!).

  fn_inner();
  >> Calls the returned `inner()` function.
  >> Even though `outer()` is long gone, `inner` still remembers `message`.
  >> Output: "hello"

  // inner(); // ReferenceError: inner is not defined
  >> This line is commented out because `inner` was NEVER defined in the global scope.
  >> It only exists INSIDE `outer()`, unless we return it and assign it (like we did above).


3. WHY DOES THE VARIABLE SURVIVE?
------------------------------------
Normally, when a function finishes, its local variables are garbage collected.
However, because `inner()` was returned and stored in `fn_inner`, JavaScript
sees that `fn_inner` still needs access to `message`. So `message` is NOT destroyed.

  This is the MAGIC of closures: Inner functions preserve their parent's variables.


4. WHEN TO USE CLOSURES?
-------------------------
Use closures when:
  - You want to create PRIVATE variables (data hiding).
  - You want to preserve state between function calls without global variables.
  - You are building factory functions or callback handlers.

  Examples:
    - Counter functions that remember the current count.
    - Configuration builders that remember settings.
    - Event handlers that remember specific context data.


5. KEY TAKEAWAY
----------------
  Closure = Inner function + Outer variables + Outer function is done
  The inner function "closes over" the outer scope, keeping it alive.
  This is one of JavaScript's most powerful and interview-favorite features.

================================================================================
*/
