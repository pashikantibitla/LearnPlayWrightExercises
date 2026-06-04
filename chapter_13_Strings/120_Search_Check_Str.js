// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
console.log(url.startsWith("https"));   // true
console.log(url.startsWith("http://")); // false
console.log(url.endsWith("true"));      // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically.


/*
================================================================================
                    DETAILED EXPLANATION: SEARCH & CHECK METHODS
================================================================================

1. WHAT IS includes()?
----------------------
The `includes(searchString, position)` method checks if a string contains another
string, returning `true` or `false`.

  Syntax:
    string.includes(searchString)
    string.includes(searchString, startPosition)

  Parameters:
    - searchString: The string to search for.
    - startPosition (optional): The position within the string to begin searching.
                                Defaults to 0.

  Return Type: boolean (true / false)

  Examples from file:
    url.includes("staging")     →  true  ("staging" exists in url)
    url.includes("production")  →  false ("production" does NOT exist)

  Important:
    - CASE-SENSITIVE: "Staging" !== "staging"
    - Returns BOOLEAN, not index position.
    - Cannot use regular expressions (throws TypeError).

  More Examples:
    "Hello".includes("ell")        →  true
    "Hello".includes("ell", 2)     →  false (starts search from index 2)
    "Hello".includes("H")          →  true
    "Hello".includes("h")          →  false (case-sensitive!)


2. WHAT IS startsWith()?
------------------------
The `startsWith(searchString, position)` method checks if a string begins with
the characters of a specified string.

  Syntax:
    string.startsWith(searchString)
    string.startsWith(searchString, position)

  Parameters:
    - searchString: The string to search for at the beginning.
    - position (optional): The position in the original string to start checking.
                           Defaults to 0.

  Return Type: boolean (true / false)

  Examples from file:
    url.startsWith("https")      →  true
    url.startsWith("http://")    →  false

  More Examples:
    "Hello, World!".startsWith("Hello")    →  true
    "Hello, World!".startsWith("World")    →  false
    "Hello, World!".startsWith("World", 7) →  true (checks from index 7)
    "Hello".startsWith("")                 →  true (empty string always matches)

  Use Case:
    - Validating URL protocols (http:// vs https://)
    - Checking file extensions or prefixes


3. WHAT IS endsWith()?
-----------------------
The `endsWith(searchString, length)` method checks if a string ends with the
characters of a specified string.

  Syntax:
    string.endsWith(searchString)
    string.endsWith(searchString, length)

  Parameters:
    - searchString: The string to search for at the end.
    - length (optional): The length of the string to consider.
                         Defaults to the full string length.

  Return Type: boolean (true / false)

  Examples from file:
    url.endsWith("true")  →  true

  More Examples:
    "Hello, World!".endsWith("World!")     →  true
    "Hello, World!".endsWith("Hello")      →  false
    "Hello, World!".endsWith("World", 12)  →  true (checks first 12 chars: "Hello, World")
    "Hello".endsWith("")                   →  true (empty string always matches)

  Use Case:
    - Checking file extensions (.jpg, .png, .js)
    - Validating query string endings


4. WHAT IS indexOf()?
----------------------
The `indexOf(searchValue, fromIndex)` method returns the FIRST index at which a
specified substring is found in the string. Returns -1 if not found.

  Syntax:
    string.indexOf(searchValue)
    string.indexOf(searchValue, fromIndex)

  Parameters:
    - searchValue: The string to search for.
    - fromIndex (optional): The index to start searching from.
                              Defaults to 0.

  Return Type: number (index position or -1)

  Examples from file:
    url.indexOf("a")           →  15   (first 'a' is at index 15 in the url)
    url.indexOf("nothere")     →  -1  (not found)
    url.indexOf("x")           →  -1  (not found)

  More Examples:
    "Hello, World!".indexOf("o")       →  4   (first 'o' at index 4)
    "Hello, World!".indexOf("o", 5)    →  8   (first 'o' starting from index 5)
    "Hello, World!".indexOf("World")   →  7   (substring "World" starts at 7)
    "Hello, World!".indexOf("xyz")     →  -1  (not found)

  KEY BEHAVIOR:
    - Returns the index of the FIRST match.
    - Returns -1 if the substring is NOT found.
    - Case-sensitive.


5. WHAT IS lastIndexOf()?
--------------------------
The `lastIndexOf(searchValue, fromIndex)` method returns the LAST index at which
a specified substring is found in the string. Returns -1 if not found.

  Syntax:
    string.lastIndexOf(searchValue)
    string.lastIndexOf(searchValue, fromIndex)

  Parameters:
    - searchValue: The string to search for.
    - fromIndex (optional): The index to stop searching BEFORE.
                              Defaults to the full string length.

  Return Type: number (index position or -1)

  Examples from file:
    url.lastIndexOf("a")  →  34   (last 'a' is at index 34 in the url)

  More Examples:
    "Hello, World!".lastIndexOf("o")       →  8   (last 'o' at index 8)
    "Hello, World!".lastIndexOf("o", 5)    →  4   (last 'o' before index 5)
    "Hello, World!".lastIndexOf("World")   →  7   (last "World" starts at 7)
    "Hello, World!".lastIndexOf("xyz")     →  -1  (not found)

  KEY BEHAVIOR:
    - Returns the index of the LAST match.
    - Search proceeds BACKWARDS from fromIndex.
    - Returns -1 if the substring is NOT found.
    - Case-sensitive.


6. WHAT IS search()?
---------------------
The `search(regexp)` method executes a search for a match between a regular
expression and the string, returning the index of the FIRST match or -1.

  Syntax:
    string.search(regexp)

  Parameters:
    - regexp: A regular expression object or a string (auto-converted to regex).

  Return Type: number (index position or -1)

  Examples from file:
    url.search(/login/)  →  28   ("login" starts at index 28)
    url.search(/vwo/)    →  19   ("vwo" starts at index 19)

  More Examples:
    "Hello 123".search(/\d/)       →  6   (first digit at index 6)
    "Hello 123".search(/world/)    →  -1  (not found)
    "Hello World".search(/[A-Z]/)  →  0   (first uppercase at index 0)

  KEY BEHAVIOR:
    - ALWAYS searches from the beginning (no fromIndex parameter).
    - Accepts REGULAR EXPRESSIONS (unlike indexOf).
    - Returns ONLY the first match index (cannot find subsequent matches).
    - Case-sensitive by default (use /i flag for case-insensitive).

  Regex Basics:
    - /login/     →  Matches exact text "login"
    - /\d/        →  Matches any digit (0-9)
    - /[a-z]/     →  Matches any lowercase letter
    - /[A-Z]/i    →  Matches any letter, case-insensitive (i = ignore case)
    - /vwo|login/ →  Matches "vwo" OR "login"


7. COMPREHENSIVE INDEXING TABLE FOR THE url
---------------------------------------------

  URL: "https://staging.vwo.com/api/login?retry=true"
  Length: 46 characters

  ┌───────┬─────────┬────────────┐
  │ Index │ Length  │ Character  │
  ├───────┼─────────┼────────────┤
  │   0   │    1    │     h      │
  │   1   │    2    │     t      │
  │   2   │    3    │     t      │
  │   3   │    4    │     p      │
  │   4   │    5    │     s      │
  │   5   │    6    │     :      │
  │   6   │    7    │     /      │
  │   7   │    8    │     /      │
  │   8   │    9    │     s      │
  │   9   │   10    │     t      │
  │  10   │   11    │     a      │
  │  11   │   12    │     g      │
  │  12   │   13    │     i      │
  │  13   │   14    │     n      │
  │  14   │   15    │     g      │
  │  15   │   16    │     .      │
  │  16   │   17    │     v      │
  │  17   │   18    │     w      │
  │  18   │   19    │     o      │
  │  19   │   20    │     .      │
  │  20   │   21    │     c      │
  │  21   │   22    │     o      │
  │  22   │   23    │     m      │
  │  23   │   24    │     /      │
  │  24   │   25    │     a      │
  │  25   │   26    │     p      │
  │  26   │   27    │     i      │
  │  27   │   28    │     /      │
  │  28   │   29    │     l      │
  │  29   │   30    │     o      │
  │  30   │   31    │     g      │
  │  31   │   32    │     i      │
  │  32   │   33    │     n      │
  │  33   │   34    │     ?      │
  │  34   │   35    │     r      │
  │  35   │   36    │     e      │
  │  36   │   37    │     t      │
  │  37   │   38    │     r      │
  │  38   │   39    │     y      │
  │  39   │   40    │     =      │
  │  40   │   41    │     t      │
  │  41   │   42    │     r      │
  │  42   │   43    │     u      │
  │  43   │   44    │     e      │
  │  44   │   45    │     (out   │
  │       │         │    of      │
  │       │         │   bounds)  │
  └───────┴─────────┴────────────┘

  KEY INDICES FOR THE URL:
    - "https"       →  starts at index 0
    - "staging"     →  starts at index 8
    - "vwo"         →  starts at index 16
    - ".com"        →  starts at index 19
    - "api"         →  starts at index 24
    - "login"       →  starts at index 28
    - "retry=true"  →  starts at index 34
    - 'a' (first)   →  index 10 (in "staging")
    - 'a' (last)    →  index 24 (in "api")


8. DIFFERENCE TABLE: indexOf vs lastIndexOf vs search vs includes
------------------------------------------------------------------

┌────────────────────┬─────────────────┬──────────────────┬─────────────────┬──────────────────┐
│ Aspect             │ indexOf()       │ lastIndexOf()    │ search()        │ includes()       │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ What it does       │ Finds FIRST     │ Finds LAST       │ Finds FIRST     │ Checks if string │
│                    │ occurrence      │ occurrence       │ match via regex │ contains text    │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Return Type        │ number (or -1)  │ number (or -1)   │ number (or -1)  │ boolean          │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Search Direction   │ Left → Right    │ Right → Left     │ Left → Right    │ Left → Right     │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Accepts Regex?     │ ❌ No           │ ❌ No            │ ✅ Yes          │ ❌ No             │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ fromIndex param?   │ ✅ Yes          │ ✅ Yes           │ ❌ No           │ ✅ Yes            │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Returns Position?  │ ✅ Yes          │ ✅ Yes           │ ✅ Yes          │ ❌ No (true/false)│
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Case-Sensitive     │ ✅ Yes          │ ✅ Yes           │ ✅ Yes          │ ✅ Yes            │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Not Found Value    │ -1              │ -1               │ -1              │ false            │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Example: "abcabc"  │ .indexOf("a")   │ .lastIndexOf("a")│ .search(/a/)    │ .includes("b")   │
│                    │ → 0             │ → 3              │ → 0             │ → true           │
├────────────────────┼─────────────────┼──────────────────┼─────────────────┼──────────────────┤
│ Use Case           │ Find position   │ Find last        │ Pattern matching│ Simple existence │
│                    │ of substring    │ position         │ with regex      │ check            │
└────────────────────┴─────────────────┴──────────────────┴─────────────────┴──────────────────┘


9. ADDITIONAL EXAMPLES
-----------------------

  Example 1: Finding all occurrences of a character
    let text = "banana";
    let indices = [];
    let idx = text.indexOf("a");
    while (idx !== -1) {
        indices.push(idx);
        idx = text.indexOf("a", idx + 1);
    }
    console.log(indices);  // [1, 3, 5]

  Example 2: Checking if URL is secure
    function isSecure(url) {
        return url.startsWith("https://");
    }
    isSecure("https://example.com") → true
    isSecure("http://example.com")  → false

  Example 3: Extracting domain from URL
    let url = "https://staging.vwo.com/api/login";
    let start = url.indexOf("//") + 2;
    let end = url.indexOf("/", start);
    let domain = url.slice(start, end);
    console.log(domain);  // "staging.vwo.com"

  Example 4: Using regex with search()
    let email = "user@example.com";
    email.search(/@/)        →  4
    email.search(/\.com$/)  →  11 (matches ".com" at end)
    email.search(/^[a-z]+/)  →  0  (matches lowercase at start)

  Example 5: Combining methods
    let filename = "document.pdf";
    if (filename.includes(".") && filename.endsWith(".pdf")) {
        console.log("It's a PDF file!");
    }

  Example 6: Counting occurrences
    function countOccurrences(str, sub) {
        let count = 0;
        let pos = str.indexOf(sub);
        while (pos !== -1) {
            count++;
            pos = str.indexOf(sub, pos + 1);
        }
        return count;
    }
    countOccurrences("abcabcabc", "abc") → 3


10. STARTSWITH vs ENDSWITH TABLE
---------------------------------

┌───────────────────┬──────────────────────────────┬──────────────────────────────┐
│ Aspect            │ startsWith()                 │ endsWith()                   │
├───────────────────┼──────────────────────────────┼──────────────────────────────┤
│ What it checks    │ BEGINNING of string          │ END of string                │
├───────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Return Type       │ boolean                      │ boolean                      │
├───────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Second Param      │ position (start check here)    │ length (consider only first N │
│                   │                              │ chars)                       │
├───────────────────┼──────────────────────────────┼──────────────────────────────┤
│ Example           │ "abc".startsWith("a")        │ "abc".endsWith("c")          │
│                   │ → true                       │ → true                       │
├───────────────────┼──────────────────────────────┼──────────────────────────────┤
│ With 2nd param    │ "abc".startsWith("b", 1)     │ "abc".endsWith("b", 2)       │
│                   │ → true                       │ → true (checks "ab")         │
└───────────────────┴──────────────────────────────┴──────────────────────────────┘


================================================================================
                    KEY TAKEAWAY
================================================================================

  includes()   →  "Does the string CONTAIN this?"        →  boolean
  startsWith() →  "Does the string BEGIN with this?"     →  boolean
  endsWith()   →  "Does the string END with this?"       →  boolean
  indexOf()    →  "Where is the FIRST occurrence?"       →  number (or -1)
  lastIndexOf()→  "Where is the LAST occurrence?"        →  number (or -1)
  search()     →  "Where is the REGEX match?"            →  number (or -1)

  Use includes/startsWith/endsWith for simple YES/NO checks.
  Use indexOf/lastIndexOf when you need the POSITION.
  Use search() when you need PATTERN MATCHING with regular expressions.

================================================================================
*/
