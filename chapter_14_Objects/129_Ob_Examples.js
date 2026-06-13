const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);


const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);

console.log(JSON.stringify(t_js));
console.log(JSON.parse('{"name":"pramod","age":10}'));


/*
================================================================================
                    DETAILED EXPLANATION: JSON vs JS OBJECT
================================================================================

1. JSON (JavaScript Object Notation)
-------------------------------------
  JSON is a lightweight DATA-INTERCHANGE format. It is text-based, language-
  independent, and easy to read/write. JSON is derived from JavaScript object
  syntax but is a SEPARATE standard.

  From file:
    const t_json = {
        "name": "pramod",
        "age": 10
    };
    // This is a JS object with quoted keys (JSON-style)

  Key JSON Rules:
    - Keys MUST be in DOUBLE quotes.
    - Values can be: string, number, object, array, true, false, null.
    - NO functions, undefined, dates, or comments.
    - NO trailing commas.
    - Strings must use double quotes.

  Example JSON String:
    '{"name":"pramod","age":10}'

  JSON is NOT a JavaScript object — it is a STRING representation.


2. JAVASCRIPT OBJECT
---------------------
  From file:
    const t_js = {
        name: "pramod",
        age: 10
    };
    // This is a native JavaScript object

  Key JS Object Rules:
    - Keys do NOT need quotes (unless special characters).
    - Values can be ANY JavaScript type (including functions, undefined, dates).
    - Trailing commas are allowed (ES5+).
    - Comments are allowed.
    - Single or double quotes for strings.


3. COMPARISON TABLE: JSON vs JS OBJECT
---------------------------------------

┌─────────────────────┬──────────────────────────┬──────────────────────────┐
│ Aspect              │ JSON                     │ JavaScript Object        │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Key Quotes          │ REQUIRED (double)        │ Optional               │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ String Quotes       │ Double only              │ Single or double       │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Trailing Commas     │ Not allowed              │ Allowed                │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Comments            │ Not allowed              │ Allowed                │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Functions           │ Not allowed              │ Allowed                │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ undefined           │ Not allowed              │ Allowed                │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Date objects        │ Not allowed              │ Allowed                │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Type                │ Text string              │ Data structure         │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Methods             │ No methods               │ Has methods (.toString)│
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ typeof              │ "string" (when parsed)   │ "object"               │
└─────────────────────┴──────────────────────────┴──────────────────────────┘


4. JSON.stringify() — Object → JSON String
-------------------------------------------
  Converts a JavaScript object into a JSON string.

  Syntax:
    JSON.stringify(value)
    JSON.stringify(value, replacer, space)

  Example:
    const t_js = { name: "pramod", age: 10 };
    JSON.stringify(t_js)  // '{"name":"pramod","age":10}'

  Parameters:
    - value: The object to convert.
    - replacer: Function to transform results (optional).
    - space: Number of spaces for indentation (optional).

  Example with formatting:
    JSON.stringify(t_js, null, 2)
    // '{
    //   "name": "pramod",
    //   "age": 10
    // }'

  Limitations:
    - Functions are skipped.
    - undefined values are skipped.
    - Dates become ISO strings.
    - Circular references throw TypeError.


5. JSON.parse() — JSON String → Object
---------------------------------------
  Parses a JSON string and returns a JavaScript object.

  Syntax:
    JSON.parse(text)
    JSON.parse(text, reviver)

  Example:
    JSON.parse('{"name":"pramod","age":10}')
    // { name: "pramod", age: 10 }

  Parameters:
    - text: The JSON string to parse.
    - reviver: Function to transform results (optional).

  Error Handling:
    - Invalid JSON throws SyntaxError.
    - Always wrap in try/catch for user input.

  Example:
    try {
        let data = JSON.parse(userInput);
    } catch (e) {
        console.log("Invalid JSON:", e.message);
    }


6. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Objects in this file:

  ┌─────────────┬─────────────────────┬─────────────────────────────┐
  │ Variable    │ Properties          │ Format                      │
  ├─────────────┼─────────────────────┼─────────────────────────────┤
  │ t_json      │ "name": "pramod",   │ JS Object (JSON-style keys) │
  │             │ "age": 10            │                             │
  │ t_js        │ name: "pramod",      │ JS Object (native style)    │
  │             │ age: 10              │                             │
  └─────────────┴─────────────────────┴─────────────────────────────┘

  Conversion Flow:

  JavaScript Object:                    JSON String:
  ┌─────────────────────────┐          ┌─────────────────────────┐
  │  { name: "pramod",      │          │  '{"name":"pramod",     │
  │    age: 10 }            │  ──────→ │    "age":10}'           │
  │                         │ stringify│                         │
  └─────────────────────────┘          └─────────────────────────┘
       ↑                                    │
       │ parse                              │
       └────────────────────────────────────┘


7. PRACTICAL EXAMPLES
----------------------

  Example 1: Sending data to API
    let user = { name: "Pramod", age: 42 };
    let jsonBody = JSON.stringify(user);
    // Send jsonBody in HTTP POST request

  Example 2: Receiving API response
    let response = '{"status":"success","data":{"id":123}}';
    let obj = JSON.parse(response);
    console.log(obj.status);  // "success"

  Example 3: Storing in localStorage
    let settings = { theme: "dark", fontSize: 14 };
    localStorage.setItem("settings", JSON.stringify(settings));
    // Later:
    let loaded = JSON.parse(localStorage.getItem("settings"));

  Example 4: Deep clone with JSON
    let original = { a: 1, b: { c: 2 } };
    let clone = JSON.parse(JSON.stringify(original));
    clone.b.c = 99;
    console.log(original.b.c);  // 2 (unchanged!)

  Example 5: Handling parse errors
    let badJson = "{ name: 'pramod' }";  // Invalid JSON (single quotes)
    try {
        let result = JSON.parse(badJson);
    } catch (e) {
        console.log("Invalid JSON! Use double quotes and proper syntax.");
    }


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. JSON is a TEXT format for data exchange; JS objects are data structures.
  2. JSON requires double quotes on keys; JS objects do not.
  3. JSON.stringify() converts JS object → JSON string.
  4. JSON.parse() converts JSON string → JS object.
  5. JSON cannot contain functions, undefined, or comments.
  6. Use JSON.parse/stringify for API communication, localStorage, deep cloning.
  7. Always wrap JSON.parse in try/catch when parsing user input.
  8. JSON.stringify is the most common way to log objects in a readable format.

================================================================================
*/
