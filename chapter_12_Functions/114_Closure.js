
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());


/*
================================================================================
                    DETAILED EXPLANATION: CLOSURES (PART 2 — PRACTICAL COUNTER)
================================================================================

1. PURPOSE OF THIS FILE
------------------------
This file demonstrates a REAL-WORLD use case of closures: a COUNTER object.
It shows how closures enable DATA ENCAPSULATION (private variables) in JavaScript.


2. CODE BREAKDOWN
------------------

  function makeCounter(start = 0) {
      let count = start;
      >> `count` is a LOCAL variable inside `makeCounter`.
      >> Without closures, `count` would be destroyed when `makeCounter` ends.
      >> With closures, `count` STAYS ALIVE because the returned object
         methods still reference it.

      return {
          increment() { count++ },
          decrement() { count-- },
          get() { return count; }
      };
      >> Returns an OBJECT with three methods.
      >> Each method is a CLOSURE because it "remembers" `count`.
  }

  let counter = makeCounter(0);
  >> Calls `makeCounter(0)`. `count` is initialized to 0.
  >> Returns the object with methods. `counter` now holds those methods.
  >> `count` is HIDDEN (private). It cannot be accessed directly!

  counter.increment();
  counter.increment();
  counter.increment();
  >> Calls `increment()` three times.
  >> Each call accesses the SAME hidden `count` variable.
  >> `count` is now 3.

  console.log(counter.get());
  >> Returns the current value of `count`.
  >> Output: 3

  counter.decrement();
  >> `count` goes from 3 to 2.

  console.log(counter.get());
  >> Output: 2


3. DATA ENCAPSULATION / PRIVACY
--------------------------------
In many languages (Java, C++), you have `private` keywords.
JavaScript does not have native private fields (pre-ES2022), but closures
provide the same effect:

  | Access Method        | Can Access `count`? | Explanation                  |
  |----------------------|---------------------|------------------------------|
  | counter.count        | NO                  | `count` is not on the object |
  | counter.get()        | YES                 | Method is a closure          |
  | counter.increment()  | YES                 | Method is a closure          |
  | counter.decrement()  | YES                 | Method is a closure          |

  The variable `count` is FULLY PROTECTED from direct outside access.
  Only the methods returned by `makeCounter()` can touch it.


4. MULTIPLE INDEPENDENT COUNTERS
---------------------------------
Because each call to `makeCounter()` creates a NEW scope, each counter
is completely independent:

  let counterA = makeCounter(0);
  let counterB = makeCounter(100);

  counterA.increment(); // counterA's count = 1
  counterB.increment(); // counterB's count = 101

  They do NOT share `count`. Each closure has its own private copy.


5. KEY TAKEAWAY
----------------
  Closures = Private State + Persistent Memory + Encapsulation
  This pattern (returning an object with methods) is called the "Module Pattern"
  and is a cornerstone of JavaScript design.
  If you understand this counter example, you understand closures.

================================================================================
*/
