/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: JavaScript Objects — Introduction, creation, and comparison with Arrays/JSON.
 *
 * Functions/Methods Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *
 * Key Concepts:
 *   - Object: A collection of key-value pairs (properties) enclosed in {}.
 *   - Empty Object: {} — an object with no properties.
 *   - Object Literal: { key: value, key2: value2 } syntax.
 *   - JSON: JavaScript Object Notation — a text format for data exchange.
 *   - Array: An ordered list of values enclosed in [].
 *   - typeof object: Returns "object" for objects, arrays, and null.
 * ============================================================
 */


// ========================
// 1. EMPTY OBJECT
// ========================
let obj = {};
console.log("Empty object:", obj);           // {}
console.log("Type:", typeof obj);            // "object"


// ========================
// 2. OBJECT WITH PROPERTIES
// ========================
let obj1 = {
    name: "Pramod",
    age: 42,
    rollNo: 123
};
console.log("Object with properties:", obj1);
// { name: "Pramod", age: 42, rollNo: 123 }


// ========================
// 3. ARRAY FOR COMPARISON
// ========================
let array = [1, 2, 3, 4];
console.log("Array:", array);                  // [1, 2, 3, 4]
console.log("Array type:", typeof array);      // "object" (arrays are objects!)


// ========================
// 4. OBJECT REFERENCE
// ========================
let test_Obj_ref = { name: "Pramod", age: 65, phone: 9876543210 };
console.log("Test object:", test_Obj_ref);


/*
================================================================================
                    DETAILED EXPLANATION: JAVASCRIPT OBJECTS
================================================================================

1. WHAT IS AN OBJECT IN JAVASCRIPT?
------------------------------------
An Object is a fundamental data structure in JavaScript that stores data as a
collection of KEY-VALUE pairs (also called PROPERTIES).

  Syntax:
    let obj = {
        key1: value1,
        key2: value2,
        key3: value3
    };

  Key Characteristics:
    - Keys are always strings (or Symbols) — even if you write them without quotes.
    - Values can be ANY valid JavaScript type: string, number, boolean, array,
      object, function, null, undefined.
    - Objects are UNORDERED — properties have no guaranteed order.
    - Objects are mutable — you can add, modify, or delete properties after creation.

  Visual Representation:

    ┌─────────────────────────────────────────┐
    │              Object: obj1               │
    │  ┌───────────┬─────────────────────┐   │
    │  │   Key     │   Value             │   │
    │  ├───────────┼─────────────────────┤   │
    │  │  "name"   │  "Pramod"           │   │
    │  │  "age"    │  42                 │   │
    │  │  "rollNo" │  123                │   │
    │  └───────────┴─────────────────────┘   │
    └─────────────────────────────────────────┘

  Think of an object like a DICTIONARY or a MAP:
    - Key = the word you look up
    - Value = the definition/meaning


2. JSON vs JAVASCRIPT OBJECT
-----------------------------
  JSON (JavaScript Object Notation) is a TEXT FORMAT for storing and transporting
  data. It looks like a JavaScript object, but there are important differences.

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ JavaScript Object        │ JSON                     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Syntax              │ { key: value }           │ { "key": "value" }       │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Key Quotes          │ Optional                 │ REQUIRED (double quotes) │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Trailing Commas     │ Allowed                  │ Not allowed              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Comments            │ Allowed                  │ Not allowed              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Functions           │ Allowed as values        │ Not allowed              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ undefined           │ Allowed as value         │ Not allowed              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Type                │ Data structure (in code) │ Text string (in transit) │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Methods             │ Has methods (.toString)  │ No methods — plain text  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Example:
    JavaScript Object:
      let person = { name: "Pramod", age: 42 };

    JSON String:
      '{"name":"Pramod","age":42}'

  Conversion:
    JSON.stringify(person)  →  '{"name":"Pramod","age":42}'
    JSON.parse('{"name":"Pramod"}')  →  { name: "Pramod" }


3. OBJECT vs ARRAY
-----------------
  Both arrays and objects are of type "object" in JavaScript, but they serve
  different purposes.

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ Array                    │ Object                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Syntax              │ [value1, value2]         │ { key: value }           │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Access              │ index [0], [1]           │ key ["name"], .name      │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Order               │ Ordered (index 0, 1, 2)  │ Unordered (no index)     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Length              │ .length property         │ No .length (use Object.keys)│
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Use Case            │ List of items            │ Named properties / entity│
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Example             │ ["apple", "banana"]      │ { name: "apple", color: "red"}│
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ typeof              │ "object"                 │ "object"                 │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Loop                │ for, for...of            │ for...in, Object.keys    │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Visual Comparison:

    Array (ordered list):
    ┌─────┬─────┬─────┬─────┐
    │  1  │  2  │  3  │  4  │
    └─────┴─────┴─────┴─────┘
      0     1     2     3     ← Index positions

    Object (key-value map):
    ┌─────────────────────────────────────────┐
    │  "name" → "Pramod"                      │
    │  "age"  → 42                            │
    │  "rollNo" → 123                         │
    └─────────────────────────────────────────┘
      ↑ No index — accessed by KEY name


4. MEMORY ALLOCATION: HOW OBJECTS ARE STORED
----------------------------------------------
  JavaScript objects are stored in the HEAP memory. Unlike primitives (stored
  directly), objects store a REFERENCE (pointer) to their memory location.

  Memory Structure (Simplified):

  ┌─────────────────────────────────────────────────────────┐
  │                      STACK (Variables)                    │
  │  ┌─────────────┐        ┌─────────────┐                │
  │  │  obj        │───────→│  Reference  │                │
  │  │  (pointer)  │        │  (address)   │                │
  │  └─────────────┘        └──────┬──────┘                │
  └────────────────────────────────│────────────────────────┘
                                   │
                                   ▼
  ┌─────────────────────────────────────────────────────────┐
  │                        HEAP (Object Data)                 │
  │  ┌─────────────────────────────────────────────────────┐│
  │  │              Object Header                          ││
  │  │  ┌──────────┬──────────┬──────────┐               ││
  │  │  │  hidden  │  proto   │  property │               ││
  │  │  │  class   │  link    │  count    │               ││
  │  │  └──────────┴──────────┴──────────┘               ││
  │  └─────────────────────────────────────────────────────┘│
  │                          │                              │
  │                          ▼                              │
  │  ┌─────────────────────────────────────────────────────┐│
  │  │            Properties (Hash Table / Dictionary)      ││
  │  │  ┌──────────┬──────────┬──────────┐               ││
  │  │  │  "name"  │  "age"   │ "rollNo" │               ││
  │  │  │  (key)   │  (key)   │  (key)   │               ││
  │  │  ├──────────┼──────────┼──────────┤               ││
  │  │  │"Pramod"  │  42      │  123     │               ││
  │  │  │(string)  │(number)  │(number)  │               ││
  │  │  └──────────┴──────────┴──────────┘               ││
  │  └─────────────────────────────────────────────────────┘│
  └─────────────────────────────────────────────────────────┘

  Key Points:
    - Variable (obj) holds a REFERENCE (memory address), not the actual data.
    - The actual object data lives in the HEAP.
    - When you assign `let obj2 = obj1`, both variables point to the SAME object.
    - This is why objects are called "reference types".

  Primitive vs Object Memory:

  ┌─────────────────────────────────────────────────────────┐
  │  PRIMITIVE (e.g., let x = 10)                           │
  │  ┌─────────────┐                                       │
  │  │  x = 10     │  ← Value stored DIRECTLY in variable │
  │  └─────────────┘                                       │
  └─────────────────────────────────────────────────────────┘

  ┌─────────────────────────────────────────────────────────┐
  │  OBJECT (e.g., let obj = { a: 1 })                     │
  │  ┌─────────────┐        ┌─────────────────────────┐     │
  │  │  obj        │───────→│  Heap: { a: 1 }         │     │
  │  │  (ref)      │        │  (actual object data)   │     │
  │  └─────────────┘        └─────────────────────────┘     │
  └─────────────────────────────────────────────────────────┘


5. INDEXING / ACCESSING OBJECT PROPERTIES
------------------------------------------
  Unlike arrays which use NUMERIC indices (0, 1, 2...), objects use STRING KEYS.
  This is called "keyed collection" or "associative array".

  ┌─────────────────────────────────────────────────────────┐
  │  Access Methods                                         │
  ├─────────────────────────────────────────────────────────┤
  │  Dot Notation:    obj.name     → "Pramod"               │
  │  Bracket Notation: obj["name"] → "Pramod"               │
  │  Variable Key:     let key = "name"; obj[key] → "Pramod"│
  └─────────────────────────────────────────────────────────┘

  Dot Notation:
    - Cleaner, more readable.
    - ONLY works when key is a valid identifier (no spaces, no special chars).
    - obj1.name   ✅
    - obj1.rollNo ✅

  Bracket Notation:
    - Required when key has spaces, special characters, or is a variable.
    - obj1["name"]   ✅
    - obj1["first name"]   ✅ (key with space)
    - obj1[key]   ✅ (key is a variable)

  Comparison Table:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ Dot Notation             │ Bracket Notation         │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Syntax              │ obj.key                  │ obj["key"]               │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Dynamic keys        │ ❌ No                    │ ✅ Yes                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Keys with spaces    │ ❌ No                    │ ✅ Yes                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Keys with special   │ ❌ No                    │ ✅ Yes                   │
  │ chars (., -, etc.)  │                          │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Readability         │ High                     │ Medium                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Computed properties │ ❌ No                    │ ✅ Yes                   │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


6. IMPORTANCE OF OBJECTS IN JAVASCRIPT
---------------------------------------
  Objects are EVERYWHERE in JavaScript:
    - All non-primitive types are objects (arrays, functions, dates, regex).
    - DOM elements are objects.
    - API responses are typically objects (JSON).
    - Configuration settings are objects.
    - Class instances are objects.

  Real-World Use Cases:
    - User profiles: { name, email, age, role }
    - API responses: { status, data, message }
    - Configuration: { baseUrl, timeout, retries }
    - Test results: { testName, status, duration, error }
    - Browser settings: { headless, viewport, userAgent }

  Without objects, JavaScript would be extremely limited. They are the foundation
  of modern JS programming, OOP, and data manipulation.


7. COMPLETE OBJECT INDEXING / KEY MAPPING
------------------------------------------

  Object: obj1 = { name: "Pramod", age: 42, rollNo: 123 }

  ┌─────────────┬─────────────┬──────────────────┬─────────────────────┐
  │ Key (String)│ Value       │ Dot Access       │ Bracket Access      │
  ├─────────────┼─────────────┼──────────────────┼─────────────────────┤
  │ "name"      │ "Pramod"    │ obj1.name        │ obj1["name"]        │
  │ "age"       │ 42          │ obj1.age         │ obj1["age"]         │
  │ "rollNo"    │ 123         │ obj1.rollNo      │ obj1["rollNo"]      │
  └─────────────┴─────────────┴──────────────────┴─────────────────────┘

  Visual Memory Map:

  Variable: obj1
  ┌─────────┐
  │  ref    │────────┐
  └─────────┘        │
                     ▼
  ┌────────────────────────────────────────┐
  │  HEAP Object                           │
  │  ┌─────────┬─────────────────────────┐ │
  │  │ "name"  │  "Pramod"               │ │
  │  ├─────────┼─────────────────────────┤ │
  │  │ "age"   │  42                     │ │
  │  ├─────────┼─────────────────────────┤ │
  │  │ "rollNo"│  123                    │ │
  │  └─────────┴─────────────────────────┘ │
  └────────────────────────────────────────┘


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. An object is a collection of KEY-VALUE pairs: { key: value }.
  2. Keys are strings, values can be any type.
  3. Objects are stored in HEAP memory; variables hold REFERENCES.
  4. Access properties with dot notation (obj.key) or bracket notation (obj["key"]).
  5. Use dot notation when possible; bracket notation for dynamic/space keys.
  6. JSON is a TEXT format that looks like objects but has stricter rules.
  7. Objects are the backbone of JavaScript — used for data, config, APIs, DOM.
  8. Arrays are ordered lists; objects are unordered key-value collections.

================================================================================
*/
