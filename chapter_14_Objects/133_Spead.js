const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 };
console.log(copy)


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
                    DETAILED EXPLANATION: SPREAD OPERATOR & const with Objects
================================================================================

1. WHAT IS THE SPREAD OPERATOR (...) FOR OBJECTS?
--------------------------------------------------
  The spread operator `...` copies all enumerable properties from one object
  into a new object. It creates a SHALLOW COPY.

  Syntax:
    const copy = { ...original };
    const merged = { ...obj1, ...obj2 };

  From file:
    const copy = { ...obj1 };
    // copy = { a: 1, b: 2 }

  Key Points:
    - Creates a NEW object with copied properties.
    - Does NOT copy nested objects (shallow copy).
    - Later properties overwrite earlier ones.
    - Can be combined with new properties.

  Visual:

  obj1:
  ┌─────────────────────────┐
  │  { a: 1, b: 2 }         │
  └─────────────────────────┘
       ↓
  { ...obj1 }
       ↓
  ┌─────────────────────────┐
  │  { a: 1, b: 2 }  ← NEW  │
  │  (different object)      │
  └─────────────────────────┘
       ↑
  ┌─────────┐
  │  copy   │
  └─────────┘

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Operation           │ Syntax                   │ Result                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Shallow copy        │ { ...obj }               │ New object, same props   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Merge two objects   │ { ...obj1, ...obj2 }     │ Combined properties      │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Add new properties  │ { ...obj, newProp: x }   │ Copy + new props         │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Override properties │ { ...obj, prop: newVal } │ Copy + overridden prop   │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Example: Merging
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const merged = { ...obj1, ...obj2 };
    // merged = { a: 1, b: 2, c: 3, d: 4 }

  Example: Overriding
    const base = { browser: "Chrome", timeout: 3000 };
    const override = { ...base, browser: "Firefox" };
    // override = { browser: "Firefox", timeout: 3000 }

  WARNING: Shallow copy only!
    const user = { name: "John", address: { city: "NYC" } };
    const copy = { ...user };
    copy.address.city = "LA";
    console.log(user.address.city);  // "LA" — nested object still shared!

  For deep copy, use:
    const deepCopy = JSON.parse(JSON.stringify(obj));


2. let vs const WITH OBJECTS
----------------------------
  This is one of the most important concepts in JavaScript.

  From file:
    let config1 = { browser: "Chrome", timeout: 3000 };
    config1.browser = "Firefox";  // ✅ Allowed
    config1 = { browser: "Safari" };  // ✅ Allowed (let)

    const config = { browser: "Chrome", timeout: 3000 };
    config.browser = "Firefox";  // ✅ Allowed
    config = { browser: "Safari" };  // ❌ TypeError (const)

  Key Distinction:
    - const prevents REASSIGNMENT of the variable.
    - const does NOT prevent MUTATION of the object's properties.

  Visual:

  let config1:
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Chrome" }   │
  │ (let)   │        │  (can be reassigned)    │
  └─────────┘        └─────────────────────────┘
       ↓
  config1 = { browser: "Safari" };
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Safari" }   │
  │ (let)   │        │  (new object, allowed!) │
  └─────────┘        └─────────────────────────┘

  const config:
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Chrome" }   │
  │ (const) │        │  (cannot be reassigned) │
  └─────────┘        └─────────────────────────┘
       ↓
  config.browser = "Firefox";  // ✅ Allowed (mutating property)
       ↓
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Firefox" }│
  │ (const) │        │  (same object, mutated) │
  └─────────┘        └─────────────────────────┘
       ↓
  config = { browser: "Safari" };  // ❌ TypeError!
  // Cannot reassign const variable

  Comparison Table:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Operation           │ let obj = {...}          │ const obj = {...}        │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.prop = newVal   │ ✅ Allowed                │ ✅ Allowed               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.newProp = val   │ ✅ Allowed                │ ✅ Allowed               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ delete obj.prop     │ ✅ Allowed                │ ✅ Allowed               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj = {...}         │ ✅ Allowed (reassign)     │ ❌ TypeError             │
  │ (new object)        │                          │                          │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Why use const for objects?
    - Prevents accidental reassignment.
    - Signals intent: "this variable always points to this object."
    - Makes code more predictable and safer.
    - Standard practice in modern JavaScript.


3. COMPLETE INDEXING / MAPPING
-------------------------------

  Objects in this file:

  ┌─────────────┬─────────────────────────┬─────────────────────────┐
  │ Variable    │ Initial Properties      │ After Mutations         │
  ├─────────────┼─────────────────────────┼─────────────────────────┤
  │ obj1        │ a: 1, b: 2              │ Unchanged               │
  │ obj2        │ c: 3, d: 4              │ Unchanged               │
  │ copy        │ a: 1, b: 2 (shallow)    │ Unchanged               │
  │ config1     │ browser: Chrome,        │ browser: Firefox,       │
  │             │ timeout: 3000           │ timeout: 5000,          │
  │             │                         │ retries: 2              │
  │             │                         │ → then reassigned to    │
  │             │                         │ { browser: Safari }     │
  │ config      │ browser: Chrome,        │ browser: Firefox,       │
  │             │ timeout: 3000           │ timeout: 5000,          │
  │             │                         │ retries: 2              │
  │             │                         │ (reassignment blocked)  │
  └─────────────┴─────────────────────────┴─────────────────────────┘

  Memory Map:

  Before mutations:
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Chrome",    │
  │ (let)   │        │   timeout: 3000 }       │
  └─────────┘        └─────────────────────────┘
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Chrome",    │
  │ (const) │        │   timeout: 3000 }       │
  └─────────┘        └─────────────────────────┘

  After mutations:
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Firefox",   │
  │ (let)   │        │   timeout: 5000,        │
  │         │        │   retries: 2 }            │
  └─────────┘        └─────────────────────────┘
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Firefox",   │
  │ (const) │        │   timeout: 5000,        │
  │         │        │   retries: 2 }            │
  └─────────┘        └─────────────────────────┘

  After config1 reassignment:
  ┌─────────┐        ┌─────────────────────────┐
  │ config1 │───────→│ { browser: "Safari" }   │
  │ (let)   │        │  (NEW object)           │
  └─────────┘        └─────────────────────────┘
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│ { browser: "Firefox",   │
  │ (const) │        │   timeout: 5000,        │
  │         │        │   retries: 2 }            │
  └─────────┘        └─────────────────────────┘
  (config cannot be reassigned!)


4. PRACTICAL EXAMPLES
----------------------

  Example 1: Shallow copy with spread
    let original = { a: 1, b: 2 };
    let copy = { ...original };
    copy.a = 99;
    console.log(original.a);  // 1 (unchanged!)

  Example 2: Merge objects
    let defaults = { timeout: 3000, retries: 3 };
    let overrides = { timeout: 5000 };
    let config = { ...defaults, ...overrides };
    console.log(config);  // { timeout: 5000, retries: 3 }

  Example 3: const object mutation
    const user = { name: "John" };
    user.name = "Jane";       // ✅ Allowed
    user.age = 30;            // ✅ Allowed
    // user = {};             // ❌ TypeError

  Example 4: Deep clone workaround
    const user = { name: "John", address: { city: "NYC" } };
    const clone = JSON.parse(JSON.stringify(user));
    clone.address.city = "LA";
    console.log(user.address.city);  // "NYC" (unchanged!)

  Example 5: Freeze to prevent mutation
    const config = Object.freeze({ browser: "Chrome" });
    config.browser = "Firefox";  // Silently ignored (or throws in strict mode)
    console.log(config.browser);  // "Chrome"

  Example 6: Spread with new properties
    let base = { a: 1, b: 2 };
    let extended = { ...base, c: 3, d: 4 };
    console.log(extended);  // { a: 1, b: 2, c: 3, d: 4 }


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Spread operator `{ ...obj }` creates a shallow copy of an object.
  2. `{ ...obj1, ...obj2 }` merges two objects (later overrides earlier).
  3. Shallow copy does NOT clone nested objects — use JSON.parse/stringify for deep copy.
  4. const prevents reassignment of the variable, NOT mutation of the object.
  5. const obj = {}; obj.prop = x;  // ✅ Allowed
  6. const obj = {}; obj = {};      // ❌ TypeError
  7. Always use const for objects unless you truly need to reassign the variable.
  8. Object.freeze() prevents ALL mutation (use for true immutability).
  9. Spread is the modern, clean way to copy and merge objects.

================================================================================
*/
