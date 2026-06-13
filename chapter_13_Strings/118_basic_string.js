/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: JavaScript Strings — basics, character vs string, memory allocation, and ASCII representation.
 *
 * Functions/Methods Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *
 *   - typeof(value: any): string
 *     Description: Returns the data type of the operand as a string.
 *
 *   - String.length: number
 *     Description: Read-only property returning the number of UTF-16 code units in the string.
 *
 *   - String.charCodeAt(index: number): number
 *     Description: Returns the UTF-16 code unit (integer between 0 and 65535) at the given index.
 *
 *   - String.charAt(index: number): string
 *     Description: Returns a new string consisting of the single UTF-16 code unit at the given index.
 *
 * Key Concepts:
 *   - String: A sequence of zero or more Unicode characters wrapped in quotes.
 *   - Character: In JavaScript, a single character is represented as a string of length 1.
 *   - UTF-16 Encoding: JavaScript internally stores strings as UTF-16 code units.
 *   - ASCII: A 7-bit character encoding standard (0–127) that fits inside one UTF-16 unit.
 *   - Immutability: Strings in JavaScript cannot be changed after creation.
 *   - Memory Allocation: Strings are stored on the heap with length metadata and pointer to character data.
 * ============================================================
 */


// ========================
// 1. BASIC STRING EXAMPLES
// ========================

// Single character "string" in JavaScript
let singleChar = "A";
console.log("Value:", singleChar);                 // A
console.log("Type:", typeof singleChar);           // string
console.log("Length:", singleChar.length);         // 1
console.log("charCodeAt(0):", singleChar.charCodeAt(0)); // 65

// Multi-character string
let multiChar = "ABC";
console.log("\nValue:", multiChar);                // ABC
console.log("Type:", typeof multiChar);            // string
console.log("Length:", multiChar.length);           // 3
console.log("charCodeAt(0):", multiChar.charCodeAt(0)); // 65
console.log("charCodeAt(1):", multiChar.charCodeAt(1)); // 66
console.log("charCodeAt(2):", multiChar.charCodeAt(2)); // 67

// Empty string
let emptyStr = "";
console.log("\nEmpty String Length:", emptyStr.length); // 0


// ========================
// 2. CHARACTER vs STRING IN JS
// ========================

let charA = "A";
let strA = "A";

console.log("\ncharA === strA:", charA === strA);   // true (JS has no separate char type)
console.log("'A'[0]:", "A"[0]);                    // A (accessing the only character)


/*
================================================================================
                    DETAILED EXPLANATION: STRINGS IN JAVASCRIPT
================================================================================

1. WHAT IS A STRING IN JAVASCRIPT?
-----------------------------------
A String is a built-in primitive data type used to represent textual data.
It is a FINITE, ORDERED sequence of zero or more 16-bit unsigned integer values
(UTF-16 code units).

  Syntax:
    let str1 = "Hello";     // Double quotes
    let str2 = 'Hello';     // Single quotes
    let str3 = `Hello`;     // Backticks (template literals)

  Key Properties:
    - Immutable: Once created, the characters inside a string cannot be changed.
    - Indexed: Each character can be accessed via str[index].
    - UTF-16: JavaScript engines store strings internally using UTF-16 encoding.

  Example of Immutability:
    let s = "Hello";
    s[0] = "Y";             // This silently FAILS (in strict mode throws TypeError)
    console.log(s);         // Still "Hello"


2. WHAT IS A "CHARACTER" IN JAVASCRIPT?
----------------------------------------
Unlike languages such as C, C++, or Java, JavaScript does NOT have a separate
`char` data type. A "character" in JavaScript is simply a String object/primitive
with a length of exactly 1.

  In C/C++:
    char c = 'A';           // A single byte (8 bits) on most systems
    char s[] = "ABC";       // An array of characters (4 bytes including '\0')

  In JavaScript:
    let c = "A";            // A string of length 1
    let s = "ABC";          // A string of length 3

  Important:
    typeof "A"   →  "string"
    typeof "ABC" →  "string"

  There is NO separate typeof result for a single character.


3. DIFFERENCE BETWEEN CHARACTER AND STRING
-------------------------------------------

| Aspect                | Character (Conceptual)                  | String (General)                        |
|-----------------------|-----------------------------------------|------------------------------------------|
| Definition            | A single symbol/text unit               | A sequence of zero or more characters    |
| In JavaScript         | Still a `string` with length === 1        | A `string` with length >= 0              |
| Example               | "A", "7", "!", "\n"                     | "Hello", "A", "", "12345"               |
| Access                | "A"[0] → "A"                            | "Hello"[0] → "H", "Hello"[4] → "o"     |
| Type (JS)             | typeof → "string"                       | typeof → "string"                        |
| Mutability            | Immutable (new string on change)        | Immutable (new string on change)         |
| Length Property       | .length === 1                           | .length >= 0                             |
| Encoding Unit         | 1 UTF-16 code unit (2 bytes for ASCII)  | N UTF-16 code units (2 * N bytes for pure ASCII) |

  Visual Representation:

    Character:     ┌─────────────┐
                   │     "A"     │   ← One single unit
                   └─────────────┘

    String:        ┌─────┬─────┬─────┬─────┬─────┐
                   │ "H" │ "e" │ "l" │ "l" │ "o" │   ← Ordered sequence of characters
                   └─────┴─────┴─────┴─────┴─────┘
                                    ↑
                              Index positions: 0, 1, 2, 3, 4


4. MEMORY ALLOCATION: CHARACTER vs STRING (ASCII Focus)
----------------------------------------------------------

Understanding how memory works helps explain why "A" and "ABC" are related but
consume different amounts of memory.

  ASCII OVERVIEW:
    - ASCII (American Standard Code for Information Interchange) uses 7 bits.
    - Range: 0 to 127 (128 characters total).
    - Covers: English letters, digits, punctuation, and control characters.
    - Examples:
        'A' = 65     'B' = 66     'C' = 67
        '0' = 48     '9' = 57
        'a' = 97     'z' = 122
        Space = 32   Newline = 10

  HOW JAVASCRIPT STORES STRINGS (Conceptual Model):
    Most JavaScript engines (V8 in Chrome/Node, SpiderMonkey in Firefox,
    JavaScriptCore in Safari) use UTF-16 for internal string representation.

    For ASCII-only strings, each ASCII character occupies exactly ONE UTF-16
    code unit, which is 16 bits = 2 BYTES.

    Memory Structure Diagram (Simplified):

    ┌─────────────────────────────────────────────────────────────────┐
    │                     STRING OBJECT HEADER                        │
    │  ┌──────────────┬──────────────┬─────────────────────────────┐  │
    │  │  length      │  hash (opt)  │  pointer to char array      │  │
    │  │  (4/8 bytes) │  (4/8 bytes) │  (4/8 bytes on 32/64-bit)   │  │
    │  └──────────────┴──────────────┴─────────────────────────────┘  │
    └─────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
    ┌─────────────────────────────────────────────────────────────────┐
    │                     CHARACTER ARRAY (UTF-16)                    │
    │  ┌────────┬────────┬────────┬────────┬────────┬────────────────┐  │
    │  │  'H'   │  'e'   │  'l'   │  'l'   │  'o'   │  null (0x0000) │  │
    │  │0x0048  │0x0065  │0x006C  │0x006C  │0x006F  │  (terminator)  │  │
    │  │(2 bytes)│(2 bytes)│(2 bytes)│(2 bytes)│(2 bytes)│  (2 bytes)     │  │
    │  └────────┴────────┴────────┴────────┴────────┴────────────────┘  │
    └─────────────────────────────────────────────────────────────────┘

  ASCII Value Table for "ABC":

  ┌─────────┬─────────────┬────────────────┬──────────────────────────┐
  │ Letter  │ ASCII (Dec) │ ASCII (Hex)    │ UTF-16 Code Unit (Hex)   │
  ├─────────┼─────────────┼────────────────┼──────────────────────────┤
  │   A     │     65      │     0x41       │        0x0041            │
  │   B     │     66      │     0x42       │        0x0042            │
  │   C     │     67      │     0x43       │        0x0043            │
  │   a     │     97      │     0x61       │        0x0061            │
  │   z     │     122     │     0x7A       │        0x007A            │
  │   0     │     48      │     0x30       │        0x0030            │
  │   9     │     57      │     0x39       │        0x0039            │
  │ Space   │     32      │     0x20       │        0x0020            │
  └─────────┴─────────────┴────────────────┴──────────────────────────┘

  MEMORY COMPARISON: Single Character vs String

  ┌─────────────────────┬────────────────────────────┬────────────────────────────┐
  │ Memory Component      │ Single Character (e.g., "A")│ String (e.g., "ABC")       │
  ├─────────────────────┼────────────────────────────┼────────────────────────────┤
  │ Header Metadata     │ length: 1                  │ length: 3                  │
  │ (overhead)          │ pointer to data            │ pointer to data            │
  │                     │ ~12–24 bytes (engine dependent)│ ~12–24 bytes (engine dependent)│
  ├─────────────────────┼────────────────────────────┼────────────────────────────┤
  │ Character Data      │ 1 UTF-16 unit × 2 bytes    │ 3 UTF-16 units × 2 bytes   │
  │ (raw content)       │ = 2 bytes                   │ = 6 bytes                   │
  ├─────────────────────┼────────────────────────────┼────────────────────────────┤
  │ Total (approx)      │ ~14–26 bytes                │ ~18–30 bytes                │
  │                     │ Depends on JS engine         │ Depends on JS engine         │
  └─────────────────────┴────────────────────────────┴────────────────────────────┘

  Important Notes:
    - The "Character" ("A") and the String "ABC" share the SAME type and
      structure in JavaScript. The only difference is the LENGTH of the
      underlying character array.
    - There is NO separate 1-byte `char` type like in C.
    - Even a single ASCII character consumes 2 bytes in the UTF-16 array.
    - The engine may apply optimizations like "cons strings" (ropes) or
      interning for small/literal strings.


5. VISUALIZING MEMORY FOR "A" vs "ABC"
---------------------------------------

  Memory for "A" (simplified):

    String Object:
    ┌─────────┬─────────┐
    │ length=1│ pointer │──────┐
    └─────────┴─────────┘      │
                               ▼
                         ┌──────────┐
                         │ 0x0041   │   ← 'A' in UTF-16 (2 bytes)
                         │  (2B)    │
                         └──────────┘

  Memory for "ABC" (simplified):

    String Object:
    ┌─────────┬─────────┐
    │ length=3│ pointer │──────┐
    └─────────┴─────────┘      │
                               ▼
                         ┌──────────┬──────────┬──────────┐
                         │ 0x0041   │ 0x0042   │ 0x0043   │
                         │   'A'    │   'B'    │   'C'    │
                         │  (2B)    │  (2B)    │  (2B)    │
                         └──────────┴──────────┴──────────┘


6. WHY DOES JAVASCRIPT USE UTF-16 INSTEAD OF ASCII?
----------------------------------------------------
  - ASCII only supports 128 characters. It cannot represent characters from
    other languages (Hindi, Chinese, Arabic, Emoji, etc.).
  - UTF-16 supports the entire Unicode range (over 149,000 characters).
  - Trade-off: ASCII characters waste 1 byte (upper 8 bits are always 0x00).
    However, this enables universal text representation.

  Extended Example:
    let hindi = "नमस्ते";
    let emoji = "🚀";

    console.log(hindi.length);  // 6 (each Devanagari letter is one UTF-16 unit)
    console.log(emoji.length);  // 2 (rocket emoji needs a surrogate pair!)

  "🚀" (U+1F680) requires TWO UTF-16 code units (0xD83D 0xDE80).
  This is why some "characters" have .length === 2 in JavaScript.


7. SUMMARY TABLE: CHARACTER vs STRING
--------------------------------------

  ┌────────────────────────┬────────────────────────┬────────────────────────┐
  │ Property               │ Single Character       │ Multi-Char String      │
  ├────────────────────────┼────────────────────────┼────────────────────────┤
  │ JS Type                │ "string"               │ "string"               │
  │ Separate char type?    │ ❌ No                  │ ❌ No                  │
  │ Length                 │ 1                      │ N (>= 0)               │
  │ Memory per ASCII char  │ 2 bytes (UTF-16 unit)  │ 2 bytes per char       │
  │ Access                 │ str[0]                 │ str[0], str[1]...      │
  │ Mutability             │ Immutable              │ Immutable              │
  │ Example                │ "X"                    │ "Hello"                │
  └────────────────────────┴────────────────────────┴────────────────────────┘


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. In JavaScript, there is NO difference in DATA TYPE between a character
     and a string. Both are of type `string`.

  2. A "character" is just a string with length === 1.

  3. Internally, JavaScript stores ALL strings as UTF-16 code units.
     Every ASCII character takes exactly 2 bytes.

  4. Memory overhead (object header) exists for ALL strings, regardless
     of length. This makes a single character relatively "expensive"
     compared to C/C++ where a char is just 1 byte with no header.

  5. Because strings are immutable, any "modification" creates a NEW
     string in memory — the original remains unchanged.


================================================================================
                    APPENDIX: splice vs slice vs split vs trim
================================================================================

IMPORTANT: `splice()` is an ARRAY method, NOT a String method.
In JavaScript, strings are immutable, so methods that "modify" strings
must return a NEW string. `splice()` mutates the original array in-place,
which is why it does NOT exist on strings.

1. splice() — ARRAY METHOD ONLY ❌ (Not for Strings)
------------------------------------------------------
  Syntax:
    array.splice(start, deleteCount, item1, item2, ...)

  What it does:
    - Changes the contents of an ARRAY by removing or replacing existing
      elements and/or adding new elements IN-PLACE.
    - MUTATES the original array.

  Example:
    let arr = ["a", "b", "c", "d"];
    arr.splice(1, 2, "X", "Y");
    // arr is now ["a", "X", "Y", "d"] — ORIGINAL CHANGED!

  Return:
    Returns an ARRAY of the deleted elements.

  Why strings don't have splice():
    Strings are immutable in JS. splice() requires mutation.


2. slice() — String & Array Method ✅
--------------------------------------
  Syntax:
    string.slice(startIndex, endIndex)

  What it does:
    - Extracts a section of a string and returns it as a NEW string.
    - Does NOT modify the original string.
    - endIndex is EXCLUSIVE (not included in result).
    - Supports NEGATIVE indices (counts from end).

  Example:
    let str = "Hello, World!";
    str.slice(0, 5)   →  "Hello"
    str.slice(7, 12)  →  "World"
    str.slice(-6, -1) →  "World"
    str.slice(7)      →  "World!"

  Return:
    A NEW string containing the extracted characters.


3. split() — String Method Only ✅
-----------------------------------
  Syntax:
    string.split(separator, limit)

  What it does:
    - Divides a string into an ordered list of substrings.
    - Places these substrings into an ARRAY.
    - The separator specifies where to split (can be string or regex).
    - If separator is "" (empty string), splits into individual characters.

  Example:
    let str = "Hello, World!";
    str.split(", ")     →  ["Hello", "World!"]
    str.split("")        →  ["H","e","l","l","o",","," ","W","o","r","l","d","!"]
    str.split(" ", 1)    →  ["Hello,"]
    "a-b-c".split("-")   →  ["a", "b", "c"]

  Return:
    An ARRAY of strings.


4. trim() — String Method Only ✅
----------------------------------
  Syntax:
    string.trim()
    string.trimStart()  // or trimLeft()
    string.trimEnd()    // or trimRight()

  What it does:
    - Removes WHITESPACE characters from both ends of a string.
    - Whitespace includes: spaces, tabs, newlines (\n, \t, etc.).
    - Does NOT modify the original string (returns a new one).

  Example:
    let str = "   Hello, World!   ";
    str.trim()       →  "Hello, World!"
    str.trimStart()  →  "Hello, World!   "
    str.trimEnd()    →  "   Hello, World!"

  Return:
    A NEW string with whitespace removed from both ends.


5. COMPARISON TABLE: splice vs slice vs split vs trim
--------------------------------------------------------

┌───────────────────┬─────────────┬────────────────┬────────────────┬────────────────┐
│ Aspect            │ splice()    │ slice()        │ split()        │ trim()         │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Data Type         │ Array ONLY  │ String & Array │ String ONLY    │ String ONLY    │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Mutates Original? │ YES         │ NO             │ NO             │ NO             │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Return Type       │ Array       │ String/Array   │ Array          │ String         │
│                   │ (deleted)   │ (extracted)    │ (substrings)   │ (trimmed)      │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Purpose           │ Add/Remove/ │ Extract a      │ Divide string  │ Remove         │
│                   │ Replace     │ portion        │ into parts     │ whitespace     │
│                   │ elements    │                │                │ from ends      │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Accepts Negative  │ NO (start   │ YES            │ N/A            │ N/A            │
│ Index?            │ only)       │                │                │                │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Separator         │ N/A         │ N/A            │ YES (required) │ N/A            │
│ Required?         │             │                │                │                │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Example Input     │ [a,b,c,d]   │ "Hello World"  │ "a-b-c"        │ "  hello  "    │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Example Call      │ .splice(1,2)│ .slice(0,5)    │ .split("-")    │ .trim()        │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Example Output    │ [b,c]       │ "Hello"        │ ["a","b","c"]  │ "hello"        │
├───────────────────┼─────────────┼────────────────┼────────────────┼────────────────┤
│ Original Changed? │ YES         │ NO             │ NO             │ NO             │
└───────────────────┴─────────────┴────────────────┴────────────────┴────────────────┘


6. QUICK MEMORY TIP
--------------------
  ┌──────────────────────────────────────────────────────────────────────────┐
  │  splice = "Sew" (mutates/stitches the original) → ARRAY ONLY           │
  │  slice  = "Cut a SLICE" (extracts a piece, original stays)             │
  │  split  = "SPLIT apart" (breaks into pieces → ARRAY)                   │
  │  trim   = "TRIM the edges" (cuts off whitespace from ends)             │
  └──────────────────────────────────────────────────────────────────────────┘

================================================================================
*/
