let str = "Login_Test_Pass_001";
// slice(start, end) — negative indexes supported
console.log(str.slice(0, 5)); // 0,4 ->
console.log(str.slice(11));

let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));


// substring(start, end) — no negatives (treats as 0)

console.log(str.substring(6, 10));
str.at(0);


/*
================================================================================
                    DETAILED EXPLANATION: slice() vs substring()
================================================================================

1. WHAT IS slice()?
--------------------
The `slice(startIndex, endIndex)` method extracts a section of a string and
returns it as a NEW string, WITHOUT modifying the original string.

  Syntax:
    string.slice(startIndex)
    string.slice(startIndex, endIndex)

  Parameters:
    - startIndex: The index where extraction begins (inclusive).
                  If negative, it counts from the END of the string.
    - endIndex (optional): The index where extraction ends (EXCLUSIVE).
                           If negative, it counts from the END.
                           If omitted, extracts to the end of the string.

  Return Type: string (a new string containing the extracted portion)

  Key Features:
    - Supports NEGATIVE indices (counts backwards from end).
    - endIndex is EXCLUSIVE (not included in result).
    - Does NOT mutate the original string.
    - If startIndex > endIndex, slice() works correctly by swapping them
      (actually it treats it as empty if start > end for positive values).
      Actually: If start > end, slice returns EMPTY string.
      Wait - let me be precise: slice does NOT swap. If start > end, it returns "".
      But if start is negative and end is positive, it works normally.

  Examples from file:
    str.slice(0, 5)    →  "Login"    (indices 0,1,2,3,4)
    str.slice(11)      →  "Pass_001" (from index 11 to end)
    str.slice(-3)      →  "001"      (last 3 characters)

  More Examples:
    "Hello, World!".slice(0, 5)   →  "Hello"
    "Hello, World!".slice(7, 12)  →  "World"
    "Hello, World!".slice(-6, -1) →  "World"  (negative indices)
    "Hello, World!".slice(-1)     →  "!"      (last character)
    "Hello, World!".slice(5, 0)   →  ""       (empty, start > end)


2. WHAT IS substring()?
------------------------
The `substring(startIndex, endIndex)` method returns the part of the string
between the start and end indexes, or to the end of the string.

  Syntax:
    string.substring(startIndex)
    string.substring(startIndex, endIndex)

  Parameters:
    - startIndex: The index where extraction begins (inclusive).
                  If negative or NaN, treated as 0.
    - endIndex (optional): The index where extraction ends (EXCLUSIVE).
                           If negative or NaN, treated as 0.
                           If omitted, extracts to the end.

  Return Type: string (a new string containing the extracted portion)

  Key Features:
    - Does NOT support negative indices (treats negatives as 0).
    - endIndex is EXCLUSIVE.
    - Does NOT mutate the original string.
    - If startIndex > endIndex, it AUTOMATICALLY SWAPS them.
    - Any negative value is treated as 0.

  Examples from file:
    str.substring(6, 10)  →  "Test"  (indices 6,7,8,9)

  More Examples:
    "Hello, World!".substring(0, 5)    →  "Hello"
    "Hello, World!".substring(7, 12) →  "World"
    "Hello, World!".substring(-3, 5)  →  "Hello"  (-3 treated as 0)
    "Hello, World!".substring(5, 0)   →  "Hello"  (swapped to 0, 5)
    "Hello, World!".substring(5)     →  ", World!"


3. CRITICAL DIFFERENCES BETWEEN slice() and substring()
--------------------------------------------------------

┌─────────────────────────┬──────────────────────────────┬──────────────────────────────┐
│ Aspect                  │ slice(start, end)            │ substring(start, end)        │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Negative Indices        │ ✅ SUPPORTED                 │ ❌ TREATED AS 0              │
│                         │ Counts from end              │ Becomes 0                    │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ startIndex > endIndex   │ Returns EMPTY string ""      │ ✅ SWAPS the values          │
│                         │                              │ Always returns valid string  │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Negative start,         │ Works normally               │ start becomes 0              │
│ positive end            │ (counts from end)            │                              │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Mutates Original?       │ ❌ NO — returns new string   │ ❌ NO — returns new string   │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Return Type             │ string                       │ string                       │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ endIndex behavior       │ EXCLUSIVE (not included)     │ EXCLUSIVE (not included)     │
├─────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Use Case                │ When you need negative       │ When you only work with      │
│                         │ indexing (extract from end)  │ positive indices             │
└─────────────────────────┴──────────────────────────────┴──────────────────────────────┘


4. INDEXING TABLE FOR "Login_Test_Pass_001"
---------------------------------------------

  Length: 19 characters

  String:  L   o   g   i   n   _   T   e   s   t   _   P   a   s   s   _   0   0   1
           ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓
  Index:   0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18
  Neg Idx: -19 -18 -17 -16 -15 -14 -13 -12 -11 -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

  ┌─────────┬─────────────┬────────────────────────┬────────────────────────┐
  │ Index   │ Character   │ slice() Example        │ substring() Example  │
  ├─────────┼─────────────┼────────────────────────┼────────────────────────┤
  │ 0-4     │ "Login"     │ slice(0, 5) → "Login"  │ substring(0,5)→"Login" │
  │ 5       │ "_"         │ slice(5, 6) → "_"      │ substring(5,6) → "_"   │
  │ 6-9     │ "Test"      │ slice(6, 10)→ "Test"   │ substring(6,10)→"Test" │
  │ 10      │ "_"         │ slice(10,11)→ "_"     │ substring(10,11)→ "_" │
  │ 11-14   │ "Pass"      │ slice(11,15)→ "Pass"   │ substring(11,15)→"Pass"│
  │ 15      │ "_"         │ slice(15,16)→ "_"     │ substring(15,16)→ "_" │
  │ 16-18   │ "001"       │ slice(16,19)→ "001"   │ substring(16,19)→"001"│
  │ 16-18   │ "001"       │ slice(-3)   → "001"    │ substring(16) → "001" │
  │ 11-18   │ "Pass_001"  │ slice(11)   → "Pass_001"│ substring(11) → "Pass_001"│
  └─────────┴─────────────┴────────────────────────┴────────────────────────┘


5. BEHAVIOR COMPARISON: SAME INPUT, DIFFERENT OUTPUT
-----------------------------------------------------

  Example A: Negative start index
    "Hello".slice(-2)        →  "lo"     (last 2 chars)
    "Hello".substring(-2)    →  "Hello"  (-2 treated as 0, no end = full string)

  Example B: Negative indices with end
    "Hello".slice(-4, -1)       →  "ell"    (indices -4, -3, -2 → "e","l","l")
    "Hello".substring(-4, -1)   →  ""       (both treated as 0, 0 to 0 = empty)

  Example C: startIndex > endIndex (POSITIVE)
    "Hello".slice(3, 1)       →  ""       (empty, start > end)
    "Hello".substring(3, 1)   →  "el"     (swapped to 1, 3 → indices 1, 2)

  Example D: Mixed negative start, positive end
    "Hello, World!".slice(-5, 12)     →  "Wor"    (-5 = index 8, up to 12 → 8,9,10)
    "Hello, World!".substring(-5, 12) →  "Hello, Wor"  (-5 = 0, up to 12)


6. VISUAL REPRESENTATION
-------------------------

  slice(0, 5) on "Login_Test_Pass_001":

    ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │  L  │  o  │  g  │  i  │  n  │  _  │  T  │  e  │  s  │  t  │  _  │  P  │  a  │  s  │  s  │  _  │  0  │  0  │  1  │
    └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
      ↑                           ↑
    start=0                    end=5 (exclusive)
    Result: "Login"

  slice(-3) on "Login_Test_Pass_001":

    ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │  L  │  o  │  g  │  i  │  n  │  _  │  T  │  e  │  s  │  t  │  _  │  P  │  a  │  s  │  s  │  _  │  0  │  0  │  1  │
    └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
                                                                                                ↑
                                                                                              start=-3
    Result: "001"

  substring(6, 10) on "Login_Test_Pass_001":

    ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │  L  │  o  │  g  │  i  │  n  │  _  │  T  │  e  │  s  │  t  │  _  │  P  │  a  │  s  │  s  │  _  │  0  │  0  │  1  │
    └─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
                                        ↑                           ↑
                                      start=6                     end=10
    Result: "Test"


7. MORE PRACTICAL EXAMPLES
---------------------------

  Example 1: Extract file extension
    let filename = "document.pdf";
    filename.slice(filename.lastIndexOf("."))      →  ".pdf"
    filename.substring(filename.lastIndexOf("."))  →  ".pdf"  (same result here)

  Example 2: Remove first and last character
    let text = "Hello";
    text.slice(1, -1)        →  "ell"    (remove first and last)
    text.substring(1, 4)     →  "ell"    (manual end calculation)

  Example 3: Get first N characters
    let str = "JavaScript";
    str.slice(0, 4)          →  "Java"
    str.substring(0, 4)      →  "Java"   (same result)

  Example 4: Get last N characters (slice is cleaner)
    let str = "JavaScript";
    str.slice(-6)            →  "Script"   (slice with negative)
    str.substring(str.length - 6)  →  "Script"   (substring needs calculation)

  Example 5: Extract domain from email
    let email = "user@example.com";
    let atIndex = email.indexOf("@");
    email.slice(atIndex + 1)         →  "example.com"
    email.substring(atIndex + 1)     →  "example.com"  (same result)

  Example 6: Reversing start/end is handled differently
    "abcdef".slice(4, 2)       →  ""       (empty — no swap)
    "abcdef".substring(4, 2)   →  "cd"     (swapped to 2, 4)


8. QUICK DECISION GUIDE
------------------------

  ┌──────────────────────────────────────────────────────────────────────────┐
  │  QUESTION                                │  USE                           │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Need to count from the END of string?   │  slice() with negative indices │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Only positive indices?                  │  Either slice() or substring() │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  startIndex might be > endIndex?         │  substring() (auto-swaps)      │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Need consistent behavior with arrays?   │  slice() (arrays also use it)  │
  ├──────────────────────────────────────────────────────────────────────────┤
  │  Working with negative user input?       │  substring() (treats as 0)     │
  └──────────────────────────────────────────────────────────────────────────┘


9. RELATION TO ARRAY METHODS
-----------------------------

  Both `slice()` and `substring()` are String methods, but `slice()` also
  exists on Arrays with very similar behavior:

    Array.slice(start, end)  →  Returns new array with extracted elements
    String.slice(start, end) →  Returns new string with extracted characters

  substring() does NOT exist on Arrays — it is String-only.

  This makes `slice()` more UNIVERSAL and consistent across JavaScript.


================================================================================
                    KEY TAKEAWAY
================================================================================

  slice(start, end):
    - Supports NEGATIVE indices (counts from end).
    - If start > end → returns "" (empty string).
    - More flexible and consistent with Array.slice().
    - BEST for: extracting from the end, working with negative values.

  substring(start, end):
    - Does NOT support negative indices (treated as 0).
    - If start > end → AUTOMATICALLY SWAPS them.
    - More forgiving with mixed-up indices.
    - BEST for: simple positive-index extractions, safe user input handling.

  GOLDEN RULE:
    If you need to extract from the END or use negative numbers → use slice().
    If you only have positive indices and want safety from swapped values → use substring().
    When in doubt, prefer slice() for consistency with arrays.

================================================================================
*/
