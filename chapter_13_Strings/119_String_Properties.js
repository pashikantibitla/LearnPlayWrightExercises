console.log(typeof ("200"));
let str = "Hello, World!";
console.log(str.length); // Length always starts from 1, total len- 13

// Access by index
console.log(str[0]);
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));

// index = 0, length = 1
console.log(str.charAt(0));
console.log(str.charCodeAt(0));


/*
================================================================================
                    DETAILED EXPLANATION: charAt() vs charCodeAt()
================================================================================

1. WHAT IS charAt()?
---------------------
The `charAt(index)` method returns a NEW STRING containing the single character
(UTF-16 code unit) at the specified index position in the string.

  Syntax:
    string.charAt(index)

  Parameters:
    - index: An integer between 0 and string.length - 1.
             If no index is provided, defaults to 0.
             If index is out of range, returns an EMPTY STRING "".

  Return Type: string

  Example:
    let str = "Hello, World!";
    str.charAt(0)  →  "H"
    str.charAt(7)  →  "W"
    str.charAt(99) →  ""   (empty string, index out of bounds)

  Key Points:
    - Returns a STRING, not a number.
    - Always returns the CHARACTER itself (human-readable symbol).
    - Safe to use with out-of-range indices (returns empty string instead of error).
    - Does NOT support negative indexing (unlike `.at()`).


2. WHAT IS charCodeAt()?
-------------------------
The `charCodeAt(index)` method returns a NUMBER representing the UTF-16 code
unit (an integer between 0 and 65535) at the specified index.

  Syntax:
    string.charCodeAt(index)

  Parameters:
    - index: An integer between 0 and string.length - 1.
             If no index is provided, defaults to 0.
             If index is out of range, returns NaN (Not a Number).

  Return Type: number

  Example:
    let str = "Hello, World!";
    str.charCodeAt(0)  →  72   (ASCII/Unicode value of 'H')
    str.charCodeAt(7)  →  87   (ASCII/Unicode value of 'W')
    str.charCodeAt(99) →  NaN  (index out of bounds)

  Key Points:
    - Returns a NUMBER, not a string.
    - Returns the NUMERIC CODE (UTF-16 code unit) of the character.
    - Useful for comparing characters, sorting, or cryptographic operations.
    - For ASCII characters, the number matches the standard ASCII value.
    - Does NOT support negative indexing.


3. DIFFERENCE TABLE: charAt() vs charCodeAt()
----------------------------------------------

┌─────────────────────────┬──────────────────────────────┬──────────────────────────────┐
│ Aspect                  │ charAt(index)                │ charCodeAt(index)            │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Definition              │ Returns the CHARACTER at     │ Returns the NUMERIC CODE     │
│                         │ the given index                │ (UTF-16 unit) at the index   │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Return Type             │ string                       │ number                       │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ What you get            │ "A", "B", "!", " "           │ 65, 66, 33, 32               │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Use Case                │ Display/read the character   │ Compare, sort, or process    │
│                         │                              │ characters numerically       │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Out-of-range index      │ Returns "" (empty string)    │ Returns NaN                  │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Negative index          │ Returns "" (empty string)    │ Returns NaN                  │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ ASCII Relation          │ Returns the letter/symbol    │ Returns the ASCII/Unicode    │
│                         │                              │ decimal value                │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Example: str = "A"      │ str.charAt(0) → "A"          │ str.charCodeAt(0) → 65       │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Example: str = "9"       │ str.charAt(0) → "9"          │ str.charCodeAt(0) → 57       │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Example: str = " "       │ str.charAt(0) → " "          │ str.charCodeAt(0) → 32       │
└─────────────────────────┴──────────────────────────────┴──────────────────────────────┘


4. INDEXING TABLE FOR "Hello, World!"
--------------------------------------

  String:  H   e   l   l   o   ,       W   o   r   l   d   !
           ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓
  Index:   0   1   2   3   4   5   6   7   8   9   10  11  12
  Length:  1   2   3   4   5   6   7   8   9   10  11  12  13

  ┌─────────┬─────────┬─────────────┬────────────────┬─────────────────────┐
  │ Index   │ Length  │ Character   │ charAt(index)  │ charCodeAt(index)   │
  │         │ (pos)   │             │ Result         │ Result (Decimal)    │
  ├─────────┼─────────┼─────────────┼────────────────┼─────────────────────┤
  │    0    │    1    │      H      │      "H"       │         72          │
  │    1    │    2    │      e      │      "e"       │        101          │
  │    2    │    3    │      l      │      "l"       │        108          │
  │    3    │    4    │      l      │      "l"       │        108          │
  │    4    │    5    │      o      │      "o"       │        111          │
  │    5    │    6    │      ,      │      ","       │         44          │
  │    6    │    7    │   (space)   │      " "       │         32          │
  │    7    │    8    │      W      │      "W"       │         87          │
  │    8    │    9    │      o      │      "o"       │        111          │
  │    9    │   10    │      r      │      "r"       │        114          │
  │   10    │   11    │      l      │      "l"       │        108          │
  │   11    │   12    │      d      │      "d"       │        100          │
  │   12    │   13    │      !      │      "!"       │         33          │
  │   13    │   14    │   (out of   │      ""        │        NaN          │
  │         │         │   bounds)   │   (empty str)  │   (Not a Number)    │
  └─────────┴─────────┴─────────────┴────────────────┴─────────────────────┘

  Important Distinction:
    - INDEX always starts from 0 (programming position).
    - LENGTH always starts from 1 (human count).
    - Index = Position in memory/array
    - Length = Total count of characters


5. VISUAL COMPARISON
---------------------

  charAt(0) on "Hello, World!":

    ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │  H  │  e  │  l  │  l  │  o  │  ,  │     │  W  │  o  │  r  │  l  │  d  │  !  │
    └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
      ↑
    index 0
    charAt(0) → "H"  (returns the CHARACTER)

  charCodeAt(0) on "Hello, World!":

    ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │  H  │  e  │  l  │  l  │  o  │  ,  │     │  W  │  o  │  r  │  l  │  d  │  !  │
    └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
      ↑
    index 0
    charCodeAt(0) → 72  (returns the NUMERIC CODE)


6. PRACTICAL EXAMPLES
----------------------

  Example 1: Checking if a character is uppercase
    function isUpperCase(char) {
        let code = char.charCodeAt(0);
        return code >= 65 && code <= 90;  // A-Z range in ASCII
    }
    isUpperCase("H") → true   (charCode is 72)
    isUpperCase("e") → false  (charCode is 101)

  Example 2: Converting character to next letter
    function nextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }
    nextChar("A") → "B"   (65 + 1 = 66 → "B")

  Example 3: Comparing characters alphabetically
    "A".charCodeAt(0) → 65
    "B".charCodeAt(0) → 66
    65 < 66 → true, so "A" comes before "B"


7. EDGE CASES & BEHAVIOR
-------------------------

  ┌────────────────────────┬────────────────────────┬────────────────────────┐
  │ Scenario               │ charAt() Behavior      │ charCodeAt() Behavior  │
  ├────────────────────────┼────────────────────────┼────────────────────────┤
  │ No argument            │ charAt(0) — default 0  │ charCodeAt(0) — default│
  │                        │                        │ 0                      │
  ├────────────────────────┼────────────────────────┼────────────────────────┤
  │ Negative index         │ Returns ""             │ Returns NaN            │
  │ (-1, -5, etc.)         │                        │                        │
  ├────────────────────────┼────────────────────────┼────────────────────────┤
  │ Index >= length        │ Returns ""             │ Returns NaN            │
  │ (out of bounds)        │                        │                        │
  ├────────────────────────┼────────────────────────┼────────────────────────┤
  │ Non-integer index      │ Converts to integer    │ Converts to integer    │
  │ (2.7, "2")             │ (2.7 → 2, "2" → 2)     │ (2.7 → 2, "2" → 2)     │
  ├────────────────────────┼────────────────────────┼────────────────────────┤
  │ Empty string ""        │ charAt(0) → ""         │ charCodeAt(0) → NaN    │
  └────────────────────────┴────────────────────────┴────────────────────────┘


8. SUMMARY: WHEN TO USE WHICH?
-------------------------------

  Use charAt() when:
    - You need the actual character to display or compare as text.
    - You want a safe method that returns "" for invalid indices.
    - You are building strings or doing string manipulation.

  Use charCodeAt() when:
    - You need the numeric value for calculations or comparisons.
    - You are working with ASCII/Unicode values directly.
    - You need to sort characters alphabetically by their code points.
    - You are converting between characters and numbers (with String.fromCharCode).


================================================================================
                    KEY TAKEAWAY
================================================================================

  charAt(index)     =  "What CHARACTER is at this position?"
  charCodeAt(index) =  "What NUMBER represents the character at this position?"

  Think of charAt() as reading the LETTER, and charCodeAt() as reading the
  LETTER'S CODE. They look at the SAME location but report DIFFERENT information.

================================================================================
*/