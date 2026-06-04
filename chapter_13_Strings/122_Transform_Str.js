let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

str.trimStart();
str.trimEnd();

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));

// Concatenation
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

let r = "pass,fail,skip".split(",");
console.log(r);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);


/*
================================================================================
                    DETAILED EXPLANATION: STRING TRANSFORMATION METHODS
================================================================================

1. WHAT IS toUpperCase()?
--------------------------
The `toUpperCase()` method returns a NEW string with all characters converted
to UPPERCASE letters.

  Syntax:
    string.toUpperCase()

  Return Type: string

  Example from file:
    "  Hello, World!  ".toUpperCase()  →  "  HELLO, WORLD!  "

  More Examples:
    "abc".toUpperCase()       →  "ABC"
    "Hello World".toUpperCase() →  "HELLO WORLD"
    "123".toUpperCase()       →  "123"   (numbers unchanged)
    "".toUpperCase()          →  ""      (empty stays empty)

  Key Points:
    - Does NOT modify the original string (returns a new one).
    - Non-alphabetic characters are unchanged.
    - Locale-independent (use `toLocaleUpperCase()` for locale-specific).


2. WHAT IS toLowerCase()?
--------------------------
The `toLowerCase()` method returns a NEW string with all characters converted
to LOWERCASE letters.

  Syntax:
    string.toLowerCase()

  Return Type: string

  Example from file:
    "  Hello, World!  ".toLowerCase()  →  "  hello, world!  "

  More Examples:
    "ABC".toLowerCase()       →  "abc"
    "Hello World".toLowerCase() →  "hello world"
    "123".toLowerCase()       →  "123"   (numbers unchanged)
    "".toLowerCase()          →  ""      (empty stays empty)

  Key Points:
    - Does NOT modify the original string.
    - Non-alphabetic characters are unchanged.
    - Locale-independent (use `toLocaleLowerCase()` for locale-specific).

  Difference Table: toUpperCase() vs toLowerCase()

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ toUpperCase()            │ toLowerCase()            │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Direction           │ ALL CAPS                 │ all small                │
  │ Return Type         │ string                   │ string                   │
  │ Mutates Original    │ ❌ NO                    │ ❌ NO                    │
  │ Numbers             │ Unchanged                │ Unchanged                │
  │ Symbols             │ Unchanged                │ Unchanged                │
  │ Example             │ "abc" → "ABC"            │ "ABC" → "abc"            │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


3. WHAT IS trim()?
-------------------
The `trim()` method removes WHITESPACE from BOTH ENDS of a string and returns
a new string.

  Syntax:
    string.trim()

  Return Type: string

  Example from file:
    "  Hello, World!  ".trim()  →  "Hello, World!"

  More Examples:
    "  hello  ".trim()     →  "hello"
    "\thello\n".trim()     →  "hello"
    "hello".trim()         →  "hello"  (no change needed)
    "  ".trim()            →  ""       (only whitespace = empty)

  Whitespace Characters Removed:
    - Space " "
    - Tab \t
    - Newline \n
    - Carriage return \r
    - Form feed \f
    - Vertical tab \v
    - Non-breaking space \u00A0


4. WHAT IS trimStart() / trimLeft()?
-------------------------------------
The `trimStart()` method removes WHITESPACE from the BEGINNING (left side) of
a string. Also aliased as `trimLeft()` (legacy name).

  Syntax:
    string.trimStart()
    string.trimLeft()   // legacy alias

  Return Type: string

  Example from file:
    "  Hello, World!  ".trimStart()  →  "Hello, World!  "


5. WHAT IS trimEnd() / trimRight()?
------------------------------------
The `trimEnd()` method removes WHITESPACE from the END (right side) of a string.
Also aliased as `trimRight()` (legacy name).

  Syntax:
    string.trimEnd()
    string.trimRight()   // legacy alias

  Return Type: string

  Example from file:
    "  Hello, World!  ".trimEnd()  →  "  Hello, World!"

  Difference Table: trim vs trimStart vs trimEnd

  ┌───────────────────┬────────────────────────┬────────────────────────┬────────────────────────┐
  │ Aspect            │ trim()                 │ trimStart()            │ trimEnd()              │
  ├───────────────────┼────────────────────────┼────────────────────────┼────────────────────────┤
  │ Removes from      │ BOTH ends              │ START only             │ END only               │
  ├───────────────────┼────────────────────────┼────────────────────────┼────────────────────────┤
  │ Original Mutated  │ ❌ NO                  │ ❌ NO                  │ ❌ NO                  │
  ├───────────────────┼────────────────────────┼────────────────────────┼────────────────────────┤
  │ Legacy Alias      │ None                   │ trimLeft()             │ trimRight()            │
  ├───────────────────┼────────────────────────┼────────────────────────┼────────────────────────┤
  │ Example "  abc  " │ "abc"                  │ "abc  "                │ "  abc"                │
  └───────────────────┴────────────────────────┴────────────────────────┴────────────────────────┘


6. WHAT IS replace()?
----------------------
The `replace(pattern, replacement)` method returns a NEW string with the FIRST
occurrence of a pattern replaced by a replacement string.

  Syntax:
    string.replace(searchValue, newValue)
    string.replace(regexp, newValue)

  Parameters:
    - searchValue: The string or regex to search for.
    - newValue: The string to replace with.

  Return Type: string

  Example from file:
    msg.replace("FAIL", "PASS")       →  "Test: PASS. Retry: FAIL."
    msg.replace(/FAIL/g, "PASS")    →  "Test: PASS. Retry: PASS."

  KEY BEHAVIOR:
    - With a STRING searchValue: replaces ONLY the FIRST match.
    - With a REGEX and `g` flag: replaces ALL matches.
    - Does NOT mutate the original string.

  More Examples:
    "hello world".replace("o", "0")     →  "hell0 world"   (only first o)
    "hello world".replace(/o/g, "0")    →  "hell0 w0rld"   (all o's)
    "hello world".replace(/o/, "0")     →  "hell0 world"   (first o, no g flag)

  Special Replacement Patterns:
    $$  →  "$" (insert literal $)
    $&  →  The matched substring
    $`  →  The portion before the match
    $'  →  The portion after the match
    $n  →  The nth capturing group (n = 1-9)

  Example with $&:
    "hello".replace(/l/, "[$&]")  →  "he[l]lo"  ($& = matched "l")


7. WHAT IS replaceAll()?
-----------------------
The `replaceAll(pattern, replacement)` method returns a NEW string with ALL
occurrences of a pattern replaced by a replacement string.

  Syntax:
    string.replaceAll(searchValue, newValue)

  Parameters:
    - searchValue: The string or regex to search for.
      If using a regex, it MUST have the global (`g`) flag.
    - newValue: The string to replace with.

  Return Type: string

  Example from file:
    msg.replaceAll("FAIL", "PASS")  →  "Test: PASS. Retry: PASS."

  More Examples:
    "a-b-c".replaceAll("-", "_")        →  "a_b_c"
    "hello hello".replaceAll("hello", "hi") →  "hi hi"

  KEY BEHAVIOR:
    - Replaces ALL occurrences (unlike replace() with string).
    - If searchValue is a regex without `g` flag → TypeError.
    - Does NOT mutate the original string.

  Difference Table: replace() vs replaceAll()

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ replace()                │ replaceAll()             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ String search       │ First match only         │ ALL matches              │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Regex search        │ First match (no g)       │ ALL matches (g required) │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Regex without g     │ Works (first match)      │ ❌ TypeError             │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Return Type         │ string                   │ string                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Mutates Original    │ ❌ NO                    │ ❌ NO                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Example             │ "a-a".replace("a","b")   │ "a-a".replaceAll("a","b")│
  │                     │ → "b-a"                  │ → "b-b"                  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘


8. CONCATENATION METHODS
-----------------------
There are THREE ways to combine strings in JavaScript:

  A) + Operator (Addition / Concatenation)
    "Hello" + " " + "World"  →  "Hello World"

    KEY BEHAVIOR:
      - If both operands are strings → concatenation
      - If one is number, one is string → string concatenation
      - If both are numbers → arithmetic addition

    Example:
      "5" + "3"   →  "53"     (string + string)
      "5" + 3     →  "53"     (string + number → coerces to string)
      5 + 3       →  8        (number + number)
      5 + "3"     →  "53"     (number + string → coerces to string)

  B) concat() Method
    "Hello".concat(" ", "World")  →  "Hello World"

    Syntax:
      string.concat(string2, string3, ..., stringN)

    Parameters:
      - One or more strings to concatenate.

    Return Type: string

    KEY BEHAVIOR:
      - Concatenates all arguments to the original string.
      - Does NOT modify the original string.
      - Can accept multiple arguments.
      - Numbers are coerced to strings.

    Example:
      "a".concat("b", "c", "d")  →  "abcd"
      "".concat("test")         →  "test"

  C) Template Literals (Backticks)
    `${"Hello"} ${"World"}`  →  "Hello World"

    Syntax:
      `string text ${expression} more text`

    KEY BEHAVIOR:
      - Supports variable/expression interpolation with `${}`.
      - Supports multi-line strings naturally.
      - Any JS expression can go inside `${}`.
      - Modern and most readable approach.

    Example:
      let name = "Alice";
      let age = 25;
      `My name is ${name} and I am ${age} years old.`
      →  "My name is Alice and I am 25 years old."

  Comparison Table: + vs concat() vs Template Literals

  ┌─────────────────────┬─────────────┬──────────────┬──────────────────┐
  │ Aspect              │ + Operator  │ concat()     │ Template Literal │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Syntax              │ a + b       │ a.concat(b)  │ `a ${b}`         │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Multiple strings    │ a + b + c   │ a.concat(b,c)│ `a ${b} ${c}`    │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Expression support  │ No          │ No           │ Yes (${})        │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Multi-line          │ Needs \n    │ Needs \n     │ Natural          │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Readability         │ Medium      │ Low          │ HIGH             │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Type coercion risk  │ High        │ Low          │ Low              │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Modern standard     │ Always      │ Always       │ ES6+             │
  ├─────────────────────┼─────────────┼──────────────┼──────────────────┤
  │ Performance         │ Fast        │ Slightly     │ Fast             │
  │                     │             │ slower       │                  │
  └─────────────────────┴─────────────┴──────────────┴──────────────────┘


9. WHAT IS split()?
-------------------
The `split(separator, limit)` method divides a string into an ordered list of
substrings, puts these substrings into an ARRAY, and returns the array.

  Syntax:
    string.split(separator)
    string.split(separator, limit)

  Parameters:
    - separator: Specifies where to split.
                 Can be a string or regex.
                 If "" (empty string), splits into individual characters.
                 If omitted, returns array with entire string.
    - limit (optional): Limits the number of splits.

  Return Type: Array of strings

  Example from file:
    "pass,fail,skip".split(",")     →  ["pass", "fail", "skip"]
    "test_login_pass".split("_")    →  ["test", "login", "pass"]

  More Examples:
    "hello".split("")              →  ["h","e","l","l","o"]
    "a,b,c,d".split(",", 2)         →  ["a", "b"]  (limit = 2)
    "hello world".split(" ")         →  ["hello", "world"]
    "hello".split()                 →  ["hello"]    (no separator)

  KEY BEHAVIOR:
    - The separator itself is NOT included in the result.
    - Returns an ARRAY, not a string.
    - Does NOT modify the original string.


10. WHAT IS join()?
--------------------
The `join(separator)` method creates and returns a NEW STRING by concatenating
all elements of an ARRAY, separated by the specified separator.

  Syntax:
    array.join(separator)

  Parameters:
    - separator (optional): A string to separate each pair of adjacent elements.
                            Defaults to "," if omitted.

  Return Type: string

  Example from file:
    ["2024", "03", "07"].join("-")  →  "2024-03-07"
    "test_login_pass".split("_").join(" ")  →  "test login pass"

  More Examples:
    ["a", "b", "c"].join()           →  "a,b,c"    (default comma)
    ["a", "b", "c"].join("-")         →  "a-b-c"
    ["a", "b", "c"].join("")          →  "abc"
    [].join("-")                     →  ""         (empty array = empty string)

  KEY BEHAVIOR:
    - Called on an ARRAY, not a string.
    - The separator is inserted BETWEEN elements.
    - Does NOT modify the original array.

  Difference Table: split() vs join()

  ┌─────────────────────┬──────────────────────────┬──────────────────────────┐
  │ Aspect              │ split()                  │ join()                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Called on           │ String                   │ Array                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ What it does        │ Splits string → Array    │ Joins array → String     │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Input               │ String                   │ Array                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Output              │ Array                    │ String                   │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Separator meaning   │ "Split AT this"          │ "Join WITH this"         │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Mutates Original    │ ❌ NO                    │ ❌ NO                    │
  ├─────────────────────┼──────────────────────────┼──────────────────────────┤
  │ Example             │ "a-b".split("-")        │ ["a","b"].join("-")     │
  │                     │ → ["a","b"]              │ → "a-b"                  │
  └─────────────────────┴──────────────────────────┴──────────────────────────┘

  IMPORTANT: split() and join() are OPPOSITE operations!
    "a-b-c".split("-").join("-")  →  "a-b-c"  (round-trip!)


11. COMPLETE INDEXING TABLE: "  Hello, World!  "
--------------------------------------------------

  String:     (sp) (sp)  H   e   l   l   o   ,       W   o   r   l   d   !   (sp) (sp)
               ↓    ↓    ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓    ↓    ↓
  Index:      0    1    2   3   4   5   6   7   8   9   10  11  12  13  14  15   16   17
  Neg Idx:   -18  -17  -16 -15 -14 -13 -12 -11 -10 -9  -8  -7  -6  -5  -4  -3   -2   -1

  ┌────────────┬────────────┬──────────────────────────────────────────┐
  │ Method     │ Call       │ Result                                   │
  ├────────────┼────────────┼──────────────────────────────────────────┤
  │ toUpperCase│ .toUpperCase() │ "  HELLO, WORLD!  "                   │
  │ toLowerCase│ .toLowerCase() │ "  hello, world!  "                   │
  │ trim       │ .trim()        │ "Hello, World!"                        │
  │ trimStart  │ .trimStart()   │ "Hello, World!  "                      │
  │ trimEnd    │ .trimEnd()     │ "  Hello, World!"                      │
  │ slice      │ .slice(2, 15)  │ "Hello, World"                         │
  │ charAt     │ .charAt(9)     │ "W"                                    │
  │ charCodeAt │ .charCodeAt(9) │ 87                                     │
  │ length     │ .length        │ 18                                     │
  └────────────┴────────────┴──────────────────────────────────────────┘


12. COMPLETE INDEXING TABLE: "Test: FAIL. Retry: FAIL."
--------------------------------------------------------

  String:  T   e   s   t   :       F   A   I   L   .       R   e   t   r   y   :       F   A   I   L   .
           ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓
  Index:   0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23

  Key positions:
    - "FAIL" (first)  →  starts at index 6, ends at 9
    - "FAIL" (second) →  starts at index 19, ends at 22
    - "Retry"         →  starts at index 12

  ┌──────────────────┬─────────────────────┬──────────────────────────────────────────┐
  │ Method           │ Call                │ Result                                   │
  ├──────────────────┼─────────────────────┼──────────────────────────────────────────┤
  │ replace          │ .replace("FAIL","X")│ "Test: X. Retry: FAIL."                  │
  │                  │ (first only)        │                                          │
  ├──────────────────┼─────────────────────┼──────────────────────────────────────────┤
  │ replaceAll       │ .replaceAll("FAIL","X")│ "Test: X. Retry: X."                  │
  ├──────────────────┼─────────────────────┼──────────────────────────────────────────┤
  │ replace (regex g)│ .replace(/FAIL/g,"X")│ "Test: X. Retry: X."                  │
  ├──────────────────┼─────────────────────┼──────────────────────────────────────────┤
  │ indexOf("FAIL")  │ .indexOf("FAIL")    │ 6                                        │
  │ lastIndexOf("FAIL")│ .lastIndexOf("FAIL")│ 19                                     │
  │ includes("FAIL") │ .includes("FAIL")   │ true                                     │
  └──────────────────┴─────────────────────┴──────────────────────────────────────────┘


13. PRACTICAL EXAMPLES
-----------------------

  Example 1: Clean user input
    let userInput = "  Pramod  ";
    let clean = userInput.trim().toLowerCase();
    console.log(clean);  // "pramod"

  Example 2: Format a date string
    let parts = ["2024", "03", "07"];
    let date = parts.join("-");
    console.log(date);  // "2024-03-07"

  Example 3: Parse CSV-like data
    let csv = "pass,fail,skip,pass";
    let results = csv.split(",");
    console.log(results);  // ["pass", "fail", "skip", "pass"]

  Example 4: Replace multiple spaces with single space
    let messy = "hello    world   !";
    let clean = messy.replace(/\s+/g, " ");
    console.log(clean);  // "hello world !"

  Example 5: Build a file path
    let folder = "screenshots";
    let testName = "login_test";
    let ext = "png";
    let path = `${folder}/${testName}.${ext}`;
    console.log(path);  // "screenshots/login_test.png"

  Example 6: Convert snake_case to Title Case
    let snake = "test_login_pass";
    let title = snake.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    console.log(title);  // "Test Login Pass"

  Example 7: Mask sensitive data
    let card = "1234567890123456";
    let masked = card.slice(0, 4) + " **** **** " + card.slice(-4);
    console.log(masked);  // "1234 **** **** 3456"

  Example 8: Count occurrences using split trick
    let text = "the quick brown fox jumps over the lazy dog";
    let count = text.split("the").length - 1;
    console.log(count);  // 2


================================================================================
                    KEY TAKEAWAY
================================================================================

  toUpperCase() / toLowerCase()  →  Change case (returns new string)
  trim() / trimStart() / trimEnd() →  Remove whitespace (returns new string)
  replace()                      →  Replace FIRST match (or regex with g)
  replaceAll()                   →  Replace ALL matches
  + / concat() / template        →  Combine strings (prefer template literals)
  split()                        →  String → Array (divide)
  join()                         →  Array → String (combine)

  REMEMBER:
    - String methods NEVER mutate the original — they always return new strings.
    - split() and join() are opposites: split on strings, join on arrays.
    - For multiple replacements, use replaceAll() or replace() with /g regex.
    - Template literals are the modern standard for string building.

================================================================================
*/
