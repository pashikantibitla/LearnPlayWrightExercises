// // Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// getStatus(200);
// getStatus(404);
// getStatus(500);

// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }
// let result = logTest("Login");
// console.log(result);

// greet("Alice");

// function greet(name) {
//     return `Hello, ${name}!`;
// }

sayHi("Bob");

const sayHi = function (name) {
    return `Hi, ${name}!`;
};


/*
================================================================================
                    DETAILED EXPLANATION: INTERVIEW QUESTIONS (IQ)
================================================================================

1. PURPOSE OF THIS FILE
------------------------
This file contains COMMENTED-OUT code snippets that represent common
JavaScript interview questions or tricky scenarios related to functions.
Only the LAST block is active (and will produce an error).

Let's analyze each commented section and the active one.


2. SECTION 1: RETURN WITH MULTIPLE CONDITIONS
----------------------------------------------
  // function getStatus(code) {
  //     if (code >= 200 && code < 300) return "success";
  //     if (code >= 400 && code < 500) return "client error";
  //     if (code >= 500) return "server error";
  // }
  // getStatus(200);   // "success"
  // getStatus(404);   // "client error"
  // getStatus(500);   // "server error"

  >> Multiple `return` statements based on conditions.
  >> The FIRST matching condition returns immediately.
  >> What if code = 100? No condition matches → returns `undefined`.
  >> Best practice: Always have a final `else` or default return.


3. SECTION 2: IMPLICIT RETURN VALUE
------------------------------------
  // function logTest(name) {
  //     console.log(`Running: ${name}`);
  //     // no return statement
  // }
  // let result = logTest("Login");
  // console.log(result);

  >> `logTest` has NO `return` keyword.
  >> `result` will be `undefined`.
  >> Output of console.log(result): undefined
  >> This tests understanding of default return values.


4. SECTION 3: FUNCTION HOISTING
--------------------------------
  // greet("Alice");
  // function greet(name) {
  //     return `Hello, ${name}!`;
  // }

  >> Function DECLARATIONS are hoisted.
  >> You CAN call `greet` BEFORE its definition in the code.
  >> This will work perfectly: returns "Hello, Alice!"


5. SECTION 4: FUNCTION EXPRESSION — THE TRICKY ONE (ACTIVE CODE)
-----------------------------------------------------------------
  sayHi("Bob");

  const sayHi = function (name) {
      return `Hi, ${name}!`;
  };

  >> This is a FUNCTION EXPRESSION assigned to a `const` variable.
  >> Function expressions are NOT hoisted like declarations.
  >> More importantly, `const` and `let` are NOT hoisted in a usable way.
  >> The Temporal Dead Zone (TDZ) means accessing `sayHi` before its
     declaration throws a ReferenceError.

  Expected Result:
    ReferenceError: Cannot access 'sayHi' before initialization

  Why does this happen?
    - `sayHi("Bob")` is executed BEFORE the line `const sayHi = ...`.
    - `const` variables exist in a "Temporal Dead Zone" from the start
      of the block until the declaration line is reached.
    - Accessing them in that zone is illegal.

  If this were a `function` declaration instead:
    sayHi("Bob");
    function sayHi(name) { ... }   // This would WORK!


6. KEY INTERVIEW TAKEAWAYS
---------------------------
  - Function DECLARATIONS are hoisted entirely.
  - Function EXPRESSIONS (const/let/var) behave according to their variable type.
    - `var` → hoisted as `undefined` (calling before assignment works but crashes).
    - `const` / `let` → NOT usable before declaration (Temporal Dead Zone).
  - No `return` means the function returns `undefined`.
  - Multiple `if` returns need a fallback for unmatched cases.

================================================================================
*/
