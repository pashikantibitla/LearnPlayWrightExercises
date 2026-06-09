const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]);


// Dynamic property access
const key = "age";
console.log(user[key]);

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }


/*
================================================================================
                    DETAILED EXPLANATION: OBJECT ACCESS & PROPERTY DESCRIPTORS
================================================================================

1. ACCESSING OBJECT PROPERTIES
-----------------------------
  There are multiple ways to read and write object properties:

  A) Dot Notation (obj.property):
    user.name    →  "John"
    user.age     →  30

  B) Bracket Notation (obj["property"]):
    user["age"]  →  30
    user["email"] → "john@example.com"

  C) Dynamic Property Access (variable as key):
    const key = "age";
    user[key]  →  30
    // This is the SAME as user["age"]

  D) Optional Chaining (modern JS):
    user?.city  → undefined if user doesn't exist
    user?.address?.zip  → safe nested access

  From file:
    console.log(user.name);       // "John"     (dot notation)
    console.log(user["age"]);     // 30         (bracket notation)
    console.log(user[key]);       // 30         (dynamic key)

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Method              │ Example                  │ When to Use              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Dot notation        │ user.name                │ Static keys, readability │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Bracket notation    │ user["first name"]       │ Keys with spaces,      │
  │                     │                          │ dynamic keys, symbols    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Dynamic variable    │ user[key]                │ Keys determined at      │
  │                     │                          │ runtime                  │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Optional chaining   │ user?.address?.city     │ Safe nested access,    │
  │                     │                          │ avoids undefined errors  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


2. ADDING AND MODIFYING PROPERTIES
-----------------------------------
  Objects are mutable — you can add, change, or delete properties at any time.

  From file:
    user.city = "NYC";    // ADD a new property
    user.age = 31;        // MODIFY an existing property

  Operations:
    - Add:    obj.newProp = value;
    - Modify: obj.existingProp = newValue;
    - Delete: delete obj.prop;
    - Read:   obj.prop or obj["prop"];

  Visual:

  Before:
  ┌─────────────────────────────────────────┐
  │  user:                                   │
  │  { name: "John", age: 30,                │
  │    email: "john@example.com" }           │
  └─────────────────────────────────────────┘

  After user.city = "NYC":
  ┌─────────────────────────────────────────┐
  │  user:                                   │
  │  { name: "John", age: 30,                │
  │    email: "john@example.com",            │
  │    city: "NYC" }  ← NEW PROPERTY         │
  └─────────────────────────────────────────┘

  After user.age = 31:
  ┌─────────────────────────────────────────┐
  │  user:                                   │
  │  { name: "John", age: 31,  ← MODIFIED    │
  │    email: "john@example.com",            │
  │    city: "NYC" }                         │
  └─────────────────────────────────────────┘


3. DYNAMIC PROPERTY ACCESS IN DETAIL
-------------------------------------
  Bracket notation with a variable is incredibly powerful for dynamic programming.

  Example from file:
    const key = "age";
    console.log(user[key]);  // 30

  Why it works:
    - `key` is a variable containing the string "age".
    - `user[key]` evaluates to `user["age"]`.
    - JavaScript looks up the "age" property on user.

  Advanced Example:
    function getProperty(obj, propName) {
        return obj[propName];
    }
    getProperty(user, "name");   // "John"
    getProperty(user, "email");  // "john@example.com"

  Use Cases:
    - Looping through property names dynamically.
    - Building property names from strings.
    - Accessing properties based on user input.
    - Mapping API response keys to local keys.

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Code                │ Equivalent To            │ Result                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ user.name           │ user["name"]             │ "John"                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ user["na" + "me"]   │ user["name"]             │ "John"                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ let k = "age";      │ user["age"]              │ 30                       │
  │ user[k]             │                          │                          │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ user["first-name"]  │ user["first-name"]       │ Value (if exists)       │
  │ (dot fails)         │                          │                          │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


4. OBJECT PROPERTY DESCRIPTORS
-----------------------------
  Every property in an object has hidden ATTRIBUTES that control its behavior.
  These are called property descriptors.

  From file:
    let obj = { name: "Login" };
    console.log(Object.getOwnPropertyDescriptor(obj, "name"));
    // {
    //   value: "Login",
    //   writable: true,
    //   enumerable: true,
    //   configurable: true
    // }

  Four Property Attributes:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Attribute           │ Meaning                  │ When false...            │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ value               │ The actual value         │ N/A (always has value)   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ writable            │ Can the value be changed?│ obj.prop = x silently    │
  │                     │                          │ fails (or throws in      │
  │                     │                          │ strict mode)             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ enumerable          │ Shows in for...in,       │ Hidden from loops and    │
  │                     │ Object.keys()?           │ Object.keys()            │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ configurable        │ Can be deleted or        │ Cannot delete or         │
  │                     │ redefined?               │ redefine descriptor      │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  Why this matters:
    - `writable: false` creates read-only properties (like const fields).
    - `enumerable: false` hides properties from iteration (internal methods).
    - `configurable: false` locks the property structure (prevents deletion).

  Modifying Descriptors:
    Object.defineProperty(obj, "name", {
        writable: false,
        enumerable: false,
        configurable: false
    });
    obj.name = "New";  // Fails silently (or throws in strict mode)

  Example: Creating a read-only property
    let config = {};
    Object.defineProperty(config, "version", {
        value: "1.0",
        writable: false,
        enumerable: true,
        configurable: false
    });
    config.version = "2.0";  // Silently ignored (strict mode: TypeError)
    console.log(config.version);  // "1.0"


5. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Object: user

  ┌─────────────┬─────────────────────────┬─────────────────────────┐
  │ Key         │ Value                   │ Access Method           │
  ├─────────────┼─────────────────────────┼─────────────────────────┤
  │ "name"      │ "John"                  │ user.name, user["name"] │
  │ "age"       │ 30 → 31 (modified)     │ user.age, user["age"],   │
  │             │                         │ user[key] where key="age"│
  │ "email"     │ "john@example.com"      │ user.email, user["email"]│
  │ "city"      │ "NYC" (added)           │ user.city, user["city"]  │
  └─────────────┴─────────────────────────┴─────────────────────────┘

  Object: obj

  ┌─────────────┬─────────────────────────┬─────────────────────────┐
  │ Key         │ Value                   │ Descriptor              │
  ├─────────────┼─────────────────────────┼─────────────────────────┤
  │ "name"      │ "Login"                 │ writable: true          │
  │             │                         │ enumerable: true          │
  │             │                         │ configurable: true      │
  └─────────────┴─────────────────────────┴─────────────────────────┘

  Visual Memory Map:

  user:
  ┌─────────────────────────────────────────┐
  │  { name: "John", age: 31,               │
  │    email: "john@example.com",            │
  │    city: "NYC" }                         │
  └─────────────────────────────────────────┘
       ↑
  ┌─────────┐
  │  user   │
  │  (ref)  │
  └─────────┘


6. PRACTICAL EXAMPLES
----------------------

  Example 1: Dynamic property update function
    function updateProperty(obj, key, value) {
        obj[key] = value;
    }
    let user = { name: "John" };
    updateProperty(user, "age", 30);
    console.log(user);  // { name: "John", age: 30 }

  Example 2: Safe property access with fallback
    function getSafe(obj, key, fallback = "N/A") {
        return obj[key] !== undefined ? obj[key] : fallback;
    }
    getSafe(user, "name");     // "John"
    getSafe(user, "country");  // "N/A"

  Example 3: Iterate with dynamic keys
    let keys = ["name", "age", "email"];
    for (let key of keys) {
        console.log(`${key}: ${user[key]}`);
    }
    // name: John
    // age: 31
    // email: john@example.com

  Example 4: Create a read-only config
    let config = {};
    Object.defineProperty(config, "apiUrl", {
        value: "https://api.example.com",
        writable: false,
        configurable: false
    });
    // config.apiUrl is now immutable

  Example 5: Check all property descriptors
    let user = { name: "John", age: 30 };
    for (let key of Object.keys(user)) {
        let desc = Object.getOwnPropertyDescriptor(user, key);
        console.log(`${key}: writable=${desc.writable}`);
    }


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Use dot notation (obj.key) for static, readable access.
  2. Use bracket notation (obj["key"]) for dynamic keys, spaces, or special chars.
  3. Variables can be used as keys: obj[variableName] looks up the variable's value.
  4. Objects are mutable — add, modify, or delete properties anytime.
  5. Every property has hidden descriptors: value, writable, enumerable, configurable.
  6. Object.defineProperty() controls these descriptors for fine-grained control.
  7. Read-only properties = writable: false. Hidden properties = enumerable: false.
  8. Dynamic property access is essential for flexible, generic code.

================================================================================
*/
