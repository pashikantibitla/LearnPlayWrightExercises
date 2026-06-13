// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the double quotes
// below key in double quotes is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);

let a1 = { status: "pass" };
console.log(a1.status);

//

let b = a;
b.status = "fail";
console.log(a.status);
console.log(b.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}

if (c === d) {
    console.log("c === d true");
} else {
    console.log("c === d false");
}


/*
================================================================================
                    DETAILED EXPLANATION: OBJECTS — KEYS, VALUES, REFERENCES
================================================================================

1. OBJECT KEY-VALUE PAIRS
--------------------------
  Every object consists of properties where each property has a KEY (name) and
  a VALUE (data).

  Syntax:
    let objectName = {
        key1: value1,
        key2: value2,
        key3: value3
    };

  Key Rules:
    - Keys are converted to strings internally.
    - Keys can be written WITHOUT quotes in JS objects.
    - Keys WITH quotes are valid JSON (and also valid JS).
    - Duplicate keys: the LAST one wins.

  Example:
    let student1 = { name: "Amit", age: 65 };
    // Key "name" has value "Amit"
    // Key "age" has value 65


2. DOT NOTATION vs BRACKET NOTATION
------------------------------------
  Two ways to access and modify object properties:

  A) Dot Notation (obj.property)
    - Most common, readable.
    - Works only with valid identifiers.
    - Cannot use variables as keys.

  B) Bracket Notation (obj["property"])
    - Required for dynamic keys, spaces, special chars.
    - Can use variables.
    - More flexible.

  Examples from file:
    a.status       →  "pass"    (dot notation)
    a["status"]    →  "pass"    (bracket notation)

  Comparison Table:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Scenario            │ Dot Notation             │ Bracket Notation         │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Basic access        │ obj.name                 │ obj["name"]              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Variable key        │ ❌ obj.key (looks for     │ ✅ obj[key]              │
  │                     │   "key" prop)            │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Key with spaces     │ ❌ obj.first name        │ ✅ obj["first name"]     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Key with hyphens    │ ❌ obj.first-name        │ ✅ obj["first-name"]     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Numeric key         │ ❌ obj.0                 │ ✅ obj[0] or obj["0"]    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Computed key        │ ❌ obj.1+2               │ ✅ obj["1+2"]            │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Visual Example:

    Object: a = { status: "pass" }

    Dot:        a.status
                 ↑
                 ┌─────────┬─────────┐
                 │ "status"│ "pass"  │
                 └─────────┴─────────┘

    Bracket:    a["status"]
                 ↑
                 ┌─────────┬─────────┐
                 │ "status"│ "pass"  │
                 └─────────┴─────────┘


3. JSON vs JAVASCRIPT OBJECT (KEYS WITH QUOTES)
-----------------------------------------------
  In JavaScript, object keys do NOT need quotes. In JSON, they MUST have quotes.

  From file:
    let student3 = { name: "Pramod", age: 87, phone: 987654320 };
    // JS object — keys without quotes

    let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };
    // JSON-style — keys with double quotes

  Both are valid in JavaScript, but ONLY the quoted version is valid JSON.

  When to use quoted keys in JS:
    - When the key is a reserved word (e.g., "class", "function").
    - When the key has spaces or special characters.
    - When you specifically need JSON-compatible syntax.


4. OBJECT REFERENCE — THE CRITICAL CONCEPT
-------------------------------------------
  Objects are NOT copied by value. They are copied by REFERENCE.

  What this means:
    - When you assign `let b = a`, both variables point to the SAME object.
    - Changes through `b` are visible through `a`.
    - They are NOT independent copies.

  Example from file:
    let a = { status: "pass" };
    let b = a;
    b.status = "fail";
    console.log(a.status);  // "fail"  ← a was ALSO changed!

  Why? Because a and b both reference the SAME object in memory:

  Memory Diagram:

  ┌─────────┐        ┌─────────────────────────┐
  │    a    │───────→│  { status: "pass" }     │
  │ (ref)   │        │                         │
  └─────────┘        │  After b.status = "fail"│
                     │  → { status: "fail" }   │
  ┌─────────┐        │                         │
  │    b    │───────→│  (same object!)         │
  │ (ref)   │        └─────────────────────────┘
  └─────────┘

  This is ONE object with TWO variables pointing to it.

  Comparison with Primitives:
    let x = 10;
    let y = x;
    y = 99;
    console.log(x);  // 10  ← x is unchanged!

  Primitives are copied by VALUE. Objects are copied by REFERENCE.


5. OBJECT EQUALITY (===)
-------------------------
  When comparing objects with ===, JavaScript compares their REFERENCES,
  NOT their contents.

  Example from file:
    let c = { status: "pass" };
    let d = { status: "pass" };
    console.log(c === d);  // false

  Why false? Because c and d are TWO DIFFERENT objects in memory:

  Memory Diagram:

  ┌─────────┐        ┌─────────────────────────┐
  │    c    │───────→│  { status: "pass" }     │
  │ (ref)   │        │  (Object #1)            │
  └─────────┘        └─────────────────────────┘

  ┌─────────┐        ┌─────────────────────────┐
  │    d    │───────→│  { status: "pass" }     │
  │ (ref)   │        │  (Object #2)            │
  └─────────┘        └─────────────────────────┘

  Same values, but DIFFERENT memory locations → === is false.

  Another Example:
    let b = a;
    console.log(b === a);  // true  ← same reference!

  How to compare object contents:
    - JSON.stringify(c) === JSON.stringify(d)  // true (but slow, order matters)
    - Use a library like lodash _.isEqual(c, d)
    - Manual comparison: c.status === d.status

  Comparison Table:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Comparison          │ Result                   │ Reason                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ b === a (b = a)     │ true                     │ Same reference           │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ c === d (same vals) │ false                    │ Different references     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ c.status === d.status│ true                   │ Same primitive values    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ JSON.stringify      │ true                     │ Same string content      │
  │ (c) === JSON.stringify(d)│                     │ (order-dependent)        │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


6. OBJECT MUTATION
-------------------
  Objects are MUTABLE — you can change their properties after creation.

  Operations:
    - Read:     obj.property
    - Add:      obj.newProperty = value
    - Modify:   obj.existingProperty = newValue
    - Delete:   delete obj.property

  From the file example:
    let b = a;
    b.status = "fail";     // Modify existing property
    console.log(a.status); // "fail" — visible through a too

  Key Point:
    - const prevents reassignment of the variable, NOT mutation of the object.
    - const obj = { a: 1 }; obj.a = 2;  // ✅ Allowed
    - const obj = { a: 1 }; obj = {};    // ❌ TypeError


7. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Objects in this file:

  ┌─────────────┬────────────────────────────────────────┬──────────────┐
  │ Variable    │ Properties                             │ Type         │
  ├─────────────┼────────────────────────────────────────┼──────────────┤
  │ student1    │ name: "Amit", age: 65                  │ Object       │
  │ student2    │ name: "Pramod"                         │ Object       │
  │ student3    │ name: "Pramod", age: 87, phone: 987654320│ Object       │
  │ JSON_student4│ "name": "Pramod", "age": 87,         │ Object       │
  │             │ "phone": 987654320                      │ (JSON-style) │
  │ a           │ status: "pass"                         │ Object       │
  │ b           │ status: "fail" (mutated from a)        │ Object       │
  │ c           │ status: "pass"                         │ Object       │
  │ d           │ status: "pass"                         │ Object       │
  └─────────────┴────────────────────────────────────────┴──────────────┘

  Memory Reference Map:

  ┌─────────────┐        ┌─────────────────────────┐
  │  student1   │───────→│ { name: "Amit", age: 65}│
  └─────────────┘        └─────────────────────────┘

  ┌─────────────┐        ┌─────────────────────────┐
  │  a          │───────→│ { status: "pass" }      │
  └─────────────┘        │  (later: "fail")        │
  ┌─────────────┐        └─────────────────────────┘
  │  b          │───────→│ (same object as a)      │
  └─────────────┘        └─────────────────────────┘

  ┌─────────────┐        ┌─────────────────────────┐
  │  c          │───────→│ { status: "pass" }      │
  └─────────────┘        └─────────────────────────┘
  ┌─────────────┐        ┌─────────────────────────┐
  │  d          │───────→│ { status: "pass" }      │
  └─────────────┘        └─────────────────────────┘
  (c and d are SEPARATE objects!)


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Objects are KEY-VALUE pairs. Keys are strings; values can be any type.
  2. Dot notation (obj.key) is clean; bracket notation (obj["key"]) is flexible.
  3. Objects are copied by REFERENCE, not by value.
  4. `b = a` does NOT create a copy — both point to the same object.
  5. `===` on objects compares REFERENCES, not contents.
  6. Two objects with identical values are NOT equal (=== returns false).
  7. Objects are mutable — you can add, modify, and delete properties.
  8. const protects the variable binding, not the object's contents.

================================================================================
*/
