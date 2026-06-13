function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
add(...num);

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...responseCodes); // true


/*
================================================================================
                    DETAILED EXPLANATION: SPREAD OPERATOR (...)
================================================================================

1. WHAT IS THE SPREAD OPERATOR?
--------------------------------
The Spread Operator (`...`) expands (spreads) an iterable (like an array)
into individual elements. It looks the same as Rest Parameters but works
in the OPPOSITE direction.

  - REST (`...args`)  → GATHERS multiple values INTO an array (in function params).
  - SPREAD (`...arr`) → SPREADS an array INTO individual values (in function calls).


2. CODE BREAKDOWN
------------------

  function add(a, b, c) {
      return a + b + c;
  }
  >> Expects exactly 3 parameters.

  let num = [1, 2, 3];

  add(...num);
  >> `...num` spreads the array `[1, 2, 3]` into `1, 2, 3`.
  >> Equivalent to: add(1, 2, 3);
  >> Returns: 6

  let responseCodes = [200, 201, 404];

  function hasError(...codes) {
      return codes.some(c => c >= 400);
  }
  >> `...codes` is a REST parameter → gathers arguments into an array.
  >> `.some()` checks if ANY element satisfies the condition.

  hasError(...responseCodes);
  >> `...responseCodes` spreads `[200, 201, 404]` into `200, 201, 404`.
  >> Inside hasError: codes = [200, 201, 404]
  >> `.some(c => c >= 400)` → 404 >= 400 is true → returns `true`.


3. SPREAD vs REST — SIDE BY SIDE
----------------------------------

| Feature       | Rest Operator (...)              | Spread Operator (...)            |
|---------------|----------------------------------|----------------------------------|
| Location      | In function PARAMETERS           | In function CALLS or literals    |
| Action        | GATHERS elements into an array   | EXPANDS an array into elements     |
| Example       | function fn(...args) {}          | fn(...[1,2,3]) or [...arr1, ...arr2]|
| Mnemonic      | "Collect the REST"               | "SPREAD it out"                    |

  Same symbol (`...`), opposite behavior depending on WHERE it is used.


4. OTHER USES OF SPREAD
------------------------
  - Copying arrays:
    let copy = [...originalArray];

  - Combining arrays:
    let combined = [...arr1, ...arr2];

  - Converting strings to arrays:
    let chars = ["hello"]; // ['h','e','l','l','o']

  - Copying objects (ES2018+):
    let copyObj = { ...originalObj };


5. WHEN TO USE SPREAD?
-----------------------
Use the spread operator when:
  - You have an array but a function expects separate arguments.
  - You want to clone or merge arrays/objects immutably.
  - You want to avoid mutating the original data structure.

  Examples:
    - Passing array items to Math.max(): Math.max(...[10, 20, 5]) → 20
    - Cloning config arrays before modifying them.
    - Merging multiple arrays into one.


6. KEY TAKEAWAY
----------------
  Spread = "Expand an array into individual items."
  Rest = "Collect individual items into an array."
  They are two sides of the same coin: `...` in JS.
  Remember the rule:
    In parameters → Rest (gather)
    In arguments  → Spread (expand)

================================================================================
*/
