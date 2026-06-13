const ENV = {
    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 5000,
    RETRIES: 2,
    BROWSER: "Chrome"
}

const EXPECTED_RESPONSE = {
    status: 200,
    body: {
        user: { role: "admin", active: true }
    }
}

const config = {
    // Base URLs
    baseUrl: 'http://localhost:3000',
    apiBaseUrl: 'http://localhost:3000/api',

    testUser: {
        username: 'testuser@example.com',
        password: 'SecurePass123',
    },

    // Logging
    logLevel: 'INFO',

    // Retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
};


console.log("ENV:", ENV);
console.log("Expected Response:", EXPECTED_RESPONSE);
console.log("Config:", config);


/*
================================================================================
                    DETAILED EXPLANATION: REAL-WORLD OBJECTS
================================================================================

1. ENVIRONMENT CONFIGURATION OBJECTS
-------------------------------------
  Objects are commonly used to store application configuration and environment
  settings. This keeps related settings organized and accessible.

  From file:
    const ENV = {
        BASE_URL: "https://staging.myapp.com",
        TIMEOUT: 5000,
        RETRIES: 2,
        BROWSER: "Chrome"
    };

  Why use SCREAMING_SNAKE_CASE?
    - Indicates constants (values that shouldn't change during runtime).
    - Follows convention for environment variables.
    - Makes them visually distinct from regular variables.

  Common ENV Properties:
    - BASE_URL: API or application base URL
    - TIMEOUT: Request timeout in milliseconds
    - RETRIES: Number of retry attempts for failed requests
    - BROWSER: Target browser for testing
    - ENV: Environment name (staging, production, dev)

  Access:
    ENV.BASE_URL     →  "https://staging.myapp.com"
    ENV.TIMEOUT      →  5000
    ENV.BROWSER      →  "Chrome"


2. EXPECTED RESPONSE OBJECTS
-----------------------------
  In test automation, objects define the expected structure and values of API
  responses. This enables easy assertion and validation.

  From file:
    const EXPECTED_RESPONSE = {
        status: 200,
        body: {
            user: { role: "admin", active: true }
        }
    };

  Structure:
    EXPECTED_RESPONSE.status        → 200 (HTTP status code)
    EXPECTED_RESPONSE.body          → { user: { role: "admin", active: true } }
    EXPECTED_RESPONSE.body.user       → { role: "admin", active: true }
    EXPECTED_RESPONSE.body.user.role  → "admin"

  Visual:

  EXPECTED_RESPONSE:
  ┌─────────────────────────────────────────┐
  │  status: 200                            │
  │  body: {                                │
  │    user: {                              │
  │      role: "admin",                     │
  │      active: true                      │
  │    }                                     │
  │  }                                       │
  └─────────────────────────────────────────┘
       ↓
  Nested path: body.user.role → "admin"

  Nested objects allow representing complex data structures naturally.


3. TEST CONFIGURATION OBJECTS
------------------------------
  Objects are used to define test configurations, user credentials, logging
  settings, and retry logic.

  From file:
    const config = {
        baseUrl: 'http://localhost:3000',
        apiBaseUrl: 'http://localhost:3000/api',
        testUser: {
            username: 'testuser@example.com',
            password: 'SecurePass123',
        },
        logLevel: 'INFO',
        retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
    };

  Key Features:
    - Nested objects: testUser is an object inside config.
    - Dynamic values: retryCount is computed from environment variable.
    - Fallback values: || '3' provides default if env var is missing.
    - parseInt with radix: parseInt(..., 10) ensures base-10 parsing.

  Access Patterns:
    config.baseUrl                          → "http://localhost:3000"
    config.testUser.username                 → "testuser@example.com"
    config.testUser.password                 → "SecurePass123"
    config.retryCount                        → 3 (or env var value)

  Visual:

  config:
  ┌─────────────────────────────────────────┐
  │  baseUrl: "http://localhost:3000"       │
  │  apiBaseUrl: "http://localhost:3000/api"│
  │  testUser: {                            │
  │    username: "testuser@example.com",    │
  │    password: "SecurePass123"            │
  │  }                                       │
  │  logLevel: "INFO"                       │
  │  retryCount: 3                          │
  └─────────────────────────────────────────┘


4. COMPARISON TABLE: REAL-WORLD OBJECT PATTERNS
------------------------------------------------

┌─────────────────────┬──────────────────────────┬──────────────────────────┐
│ Pattern             │ Example                  │ Use Case                 │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ ENV constants       │ ENV.BASE_URL             │ Global app settings      │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Expected response   │ EXPECTED_RESPONSE.status │ API test assertions      │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Test config         │ config.testUser          │ Test setup, credentials  │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Nested objects      │ body.user.role           │ Complex data structures  │
├─────────────────────┼──────────────────────────┼──────────────────────────┤
│ Dynamic values      │ process.env.RETRY_COUNT  │ Environment-specific     │
└─────────────────────┴──────────────────────────┴──────────────────────────┘


5. COMPLETE INDEXING / MAPPING TABLE
-------------------------------------

  Object: ENV

  ┌─────────────────────┬─────────────────────────┐
  │ Key                 │ Value                   │
  ├─────────────────────┼─────────────────────────┤
  │ BASE_URL            │ "https://staging.myapp.com"│
  │ TIMEOUT             │ 5000                    │
  │ RETRIES             │ 2                       │
  │ BROWSER             │ "Chrome"                │
  └─────────────────────┴─────────────────────────┘

  Object: EXPECTED_RESPONSE

  ┌─────────────────────┬─────────────────────────┐
  │ Path                │ Value                   │
  ├─────────────────────┼─────────────────────────┤
  │ .status             │ 200                     │
  │ .body               │ { user: {...} }         │
  │ .body.user          │ { role: "admin",        │
  │                     │   active: true }         │
  │ .body.user.role     │ "admin"                 │
  │ .body.user.active   │ true                    │
  └─────────────────────┴─────────────────────────┘

  Object: config

  ┌─────────────────────┬─────────────────────────┐
  │ Path                │ Value                   │
  ├─────────────────────┼─────────────────────────┤
  │ .baseUrl            │ "http://localhost:3000" │
  │ .apiBaseUrl         │ "http://localhost:3000/api"│
  │ .testUser           │ { username, password }  │
  │ .testUser.username  │ "testuser@example.com"  │
  │ .testUser.password  │ "SecurePass123"         │
  │ .logLevel           │ "INFO"                  │
  │ .retryCount         │ 3 (or env value)        │
  └─────────────────────┴─────────────────────────┘

  Nested Structure Map:

  config
  ├── baseUrl: "http://localhost:3000"
  ├── apiBaseUrl: "http://localhost:3000/api"
  ├── testUser
  │   ├── username: "testuser@example.com"
  │   └── password: "SecurePass123"
  ├── logLevel: "INFO"
  └── retryCount: 3

  EXPECTED_RESPONSE
  ├── status: 200
  └── body
      └── user
          ├── role: "admin"
          └── active: true


6. PRACTICAL EXAMPLES
----------------------

  Example 1: Assert API response
    function assertResponse(actual, expected) {
        return actual.status === expected.status &&
               actual.body.user.role === expected.body.user.role;
    }
    assertResponse(apiResult, EXPECTED_RESPONSE);  // true/false

  Example 2: Build URL from config
    const url = `${config.baseUrl}/api/users`;
    console.log(url);  // "http://localhost:3000/api/users"

  Example 3: Log with config level
    function log(message, level = "INFO") {
        const levels = { DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 };
        if (levels[level] >= levels[config.logLevel]) {
            console.log(`[${level}] ${message}`);
        }
    }
    log("Test started", "INFO");  // Prints
    log("Debug info", "DEBUG");   // Skipped (INFO level filters DEBUG)

  Example 4: Retry logic with config
    async function runWithRetry(fn) {
        for (let i = 0; i < config.retryCount; i++) {
            try {
                return await fn();
            } catch (e) {
                if (i === config.retryCount - 1) throw e;
            }
        }
    }

  Example 5: Environment-specific config
    const environments = {
        staging: { baseUrl: "https://staging.myapp.com", timeout: 5000 },
        production: { baseUrl: "https://myapp.com", timeout: 10000 }
    };
    const env = process.env.ENV || "staging";
    const currentEnv = environments[env];
    console.log(currentEnv.baseUrl);

  Example 6: Merge default and custom config
    const defaults = { timeout: 3000, retries: 2, browser: "chrome" };
    const custom = { timeout: 5000, browser: "firefox" };
    const finalConfig = { ...defaults, ...custom };
    console.log(finalConfig);
    // { timeout: 5000, retries: 2, browser: "firefox" }


================================================================================
                    KEY TAKEAWAY
================================================================================

  1. Objects are ideal for grouping related configuration settings.
  2. Use SCREAMING_SNAKE_CASE for constant/ENV objects.
  3. Nest objects to represent complex, hierarchical data structures.
  4. Use process.env for environment-specific values with fallback defaults.
  5. Always use parseInt(x, 10) when converting env strings to numbers.
  6. Objects make API response validation and test configuration clean.
  7. Merge configs with spread: { ...defaults, ...overrides }.
  8. Objects are the standard pattern for settings, credentials, and expected data.

================================================================================
*/
