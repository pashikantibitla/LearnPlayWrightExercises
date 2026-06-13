let g_x = 10;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);

    }
    inner();
    console.log(y);
}


/*
================================================================================
                    DETAILED EXPLANATION: NESTED SCOPE (INTERVIEW QUESTION)
================================================================================

1. PURPOSE OF THIS FILE
------------------------
This file demonstrates a common interview question about NESTED SCOPES
and what happens when you try to access variables across different levels.

Let's break down the FULL code and identify what will work and what will fail.


2. FULL CODE WALKTHROUGH
-------------------------

  let g_x = 10;
  >> Global variable `g_x` = 10. Accessible everywhere.

  function outer() {
      let x = 10;
      >> Local variable `x` inside `outer()`. Only accessible within `outer()`.

      function inner() {
          let y = 20;
          >> Local variable `y` inside `inner()`. Only accessible within `inner()`.

          console.log(x);
          >> ✅ WORKS! `inner()` can access variables from its PARENT scope (`outer`).
          >> Output: 10
      }

      inner();
      >> Calls `inner()`. The `console.log(x)` inside executes successfully.

      console.log(y);
      >> ❌ ERROR! ReferenceError: y is not defined.
      >> `y` is defined inside `inner()`, which is a CHILD scope of `outer()`.
      >> Parent scopes CANNOT access child scope variables.
  }


3. SCOPE CHAIN VISUAL
----------------------
  Global Scope
      g_x = 10
      ↓
      outer() Scope
          x = 10
          ↓
          inner() Scope
              y = 20

  Access Rules:
    - inner() can see: y, x, g_x  ✅ (looks UP the chain)
    - outer() can see: x, g_x     ✅ (its own + global)
    - outer() CANNOT see: y         ❌ (cannot look DOWN into inner)
    - Global can see: g_x         ✅ (its own only)
    - Global CANNOT see: x, y       ❌ (cannot look DOWN)


4. COMMON INTERVIEW FOLLOW-UPS
-------------------------------

  Q: What if I change `let` to `var`?
  A: `var` is function-scoped, not block-scoped. However, `y` is still
     inside a function (`inner`), so `outer` still cannot access it.
     Result: Same ReferenceError.

  Q: What if I declare `y` inside `outer` instead?
  A: Then `outer` CAN access it, and `inner` CAN also access it (child sees parent).
     Both scopes would share the same `y`.

  Q: What happens if I call `outer()` but never call `inner()` inside it?
  A: `inner()` is defined but never executed. The `console.log(x)` inside
     `inner()` would never run. Only `console.log(y)` would run and crash.


5. KEY TAKEAWAY
----------------
  The Scope Chain only works UPWARDS (inner → outer → global).
  You CANNOT access a variable from a nested/child scope in its parent scope.
  This is a fundamental rule of Lexical Scoping in JavaScript.
  Remember: "Children can borrow from parents, but parents cannot steal from children."

================================================================================
*/
