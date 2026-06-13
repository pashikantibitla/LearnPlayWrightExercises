let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}


/*
================================================================================
                    DETAILED EXPLANATION: OBJECT CREATION & EQUALITY
================================================================================

1. OBJECT CREATION WAYS
------------------------
  There are multiple ways to create objects in JavaScript:

  A) Object Literal (most common):
    let obj = { key: "value" };

  B) new Object():
    let obj = new Object();
    obj.key = "value";

  C) Object.create():
    let obj = Object.create(null);
    obj.key = "value";

  D) Constructor Function:
    function Person(name) { this.name = name; }
    let obj = new Person("Pramod");

  E) Class (ES6):
    class Person { constructor(name) { this.name = name; } }
    let obj = new Person("Pramod");

  From this file:
    let c = { status: "pass" };  // Object literal
    let d = { status: "pass" };  // Object literal

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Method              │ Syntax                   │ Use Case                 │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Literal {}          │ { a: 1, b: 2 }           │ Simple, one-off objects  │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ new Object()        │ new Object()             │ Rarely used (verbose)    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Object.create()     │ Object.create(proto)     │ Custom prototypes        │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Constructor Fn      │ new Person()             │ Pre-ES6 pattern          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Class (ES6)         │ new Person()             │ Modern OOP, inheritance  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


2. SAME VALUES, DIFFERENT OBJECTS
----------------------------------
  This file demonstrates that two objects with IDENTICAL contents are
  still DIFFERENT objects in memory.

  From file:
    let c = { status: "pass" };
    let d = { status: "pass" };
    console.log(c === d);  // false

  Memory Diagram:

  ┌─────────┐        ┌─────────────────────────┐
  │    c    │───────→│  { status: "pass" }     │
  │ (ref)   │        │  Memory Address: 0xA1   │
  └─────────┘        └─────────────────────────┘

  ┌─────────┐        ┌─────────────────────────┐
  │    d    │───────→│  { status: "pass" }     │
  │ (ref)   │        │  Memory Address: 0xB2   │
  └─────────┘        └─────────────────────────┘

  Key Point:
    c and d have the SAME content but DIFFERENT memory addresses.
    === compares memory addresses, not content.
    Therefore: c === d → false


3. OBJECT EQUALITY RULES
-------------------------
  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Comparison          │ Example                  │ Result                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Same object ref     │ let b = a; b === a       │ true                     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Different objects,  │ {a:1} === {a:1}          │ false                    │
  │ same content        │                          │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Primitive values    │ 5 === 5, "x" === "x"     │ true                     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Object property     │ a.status === b.status    │ true (if same value)     │
  │ to primitive        │                          │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ null === null       │ null === null            │ true (special case)      │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ NaN === NaN         │ NaN === NaN              │ false (special case)     │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  How to compare object contents:
    - JSON.stringify(c) === JSON.stringify(d)  // true
      ⚠️ Order of keys matters! {a:1, b:2} !== {b:2, a:1} with JSON.stringify
    - Deep comparison library: lodash.isEqual()
    - Manual recursive comparison function

  Example:
    let c = { status: "pass" };
    let d = { status: "pass" };
    console.log(JSON.stringify(c) === JSON.stringify(d));  // true


4. VISUAL OBJECT MAPPING
-------------------------

  Object c:
  ┌─────────────────────────────────────────┐
  │  Reference: c                            │
  │  Address: 0xA1                           │
  │  ┌─────────┬─────────────────────────┐ │
  │  │ "status"│  "pass"                 │ │
  │  └─────────┴─────────────────────────┘ │
  └─────────────────────────────────────────┘

  Object d:
  ┌─────────────────────────────────────────┐
  │  Reference: d                            │
  │  Address: 0xB2                           │
  │  ┌─────────┬─────────────────────────┐ │
  │  │ "status"│  "pass"                 │ │
  │  └─────────┴─────────────────────────┘ │
  └─────────────────────────────────────────┘

  c === d → false (different addresses: 0xA1 ≠ 0xB2)


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Object literals {} are the standard way to create objects.
  2. Each {} creates a NEW object in memory.
  3. Two objects with identical content are NOT equal (=== returns false).
  4. === compares memory references, not object contents.
  5. To compare contents, use JSON.stringify() or a deep comparison library.
  6. Object.create() and classes create objects with different prototype chains.

================================================================================
*/
