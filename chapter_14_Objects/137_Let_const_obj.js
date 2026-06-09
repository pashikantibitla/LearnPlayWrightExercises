let config1 = { browser: "Chrome", timeout: 3000 };
// Modifying properties — ALLOWED
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2;
console.log(config1);

config1 = { browser: "Safari" };
console.log(config1);

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// Modifying properties — ALLOWED
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// config = { browser: "Safari" };  // ❌ TypeError with const
console.log(config);


/*
================================================================================
                    DETAILED EXPLANATION: let vs const WITH OBJECTS
================================================================================

1. let OBJECTS — FULL REASSIGNMENT ALLOWED
------------------------------------------
  When you declare an object with `let`, you can BOTH mutate its properties
  AND reassign the variable to a completely new object.

  From file:
    let config1 = { browser: "Chrome", timeout: 3000 };
    config1.browser = "Firefox";  // ✅ Mutate property
    config1 = { browser: "Safari" };  // ✅ Reassign entire object

  Visual:

  Step 1: Declaration
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Chrome",    │
  │ (let)   │        │   timeout: 3000 }       │
  └─────────┘        └─────────────────────────┘

  Step 2: Mutate properties
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Firefox",   │
  │ (let)   │        │   timeout: 5000,        │
  │         │        │   retries: 2 }          │
  └─────────┘        └─────────────────────────┘
  (Same object, mutated)

  Step 3: Reassign
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Safari" }  │
  │ (let)   │        │  (NEW object!)          │
  └─────────┘        └─────────────────────────┘
  (Old object is garbage collected if no other refs)


2. const OBJECTS — MUTATION ALLOWED, REASSIGNMENT BLOCKED
----------------------------------------------------------
  When you declare an object with `const`, you CAN mutate its properties but
  you CANNOT reassign the variable to a new object.

  From file:
    const config = { browser: "Chrome", timeout: 3000 };
    config.browser = "Firefox";  // ✅ Mutate property
    config = { browser: "Safari" };  // ❌ TypeError!

  Visual:

  Step 1: Declaration
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Chrome",   │
  │ (const) │        │   timeout: 3000 }       │
  └─────────┘        └─────────────────────────┘
  (Binding is locked — config always points here)

  Step 2: Mutate properties
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Firefox",   │
  │ (const) │        │   timeout: 5000,        │
  │         │        │   retries: 2 }          │
  └─────────┘        └─────────────────────────┘
  (Same object, mutated — allowed!)

  Step 3: Attempt reassign
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Firefox",   │
  │ (const) │───────X│   timeout: 5000 }       │
  │         │        │   ← CANNOT change ref!  │
  └─────────┘        └─────────────────────────┘
  config = { browser: "Safari" };
  // ❌ TypeError: Assignment to constant variable.

  The variable binding is immutable, but the object itself is mutable.


3. WHY THIS DIFFERENCE EXISTS
------------------------------
  `const` creates an IMMUTABLE BINDING between the variable name and the value.
  For primitives, the value IS the data. For objects, the value IS the reference.

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Variable Type       │ Binding                  │ Data                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ let primitive       │ Mutable                  │ Mutable                │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ const primitive     │ Immutable                │ Immutable (primitives) │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ let object          │ Mutable                  │ Mutable                │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ const object        │ Immutable (ref locked)   │ Mutable (object data)  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Think of it this way:
    - const = "This label always sticks to this box."
    - But you can still change what's inside the box.

  Visual Metaphor:

  const config = { browser: "Chrome" };

  ┌─────────────────────────────────────────┐
  │  config (const label)                  │
  │       │                                 │
  │       │  CANNOT move to another box!    │
  │       │                                 │
  │       ▼                                 │
  │  ┌─────────────────────────┐            │
  │  │ Box: { browser: ... }  │            │
  │  │  CAN change contents!  │            │
  │  │  browser = "Firefox"   │            │
  │  └─────────────────────────┘            │
  └─────────────────────────────────────────┘


4. COMPLETE COMPARISON TABLE
-----------------------------

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Operation           │ let obj = {}             │ const obj = {}           │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.prop = x        │ ✅ Allowed                │ ✅ Allowed               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.newProp = x     │ ✅ Allowed                │ ✅ Allowed               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ delete obj.prop     │ ✅ Allowed                │ ✅ Allowed               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj = {}            │ ✅ Allowed (new object)   │ ❌ TypeError             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj = null          │ ✅ Allowed                │ ❌ TypeError             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj = anotherObj    │ ✅ Allowed                │ ❌ TypeError             │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  For primitives:
  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Operation           │ let x = 10               │ const x = 10             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ x = 20              │ ✅ Allowed                │ ❌ TypeError             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ x++                 │ ✅ Allowed                │ ❌ TypeError             │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


5. COMPLETE INDEXING / MAPPING
-------------------------------

  Variable: config1 (let)

  ┌─────────────────────┬─────────────────────────┬─────────────────────────┐
  │ Stage               │ Properties              │ Object Reference        │
  ├─────────────────────┼─────────────────────────┼─────────────────────────┤
  │ Initial             │ browser: Chrome,        │ Object #1               │
  │                     │ timeout: 3000           │                         │
  │ After mutation      │ browser: Firefox,       │ Same Object #1          │
  │                     │ timeout: 5000,          │ (mutated)               │
  │                     │ retries: 2              │                         │
  │ After reassignment  │ browser: Safari        │ Object #2 (NEW)         │
  └─────────────────────┴─────────────────────────┴─────────────────────────┘

  Variable: config (const)

  ┌─────────────────────┬─────────────────────────┬─────────────────────────┐
  │ Stage               │ Properties              │ Object Reference        │
  ├─────────────────────┼─────────────────────────┼─────────────────────────┤
  │ Initial             │ browser: Chrome,        │ Object #1               │
  │                     │ timeout: 3000           │ (locked to this)        │
  │ After mutation      │ browser: Firefox,       │ Same Object #1          │
  │                     │ timeout: 5000,          │ (mutated, allowed)      │
  │                     │ retries: 2              │                         │
  │ Reassignment        │ ❌ BLOCKED              │ Cannot change!          │
  │                     │ TypeError               │                         │
  └─────────────────────┴─────────────────────────┴─────────────────────────┘

  Memory Diagram:

  let config1:
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Firefox",   │
  │ (let)   │        │   timeout: 5000,        │
  │         │        │   retries: 2 }          │
  └─────────┘        └─────────────────────────┘
  (Can be reassigned to new object)

  const config:
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Firefox",   │
  │ (const) │        │   timeout: 5000,        │
  │ 🔒      │        │   retries: 2 }          │
  └─────────┘        └─────────────────────────┘
  (🔒 = binding locked, cannot reassign)


6. PRACTICAL EXAMPLES
----------------------

  Example 1: const is the standard for objects
    const user = { name: "John" };
    user.name = "Jane";      // ✅ Allowed
    user.age = 30;           // ✅ Allowed
    // user = {};             // ❌ TypeError
    // This is the correct pattern — prevents accidental reassignment

  Example 2: let when you need to swap objects
    let currentUser = { name: "John" };
    currentUser = { name: "Jane" };  // ✅ Allowed
    // Use let only when you genuinely need to replace the object

  Example 3: Freeze for true immutability
    const config = Object.freeze({ browser: "Chrome" });
    config.browser = "Firefox";  // Silently ignored
    console.log(config.browser);  // "Chrome"

  Example 4: const with arrays
    const arr = [1, 2, 3];
    arr.push(4);     // ✅ Allowed
    arr[0] = 99;     // ✅ Allowed
    // arr = [];      // ❌ TypeError

  Example 5: Why prefer const?
    const config = { timeout: 3000 };
    // Prevents accidental:
    // config = null;  // Would break all downstream code
    // const catches this bug at compile time

  Example 6: Using let correctly
    let user = null;
    if (isLoggedIn) {
        user = { name: "John" };  // ✅ let allows this
    }
    // Here let is appropriate because we need to assign conditionally


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. let objects: can mutate properties AND reassign to new objects.
  2. const objects: can mutate properties, CANNOT reassign.
  3. const protects the VARIABLE BINDING, not the object's contents.
  4. Prefer const for objects — it prevents accidental reassignment.
  5. Use let only when you genuinely need to replace the object reference.
  6. For true immutability, use Object.freeze() (prevents all mutation).
  7. const is the standard in modern JavaScript for object declarations.
  8. The same rules apply to arrays and functions declared with const.

================================================================================
*/
