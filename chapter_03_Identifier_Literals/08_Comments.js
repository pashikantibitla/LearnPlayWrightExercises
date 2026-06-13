/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Types of comments in JavaScript and how the engine ignores them during execution.
 *
 * Functions/Methods Used:
 *   - (No functions or built-in methods are called in this file.)
 *
 * Keywords Used:
 *   - var (keyword)
 *     Description: Declares a variable and initializes it to a value.
 *     Input: Requires an identifier (variable name) and optionally an initial value assignment.
 *     Return Type: void (undefined) — the declaration itself does not return a value.
 *
 * Key Concepts:
 *   - Single-line Comments: Created with //; everything after the slashes on the same line is ignored by the interpreter.
 *   - Multi-line Comments: Created with /* */; allows comments to span multiple lines.
 *   - JSDoc-style Comments: Created with /** */; a documentation convention often used to describe code for documentation generators.
 *   - Commented-out Code: Existing code can be temporarily disabled by turning it into a comment without deleting it.
 * ============================================================
 */

// This is sinle comment this will be ignore 
// this line will be not executed


/*
 *  This is multi line
 *  Author : Prrmmod Dutta
 *  Date : 14-Feb-2026
 */

/**
 *  This is multi line
 *  Author : Prrmmod Dutta
 *  Date : 14-Feb-2026
 **/

// var g = 10;

// this adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
// this              adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
//          this adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
//           this adjasdasdsa
// this adjasdasdsa
// this         adjasdasdsa
// this adjasdasdsa
// this adjasdasdsa
// this          adjasdasdsa
// this adjasdasdsa

var a = 10

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file is a masterclass in JavaScript comments. Comments are
annotations meant for human readers; the JavaScript engine
completely ignores them during execution. The script demonstrates
three comment styles: single-line (//), multi-line (slash-star to
star-slash), and JSDoc-style (double-asterisk). It also shows
that entire lines of code can be "commented out" to disable them
without deleting them, which is a common debugging technique.

CODE BREAKDOWN:
Step 1: // This is sinle comment this will be ignore
        - Single-line comment. Everything after // on the same
          line is ignored by the interpreter.

Step 2: /*  This is multi line ... star-slash
        - Multi-line comment block. Starts with slash-star and
          ends with star-slash. Can span many lines.

Step 3: /**  This is multi line ... double-star-slash
        - JSDoc-style comment. Uses double asterisks at start.
          Used by documentation generators to build API docs.

Step 4: // var g = 10;
        - An entire statement is commented out, disabling it.

Step 5: Multiple // lines with random text.
        - Demonstrates that comments can contain anything.

Step 6: var a = 10
        - The only executable line in the file; creates a variable.

KEY CONCEPTS:
- Comment: Text ignored by the engine; used for explanation.
- Single-line comment: // ... (best for short notes).
- Multi-line comment: slash-star ... star-slash (best for long
  explanations and disabling blocks).
- JSDoc comment: double-asterisk block (best for function docs).
- Commenting out: Temporarily disabling code by turning it into
  a comment.

COMPARISON TABLE: Comment Types
| Type            | Syntax               | Best For                          |
|-----------------|----------------------|-----------------------------------|
| Single-line     | //                   | Short notes, inline explanations  |
| Multi-line      | /* ... star-slash    | Paragraphs, disabling code blocks |
| JSDoc           | /** ... star-slash    | Function docs, type annotations   |

REAL-WORLD USE CASES:
- Adding a TODO note above a tricky function so teammates know
  it needs refactoring later.
- Temporarily disabling a failing test by commenting it out
  while fixing the underlying bug.
- Generating HTML documentation from JSDoc comments in a large
  codebase.

COMMON MISTAKES TO AVOID:
- Nesting multi-line comments, which causes a syntax error
  because the first star-slash closes the outer block.
- Leaving large blocks of commented-out code in production;
  it clutters the file and confuses version control.
- Writing comments that merely restate the obvious (e.g.,
  "increment i" next to i++). Comments should explain WHY,
  not WHAT.

KEY TAKEAWAY:
Comments are communication tools for developers. Use them to
explain intent, document complex logic, and safely disable code
during debugging, but keep them meaningful and up-to-date.
*/