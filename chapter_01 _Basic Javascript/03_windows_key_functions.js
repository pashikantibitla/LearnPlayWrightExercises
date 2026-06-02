/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Accessing Node.js process environment information
 *
 * Functions/Methods Used:
 *   - console.log(message: any, ...optionalParams: any[]): void
 *     Description: Outputs the provided value(s) to the console/stdout.
 *     Input: Accepts any data types as direct values, variables, or expressions,
 *            including multiple optional parameters.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Built-in Keywords/Methods Used:
 *   - process.platform: string
 *     Description: Returns a string identifying the operating system platform
 *                  on which the Node.js process is running (e.g., 'darwin', 'win32', 'linux').
 *     Input: No input required; accessed as a property on the global process object.
 *     Return Type: string — the name of the operating system platform.
 *   - process.arch: string
 *     Description: Returns a string identifying the CPU architecture for which
 *                  the Node.js binary was compiled (e.g., 'x64', 'arm64').
 *     Input: No input required; accessed as a property on the global process object.
 *     Return Type: string — the CPU architecture identifier.
 *   - process.version: string
 *     Description: Returns the Node.js version string (e.g., 'v24.13.1').
 *     Input: No input required; accessed as a property on the global process object.
 *     Return Type: string — the Node.js runtime version.
 *
 * Key Concepts:
 *   - process object: A global that provides information about the current Node.js process.
 *   - Platform Detection: Determining OS type at runtime using process.platform.
 *   - Architecture Detection: Checking CPU architecture using process.arch.
 *   - Version Inspection: Reading the Node.js runtime version using process.version.
 * ============================================================
 */

console.log(process.platform);

// MAC - DARWIN
// WINDOWS - WIN32
// LINUX - LINUX

console.log(process.arch);
// x64
// arm64

console.log("Node Version:", process.version);  //Node Version: v24.13.1

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This script demonstrates how to access built-in environment
information in Node.js through the global 'process' object.
Unlike browser JavaScript, which has a 'window' object, Node.js
exposes 'process' to give scripts details about the operating
system, CPU architecture, and the runtime version. This is
essential for writing cross-platform tools and debugging
environment-specific issues.

CODE BREAKDOWN:
Step 1: console.log(process.platform);
        - Accesses process.platform which returns a string such
          as 'win32', 'darwin', or 'linux'.
        - The inline comments remind developers what each value
          means.

Step 2: console.log(process.arch);
        - Reads the CPU architecture the Node.js binary was
          compiled for (e.g., 'x64', 'arm64').

Step 3: console.log("Node Version:", process.version);
        - Retrieves the Node.js version string (e.g., 'v24.13.1').
        - A descriptive label is printed alongside it for clarity.

KEY CONCEPTS:
- process: A global object in Node.js providing process info.
- process.platform: OS identifier string.
- process.arch: CPU architecture identifier.
- process.version: Node.js runtime version.
- Global object: An object always available without importing.

COMPARISON TABLE: Browser vs Node.js Global Objects
| Property / Need          | Browser (window)          | Node.js (process)         |
|--------------------------|---------------------------|---------------------------|
| OS platform              | navigator.userAgent       | process.platform          |
| CPU architecture         | navigator.platform (deprecated) | process.arch        |
| JavaScript engine version| navigator.userAgent       | process.version           |
| Global object name         | window                    | global / globalThis       |

REAL-WORLD USE CASES:
- A build script that adjusts file paths based on process.platform
  (Windows uses backslashes; macOS/Linux use forward slashes).
- Logging the Node.js version in CI/CD pipelines to debug version-
  specific failures.
- Shipping different native binaries depending on process.arch.

COMMON MISTAKES TO AVOID:
- Trying to use 'process' inside a browser script without a polyfill;
  it will throw a ReferenceError because browsers do not define it.
- Confusing process.version (Node.js version) with process.versions
  (detailed versions of V8, libuv, etc.).
- Hard-coding platform checks like 'win32' without remembering that
  Windows may also report 'win64' in some contexts.

KEY TAKEAWAY:
The process object is your window into the Node.js runtime
environment. Learning to read platform, architecture, and version
information lets you build robust scripts that adapt to where
they are running.
*/