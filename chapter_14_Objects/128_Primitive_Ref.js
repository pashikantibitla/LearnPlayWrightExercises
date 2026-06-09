// Primitive vs Reference Types
let a = 10;
let b = a;
b = 99;
console.log(a);

// Objects — copied by REFERENCE , call by ref.
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);


/*
================================================================================
                    DETAILED EXPLANATION: PRIMITIVE vs REFERENCE TYPES
================================================================================

1. PRIMITIVE TYPES IN JAVASCRIPT
---------------------------------
  Primitives are simple, immutable data types. There are 7 primitive types:
    - string
    - number
    - bigint
    - boolean
    - undefined
    - symbol
    - null

  Characteristics:
    - Stored directly in memory (stack).
    - Passed by VALUE (copied completely).
    - Immutable — cannot be changed after creation.
    - Compared by their actual value.

  Example from file:
    let a = 10;    // a stores the value 10 directly
    let b = a;     // b gets a COPY of 10 (not a reference)
    b = 99;        // b now stores 99; a is unchanged
    console.log(a); // 10

  Memory Diagram (Primitives):

  STACK:
  ┌─────────┐
  │  a = 10 │  ← Value stored directly
  └─────────┘
  ┌─────────┐
  │  b = 10 │  ← Copy of a's value
  └─────────┘
  (After b = 99)
  ┌─────────┐
  │  b = 99 │  ← b changed, a unaffected
  └─────────┘
  ┌─────────┐
  │  a = 10 │  ← a unchanged!
  └─────────┘


2. REFERENCE TYPES IN JAVASCRIPT
---------------------------------
  Reference types are objects that store a reference (pointer) to their data.
  The main reference types are:
    - Object (including plain objects, arrays, functions, dates, regex)
    - Arrays
    - Functions

  Characteristics:
    - Stored in HEAP memory; variable holds a REFERENCE (address).
    - Passed by REFERENCE (copied pointer, not data).
    - Mutable — properties can be changed.
    - Compared by memory address, not content.

  Example from file:
    let obj1 = { val: 10 };   // obj1 stores a reference to { val: 10 }
    let obj2 = obj1;          // obj2 gets the SAME reference
    obj2.val = 99;            // Changes the object through obj2
    console.log(obj1.val);     // 99 — obj1 sees the same change!

  Memory Diagram (Reference Types):

  STACK:                              HEAP:
  ┌─────────┐                        ┌─────────────────────────┐
  │ obj1    │───────→│  { val: 10 }            │
  │ (ref)   │        │  Address: 0xA1          │
  └─────────┘        └─────────────────────────┘
  ┌─────────┐
  │ obj2    │───────→│  (same reference!)      │
  │ (ref)   │        │  Address: 0xA1          │
  └─────────┘        └─────────────────────────┘

  After obj2.val = 99:
  ┌─────────┐                        ┌─────────────────────────┐
  │ obj1    │───────→│  { val: 99 }            │
  │ (ref)   │        │  (same object, mutated) │
  └─────────┘        └─────────────────────────┘
  ┌─────────┐
  │ obj2    │───────→│  (same reference)       │
  │ (ref)   │        └─────────────────────────┘
  └─────────┘


3. COMPARISON TABLE: PRIMITIVE vs REFERENCE
---------------------------------------------

┌─────────────────────┬──────────────────────────┬──────────────────────────┐
│ Aspect              │ Primitive Types          │ Reference Types          │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Examples            │ number, string, boolean, │ Object, Array, Function, │
│                     │ null, undefined, symbol, │ Date, RegExp, Map, Set   │
│                     │ bigint                   │                          │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Stored in           │ Stack (direct value)     │ Heap (via reference)     │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Copy behavior       │ By VALUE (full copy)     │ By REFERENCE (pointer)   │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Mutability          │ Immutable                │ Mutable (usually)         │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Memory usage        │ Small, fixed             │ Larger, dynamic          │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Comparison (===)    │ Compares values          │ Compares references     │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ typeof              │ Returns primitive name   │ Returns "object" or      │
│                     │                          │ "function"              │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Assignment effect   │ Independent copies       │ Shared object           │
└─────────────────────┴──────────────────────────┴──────────────────────────┘


4. VISUAL COMPARISON: VALUE vs REFERENCE
-----------------------------------------

  PRIMITIVE (Copy by Value):

  Before:                         After b = 99:
  ┌─────────┐                    ┌─────────┐
  │ a = 10  │                    │ a = 10  │  ← Unchanged!
  └─────────┘                    └─────────┘
  ┌─────────┐                    ┌─────────┐
  │ b = 10  │                    │ b = 99  │  ← Changed independently
  └─────────┘                    └─────────┘
  (Two separate values)          (Two separate values)

  REFERENCE (Copy by Reference):

  Before:                         After obj2.val = 99:
  ┌─────────┐                    ┌─────────┐
  │ obj1    │──────┐             │ obj1    │──────┐
  └─────────┘      │             └─────────┘      │
  ┌─────────┐      │             ┌─────────┐      │
  │ obj2    │──────┘             │ obj2    │──────┘
  └─────────┘      │             └─────────┘      │
                   ▼                              ▼
            ┌─────────────┐                ┌─────────────┐
            │ { val: 10 } │                │ { val: 99 } │  ← Mutated!
            └─────────────┘                └─────────────┘
  (One object, two refs)         (Same object, both see change)


5. COMPLETE INDEXING / MAPPING
-------------------------------

  Variables in this file:

  ┌─────────────┬─────────────┬──────────────┬─────────────────────────┐
  │ Variable    │ Type        │ Value/Ref    │ Memory Location         │
  ├─────────────┼─────────────┼──────────────┼─────────────────────────┤
  │ a           │ Primitive   │ 10           │ Stack (direct)          │
  │ b           │ Primitive   │ 99           │ Stack (direct)          │
  │ obj1        │ Reference   │ → { val: 99 }│ Stack (ref) → Heap      │
  │ obj2        │ Reference   │ → { val: 99 }│ Stack (ref) → Heap      │
  │             │             │ (same object)│ (same heap address)     │
  └─────────────┴─────────────┴──────────────┴─────────────────────────┘

  Memory Map:

  STACK:
  ┌─────────────┐
  │  a = 10     │
  ├─────────────┤
  │  b = 99     │
  ├─────────────┤
  │  obj1       │──┐
  │  (ref)      │  │
  ├─────────────┤  │
  │  obj2       │──┘
  │  (ref)      │  │
  └─────────────┘  │
                   │
  HEAP:            ▼
  ┌─────────────────────────┐
  │  { val: 99 }            │
  │  (Object at 0xA1)       │
  └─────────────────────────┘


6. WHY THIS MATTERS IN PRACTICE
--------------------------------
  This distinction is CRITICAL for test automation:

  A) Passing test data:
    function updateTest(test) {
        test.status = "running";  // Modifies original object!
    }
    let myTest = { name: "Login", status: "pending" };
    updateTest(myTest);
    console.log(myTest.status);  // "running" — original changed!

  B) Creating independent copies:
    let config1 = { browser: "chrome" };
    let config2 = { ...config1 };  // Shallow copy (new object)
    config2.browser = "firefox";
    console.log(config1.browser);  // "chrome" — unchanged!

  C) Array copying:
    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    arr2.push(4);
    console.log(arr1);  // [1, 2, 3, 4] — original changed!

  D) Function as reference:
    let fn1 = function() { return 1; };
    let fn2 = fn1;  // Same function reference


7. PRACTICAL EXAMPLES
----------------------

  Example 1: Shallow copy with spread
    let original = { a: 1, b: 2 };
    let copy = { ...original };  // New object, not reference
    copy.a = 99;
    console.log(original.a);  // 1 (unchanged!)

  Example 2: Nested object reference trap
    let user = { name: "Pramod", address: { city: "NYC" } };
    let user2 = { ...user };  // Shallow copy
    user2.address.city = "LA";
    console.log(user.address.city);  // "LA" — nested object still shared!

  Example 3: Deep copy with JSON
    let user = { name: "Pramod", address: { city: "NYC" } };
    let user2 = JSON.parse(JSON.stringify(user));  // Deep copy
    user2.address.city = "LA";
    console.log(user.address.city);  // "NYC" — truly independent!

  Example 4: Array reference
    let arr1 = [1, 2, 3];
    let arr2 = arr1;
    arr2[0] = 99;
    console.log(arr1[0]);  // 99 — shared!

  Example 5: Creating a true copy
    let obj = { val: 10 };
    let clone = Object.assign({}, obj);  // Shallow copy
    clone.val = 99;
    console.log(obj.val);  // 10 (unchanged!)


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Primitives (string, number, boolean, etc.) are copied by VALUE.
  2. Reference types (object, array, function) are copied by REFERENCE.
  3. Assigning an object to a new variable does NOT create a copy — it creates
     another reference to the same object.
  4. Changes through one reference are visible through ALL references.
  5. Use { ...obj } (spread) or Object.assign() for shallow copies.
  6. Use JSON.parse(JSON.stringify(obj)) for deep copies (nested objects).
  7. Always be aware of reference behavior when passing objects to functions.
  8. typeof null === "object" — the one exception (historical bug).

================================================================================
*/
