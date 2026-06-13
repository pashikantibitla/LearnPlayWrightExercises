let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config);

delete config.browser;
console.log(config);


if (config.browser === "chrome") {
    console.log("I will execute my TC");
} else {
    console.log("Browser not set or not chrome");
}


let config2 = {
    browser: "chrome",
    timeout: 3000,
    testname: "login test"
};

console.log(config2);


/*
================================================================================
                    DETAILED EXPLANATION: DYNAMIC OBJECT OPERATIONS
================================================================================

1. DYNAMIC PROPERTY ASSIGNMENT
-------------------------------
  You can add properties to an object AFTER it is created using either dot
  notation or bracket notation.

  Syntax:
    obj.newProperty = value;        // dot notation
    obj["newProperty"] = value;     // bracket notation

  Example from file:
    let config = {};                 // empty object
    config.browser = "chrome";       // add property dynamically
    config.timeout = 3000;           // add another property
    config.testname = "login test";  // add third property

  Result:
    config = {
        browser: "chrome",
        timeout: 3000,
        testname: "login test"
    }

  Visual:

  Step 1: config = {}
  ┌─────────┐        ┌─────────┐
  │ config  │───────→│  {}     │
  └─────────┘        └─────────┘

  Step 2: config.browser = "chrome"
  ┌─────────┐        ┌─────────────────────────┐
  │ config  │───────→│  { browser: "chrome" }  │
  └─────────┘        └─────────────────────────┘

  Step 3: config.timeout = 3000
  ┌─────────┐        ┌──────────────────────────────────┐
  │ config  │───────→│  { browser: "chrome",           │
  └─────────┘        │    timeout: 3000 }               │
                     └──────────────────────────────────┘

  Step 4: config.testname = "login test"
  ┌─────────┐        ┌─────────────────────────────────────────┐
  │ config  │───────→│  { browser: "chrome", timeout: 3000,    │
  └─────────┘        │    testname: "login test" }              │
                     └─────────────────────────────────────────┘


2. DELETE OPERATOR
-------------------
  The `delete` operator removes a property from an object.

  Syntax:
    delete obj.property;
    delete obj["property"];

  Example from file:
    delete config.browser;
    console.log(config);
    // { timeout: 3000, testname: "login test" }

  Key Points:
    - delete ONLY removes the property, not the object.
    - After delete, the property becomes undefined.
    - delete returns true (success) or false (failure).
    - Cannot delete properties from frozen or sealed objects.
    - delete does NOT affect the prototype chain.

  Visual:

  Before delete:
  ┌─────────────────────────────────────────┐
  │  { browser: "chrome", timeout: 3000,    │
  │    testname: "login test" }              │
  └─────────────────────────────────────────┘

  After delete config.browser:
  ┌─────────────────────────────────────────┐
  │  { timeout: 3000,                       │
  │    testname: "login test" }              │
  │    ↑ "browser" removed                   │
  └─────────────────────────────────────────┘

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Operation           │ Syntax                   │ Effect                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ delete obj.prop     │ delete config.browser    │ Removes property entirely│
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.prop = undefined│ config.browser = undefined│ Sets value to undefined │
  │                     │                          │ Property still exists    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ obj.prop = null     │ config.browser = null    │ Sets value to null       │
  │                     │                          │ Property still exists    │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


3. CHECKING FOR PROPERTY EXISTENCE
-----------------------------------
  After delete, accessing the property returns undefined.
  Use `in` operator or `hasOwnProperty` to check if property exists.

  Example:
    console.log("browser" in config);         // false (after delete)
    console.log(config.hasOwnProperty("browser")); // false
    console.log(config.browser);               // undefined

  Methods:
    - "key" in obj            → true/false (checks own + prototype)
    - obj.hasOwnProperty("key") → true/false (checks own only)
    - obj.key !== undefined     → true/false (checks own, but false if value is undefined)


4. OBJECT LITERAL vs DYNAMIC ASSIGNMENT
----------------------------------------
  You can create an object with all properties at once (literal) or add them
  one by one (dynamic).

  From file:
    // Dynamic approach:
    let config = {};
    config.browser = "chrome";
    config.timeout = 3000;
    config.testname = "login test";

    // Literal approach (same result):
    let config2 = {
        browser: "chrome",
        timeout: 3000,
        testname: "login test"
    };

  Both produce the SAME object. Choose based on readability and context.

  Comparison:

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ Dynamic Assignment       │ Object Literal           │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ When to use         │ Properties known at      │ All properties known at  │
  │                     │ runtime, step-by-step    │ declaration time         │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Readability         │ Shows creation flow      │ Compact, all-in-one      │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Flexibility         │ High (conditional adds)  │ Low (static definition)  │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Performance         │ Same (negligible diff)   │ Same                   │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


5. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Object: config (after dynamic assignments)

  ┌─────────────┬─────────────┬──────────────────────────────┐
  │ Key         │ Value       │ Added How                    │
  ├─────────────┼─────────────┼──────────────────────────────┤
  │ "browser"   │ "chrome"    │ config.browser = "chrome"    │
  │ "timeout"   │ 3000        │ config.timeout = 3000        │
  │ "testname"  │ "login test"│ config.testname = "login test"│
  └─────────────┴─────────────┴──────────────────────────────┘

  After delete config.browser:

  ┌─────────────┬─────────────┬──────────────────────────────┐
  │ Key         │ Value       │ Status                       │
  ├─────────────┼─────────────┼──────────────────────────────┤
  │ "browser"   │ N/A         │ ❌ DELETED                   │
  │ "timeout"   │ 3000        │ ✅ Active                    │
  │ "testname"  │ "login test"│ ✅ Active                    │
  └─────────────┴─────────────┴──────────────────────────────┘

  Object: config2 (literal)

  ┌─────────────┬─────────────┬──────────────────────────────┐
  │ Key         │ Value       │ Source                       │
  ├─────────────┼─────────────┼──────────────────────────────┤
  │ "browser"   │ "chrome"    │ Literal declaration          │
  │ "timeout"   │ 3000        │ Literal declaration          │
  │ "testname"  │ "login test"│ Literal declaration          │
  └─────────────┴─────────────┴──────────────────────────────┘


6. CONDITIONAL CHECKING WITH OBJECT PROPERTIES
-----------------------------------------------
  From file:
    if (config.browser === "chrome") {
        console.log("I will execute my TC");
    }

  After delete config.browser, this condition becomes:
    undefined === "chrome"  →  false

  So the else block runs: "Browser not set or not chrome"

  This is a common pattern in test automation:
    - Check if config.browser exists before running tests.
    - Validate object properties before use.

  Safer pattern:
    if (config.browser && config.browser === "chrome") {
        console.log("I will execute my TC");
    }

  Or using optional chaining (modern JS):
    if (config?.browser === "chrome") {
        console.log("I will execute my TC");
    }


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. You can add properties to an object dynamically after creation.
  2. Use `delete obj.prop` to remove a property entirely.
  3. After delete, accessing the property returns undefined.
  4. Dynamic assignment and object literals produce the same result.
  5. Use `in` or `hasOwnProperty()` to check if a property exists.
  6. Always check if a property exists before using it (especially after delete).
  7. Object literals are best when all properties are known upfront.
  8. Dynamic assignment is best when properties are determined at runtime.

================================================================================
*/
