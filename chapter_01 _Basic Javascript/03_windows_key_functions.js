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