// Scope in Functions

let env = "staging";  // global scope

function setupConfig() {
    let timeout = 3000;   // local scope
    console.log(env);     // ✅ can access global
    console.log(timeout); // ✅ can access local
}


setupConfig();
console.log(env);
console.log(timeout);


/*
================================================================================
                    DETAILED EXPLANATION: SCOPE IN FUNCTIONS
================================================================================

1. WHAT IS SCOPE?
------------------
Scope determines the ACCESSIBILITY (visibility) of variables in your code.
In JavaScript, there are three main types of scope:

  a) GLOBAL Scope    → Variables declared outside any function/block.
  b) FUNCTION Scope  → Variables declared inside a function (local).
  c) BLOCK Scope     → Variables declared inside `{}` blocks (let/const only).


2. CODE BREAKDOWN
------------------

  let env = "staging";
  >> Declared OUTSIDE any function → GLOBAL scope.
  >> Accessible from ANYWHERE in the file.

  function setupConfig() {
      let timeout = 3000;
      >> Declared INSIDE the function → LOCAL (function) scope.
      >> Only accessible WITHIN `setupConfig()`.

      console.log(env);
      >> ✅ WORKS! Inner scope can access outer (global) scope.
      >> Output: "staging"

      console.log(timeout);
      >> ✅ WORKS! `timeout` is declared in the same scope.
      >> Output: 3000
  }

  setupConfig();
  >> Calls the function. Inside, both logs succeed.

  console.log(env);
  >> ✅ WORKS! `env` is global.
  >> Output: "staging"

  console.log(timeout);
  >> ❌ ERROR! ReferenceError: timeout is not defined.
  >> `timeout` is LOCAL to `setupConfig()` and cannot be accessed outside.


3. SCOPE ACCESS RULES
----------------------
  - INNER scopes can ACCESS variables from OUTER scopes.
  - OUTER scopes CANNOT access variables from INNER scopes.
  - This is called LEXICAL SCOPING (scope is determined by where variables are written).

  Visual Hierarchy:
    Global Scope (env)
        ↓
    Function Scope (timeout)
        ↓
    Inner scopes...

  Access Direction:
    Inner → Outer  ✅ (Can look up)
    Outer → Inner  ❌ (Cannot look down)


4. var vs let vs const IN SCOPE
--------------------------------
  | Keyword | Scope Type         | Can be Re-declared? | Hoisted?        |
  |---------|--------------------|---------------------|-----------------|
  | var     | Function Scope     | Yes                 | Yes (undefined) |
  | let     | Block Scope        | No                  | Yes (TDZ)       |
  | const   | Block Scope        | No                  | Yes (TDZ)       |

  Important:
    - `var` does NOT respect block scope (only function scope).
    - `let` and `const` respect block scope (`if {}`, `for {}`, etc.).

  Example:
    if (true) {
        var x = 10;  // Leaks outside the if-block!
        let y = 20;  // Stays inside the if-block.
    }
    console.log(x); // 10 (var leaked)
    console.log(y); // ReferenceError (let stayed)


5. WHY DOES SCOPE MATTER?
--------------------------
  - Prevents variable name collisions.
  - Keeps internal logic hidden (encapsulation).
  - Makes code predictable and easier to debug.
  - Enables closures (next topics).


6. KEY TAKEAWAY
----------------
  Global variables = Visible everywhere.
  Local variables  = Visible only inside their function/block.
  Inner can see Outer, but Outer CANNOT see Inner.
  Prefer `let`/`const` over `var` to avoid unexpected scope leaks.

================================================================================
*/
