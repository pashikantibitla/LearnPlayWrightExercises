// String Conversion

(200).toString(); //"200"
true.toString();  // "true"

Number("42");  //  42


parseInt("42px");  // 42
parseFloat("3.14rem"); //3.14


/*
================================================================================
                    DETAILED EXPLANATION: STRING CONVERSION METHODS
================================================================================

1. WHAT IS toString()?
-----------------------
The `toString()` method returns a STRING representing the object/value on which
it is called. It is available on almost all JavaScript objects.

  Syntax:
    value.toString()
    value.toString(radix)   // for numbers: radix = base (2, 8, 10, 16)

  Parameters:
    - radix (optional, for numbers): An integer between 2 and 36 specifying
      the base to use for representing numeric values.

  Return Type: string

  Examples from file:
    (200).toString()     →  "200"
    true.toString()      →  "true"

  More Examples:
    (42).toString()        →  "42"
    (42).toString(2)       →  "101010"   (binary)
    (42).toString(8)       →  "52"       (octal)
    (42).toString(16)      →  "2a"       (hexadecimal)
    (255).toString(16)    →  "ff"       (hex)
    null.toString()        →  ❌ TypeError! (null has no toString)
    undefined.toString()   →  ❌ TypeError! (undefined has no toString)

  KEY BEHAVIOR:
    - Converts the value to its string representation.
    - Numbers can specify a radix (base) for the output.
    - Does NOT work on null or undefined directly.
    - For null/undefined, use String(value) instead.

  Safe Conversion with String():
    String(200)       →  "200"
    String(true)      →  "true"
    String(null)      →  "null"
    String(undefined) →  "undefined"
    String([1,2,3])   →  "1,2,3"


2. WHAT IS Number()?
---------------------
The `Number(value)` function converts a string or other value to a NUMBER type.
If the value cannot be converted, it returns NaN (Not a Number).

  Syntax:
    Number(value)

  Parameters:
    - value: The value to convert to a number.

  Return Type: number

  Examples from file:
    Number("42")  →  42

  More Examples:
    Number("42")      →  42
    Number("42.5")    →  42.5
    Number("  42  ")   →  42       (whitespace is ignored)
    Number("42px")     →  NaN     (entire string must be numeric)
    Number("")         →  0
    Number(true)       →  1
    Number(false)      →  0
    Number(null)       →  0
    Number(undefined)  →  NaN
    Number("0xFF")     →  255     (hex is supported)

  KEY BEHAVIOR:
    - The ENTIRE string must be a valid number representation.
    - Leading/trailing whitespace is ignored.
    - Empty string → 0.
    - Non-numeric strings → NaN.
    - Recognizes decimal, hex (0x), binary (0b), octal (0o).


3. WHAT IS parseInt()?
------------------------
The `parseInt(string, radix)` function parses a string argument and returns an
INTEGER. It reads digits from left to right until it hits a non-digit character.

  Syntax:
    parseInt(string)
    parseInt(string, radix)

  Parameters:
    - string: The value to parse. Non-string values are converted to string first.
    - radix (optional): An integer between 2 and 36 representing the base.
                        If omitted, JS tries to detect (0x=hex, 0=octal in old JS).
                        **Always specify radix to avoid ambiguity!**

  Return Type: number (integer)

  Examples from file:
    parseInt("42px")  →  42

  More Examples:
    parseInt("42")       →  42
    parseInt("42.7")     →  42       (decimal part dropped)
    parseInt("42px")     →  42       (stops at 'p')
    parseInt("  42  ")    →  42       (whitespace ignored)
    parseInt("abc")      →  NaN      (no digits at start)
    parseInt("10", 2)    →  2        (binary 10 = decimal 2)
    parseInt("10", 8)    →  8        (octal 10 = decimal 8)
    parseInt("10", 16)   →  16       (hex 10 = decimal 16)
    parseInt("FF", 16)   →  255      (hex FF = decimal 255)
    parseInt("0xFF")     →  255      (auto-detected hex)

  KEY BEHAVIOR:
    - Stops parsing at first non-digit character.
    - Returns NaN if no digits are found at the start.
    - Ignores leading/trailing whitespace.
    - ALWAYS specify radix to prevent unexpected behavior.
    - Does NOT handle decimal points (use parseFloat for that).


4. WHAT IS parseFloat()?
-------------------------
The `parseFloat(string)` function parses a string argument and returns a
FLOATING-POINT number. Like parseInt, it reads from left to right.

  Syntax:
    parseFloat(string)

  Parameters:
    - string: The value to parse. Non-string values are converted to string first.

  Return Type: number (floating-point)

  Examples from file:
    parseFloat("3.14rem")  →  3.14

  More Examples:
    parseFloat("3.14")      →  3.14
    parseFloat("3.14px")    →  3.14     (stops at 'p')
    parseFloat("42")        →  42       (no decimal → still works)
    parseFloat("42.5.6")    →  42.5     (stops at second decimal point)
    parseFloat("  3.14  ")   →  3.14     (whitespace ignored)
    parseFloat("abc")       →  NaN      (no digits at start)
    parseFloat("1.5e3")     →  1500     (scientific notation)
    parseFloat("Infinity")  →  Infinity

  KEY BEHAVIOR:
    - Stops parsing at first invalid character for floating-point numbers.
    - Handles decimal points and scientific notation (e.g., "1.5e3").
    - Returns NaN if no digits are found at the start.
    - Ignores leading/trailing whitespace.


5. COMPARISON TABLE: Number() vs parseInt() vs parseFloat()
------------------------------------------------------------

┌─────────────────────┬──────────────────────────┬──────────────────────────┬──────────────────────────┐
│ Aspect              │ Number()                 │ parseInt()               │ parseFloat()             │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Purpose             │ Convert entire value     │ Extract integer from     │ Extract float from       │
│                     │ to number                │ start of string          │ start of string          │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Input Type          │ Any value                │ String (coerced)         │ String (coerced)         │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ "42px"              │ NaN                      │ 42                       │ 42                       │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ "42.7px"            │ NaN                      │ 42                       │ 42.7                     │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ "  42  "            │ 42                       │ 42                       │ 42                       │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ ""                  │ 0                        │ NaN                      │ NaN                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ "abc"               │ NaN                      │ NaN                      │ NaN                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ true                │ 1                        │ NaN                      │ NaN                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ false               │ 0                        │ NaN                      │ NaN                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ null                │ 0                        │ NaN                      │ NaN                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ undefined           │ NaN                      │ NaN                      │ NaN                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Decimal support     │ Yes                      │ No (truncates)           │ Yes                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Radix parameter     │ Auto-detects 0x, 0b, 0o  │ Yes (recommended!)     │ No (always base 10)      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Stops at invalid    │ No — entire must match   │ Yes                      │ Yes                      │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Returns             │ number or NaN            │ number or NaN            │ number or NaN            │
├─────────────────────┼──────────────────────────┼──────────────────────────┼──────────────────────────┤
│ Use case            │ Safe full conversion     │ Extract integer portion│ Extract float portion    │
└─────────────────────┴──────────────────────────┴──────────────────────────┴──────────────────────────┘


6. COMPARISON TABLE: toString() vs String()
--------------------------------------------

┌─────────────────────┬──────────────────────────┬──────────────────────────┐
│ Aspect              │ toString()               │ String()                 │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Type                │ Method (on object)       │ Global function          │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Syntax              │ value.toString()         │ String(value)            │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ null                │ ❌ TypeError             │ "null"                   │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ undefined           │ ❌ TypeError             │ "undefined"              │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Number radix        │ Yes (2, 8, 10, 16)       │ No (always base 10)      │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Arrays              │ [1,2].toString()         │ String([1,2])            │
│                     │ → "1,2"                  │ → "1,2"                  │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Objects             │ {}.toString()            │ String({})               │
│                     │ → "[object Object]"      │ → "[object Object]"      │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Safety              │ Less safe                │ More safe (handles all)  │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Recommended use     │ Numbers with radix       │ General safe conversion  │
└─────────────────────┴──────────────────────────┴──────────────────────────┘


7. PRACTICAL EXAMPLES
----------------------

  Example 1: Extract numeric value from CSS
    let width = "250px";
    let numericWidth = parseInt(width);
    console.log(numericWidth);  // 250

  Example 2: Extract floating-point from CSS
    let fontSize = "1.5rem";
    let numericSize = parseFloat(fontSize);
    console.log(numericSize);  // 1.5

  Example 3: Convert boolean to number
    let isEnabled = true;
    let flag = Number(isEnabled);
    console.log(flag);  // 1

  Example 4: Safe string conversion
    let value = null;
    console.log(String(value));       // "null"
    // console.log(value.toString()); // ❌ TypeError!

  Example 5: Convert number to hex string
    let color = 255;
    let hex = color.toString(16);
    console.log(hex);  // "ff"

  Example 6: Parse binary string
    let binary = "1010";
    let decimal = parseInt(binary, 2);
    console.log(decimal);  // 10

  Example 7: Validate user input as number
    function getNumber(input) {
        let num = Number(input);
        if (isNaN(num)) {
            return "Invalid number";
        }
        return num;
    }
    getNumber("42")     →  42
    getNumber("42px")  →  "Invalid number"

  Example 8: Extract version number from user agent
    let ua = "Chrome/118.0.5993.70";
    let version = parseFloat(ua.split("/")[1]);
    console.log(version);  // 118

  Example 9: Currency calculation (always use Number for exact values)
    let priceStr = "19.99";
    let price = Number(priceStr);
    let quantity = 3;
    let total = price * quantity;
    console.log(total);  // 59.97

  Example 10: Check if a string represents a valid integer
    function isValidInteger(str) {
        return !isNaN(parseInt(str)) && Number(str).toString() === str.trim();
    }
    isValidInteger("42")    →  true
    isValidInteger("42px")  →  false


8. COMMON MISTAKES & PITFALLS
------------------------------

  ┌──────────────────────────────────────────────────────────────────────────┐
  │  MISTAKE 1: parseInt without radix                                      │
  │  parseInt("08") → in older JS engines this was octal (0), not 8!      │
  │  FIX: Always use parseInt("08", 10)                                    │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  MISTAKE 2: Number("42px") expecting 42                                 │
  │  Number("42px") → NaN (entire string must be numeric)                  │
  │  FIX: Use parseInt("42px") or parseFloat("42px")                      │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  MISTAKE 3: toString() on null/undefined                               │
  │  null.toString() → TypeError                                          │
  │  FIX: Use String(null) → "null"                                        │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  MISTAKE 4: parseInt with very large numbers                           │
  │  parseInt(900719925474999267n) → loses precision                       │
  │  FIX: For BigInt, use BigInt.toString()                                │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  MISTAKE 5: parseFloat with scientific notation confusion                │
  │  parseFloat("1.5e2") → 150 (correct: 1.5 × 10² = 150)                │
  │  This is expected behavior!                                            │
  └──────────────────────────────────────────────────────────────────────────┘


9. QUICK DECISION GUIDE
------------------------

  ┌──────────────────────────────────────────────────────────────────────────┐
  │  QUESTION                                │  USE                           │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Need exact numeric conversion?          │  Number()                      │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Need integer from start of string?      │  parseInt(str, 10)             │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Need float from start of string?        │  parseFloat(str)               │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Converting to string (safe, any type)?  │  String(value)                 │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Converting number to specific base?     │  num.toString(radix)           │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Extracting from "123px" style strings?  │  parseInt / parseFloat         │
  └──────────────────────────────────────────────────────────────────────────┘


================================================================================
                    KEY TAKEAWAY
================================================================================

  toString()      →  Convert any value to string (method call, be careful with null/undefined)
  String()        →  Safe global function to convert anything to string
  Number()        →  Strict conversion — entire input must be valid number
  parseInt()      →  Extracts INTEGER from START of string (always pass radix!)
  parseFloat()    →  Extracts FLOAT from START of string (handles decimals)

  REMEMBER:
    - Number("42px") = NaN, but parseInt("42px") = 42
    - Always specify radix in parseInt() to avoid surprises
    - Use String() instead of toString() when dealing with null/undefined
    - parseFloat handles decimals; parseInt truncates them
    - Number() is strict; parseInt/parseFloat are forgiving (stop at bad char)

================================================================================
*/
