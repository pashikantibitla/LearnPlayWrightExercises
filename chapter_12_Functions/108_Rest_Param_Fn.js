// Rest of the param.
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");


/*
================================================================================
                    DETAILED EXPLANATION: REST PARAMETERS (...)
================================================================================

1. WHAT ARE REST PARAMETERS?
-----------------------------
Rest Parameters allow a function to accept an INDEFINITE NUMBER of arguments
as an ARRAY. You define them using three dots `...` followed by a parameter name.

  Syntax:
    function myFn(firstParam, ...restOfTheParams) {
        // restOfTheParams is an array
    }

  - Only ONE rest parameter is allowed per function.
  - It must be the LAST parameter in the list.
  - It collects ALL remaining arguments into a real JavaScript Array.


2. CODE BREAKDOWN
------------------

  function logResult(suiteName, ...results) {
      console.log(suiteName);
      console.log(results);
  }

  >> `suiteName`  → Regular parameter; captures the first argument.
  >> `...results` → Rest parameter; captures ALL remaining arguments into an array.

  logResult('Login Test', 1, 2, 3);
  >> suiteName = 'Login Test'
  >> results = [1, 2, 3]
  >> Output:
       Login Test
       [ 1, 2, 3 ]

  logResult('Reg Test', "Hello", "Pramod");
  >> suiteName = 'Reg Test'
  >> results = ["Hello", "Pramod"]
  >> Output:
       Reg Test
       [ 'Hello', 'Pramod' ]


3. REST PARAMETERS vs ARGUMENTS OBJECT
---------------------------------------
Before ES6, developers used the `arguments` object to access all passed values.
Rest parameters are the modern, superior replacement.

  | Feature           | `arguments` object              | Rest Parameters (`...`)         |
  |-------------------|----------------------------------|---------------------------------|
  | Type              | Array-like (not a real array)    | Real Array                      |
  | Array methods     | Need manual conversion (slice)   | `.map()`, `.filter()`, etc.     |
  | Named params      | Mixes all args together          | Separates named and rest args   |
  | Arrow functions   | NOT available                    | Works perfectly                 |
  | Readability       | Confusing, implicit              | Clean, explicit                 |

  OLD WAY:
    function oldLog() {
        console.log(arguments); // [object Arguments]
    }

  NEW WAY:
    function newLog(...args) {
        console.log(args); // Real array with all methods
    }


4. WHEN TO USE REST PARAMETERS?
----------------------------------
Use rest parameters when:
  - You don't know how many arguments will be passed.
  - You want to collect optional or variable-length data.
  - You need to use array methods (map, filter, reduce) on the arguments.

  Examples:
    - Summing any number of numbers.
    - Logging multiple test results at once.
    - Formatting a string with variable parts.


5. KEY TAKEAWAY
----------------
  Rest Parameters (`...name`) = "Gather the rest of the arguments into an array."
  They must be the LAST parameter.
  They give you a real array with all modern methods.
  Always prefer `...rest` over the old `arguments` object.

================================================================================
*/
