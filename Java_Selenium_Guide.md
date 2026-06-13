# Java & Selenium Complete Learning Guide
## Core Java | OOP | Selenium WebDriver | TestNG | Cucumber BDD | API Testing | Maven
### Comprehensive Reference with Detailed Theory, Diagrams, Code Examples, and Interview Questions

**Generated:** 2026-06-03

---

## Table of Contents

### Part 1: Core Java
1. JDK, JRE, and JVM Architecture
2. Java Identifiers, Keywords, and Naming Conventions
3. Java Commands (javac, java, javap, javadoc, etc.)
4. Object, Class, and Package
5. Variables (Local, Class/Static, Instance)
6. Fields and Methods
7. Datatypes and Java Literals
8. Escape Sequence Characters
9. Casting (Implicit and Explicit)
10. Operators (Assignment, Relational, Arithmetic, Conditional, Logical, Bitwise, Instanceof)
11. Comments (Single Line, Multi Line)
12. Control Statements
13. Modifiers (Access and Non-Access)
14. OOPS Concepts
15. String Handling
16. Assertion
17. Thread & Concurrency
18. Exception Handling
19. Nested Classes
20. Serialization and Deserialization
21. Important Packages
22. Object Class and Its Methods
23. Regular Expressions
24. Collections Framework
25. Cloning, Reflection, Class Loaders
26. I/O and NIO API, RMI, Generics
27. Enum Types, Data Formatting, Resource Bundles, Annotations
28. Memory Management
29. JDBC, GUI (Swing, AWT, Applet)
30. Lambda Expressions and Java 7/8/9 New Features

### Part 2: Selenium WebDriver
1. What is Selenium?
2. What is Selenium WebDriver?
3. Selenium WebDriver Architecture
4. What is a WebElement?
5. How Selenium WebDriver Works
6. How to Find Elements
7. What is findElement()
8. Selenium Methods (Browser, Navigation, WebElement, Window, Alert, Frame, Wait)
9. close() vs quit()
10. Why Wait Statements are Required
11. Beginners' Common Mistakes and Tips
12. Conclusion

### Part 3: Selenium Automation for API Testing
1. Introduction to API Testing
2. REST vs SOAP
3. HTTP Methods and Status Codes
4. RestAssured Library
5. JSON and XML Parsing
6. Authentication Mechanisms
7. Data-Driven API Testing

### Part 4: Selenium with Java - BDD Framework (Cucumber)
1. Introduction to BDD
2. Gherkin Syntax
3. Feature Files
4. Step Definitions (Glue Code)
5. Runner Classes
6. Hooks and Tags
7. DataTables and Scenario Outlines
8. Page Object Model with Cucumber

### Part 5: Selenium with Java - TestNG Framework
1. Introduction to TestNG
2. TestNG Annotations
3. Parameters and @DataProvider
4. Assertions and Reporting
5. Parallel Execution
6. Listeners
7. Suite Configuration (testng.xml)
8. Integration with Selenium Page Object Model

---



## Part 1: Core Java - 1. JDK, JRE, and JVM Architecture

### Detailed Theoretical Explanation

Java achieves platform independence through a sophisticated three-layer architecture consisting of the Java Development Kit (JDK), Java Runtime Environment (JRE), and Java Virtual Machine (JVM). Understanding this architecture is fundamental to mastering Java because it explains how Java code written on one operating system can execute seamlessly on any other operating system without modification. The JDK is the complete software development environment used by developers to write, compile, debug, and run Java applications. It encompasses the entire JRE plus additional development tools such as the Java compiler (javac), the Java debugger (jdb), the Java documentation generator (javadoc), the archiver tool (jar), and the class file disassembler (javap). Without the JDK, developers cannot compile Java source code into bytecode.

The JRE, on the other hand, is the runtime environment required to execute Java applications. It includes the JVM itself, along with the core Java class libraries (such as java.lang, java.util, java.io), property files, and other supporting configuration files. End-users who only need to run Java applications need the JRE, not the full JDK. The JRE sits on top of the operating system and provides the libraries and components that Java applications need during execution.

The JVM is the heart of Java's platform independence. It is an abstract computing machine that enables a computer to run Java programs as well as programs written in other languages that compile to Java bytecode. When you compile a .java file using javac, the compiler generates a .class file containing platform-neutral bytecode. The JVM reads this bytecode and translates it into native machine code specific to the host operating system through its execution engine. The execution engine contains an interpreter that reads bytecode instructions one by one, and a Just-In-Time (JIT) compiler that converts frequently executed bytecode segments into native machine code for improved performance. The JVM also manages memory automatically through its Garbage Collector (GC), which identifies and removes objects that are no longer reachable by the application, thereby preventing memory leaks.

### Memory Allocation Diagram

```
+-------------------------------------------------------------+
|                         JDK                                 |
|  +-----------------------------------------------------+  |
|  |                     JRE                               |  |
|  |  +-----------------------------------------------+  |  |
|  |  |                    JVM                          |  |  |
|  |  |  +------------------+ +--------------------+  |  |  |
|  |  |  |   ClassLoader    | |  Runtime Memory    |  |  |  |
|  |  |  |  +------------+  | |  +--------------+  |  |  |  |
|  |  |  |  | Loading    |  | |  | Method Area  |  |  |  |  |
|  |  |  |  | Linking    |  | |  | Heap         |  |  |  |  |
|  |  |  |  | Initialize |  | |  | Stack        |  |  |  |  |
|  |  |  |  +------------+  | |  | PC Registers |  |  |  |  |
|  |  |  +------------------+ |  | Native Method|  |  |  |  |
|  |  |                     | |  +--------------+  |  |  |  |
|  |  |  +------------------+ +--------------------+  |  |  |
|  |  |  | Execution Engine |                        |  |  |
|  |  |  | +--------------+ |                        |  |  |
|  |  |  | | Interpreter  | |                        |  |  |
|  |  |  | | JIT Compiler | |                        |  |  |
|  |  |  | | Garbage Col. | |                        |  |  |
|  |  |  | +--------------+ |                        |  |  |
|  |  |  +------------------+                        |  |  |
|  |  +-----------------------------------------------+  |  |
|  |  Development Tools: javac, javadoc, jar, jdb, javap |  |
|  +-----------------------------------------------------+  |
+-------------------------------------------------------------+
         |                |                |
    [Windows]        [Linux]         [macOS]
```

### Flow Chart: Java Program Execution

```
+-----------+     +-----------+     +-------------+     +------------+
| Write     | --> | Compile   | --> | Bytecode    | --> | JVM Loads  |
| .java file|     | javac     |     | .class file |     | Class      |
+-----------+     +-----------+     +-------------+     +------------+
                                                              |
                                                              v
+------------+     +-------------+     +----------+     +------------+
| Output     | <-- | Execute     | <-- | JIT/     | <-- | Verify &   |
| Result     |     | Native Code |     | Interpret|     | Link       |
+------------+     +-------------+     +----------+     +------------+
```

### Example Code

```java
// Program to demonstrate JDK, JRE, JVM concepts via Runtime class
public class JDKArchitectureDemo {
    public static void main(String[] args) {
        // Get the Java Runtime Environment details
        Runtime runtime = Runtime.getRuntime();
        
        // Display Java version (part of JDK/JRE)
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("Java Vendor: " + System.getProperty("java.vendor"));
        System.out.println("Java Home (JRE Path): " + System.getProperty("java.home"));
        
        // Memory management via JVM
        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        long maxMemory = runtime.maxMemory();
        
        System.out.println("
--- JVM Memory Management ---");
        System.out.println("Total Memory (bytes): " + totalMemory);
        System.out.println("Free Memory (bytes): " + freeMemory);
        System.out.println("Max Memory (bytes): " + maxMemory);
        System.out.println("Used Memory (bytes): " + (totalMemory - freeMemory));
        
        // Demonstrate Garbage Collection
        System.out.println("
--- Triggering Garbage Collection ---");
        for(int i = 0; i < 10000; i++) {
            String temp = new String("TemporaryObject" + i);
        }
        System.out.println("Memory before GC: " + (runtime.totalMemory() - runtime.freeMemory()));
        runtime.gc();
        System.out.println("Memory after GC: " + (runtime.totalMemory() - runtime.freeMemory()));
        
        // Demonstrate compilation check (JDK functionality)
        System.out.println("
--- Compilation Info ---");
        System.out.println("Compiler name: " + System.getProperty("java.compiler"));
        System.out.println("JVM implementation: " + System.getProperty("java.vm.name"));
    }
}
```

### Interview Questions
- **Q: What is the difference between JDK and JRE?**
  **A:** JDK is for development (includes compiler javac); JRE is for execution only (includes JVM + libraries).
- **Q: Is JVM platform-independent?**
  **A:** No, JVM itself is platform-dependent, but Java bytecode is platform-independent.
- **Q: What does Write Once, Run Anywhere mean?**
  **A:** Java bytecode can run on any OS that has a compatible JVM.
- **Q: What is JIT compilation?**
  **A:** JIT converts frequently executed bytecode to native machine code at runtime for speed.


---


## 2. Java Identifiers, Keywords, and Naming Conventions

### Detailed Theoretical Explanation

Java identifiers are the names given to various program elements such as classes, methods, variables, packages, and interfaces. An identifier must begin with a letter (A-Z, a-z), currency character ($), or underscore (_), and subsequent characters can include digits (0-9). Java is a case-sensitive language, meaning that `myVariable` and `MyVariable` are treated as completely distinct identifiers. Identifiers cannot contain spaces, cannot start with a digit, and cannot be the same as reserved keywords. Choosing meaningful and descriptive identifiers is a critical best practice in software development because it significantly improves code readability and maintainability.

Java keywords are reserved words that have predefined meanings in the language syntax. These words cannot be used as identifiers. There are approximately 50 reserved keywords in Java, including primitive type declarations (byte, short, int, long, float, double, char, boolean), control flow statements (if, else, switch, case, while, do, for, break, continue, return), access modifiers (public, private, protected), and object-oriented programming keywords (class, interface, extends, implements, abstract, final, static, synchronized, volatile). Additionally, there are literals like true, false, and null that are treated as reserved words.

Java Naming Conventions provide standardized guidelines for naming different program elements. Class and interface names should begin with an uppercase letter and use CamelCase (e.g., EmployeeDetails, ArrayList). Method and variable names should begin with a lowercase letter and use camelCase (e.g., calculateSalary, employeeName). Constants should be all uppercase with underscores separating words (e.g., MAX_SIZE, PI_VALUE). Package names should be all lowercase and typically follow reverse domain name notation (e.g., com.company.project.module). Adhering to these conventions ensures consistency across Java projects and makes it easier for teams to collaborate.

### Flow Chart: Identifier Validation

```
+-----------+     +--------------------+     +------------------+
| Start     | --> | Is first char      | -->| Is it letter, $, |
|           |     | valid?             |    | or _ ?           |
+-----------+     +--------------------+    +------------------+
                      | No                        | Yes
                      v                           v
                 +----------+              +------------------+
                 | Invalid  |              | Check remaining  |
                 | Identifier|             | chars: letters,  |
                 +----------+              | digits, $, _     |
                                         +------------------+
                                                |
                                                v
                                         +------------------+
                                         | Is it a keyword? |
                                         +------------------+
                                                |
                                     +----------+----------+
                                     | Yes                 | No
                                     v                     v
                                +----------+         +----------+
                                | Invalid  |         | Valid    |
                                | Identifier|        | Identifier|
                                +----------+         +----------+
```

### Example Code

```java
// Demonstrating valid identifiers, keywords usage, and naming conventions
public class IdentifierNamingConventionDemo {
    // Constant naming convention: ALL_UPPERCASE_WITH_UNDERSCORE
    public static final int MAX_ARRAY_SIZE = 100;
    public static final double PI_VALUE = 3.14159;
    
    // Variable naming convention: camelCase starting with lowercase
    private String employeeName;
    private int employeeAge;
    private double salaryAmount;
    
    // Class naming convention: PascalCase starting with uppercase
    public IdentifierNamingConventionDemo() {
        this.employeeName = "John Doe";
        this.employeeAge = 30;
        this.salaryAmount = 50000.00;
    }
    
    // Method naming convention: camelCase starting with lowercase
    public void displayEmployeeInformation() {
        System.out.println("Employee Name: " + this.employeeName);
        System.out.println("Employee Age: " + this.employeeAge);
        System.out.println("Salary: " + this.salaryAmount);
    }
    
    public boolean validateEmployeeAge(int age) {
        // Using keywords: if, else, return
        if(age >= 18 && age <= 65) {
            return true;
        } else {
            return false;
        }
    }
    
    public static void main(String[] args) {
        // Valid identifiers with $ and _
        int _temporaryValue = 10;
        double $price = 99.99;
        String myVar123 = "Test123";
        
        // Create object
        IdentifierNamingConventionDemo demo = new IdentifierNamingConventionDemo();
        demo.displayEmployeeInformation();
        
        // Using constants
        System.out.println("
Constants:");
        System.out.println("Max Size: " + MAX_ARRAY_SIZE);
        System.out.println("PI: " + PI_VALUE);
        
        // Validate age
        int testAge = 25;
        boolean isValid = demo.validateEmployeeAge(testAge);
        System.out.println("
Is age " + testAge + " valid? " + isValid);
        
        // Display valid identifiers
        System.out.println("
Valid Identifiers Used:");
        System.out.println("_temporaryValue = " + _temporaryValue);
        System.out.println("$price = " + $price);
        System.out.println("myVar123 = " + myVar123);
    }
}
```

### Interview Questions
- **Q: Can we use a number as the first character of an identifier?**
  **A:** No, identifiers must begin with a letter, $, or _.
- **Q: Is Java case-sensitive?**
  **A:** Yes, `myVar` and `MyVar` are different identifiers.
- **Q: What is the convention for naming constants in Java?**
  **A:** ALL_UPPERCASE with underscores, e.g., MAX_VALUE.


---


## 3. Java Commands (javac, java, javap, javadoc, jar, jmap, jhat, jinfo, jconsole, jstat)

### Detailed Theoretical Explanation

The Java Development Kit provides a rich set of command-line tools that developers use throughout the software development lifecycle. The javac command is the Java compiler that transforms human-readable .java source files into platform-independent .class bytecode files. It performs lexical analysis, parsing, type checking, and code generation. The javac tool supports numerous flags such as -d to specify the destination directory for compiled classes, -classpath to specify where to find user class files, and -sourcepath to specify where to find input source files.

The java command launches Java applications. It starts the JVM, loads the specified class, and invokes its main method. The java command supports flags like -classpath (or -cp) to set the class path, -Xmx and -Xms to configure heap memory sizes, and numerous other options for debugging and performance tuning. The javap command is the class file disassembler that displays information about the fields, constructors, and methods present in compiled class files. It is particularly useful for understanding what the compiler generated and for verifying that abstract methods are properly declared.

The javadoc tool generates API documentation in HTML format from specially formatted comments in source code. It parses documentation comments (/** ... */) and produces structured web pages. The jar command creates and manages Java Archive files, which package multiple class files, metadata, and resources into a single compressed file using the ZIP format. JAR files simplify distribution and deployment of Java applications.

For monitoring and diagnostics, the JDK provides several tools. jconsole provides a graphical console for monitoring JVM performance metrics including memory usage, thread activity, and loaded classes. jstat displays statistics about the JVM's garbage collection, class loading, and JIT compilation. jmap generates heap dump snapshots that can be analyzed offline. jhat is the Heap Analysis Tool that reads heap dumps and provides a web-based interface for browsing object allocations. jinfo prints configuration information for a given process. These tools are essential for troubleshooting memory leaks, performance bottlenecks, and application crashes in production environments.

### Flow Chart: Java Command Execution Flow

```
+----------+    +----------+    +------------+    +----------+
| Write    | -> | javac    | -> | Generate   | -> | java     |
| .java    |    | Compile  |    | .class     |    | Execute  |
+----------+    +----------+    +------------+    +----------+
     |                              |                  |
     v                              v                  v
+----------+                 +------------+      +----------+
| javadoc  |                 | javap      |      | jconsole |
| Generate |                 | Disassemble|      | Monitor  |
| HTML     |                 | bytecode   |      | JVM      |
+----------+                 +------------+      +----------+
```

### Example Code

```java
// Compile and run demonstration class
public class JavaCommandsDemo {
    private String applicationName;
    private int versionNumber;
    
    public JavaCommandsDemo(String name, int version) {
        this.applicationName = name;
        this.versionNumber = version;
    }
    
    public void displayApplicationInfo() {
        System.out.println("Application: " + applicationName);
        System.out.println("Version: " + versionNumber);
    }
    
    /**
     * Calculates the factorial of a given number.
     * @param n The number to calculate factorial for.
     * @return The factorial result.
     */
    public long calculateFactorial(int n) {
        if(n < 0) {
            throw new IllegalArgumentException("Number must be non-negative");
        }
        long result = 1;
        for(int i = 2; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    
    public static void main(String[] args) {
        JavaCommandsDemo app = new JavaCommandsDemo("JavaCommandsDemo", 1);
        app.displayApplicationInfo();
        
        System.out.println("
Factorial calculations:");
        for(int i = 1; i <= 10; i++) {
            System.out.println(i + "! = " + app.calculateFactorial(i));
        }
        
        // Display JVM information at runtime
        Runtime runtime = Runtime.getRuntime();
        System.out.println("
JVM Information:");
        System.out.println("Available Processors: " + runtime.availableProcessors());
        System.out.println("Free Memory: " + runtime.freeMemory() + " bytes");
        System.out.println("Total Memory: " + runtime.totalMemory() + " bytes");
    }
}
```

**Command-line usage:**
```bash
# Compile with javac
javac -d . JavaCommandsDemo.java

# Run with java
java -cp . JavaCommandsDemo

# Generate documentation
javadoc -d docs JavaCommandsDemo.java

# Disassemble class
javap -c JavaCommandsDemo

# Create JAR
jar cvf JavaCommandsDemo.jar JavaCommandsDemo.class

# Monitor JVM
jconsole
```

### Interview Questions
- **Q: What is the difference between javac and java commands?**
  **A:** javac compiles .java to .class; java runs the .class file.
- **Q: What does javap do?**
  **A:** It disassembles .class files to show fields, methods, and bytecode.
- **Q: How do you create a JAR file?**
  **A:** Using the jar command: jar cvf filename.jar files...


---


## 4. Object, Class, and Package

### Detailed Theoretical Explanation

In Java, a class is a blueprint or template that defines the structure and behavior of objects. It encapsulates data members (fields/variables) and member functions (methods) into a single unit. A class represents a user-defined data type that determines what an object will contain and how it will behave. For example, a Car class might define fields like color, model, and speed, and methods like accelerate() and brake(). Classes enable code reusability through inheritance and promote encapsulation by hiding internal implementation details.

An object is an instance of a class. While a class is an abstract concept, an object is a concrete entity that occupies memory and has a state and behavior. When you create an object using the new keyword, the JVM allocates memory on the heap for that object, initializes its fields, and returns a reference to it. Multiple objects can be created from the same class, each maintaining its own independent state. Objects interact with each other by invoking methods, which allows complex systems to be built from simple, modular components.

A package is a namespace that organizes a set of related classes and interfaces into a logical grouping. Packages prevent naming conflicts by ensuring that class names within different packages can be identical without causing ambiguity. For example, both java.util.Date and java.sql.Date can coexist because they belong to different packages. Packages also control access to classes and members through access modifiers. The package declaration appears at the very beginning of a Java source file and follows the reverse domain name convention (e.g., com.company.application.module) to ensure global uniqueness.

### Memory Allocation Diagram: Object Creation

```
Stack Memory                      Heap Memory
+-------------+                   +-------------------+
| Object Ref  | ----------------> |  Object Instance  |
|   myCar     |                   |  +-------------+ |
|  (4/8 bytes)|                   |  | color = "Red" | |
+-------------+                   |  | speed = 80    | |
                                  |  | model = "X1"| |
                                  |  +-------------+ |
                                  +-------------------+
```

### Example Code

```java
// Package declaration
package com.learning.corejava;

// Class definition
public class Car {
    // Fields (state)
    private String color;
    private String model;
    private int speed;
    private boolean engineRunning;
    
    // Constructor
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
        this.speed = 0;
        this.engineRunning = false;
    }
    
    // Methods (behavior)
    public void startEngine() {
        if(!engineRunning) {
            engineRunning = true;
            System.out.println(model + " engine started.");
        } else {
            System.out.println(model + " engine is already running.");
        }
    }
    
    public void accelerate(int increment) {
        if(engineRunning) {
            speed += increment;
            System.out.println(model + " accelerated to " + speed + " km/h.");
        } else {
            System.out.println("Start the engine first!");
        }
    }
    
    public void brake(int decrement) {
        speed -= decrement;
        if(speed < 0) speed = 0;
        System.out.println(model + " slowed down to " + speed + " km/h.");
    }
    
    public void displayStatus() {
        System.out.println("
--- Car Status ---");
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Speed: " + speed);
        System.out.println("Engine Running: " + engineRunning);
    }
}

// Runner class to demonstrate object creation
class CarRunner {
    public static void main(String[] args) {
        // Creating objects (instances of Car class)
        Car car1 = new Car("Red", "Toyota Camry");
        Car car2 = new Car("Blue", "Honda Accord");
        
        // Interacting with objects
        car1.displayStatus();
        car1.startEngine();
        car1.accelerate(40);
        car1.accelerate(30);
        car1.brake(20);
        
        car2.displayStatus();
        car2.startEngine();
        car2.accelerate(60);
        car2.brake(10);
        
        System.out.println("
--- Final Status ---");
        car1.displayStatus();
        car2.displayStatus();
    }
}
```

### Interview Questions
- **Q: What is the difference between a class and an object?**
  **A:** A class is a blueprint; an object is an instance of that blueprint.
- **Q: Why do we use packages?**
  **A:** To organize classes, avoid naming conflicts, and control access.
- **Q: What happens when you use the new keyword?**
  **A:** Memory is allocated on the heap, the constructor is called, and a reference is returned.


---


## 5. Variables (Local, Class/Static, Instance)

### Detailed Theoretical Explanation

Variables in Java are containers for storing data values. Java supports three primary categories of variables based on their scope, lifetime, and memory allocation behavior. Understanding the distinctions between these variable types is crucial for writing efficient, thread-safe, and bug-free programs.

Local variables are declared inside a method, constructor, or block and are only accessible within that scope. They are created when the method is invoked and destroyed when the method completes execution. Local variables do not have default initial values; the compiler requires that they be explicitly initialized before use. They are stored in the stack memory of the JVM, which makes their access extremely fast. Because local variables exist only during method execution, they are inherently thread-safe since each thread maintains its own stack.

Instance variables (also known as non-static fields) are declared inside a class but outside any method. They represent the state of an object, and each object instance maintains its own separate copy of instance variables. Instance variables are allocated memory on the heap when an object is instantiated using the new keyword. They are initialized to default values if not explicitly initialized (0 for numeric types, false for boolean, null for references). Instance variables can be accessed by all methods of the class and are destroyed when the object is garbage collected.

Class variables (also known as static variables) are declared with the static keyword inside a class but outside any method. There is exactly one copy of a static variable per class, regardless of how many instances of the class are created. Static variables are allocated in the Method Area (a part of heap memory) when the class is loaded by the ClassLoader. They are shared across all instances of the class and can be accessed directly using the class name without creating an object. Because static variables are shared, they require careful synchronization in multi-threaded environments to prevent race conditions.

### Memory Allocation Diagram

```
Method Area (Heap)               Heap (per object)              Stack (per thread)
+------------------+             +------------------+           +------------------+
| static int count |             | int age          |           | int localVar     |
| = 0              |             | String name      |           | (method1)        |
| static String    |             | (Object 1)       |           |                  |
| companyName      |             +------------------+           +------------------+
+------------------+             | int age          |           | double temp      |
                                 | String name      |           | (method2)        |
                                 | (Object 2)       |           +------------------+
                                 +------------------+
```

### Example Code

```java
public class VariableTypesDemo {
    // Class/Static variable - one copy per class
    public static String organization = "TechCorp";
    public static int totalEmployees = 0;
    
    // Instance variables - separate copy per object
    private int employeeId;
    private String employeeName;
    private double salary;
    
    // Constructor
    public VariableTypesDemo(int id, String name, double salary) {
        this.employeeId = id;
        this.employeeName = name;
        this.salary = salary;
        totalEmployees++;
    }
    
    public void displayEmployeeDetails() {
        // Local variable
        String department = "Engineering";
        double bonus = salary * 0.10;
        
        System.out.println("
--- Employee Details ---");
        System.out.println("Organization: " + organization);
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Name: " + employeeName);
        System.out.println("Department: " + department);
        System.out.println("Base Salary: " + salary);
        System.out.println("Bonus: " + bonus);
        System.out.println("Total Employees: " + totalEmployees);
    }
    
    public static void displayOrganizationInfo() {
        System.out.println("Organization Name: " + organization);
        System.out.println("Total Employees: " + totalEmployees);
        int yearEstablished = 2010;
        System.out.println("Established: " + yearEstablished);
    }
    
    public static void main(String[] args) {
        System.out.println("Organization: " + VariableTypesDemo.organization);
        
        VariableTypesDemo emp1 = new VariableTypesDemo(101, "Alice", 75000);
        VariableTypesDemo emp2 = new VariableTypesDemo(102, "Bob", 85000);
        VariableTypesDemo emp3 = new VariableTypesDemo(103, "Charlie", 90000);
        
        emp1.displayEmployeeDetails();
        emp2.displayEmployeeDetails();
        emp3.displayEmployeeDetails();
        
        System.out.println("
--- Organization Info ---");
        VariableTypesDemo.displayOrganizationInfo();
    }
}
```

### Interview Questions
- **Q: What is the default value of an instance variable?**
  **A:** 0 for numeric types, false for boolean, null for references.
- **Q: Can a local variable be declared as static?**
  **A:** No, static is only for class-level members.
- **Q: Where are static variables stored in memory?**
  **A:** In the Method Area (part of heap) when the class is loaded.


---


## Part 1: Core Java - 1. JDK, JRE, and JVM Architecture

### Detailed Theoretical Explanation

Java achieves platform independence through a sophisticated three-layer architecture consisting of the Java Development Kit (JDK), Java Runtime Environment (JRE), and Java Virtual Machine (JVM). Understanding this architecture is fundamental to mastering Java because it explains how Java code written on one operating system can execute seamlessly on any other operating system without modification. The JDK is the complete software development environment used by developers to write, compile, debug, and run Java applications. It encompasses the entire JRE plus additional development tools such as the Java compiler (javac), the Java debugger (jdb), the Java documentation generator (javadoc), the archiver tool (jar), and the class file disassembler (javap). Without the JDK, developers cannot compile Java source code into bytecode.

The JRE, on the other hand, is the runtime environment required to execute Java applications. It includes the JVM itself, along with the core Java class libraries (such as java.lang, java.util, java.io), property files, and other supporting configuration files. End-users who only need to run Java applications need the JRE, not the full JDK. The JRE sits on top of the operating system and provides the libraries and components that Java applications need during execution.

The JVM is the heart of Java's platform independence. It is an abstract computing machine that enables a computer to run Java programs as well as programs written in other languages that compile to Java bytecode. When you compile a .java file using javac, the compiler generates a .class file containing platform-neutral bytecode. The JVM reads this bytecode and translates it into native machine code specific to the host operating system through its execution engine. The execution engine contains an interpreter that reads bytecode instructions one by one, and a Just-In-Time (JIT) compiler that converts frequently executed bytecode segments into native machine code for improved performance. The JVM also manages memory automatically through its Garbage Collector (GC), which identifies and removes objects that are no longer reachable by the application, thereby preventing memory leaks.

### Memory Allocation Diagram

```
+-------------------------------------------------------------+
|                         JDK                                 |
|  +-----------------------------------------------------+  |
|  |                     JRE                               |  |
|  |  +-----------------------------------------------+  |  |
|  |  |                    JVM                          |  |  |
|  |  |  +------------------+ +--------------------+  |  |  |
|  |  |  |   ClassLoader    | |  Runtime Memory    |  |  |  |
|  |  |  |  +------------+  | |  +--------------+  |  |  |  |
|  |  |  |  | Loading    |  | |  | Method Area  |  |  |  |  |
|  |  |  |  | Linking    |  | |  | Heap         |  |  |  |  |
|  |  |  |  | Initialize |  | |  | Stack        |  |  |  |  |
|  |  |  |  +------------+  | |  | PC Registers |  |  |  |  |
|  |  |  +------------------+ |  | Native Method|  |  |  |  |
|  |  |                     | |  +--------------+  |  |  |  |
|  |  |  +------------------+ +--------------------+  |  |  |
|  |  |  | Execution Engine |                        |  |  |
|  |  |  | +--------------+ |                        |  |  |
|  |  |  | | Interpreter  | |                        |  |  |
|  |  |  | | JIT Compiler | |                        |  |  |
|  |  |  | | Garbage Col. | |                        |  |  |
|  |  |  | +--------------+ |                        |  |  |
|  |  |  +------------------+                        |  |  |
|  |  +-----------------------------------------------+  |  |
|  |  Development Tools: javac, javadoc, jar, jdb, javap |  |
|  +-----------------------------------------------------+  |
+-------------------------------------------------------------+
         |                |                |
    [Windows]        [Linux]         [macOS]
```

### Flow Chart: Java Program Execution

```
+-----------+     +-----------+     +-------------+     +------------+
| Write     | --> | Compile   | --> | Bytecode    | --> | JVM Loads  |
| .java file|     | javac     |     | .class file |     | Class      |
+-----------+     +-----------+     +-------------+     +------------+
                                                              |
                                                              v
+------------+     +-------------+     +----------+     +------------+
| Output     | <-- | Execute     | <-- | JIT/     | <-- | Verify &   |
| Result     |     | Native Code |     | Interpret|     | Link       |
+------------+     +-------------+     +----------+     +------------+
```

### Example Code

```java
// Program to demonstrate JDK, JRE, JVM concepts via Runtime class
public class JDKArchitectureDemo {
    public static void main(String[] args) {
        // Get the Java Runtime Environment details
        Runtime runtime = Runtime.getRuntime();
        
        // Display Java version (part of JDK/JRE)
        System.out.println("Java Version: " + System.getProperty("java.version"));
        System.out.println("Java Vendor: " + System.getProperty("java.vendor"));
        System.out.println("Java Home (JRE Path): " + System.getProperty("java.home"));
        
        // Memory management via JVM
        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        long maxMemory = runtime.maxMemory();
        
        System.out.println("
--- JVM Memory Management ---");
        System.out.println("Total Memory (bytes): " + totalMemory);
        System.out.println("Free Memory (bytes): " + freeMemory);
        System.out.println("Max Memory (bytes): " + maxMemory);
        System.out.println("Used Memory (bytes): " + (totalMemory - freeMemory));
        
        // Demonstrate Garbage Collection
        System.out.println("
--- Triggering Garbage Collection ---");
        for(int i = 0; i < 10000; i++) {
            String temp = new String("TemporaryObject" + i);
        }
        System.out.println("Memory before GC: " + (runtime.totalMemory() - runtime.freeMemory()));
        runtime.gc();
        System.out.println("Memory after GC: " + (runtime.totalMemory() - runtime.freeMemory()));
        
        // Demonstrate compilation check (JDK functionality)
        System.out.println("
--- Compilation Info ---");
        System.out.println("Compiler name: " + System.getProperty("java.compiler"));
        System.out.println("JVM implementation: " + System.getProperty("java.vm.name"));
    }
}
```

### Interview Questions
- **Q: What is the difference between JDK and JRE?**
  **A:** JDK is for development (includes compiler javac); JRE is for execution only (includes JVM + libraries).
- **Q: Is JVM platform-independent?**
  **A:** No, JVM itself is platform-dependent, but Java bytecode is platform-independent.
- **Q: What does Write Once, Run Anywhere mean?**
  **A:** Java bytecode can run on any OS that has a compatible JVM.
- **Q: What is JIT compilation?**
  **A:** JIT converts frequently executed bytecode to native machine code at runtime for speed.


---


## 2. Java Identifiers, Keywords, and Naming Conventions

### Detailed Theoretical Explanation

Java identifiers are the names given to various program elements such as classes, methods, variables, packages, and interfaces. An identifier must begin with a letter (A-Z, a-z), currency character ($), or underscore (_), and subsequent characters can include digits (0-9). Java is a case-sensitive language, meaning that `myVariable` and `MyVariable` are treated as completely distinct identifiers. Identifiers cannot contain spaces, cannot start with a digit, and cannot be the same as reserved keywords. Choosing meaningful and descriptive identifiers is a critical best practice in software development because it significantly improves code readability and maintainability.

Java keywords are reserved words that have predefined meanings in the language syntax. These words cannot be used as identifiers. There are approximately 50 reserved keywords in Java, including primitive type declarations (byte, short, int, long, float, double, char, boolean), control flow statements (if, else, switch, case, while, do, for, break, continue, return), access modifiers (public, private, protected), and object-oriented programming keywords (class, interface, extends, implements, abstract, final, static, synchronized, volatile). Additionally, there are literals like true, false, and null that are treated as reserved words.

Java Naming Conventions provide standardized guidelines for naming different program elements. Class and interface names should begin with an uppercase letter and use CamelCase (e.g., EmployeeDetails, ArrayList). Method and variable names should begin with a lowercase letter and use camelCase (e.g., calculateSalary, employeeName). Constants should be all uppercase with underscores separating words (e.g., MAX_SIZE, PI_VALUE). Package names should be all lowercase and typically follow reverse domain name notation (e.g., com.company.project.module). Adhering to these conventions ensures consistency across Java projects and makes it easier for teams to collaborate.

### Flow Chart: Identifier Validation

```
+-----------+     +--------------------+     +------------------+
| Start     | --> | Is first char      | -->| Is it letter, $, |
|           |     | valid?             |    | or _ ?           |
+-----------+     +--------------------+    +------------------+
                      | No                        | Yes
                      v                           v
                 +----------+              +------------------+
                 | Invalid  |              | Check remaining  |
                 | Identifier|             | chars: letters,  |
                 +----------+              | digits, $, _     |
                                         +------------------+
                                                |
                                                v
                                         +------------------+
                                         | Is it a keyword? |
                                         +------------------+
                                                |
                                     +----------+----------+
                                     | Yes                 | No
                                     v                     v
                                +----------+         +----------+
                                | Invalid  |         | Valid    |
                                | Identifier|        | Identifier|
                                +----------+         +----------+
```

### Example Code

```java
// Demonstrating valid identifiers, keywords usage, and naming conventions
public class IdentifierNamingConventionDemo {
    // Constant naming convention: ALL_UPPERCASE_WITH_UNDERSCORE
    public static final int MAX_ARRAY_SIZE = 100;
    public static final double PI_VALUE = 3.14159;
    
    // Variable naming convention: camelCase starting with lowercase
    private String employeeName;
    private int employeeAge;
    private double salaryAmount;
    
    // Class naming convention: PascalCase starting with uppercase
    public IdentifierNamingConventionDemo() {
        this.employeeName = "John Doe";
        this.employeeAge = 30;
        this.salaryAmount = 50000.00;
    }
    
    // Method naming convention: camelCase starting with lowercase
    public void displayEmployeeInformation() {
        System.out.println("Employee Name: " + this.employeeName);
        System.out.println("Employee Age: " + this.employeeAge);
        System.out.println("Salary: " + this.salaryAmount);
    }
    
    public boolean validateEmployeeAge(int age) {
        // Using keywords: if, else, return
        if(age >= 18 && age <= 65) {
            return true;
        } else {
            return false;
        }
    }
    
    public static void main(String[] args) {
        // Valid identifiers with $ and _
        int _temporaryValue = 10;
        double $price = 99.99;
        String myVar123 = "Test123";
        
        // Create object
        IdentifierNamingConventionDemo demo = new IdentifierNamingConventionDemo();
        demo.displayEmployeeInformation();
        
        // Using constants
        System.out.println("
Constants:");
        System.out.println("Max Size: " + MAX_ARRAY_SIZE);
        System.out.println("PI: " + PI_VALUE);
        
        // Validate age
        int testAge = 25;
        boolean isValid = demo.validateEmployeeAge(testAge);
        System.out.println("
Is age " + testAge + " valid? " + isValid);
        
        // Display valid identifiers
        System.out.println("
Valid Identifiers Used:");
        System.out.println("_temporaryValue = " + _temporaryValue);
        System.out.println("$price = " + $price);
        System.out.println("myVar123 = " + myVar123);
    }
}
```

### Interview Questions
- **Q: Can we use a number as the first character of an identifier?**
  **A:** No, identifiers must begin with a letter, $, or _.
- **Q: Is Java case-sensitive?**
  **A:** Yes, `myVar` and `MyVar` are different identifiers.
- **Q: What is the convention for naming constants in Java?**
  **A:** ALL_UPPERCASE with underscores, e.g., MAX_VALUE.


---


## 3. Java Commands (javac, java, javap, javadoc, jar, jmap, jhat, jinfo, jconsole, jstat)

### Detailed Theoretical Explanation

The Java Development Kit provides a rich set of command-line tools that developers use throughout the software development lifecycle. The javac command is the Java compiler that transforms human-readable .java source files into platform-independent .class bytecode files. It performs lexical analysis, parsing, type checking, and code generation. The javac tool supports numerous flags such as -d to specify the destination directory for compiled classes, -classpath to specify where to find user class files, and -sourcepath to specify where to find input source files.

The java command launches Java applications. It starts the JVM, loads the specified class, and invokes its main method. The java command supports flags like -classpath (or -cp) to set the class path, -Xmx and -Xms to configure heap memory sizes, and numerous other options for debugging and performance tuning. The javap command is the class file disassembler that displays information about the fields, constructors, and methods present in compiled class files. It is particularly useful for understanding what the compiler generated and for verifying that abstract methods are properly declared.

The javadoc tool generates API documentation in HTML format from specially formatted comments in source code. It parses documentation comments (/** ... */) and produces structured web pages. The jar command creates and manages Java Archive files, which package multiple class files, metadata, and resources into a single compressed file using the ZIP format. JAR files simplify distribution and deployment of Java applications.

For monitoring and diagnostics, the JDK provides several tools. jconsole provides a graphical console for monitoring JVM performance metrics including memory usage, thread activity, and loaded classes. jstat displays statistics about the JVM's garbage collection, class loading, and JIT compilation. jmap generates heap dump snapshots that can be analyzed offline. jhat is the Heap Analysis Tool that reads heap dumps and provides a web-based interface for browsing object allocations. jinfo prints configuration information for a given process. These tools are essential for troubleshooting memory leaks, performance bottlenecks, and application crashes in production environments.

### Flow Chart: Java Command Execution Flow

```
+----------+    +----------+    +------------+    +----------+
| Write    | -> | javac    | -> | Generate   | -> | java     |
| .java    |    | Compile  |    | .class     |    | Execute  |
+----------+    +----------+    +------------+    +----------+
     |                              |                  |
     v                              v                  v
+----------+                 +------------+      +----------+
| javadoc  |                 | javap      |      | jconsole |
| Generate |                 | Disassemble|      | Monitor  |
| HTML     |                 | bytecode   |      | JVM      |
+----------+                 +------------+      +----------+
```

### Example Code

```java
// Compile and run demonstration class
public class JavaCommandsDemo {
    private String applicationName;
    private int versionNumber;
    
    public JavaCommandsDemo(String name, int version) {
        this.applicationName = name;
        this.versionNumber = version;
    }
    
    public void displayApplicationInfo() {
        System.out.println("Application: " + applicationName);
        System.out.println("Version: " + versionNumber);
    }
    
    /**
     * Calculates the factorial of a given number.
     * @param n The number to calculate factorial for.
     * @return The factorial result.
     */
    public long calculateFactorial(int n) {
        if(n < 0) {
            throw new IllegalArgumentException("Number must be non-negative");
        }
        long result = 1;
        for(int i = 2; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    
    public static void main(String[] args) {
        JavaCommandsDemo app = new JavaCommandsDemo("JavaCommandsDemo", 1);
        app.displayApplicationInfo();
        
        System.out.println("
Factorial calculations:");
        for(int i = 1; i <= 10; i++) {
            System.out.println(i + "! = " + app.calculateFactorial(i));
        }
        
        // Display JVM information at runtime
        Runtime runtime = Runtime.getRuntime();
        System.out.println("
JVM Information:");
        System.out.println("Available Processors: " + runtime.availableProcessors());
        System.out.println("Free Memory: " + runtime.freeMemory() + " bytes");
        System.out.println("Total Memory: " + runtime.totalMemory() + " bytes");
    }
}
```

**Command-line usage:**
```bash
# Compile with javac
javac -d . JavaCommandsDemo.java

# Run with java
java -cp . JavaCommandsDemo

# Generate documentation
javadoc -d docs JavaCommandsDemo.java

# Disassemble class
javap -c JavaCommandsDemo

# Create JAR
jar cvf JavaCommandsDemo.jar JavaCommandsDemo.class

# Monitor JVM
jconsole
```

### Interview Questions
- **Q: What is the difference between javac and java commands?**
  **A:** javac compiles .java to .class; java runs the .class file.
- **Q: What does javap do?**
  **A:** It disassembles .class files to show fields, methods, and bytecode.
- **Q: How do you create a JAR file?**
  **A:** Using the jar command: jar cvf filename.jar files...


---


## 4. Object, Class, and Package

### Detailed Theoretical Explanation

In Java, a class is a blueprint or template that defines the structure and behavior of objects. It encapsulates data members (fields/variables) and member functions (methods) into a single unit. A class represents a user-defined data type that determines what an object will contain and how it will behave. For example, a Car class might define fields like color, model, and speed, and methods like accelerate() and brake(). Classes enable code reusability through inheritance and promote encapsulation by hiding internal implementation details.

An object is an instance of a class. While a class is an abstract concept, an object is a concrete entity that occupies memory and has a state and behavior. When you create an object using the new keyword, the JVM allocates memory on the heap for that object, initializes its fields, and returns a reference to it. Multiple objects can be created from the same class, each maintaining its own independent state. Objects interact with each other by invoking methods, which allows complex systems to be built from simple, modular components.

A package is a namespace that organizes a set of related classes and interfaces into a logical grouping. Packages prevent naming conflicts by ensuring that class names within different packages can be identical without causing ambiguity. For example, both java.util.Date and java.sql.Date can coexist because they belong to different packages. Packages also control access to classes and members through access modifiers. The package declaration appears at the very beginning of a Java source file and follows the reverse domain name convention (e.g., com.company.application.module) to ensure global uniqueness.

### Memory Allocation Diagram: Object Creation

```
Stack Memory                      Heap Memory
+-------------+                   +-------------------+
| Object Ref  | ----------------> |  Object Instance  |
|   myCar     |                   |  +-------------+ |
|  (4/8 bytes)|                   |  | color = "Red" | |
+-------------+                   |  | speed = 80    | |
                                  |  | model = "X1"| |
                                  |  +-------------+ |
                                  +-------------------+
```

### Example Code

```java
// Package declaration
package com.learning.corejava;

// Class definition
public class Car {
    // Fields (state)
    private String color;
    private String model;
    private int speed;
    private boolean engineRunning;
    
    // Constructor
    public Car(String color, String model) {
        this.color = color;
        this.model = model;
        this.speed = 0;
        this.engineRunning = false;
    }
    
    // Methods (behavior)
    public void startEngine() {
        if(!engineRunning) {
            engineRunning = true;
            System.out.println(model + " engine started.");
        } else {
            System.out.println(model + " engine is already running.");
        }
    }
    
    public void accelerate(int increment) {
        if(engineRunning) {
            speed += increment;
            System.out.println(model + " accelerated to " + speed + " km/h.");
        } else {
            System.out.println("Start the engine first!");
        }
    }
    
    public void brake(int decrement) {
        speed -= decrement;
        if(speed < 0) speed = 0;
        System.out.println(model + " slowed down to " + speed + " km/h.");
    }
    
    public void displayStatus() {
        System.out.println("
--- Car Status ---");
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Speed: " + speed);
        System.out.println("Engine Running: " + engineRunning);
    }
}

// Runner class to demonstrate object creation
class CarRunner {
    public static void main(String[] args) {
        // Creating objects (instances of Car class)
        Car car1 = new Car("Red", "Toyota Camry");
        Car car2 = new Car("Blue", "Honda Accord");
        
        // Interacting with objects
        car1.displayStatus();
        car1.startEngine();
        car1.accelerate(40);
        car1.accelerate(30);
        car1.brake(20);
        
        car2.displayStatus();
        car2.startEngine();
        car2.accelerate(60);
        car2.brake(10);
        
        System.out.println("
--- Final Status ---");
        car1.displayStatus();
        car2.displayStatus();
    }
}
```

### Interview Questions
- **Q: What is the difference between a class and an object?**
  **A:** A class is a blueprint; an object is an instance of that blueprint.
- **Q: Why do we use packages?**
  **A:** To organize classes, avoid naming conflicts, and control access.
- **Q: What happens when you use the new keyword?**
  **A:** Memory is allocated on the heap, the constructor is called, and a reference is returned.


---


## 5. Variables (Local, Class/Static, Instance)

### Detailed Theoretical Explanation

Variables in Java are containers for storing data values. Java supports three primary categories of variables based on their scope, lifetime, and memory allocation behavior. Understanding the distinctions between these variable types is crucial for writing efficient, thread-safe, and bug-free programs.

Local variables are declared inside a method, constructor, or block and are only accessible within that scope. They are created when the method is invoked and destroyed when the method completes execution. Local variables do not have default initial values; the compiler requires that they be explicitly initialized before use. They are stored in the stack memory of the JVM, which makes their access extremely fast. Because local variables exist only during method execution, they are inherently thread-safe since each thread maintains its own stack.

Instance variables (also known as non-static fields) are declared inside a class but outside any method. They represent the state of an object, and each object instance maintains its own separate copy of instance variables. Instance variables are allocated memory on the heap when an object is instantiated using the new keyword. They are initialized to default values if not explicitly initialized (0 for numeric types, false for boolean, null for references). Instance variables can be accessed by all methods of the class and are destroyed when the object is garbage collected.

Class variables (also known as static variables) are declared with the static keyword inside a class but outside any method. There is exactly one copy of a static variable per class, regardless of how many instances of the class are created. Static variables are allocated in the Method Area (a part of heap memory) when the class is loaded by the ClassLoader. They are shared across all instances of the class and can be accessed directly using the class name without creating an object. Because static variables are shared, they require careful synchronization in multi-threaded environments to prevent race conditions.

### Memory Allocation Diagram

```
Method Area (Heap)               Heap (per object)              Stack (per thread)
+------------------+             +------------------+           +------------------+
| static int count |             | int age          |           | int localVar     |
| = 0              |             | String name      |           | (method1)        |
| static String    |             | (Object 1)       |           |                  |
| companyName      |             +------------------+           +------------------+
+------------------+             | int age          |           | double temp      |
                                 | String name      |           | (method2)        |
                                 | (Object 2)       |           +------------------+
                                 +------------------+
```

### Example Code

```java
public class VariableTypesDemo {
    // Class/Static variable - one copy per class
    public static String organization = "TechCorp";
    public static int totalEmployees = 0;
    
    // Instance variables - separate copy per object
    private int employeeId;
    private String employeeName;
    private double salary;
    
    // Constructor
    public VariableTypesDemo(int id, String name, double salary) {
        this.employeeId = id;
        this.employeeName = name;
        this.salary = salary;
        totalEmployees++;
    }
    
    public void displayEmployeeDetails() {
        // Local variable
        String department = "Engineering";
        double bonus = salary * 0.10;
        
        System.out.println("
--- Employee Details ---");
        System.out.println("Organization: " + organization);
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Name: " + employeeName);
        System.out.println("Department: " + department);
        System.out.println("Base Salary: " + salary);
        System.out.println("Bonus: " + bonus);
        System.out.println("Total Employees: " + totalEmployees);
    }
    
    public static void displayOrganizationInfo() {
        System.out.println("Organization Name: " + organization);
        System.out.println("Total Employees: " + totalEmployees);
        int yearEstablished = 2010;
        System.out.println("Established: " + yearEstablished);
    }
    
    public static void main(String[] args) {
        System.out.println("Organization: " + VariableTypesDemo.organization);
        
        VariableTypesDemo emp1 = new VariableTypesDemo(101, "Alice", 75000);
        VariableTypesDemo emp2 = new VariableTypesDemo(102, "Bob", 85000);
        VariableTypesDemo emp3 = new VariableTypesDemo(103, "Charlie", 90000);
        
        emp1.displayEmployeeDetails();
        emp2.displayEmployeeDetails();
        emp3.displayEmployeeDetails();
        
        System.out.println("
--- Organization Info ---");
        VariableTypesDemo.displayOrganizationInfo();
    }
}
```

### Interview Questions
- **Q: What is the default value of an instance variable?**
  **A:** 0 for numeric types, false for boolean, null for references.
- **Q: Can a local variable be declared as static?**
  **A:** No, static is only for class-level members.
- **Q: Where are static variables stored in memory?**
  **A:** In the Method Area (part of heap) when the class is loaded.


---


## 6. Fields and Methods

### Detailed Theoretical Explanation

Fields and methods are the two fundamental building blocks of a Java class. Fields represent the data or state of an object, while methods represent the behavior or operations that can be performed on that data. Together, they embody the principle of encapsulation in object-oriented programming by bundling data and the operations that manipulate that data into a single cohesive unit.

Fields in Java can be categorized as primitive fields (storing basic data types like int, double, boolean) or reference fields (storing objects or arrays). Fields can have various access modifiers (public, private, protected, or package-private) that control their visibility and accessibility from other classes. The private access modifier is most commonly used for fields to enforce encapsulation, requiring external code to access the data through public getter and setter methods rather than directly. Fields can also be declared as final, which means their value cannot be changed after initialization, effectively making them constants.

Methods in Java are blocks of code designed to perform a specific task. They can accept parameters (inputs), perform computations or operations, and optionally return a value. Every method has a signature consisting of its name and parameter list, and it must specify a return type (or void if it returns nothing). Methods can be overloaded, meaning multiple methods in the same class can have the same name but different parameter lists. Methods can also be overridden in subclasses to provide specialized behavior, which is a cornerstone of runtime polymorphism.

Java methods support various modifiers including static (belonging to the class rather than instances), final (preventing overriding), abstract (requiring implementation in subclasses), and synchronized (ensuring thread-safe access). The method body executes within its own stack frame, with local variables allocated on the stack and destroyed when the method returns. Methods can throw exceptions to signal error conditions, and they can call other methods recursively to solve problems that have repetitive substructure.

### Flow Chart: Method Invocation

```
+-------------+     +----------------+     +-----------------+
| Call Method | --> | Push Stack     | --> | Execute Method |
| object.method()|   | Frame (locals, |     | Body           |
|             |     | params)        |     |                |
+-------------+     +----------------+     +-----------------+
                                                |
                                                v
                                         +-----------------+
                                         | Return Value?   |
                                         +-----------------+
                                                |
                                    +-----------+-----------+
                                    | Yes                   | No (void)
                                    v                       v
                              +-----------+           +-----------+
                              | Pop Stack |           | Pop Stack |
                              | Return    |           | No Return |
                              | Value     |           |           |
                              +-----------+           +-----------+
```

### Example Code

```java
public class FieldsAndMethodsDemo {
    // Fields (state)
    private int accountNumber;
    private String accountHolderName;
    private double balance;
    private boolean isActive;
    
    // Static field shared across all accounts
    private static double interestRate = 4.5;
    
    // Constructor
    public FieldsAndMethodsDemo(int accNum, String holderName, double initialBalance) {
        this.accountNumber = accNum;
        this.accountHolderName = holderName;
        this.balance = initialBalance;
        this.isActive = true;
    }
    
    // Getter methods (accessor)
    public int getAccountNumber() { return accountNumber; }
    public String getAccountHolderName() { return accountHolderName; }
    public double getBalance() { return balance; }
    
    // Setter methods (mutator)
    public void setAccountHolderName(String name) { this.accountHolderName = name; }
    
    // Business logic methods
    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }
    
    public void withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("Remaining Balance: $" + balance);
        } else {
            System.out.println("Insufficient funds or invalid amount.");
        }
    }
    
    public void applyAnnualInterest() {
        double interest = balance * (interestRate / 100);
        balance += interest;
        System.out.println("Interest applied: $" + interest);
    }
    
    public void displayAccountDetails() {
        System.out.println("
--- Account Details ---");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Holder: " + accountHolderName);
        System.out.println("Balance: $" + balance);
        System.out.println("Status: " + (isActive ? "Active" : "Inactive"));
        System.out.println("Interest Rate: " + interestRate + "%");
    }
    
    public static void updateInterestRate(double newRate) {
        interestRate = newRate;
        System.out.println("New interest rate set to: " + interestRate + "%");
    }
    
    public static void main(String[] args) {
        FieldsAndMethodsDemo acc1 = new FieldsAndMethodsDemo(1001, "John Smith", 5000.0);
        FieldsAndMethodsDemo acc2 = new FieldsAndMethodsDemo(1002, "Jane Doe", 8000.0);
        
        acc1.displayAccountDetails();
        acc2.displayAccountDetails();
        
        acc1.deposit(1500);
        acc1.withdraw(2000);
        acc1.applyAnnualInterest();
        
        acc2.withdraw(1000);
        acc2.deposit(500);
        
        System.out.println("
--- Updating Interest Rate ---");
        FieldsAndMethodsDemo.updateInterestRate(5.0);
        
        acc1.displayAccountDetails();
        acc2.displayAccountDetails();
    }
}
```

### Interview Questions
- **Q: What is method overloading?**
  **A:** Multiple methods with the same name but different parameter lists in the same class.
- **Q: What is the difference between getter and setter methods?**
  **A:** Getters read field values; setters modify them.
- **Q: Can a static method access instance variables directly?**
  **A:** No, static methods belong to the class and cannot access instance-specific data without an object reference.


---


## 7. Datatypes and Java Literals

### Detailed Theoretical Explanation

Java is a statically typed language, which means every variable must have its data type explicitly declared before it can be used. This strong typing system helps catch errors at compile time and ensures that operations are performed only on compatible data types. Java datatypes are broadly divided into two categories: primitive types and reference types.

Primitive datatypes are the most basic data types built into the language and are not objects. There are eight primitive types in Java: byte (8-bit signed integer), short (16-bit signed integer), int (32-bit signed integer), long (64-bit signed integer), float (32-bit floating-point), double (64-bit floating-point), char (16-bit Unicode character), and boolean (true or false). Each primitive type has a specific memory footprint and range of values. Primitive variables store the actual value directly in the memory location associated with the variable, making their access efficient.

Reference datatypes include classes, interfaces, arrays, and enums. Variables of reference type store memory addresses (references) that point to the actual object data stored on the heap. When you assign one reference variable to another, both variables point to the same object in memory; this is why modifying an object through one reference affects all other references to that object. The String class, although commonly used like a primitive, is actually a reference type that is immutable.

Java literals are the constant values assigned to variables. Integer literals can be decimal, octal (prefixed with 0), hexadecimal (prefixed with 0x or 0X), or binary (prefixed with 0b or 0B). Floating-point literals can be specified in standard decimal notation or scientific notation (e.g., 3.14e10). Character literals are enclosed in single quotes and can represent Unicode characters. String literals are enclosed in double quotes. Boolean literals are true and false. The null literal represents a reference that points to no object.

### Flow Chart: Datatype Selection

```
+------------+     +-------------------+     +------------------+
| Need to    | --> | Numeric?          | -->| Whole Number?   |
| store data |     |                   |    |                 |
+------------+     +-------------------+    +------------------+
                          | No                    |
                          v                 +-------+-------+
                   +------------+            | Yes      | No
                   | boolean    |            v          v
                   | char       |      +----------+  +--------+
                   | String     |      | byte     |  | float  |
                   +------------+      | short    |  | double |
                                       | int      |  +--------+
                                       | long     |
                                       +----------+
```

### Example Code

```java
public class DatatypesAndLiteralsDemo {
    public static void main(String[] args) {
        // Primitive datatypes
        byte smallNumber = 127;
        short mediumNumber = 32000;
        int largeNumber = 2000000000;
        long veryLargeNumber = 9000000000000L;
        
        float price = 19.99f;
        double preciseValue = 3.141592653589793;
        
        char grade = 'A';
        boolean isActive = true;
        
        // Different literal formats
        int decimal = 100;
        int octal = 0144;
        int hex = 0x64;
        int binary = 0b1100100;
        
        double scientific = 1.234e5;
        long longLiteral = 1_000_000L;
        
        // Reference types
        String message = "Hello, Java!";
        int[] numbers = {10, 20, 30, 40, 50};
        
        System.out.println("--- Integer Types ---");
        System.out.println("byte: " + smallNumber + " (Range: -128 to 127)");
        System.out.println("short: " + mediumNumber + " (Range: -32768 to 32767)");
        System.out.println("int: " + largeNumber);
        System.out.println("long: " + veryLargeNumber);
        
        System.out.println("
--- Floating Point Types ---");
        System.out.println("float: " + price);
        System.out.println("double: " + preciseValue);
        System.out.println("scientific notation: " + scientific);
        
        System.out.println("
--- Other Primitives ---");
        System.out.println("char: " + grade);
        System.out.println("boolean: " + isActive);
        
        System.out.println("
--- Literal Formats ---");
        System.out.println("Decimal: " + decimal);
        System.out.println("Octal 0144: " + octal);
        System.out.println("Hex 0x64: " + hex);
        System.out.println("Binary 0b1100100: " + binary);
        System.out.println("Long with underscore: " + longLiteral);
        
        System.out.println("
--- Reference Types ---");
        System.out.println("String: " + message);
        System.out.println("Array length: " + numbers.length);
        System.out.print("Array elements: ");
        for(int num : numbers) {
            System.out.print(num + " ");
        }
    }
}
```

### Interview Questions
- **Q: How many primitive types does Java have?**
  **A:** Eight: byte, short, int, long, float, double, char, boolean.
- **Q: What is the difference between float and double?**
  **A:** float is 32-bit; double is 64-bit with higher precision.
- **Q: Is String a primitive type?**
  **A:** No, String is a reference type (immutable class).


---


## 8. Escape Sequence Characters

### Detailed Theoretical Explanation

Escape sequences are special character combinations in Java that begin with a backslash (\) and represent non-printable or difficult-to-type characters within string and character literals. They allow programmers to include characters that would otherwise be impossible to express directly within the source code, such as newlines, tabs, quotation marks, and backslashes themselves. Escape sequences are processed by the Java compiler during lexical analysis and are replaced with the actual control characters in the compiled bytecode.

The most commonly used escape sequences include \n for newline (moves the cursor to the beginning of the next line), \t for horizontal tab (inserts a tab stop for alignment), \b for backspace (moves the cursor one position backward), \r for carriage return (moves the cursor to the beginning of the current line), \f for form feed (advances to the next page in printers), and \ for inserting an actual backslash character. Additionally, \' allows the inclusion of a single quote within a character literal, and \" allows the inclusion of double quotes within a string literal without terminating the string prematurely.

Unicode escape sequences provide a mechanism for representing any character in the Unicode character set using its hexadecimal code point. The format \uxxxx where xxxx is a four-digit hexadecimal number enables Java programs to include characters from any language, including symbols, mathematical notations, and emoji. This is particularly important for internationalization because it allows source code to remain pure ASCII while still supporting multilingual output.

### Example Code

```java
public class EscapeSequenceDemo {
    public static void main(String[] args) {
        // Newline escape sequence
        System.out.println("First Line
Second Line
Third Line");
        
        // Tab escape sequence for alignment
        System.out.println("
--- Tab Alignment ---");
        System.out.println("Name		Age		City");
        System.out.println("Alice		25		New York");
        System.out.println("Bob		30		Los Angeles");
        System.out.println("Charlie		35		Chicago");
        
        // Backslash and quotes
        System.out.println("
--- Special Characters ---");
        System.out.println("Path: C:\Users\Documents\file.txt");
        System.out.println("She said, "Hello, World!"");
        System.out.println("It's a beautiful day.");
        
        // Carriage return demonstration
        System.out.println("
--- Carriage Return ---");
        System.out.println("Progress: 0%Progress: 50%Progress: 100%");
        
        // Unicode characters
        System.out.println("
--- Unicode Characters ---");
        System.out.println("Copyright: ©");
        System.out.println("Registered: ®");
        System.out.println("Euro: €");
        System.out.println("Greek Omega: Ω");
        System.out.println("Smiley: ☺");
        System.out.println("Heart: ♥");
        
        // Backspace demonstration
        System.out.println("
--- Backspace ---");
        System.out.println("Helloo World");
        
        // Form feed
        System.out.println("Page 1Page 2");
        
        // Combined usage for formatted output
        System.out.println("
--- Formatted Table ---");
        System.out.println("+--------+--------+--------+");
        System.out.println("| Item   | Qty    | Price  |");
        System.out.println("+--------+--------+--------+");
        System.out.println("| Apple  | 10	| $2.50  |");
        System.out.println("| Orange | 15	| $3.00  |");
        System.out.println("| Banana | 20	| $1.50  |");
        System.out.println("+--------+--------+--------+");
    }
}
```

### Interview Questions
- **Q: What does the \n escape sequence represent?**
  **A:** Newline character.
- **Q: How do you insert a tab in a Java string?**
  **A:** Using \t.
- **Q: What is the Unicode escape for the copyright symbol?**
  **A:** \u00A9.


---


## 9. Casting (Implicit and Explicit)

### Detailed Theoretical Explanation

Type casting in Java is the process of converting a value from one data type to another. Java supports two fundamental types of casting: implicit casting (also known as widening conversion) and explicit casting (also known as narrowing conversion). Understanding the difference between these two mechanisms is critical for preventing data loss, unexpected behavior, and compilation errors in Java programs.

Implicit casting occurs automatically when a smaller primitive type is assigned to a larger primitive type, or when a subclass reference is assigned to a superclass reference. This is called widening because the destination type has a larger range or broader scope than the source type. For numeric primitives, the widening order is byte -> short -> int -> long -> float -> double. Implicit casting is safe because there is no risk of data loss; the JVM simply promotes the value to the larger type.

Explicit casting is required when converting a larger type to a smaller type, or when converting a superclass reference to a subclass reference. This is called narrowing because the destination type has a smaller range. Explicit casting requires the programmer to specify the target type in parentheses before the value, such as (int) 3.14. Narrowing conversions are potentially unsafe because the larger value may exceed the range of the smaller type, leading to truncation or overflow.

### Flow Chart: Casting Decision

```
+------------+     +-------------------+     +------------------+
| Assignment | --> | Smaller to Larger?| -->| Yes: Implicit    |
|            |     | (Widening)        |    | Cast (Automatic) |
+------------+     +-------------------+    +------------------+
                          | No
                          v
                   +-------------------+
                   | Larger to Smaller?|
                   | (Narrowing)       |
                   +-------------------+
                          |
                    +-----+-----+
                    | Yes       | No (incompatible)
                    v           v
             +----------+   +----------+
             | Explicit |   | Compiler |
             | Cast ()  |   | Error    |
             +----------+   +----------+
```

### Example Code

```java
public class CastingDemo {
    public static void main(String[] args) {
        // Implicit Casting (Widening)
        byte byteValue = 100;
        short shortValue = byteValue;
        int intValue = shortValue;
        long longValue = intValue;
        float floatValue = longValue;
        double doubleValue = floatValue;
        
        System.out.println("--- Implicit Casting (Widening) ---");
        System.out.println("byte: " + byteValue);
        System.out.println("short: " + shortValue);
        System.out.println("int: " + intValue);
        System.out.println("long: " + longValue);
        System.out.println("float: " + floatValue);
        System.out.println("double: " + doubleValue);
        
        // Explicit Casting (Narrowing)
        double largeDecimal = 1234.5678;
        float explicitFloat = (float) largeDecimal;
        long explicitLong = (long) largeDecimal;
        int explicitInt = (int) largeDecimal;
        short explicitShort = (short) explicitInt;
        byte explicitByte = (byte) explicitInt;
        
        System.out.println("
--- Explicit Casting (Narrowing) ---");
        System.out.println("Original double: " + largeDecimal);
        System.out.println("To float: " + explicitFloat);
        System.out.println("To long (truncated): " + explicitLong);
        System.out.println("To int (truncated): " + explicitInt);
        System.out.println("To short: " + explicitShort);
        System.out.println("To byte (overflow possible): " + explicitByte);
        
        // Demonstrating data loss
        int bigNumber = 130;
        byte smallNumber = (byte) bigNumber;
        System.out.println("
--- Data Loss Demo ---");
        System.out.println("Original int: " + bigNumber);
        System.out.println("Cast to byte: " + smallNumber);
        System.out.println("(130 exceeds byte max 127, so it wraps around)");
        
        // Wrapper class parsing and conversion
        System.out.println("
--- Wrapper Class Conversions ---");
        String numberStr = "456";
        int parsedInt = Integer.parseInt(numberStr);
        double parsedDouble = Double.parseDouble("3.14159");
        
        System.out.println("Parsed int from String: " + parsedInt);
        System.out.println("Parsed double from String: " + parsedDouble);
        
        // Boxing and Unboxing
        Integer boxedInt = 100;
        int unboxedInt = boxedInt;
        System.out.println("
Boxed Integer: " + boxedInt);
        System.out.println("Unboxed int: " + unboxedInt);
        
        // Reference type casting
        Object obj = "Hello World";
        String str = (String) obj;
        System.out.println("
Cast Object to String: " + str);
    }
}
```

### Interview Questions
- **Q: What is widening conversion?**
  **A:** Converting a smaller type to a larger type automatically.
- **Q: What happens when you cast a double to int?**
  **A:** The decimal part is truncated (not rounded).
- **Q: What exception occurs during invalid reference casting?**
  **A:** ClassCastException at runtime.


---


## 10. Operators (Assignment, Relational, Arithmetic, Conditional, Logical, Bitwise, Instanceof)

### Detailed Theoretical Explanation

Operators in Java are special symbols that perform specific operations on one, two, or three operands and then return a result. Java provides a rich set of operators that can be classified into several categories based on the type of operation they perform. Understanding operator precedence and associativity is essential for writing correct expressions and avoiding subtle bugs.

Assignment operators (=, +=, -=, *=, /=, %=) are used to assign values to variables. The simple assignment operator = assigns the value on the right to the variable on the left. Compound assignment operators combine arithmetic operations with assignment, such as += which adds the right operand to the left operand and stores the result in the left operand.

Arithmetic operators (+, -, *, /, %) perform basic mathematical operations. The + operator is also used for string concatenation. The / operator performs integer division when both operands are integers, discarding the remainder. The % operator returns the remainder of division.

Relational operators (==, !=, >, <, >=, <=) compare two values and return a boolean result. These are commonly used in conditional statements and loops. The == operator checks for equality of primitive values or reference equality for objects.

Logical operators (&amp;&amp;, ||, !) combine boolean expressions. The &amp;&amp; operator returns true only if both operands are true. The || operator returns true if at least one operand is true. The ! operator negates a boolean value.

Bitwise operators (&amp;, |, ^, ~, &lt;&lt;, &gt;&gt;, &gt;&gt;&gt;) operate on the binary representations of integers. They are used in low-level programming, flag manipulation, and performance-critical algorithms. The instanceof operator tests whether an object is an instance of a particular class or interface.

### Example Code

```java
public class OperatorsDemo {
    public static void main(String[] args) {
        // Arithmetic operators
        int a = 20, b = 10;
        System.out.println("--- Arithmetic Operators ---");
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));
        
        // Relational operators
        System.out.println("
--- Relational Operators ---");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b));
        
        // Logical operators
        boolean x = true, y = false;
        System.out.println("
--- Logical Operators ---");
        System.out.println("x && y: " + (x && y));
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x));
        System.out.println("!y: " + (!y));
        
        // Bitwise operators
        int p = 5;  // 0101 in binary
        int q = 3;  // 0011 in binary
        System.out.println("
--- Bitwise Operators ---");
        System.out.println("p & q: " + (p & q));
        System.out.println("p | q: " + (p | q));
        System.out.println("p ^ q: " + (p ^ q));
        System.out.println("~p: " + (~p));
        System.out.println("p << 1: " + (p << 1));
        System.out.println("p >> 1: " + (p >> 1));
        
        // Assignment operators
        int num = 10;
        System.out.println("
--- Assignment Operators ---");
        System.out.println("Initial: " + num);
        num += 5;
        System.out.println("After += 5: " + num);
        num -= 3;
        System.out.println("After -= 3: " + num);
        num *= 2;
        System.out.println("After *= 2: " + num);
        num /= 4;
        System.out.println("After /= 4: " + num);
        num %= 3;
        System.out.println("After %= 3: " + num);
        
        // Ternary/Conditional operator
        int age = 20;
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println("
--- Ternary Operator ---");
        System.out.println("Age: " + age + ", Status: " + status);
        
        // instanceof operator
        String text = "Hello";
        System.out.println("
--- instanceof Operator ---");
        System.out.println("text instanceof String: " + (text instanceof String));
        System.out.println("text instanceof Object: " + (text instanceof Object));
    }
}
```

### Interview Questions
- **Q: What is the difference between == and .equals()?**
  **A:** == checks reference equality for objects; .equals() checks content equality.
- **Q: What is short-circuit evaluation?**
  **A:** In &amp;&amp;, if the first operand is false, the second is not evaluated. In ||, if the first is true, the second is skipped.
- **Q: What does the >>> operator do?**
  **A:** Unsigned right shift; fills with zeros regardless of sign.


---


## 11. Comments (Single Line, Multi Line)

### Detailed Theoretical Explanation

Comments are non-executable statements in Java that are used to document code, explain logic, and improve readability. The Java compiler completely ignores comments during compilation, so they do not affect the bytecode or program performance. However, well-written comments are essential for maintaining large codebases, onboarding new developers, and generating API documentation automatically using tools like Javadoc.

Java supports three types of comments. Single-line comments start with // and extend to the end of the current line. They are ideal for brief explanations of individual statements or variables. Multi-line comments start with /* and end with */, allowing developers to write longer explanations spanning multiple lines. These are often used at the beginning of files to provide copyright notices, author information, or high-level descriptions of the module.

Documentation comments (/** ... */) are a special form of multi-line comment used by the Javadoc tool to generate HTML documentation. They can include special tags such as @author, @param, @return, @throws, and @version to provide structured metadata about classes, methods, and fields. IDEs also use these comments to provide context-sensitive help and autocomplete information.

Best practices for commenting include writing comments that explain why something is done rather than what is done (the code itself should be self-explanatory), keeping comments up-to-date with code changes, and avoiding obvious comments that merely restate the code.

### Example Code

```java
/**
 * This class demonstrates the use of different types of comments in Java.
 * @author JavaLearner
 * @version 1.0
 */
public class CommentsDemo {
    
    // This is a single-line comment explaining the constant
    public static final double PI = 3.14159;
    
    /*
     * This is a multi-line comment.
     * It can span multiple lines and is useful
     * for longer explanations or temporarily disabling code.
     */
    private int counter = 0;
    
    /**
     * Calculates the area of a circle given its radius.
     * @param radius The radius of the circle (must be positive)
     * @return The area of the circle
     * @throws IllegalArgumentException if radius is negative
     */
    public double calculateCircleArea(double radius) {
        // Validate input parameter
        if(radius < 0) {
            throw new IllegalArgumentException("Radius cannot be negative");
        }
        
        /*
         * Formula for circle area: A = PI * r^2
         * Using Math.pow for exponentiation
         */
        double area = PI * Math.pow(radius, 2);
        
        // Increment usage counter for analytics
        counter++;
        
        return area;
    }
    
    /**
     * Displays the number of times area calculations were performed.
     */
    public void displayUsageCount() {
        // Print counter value to console
        System.out.println("Area calculated " + counter + " times.");
    }
    
    public static void main(String[] args) {
        CommentsDemo demo = new CommentsDemo();
        
        double area1 = demo.calculateCircleArea(5.0);
        System.out.println("Area of circle with radius 5: " + area1);
        
        double area2 = demo.calculateCircleArea(10.0);
        System.out.println("Area of circle with radius 10: " + area2);
        
        demo.displayUsageCount();
    }
}
```

### Interview Questions
- **Q: Does commenting affect program performance?**
  **A:** No, the compiler ignores comments completely.
- **Q: What is a Javadoc comment?**
  **A:** A documentation comment (/** ... */) used to generate HTML API docs.
- **Q: Can comments be nested?**
  **A:** No, Java does not support nested multi-line comments.


---


## 12. Control Statements (Selection, Loop, Branching/Jump)

### Detailed Theoretical Explanation

Control statements govern the flow of execution in a Java program. Without control statements, a program would execute sequentially from top to bottom without any ability to make decisions, repeat operations, or alter its path based on conditions. Java provides three categories of control statements: selection/decision-making statements, loop/iteration statements, and branching/jump statements.

Selection statements (if, if-else, switch) allow the program to choose between alternative paths of execution based on boolean conditions. The if statement executes a block of code only if its condition evaluates to true. The if-else statement provides an alternative block to execute when the condition is false. The switch statement evaluates an expression against multiple constant values (cases) and transfers control to the matching case label. The switch statement in modern Java supports String, enum, and integer types, and can include a default case for when no match is found.

Loop statements (for, while, do-while, for-each) enable repetitive execution of a block of code. The for loop is ideal when the number of iterations is known in advance; it consists of an initialization, a condition, and an increment/decrement expression. The while loop evaluates its condition before each iteration and continues as long as the condition is true. The do-while loop is similar but guarantees at least one execution because it evaluates the condition after the loop body. The enhanced for loop (for-each) provides a clean syntax for iterating over arrays and collections without needing an index variable.

Branching statements (break, continue, return) alter the normal flow within loops and methods. The break statement immediately terminates the innermost loop or switch statement. The continue statement skips the remaining code in the current iteration and proceeds to the next iteration. The return statement exits the current method and optionally passes a value back to the caller.

### Flow Chart: if-else Decision

```
+-----------+
|   Start   |
+-----------+
     |
     v
+-----------+     +----------+
| Condition | --> |  True    |
|    ?      |     | Execute  |
+-----------+     | Block A  |
     | No         +----------+
     v                 |
+----------+           v
|  False   |      +-----------+
| Execute  |      |   End     |
| Block B  |      +-----------+
+----------+
     |
     v
+-----------+
|   End     |
+-----------+
```

### Flow Chart: for Loop

```
+-----------+
| Initialize|
+-----------+
     |
     v
+-----------+     +----------+
| Condition | --> |  True    |
|    ?      |     | Execute  |
+-----------+     | Loop Body|
     | No         +----------+
     v                 |
+----------+     +-----------+
|   Exit   | <-- | Increment |
+----------+     +-----------+
```

### Example Code

```java
public class ControlStatementsDemo {
    public static void main(String[] args) {
        // if-else-if ladder
        int score = 85;
        System.out.println("--- Selection Statements ---");
        if(score >= 90) {
            System.out.println("Grade: A");
        } else if(score >= 80) {
            System.out.println("Grade: B");
        } else if(score >= 70) {
            System.out.println("Grade: C");
        } else if(score >= 60) {
            System.out.println("Grade: D");
        } else {
            System.out.println("Grade: F");
        }
        
        // switch statement
        int dayNumber = 3;
        String dayName;
        switch(dayNumber) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default: dayName = "Invalid day";
        }
        System.out.println("Day " + dayNumber + " is " + dayName);
        
        // for loop
        System.out.println("
--- For Loop ---");
        for(int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // while loop
        System.out.println("
--- While Loop ---");
        int count = 5;
        while(count > 0) {
            System.out.print(count + " ");
            count--;
        }
        System.out.println();
        
        // do-while loop
        System.out.println("
--- Do-While Loop ---");
        int num = 1;
        do {
            System.out.print(num + " ");
            num++;
        } while(num <= 5);
        System.out.println();
        
        // for-each loop
        System.out.println("
--- For-Each Loop ---");
        String[] fruits = {"Apple", "Banana", "Cherry", "Date"};
        for(String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        System.out.println();
        
        // break and continue
        System.out.println("
--- Break and Continue ---");
        for(int i = 1; i <= 10; i++) {
            if(i == 3) continue;
            if(i == 7) break;
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```

### Interview Questions
- **Q: What is the difference between while and do-while loops?**
  **A:** while checks condition before execution; do-while checks after, guaranteeing at least one execution.
- **Q: Can a switch statement work with long values?**
  **A:** No, switch supports int, short, byte, char, String, and enum.
- **Q: What does the break statement do?**
  **A:** It immediately exits the innermost loop or switch statement.


---


## 13. Modifiers (Access and Non-Access)

### Detailed Theoretical Explanation

Java modifiers are keywords that alter the behavior of classes, methods, variables, and other program elements. They are broadly categorized into access modifiers and non-access modifiers. Access modifiers control the visibility and accessibility of classes and members across different packages and subclasses. Non-access modifiers provide additional semantics such as immutability, abstraction, and threading behavior.

Access modifiers include public, protected, default (package-private), and private. A public class or member is accessible from any other class in any package. A protected member is accessible within its own package and by subclasses in other packages. A member with no modifier (default/package-private) is accessible only within its own package. A private member is accessible only within the class in which it is declared, providing the highest level of encapsulation.

Non-access modifiers include static, final, abstract, synchronized, volatile, and transient. The static modifier associates a member with the class itself rather than with individual instances. The final modifier makes a variable unmodifiable after initialization, prevents method overriding, and prevents class inheritance. The abstract modifier declares a class that cannot be instantiated directly or a method that lacks implementation. The synchronized modifier ensures that a method or block can be accessed by only one thread at a time. The volatile modifier guarantees that the value of a variable is always read from main memory. The transient modifier indicates that a field should not be serialized.

### Memory and Access Diagram

```
+----------------------------------------------------------+
|                         public                           |
|  Accessible everywhere                                   |
+----------------------------------------------------------+
|         protected          |         default             |
|  Package + subclasses      |  Package only               |
+----------------------------+-----------------------------+
|                         private                          |
|  Class only                                              |
+----------------------------------------------------------+
```

### Example Code

```java
public class ModifiersDemo {
    public String publicField = "I am public";
    protected String protectedField = "I am protected";
    String defaultField = "I am package-private";
    private String privateField = "I am private";
    public static int staticCounter = 0;
    public final int MAX_SIZE = 100;
    public volatile boolean flag = false;
    public transient String tempData = "Temporary";
    
    public ModifiersDemo() { staticCounter++; }
    
    public synchronized void incrementCounter() {
        staticCounter++;
        System.out.println("Counter: " + staticCounter);
    }
    
    public final void displayInfo() {
        System.out.println("
--- Field Access ---");
        System.out.println("Public: " + publicField);
        System.out.println("Protected: " + protectedField);
        System.out.println("Default: " + defaultField);
        System.out.println("Private: " + privateField);
        System.out.println("Static Counter: " + staticCounter);
        System.out.println("Final Max Size: " + MAX_SIZE);
    }
    
    public static void main(String[] args) {
        ModifiersDemo obj1 = new ModifiersDemo();
        ModifiersDemo obj2 = new ModifiersDemo();
        obj1.displayInfo();
        obj2.displayInfo();
        System.out.println("
Total objects created: " + ModifiersDemo.staticCounter);
    }
}

abstract class Shape {
    public abstract double calculateArea();
    public void displayShapeType() { System.out.println("This is a shape."); }
}

class Circle extends Shape {
    private double radius;
    public Circle(double radius) { this.radius = radius; }
    @Override public double calculateArea() { return Math.PI * radius * radius; }
}
```

### Interview Questions
- **Q: What is the difference between public and protected access?**
  **A:** public is accessible everywhere; protected is accessible in the same package and by subclasses.
- **Q: What does the final keyword do?**
  **A:** It prevents modification of variables, overriding of methods, and inheritance of classes.
- **Q: What is the purpose of the volatile keyword?**
  **A:** It ensures that the variable's value is always read from main memory, not thread caches.


---


## 14. OOPS Concepts and Their Implementation in Java

### Detailed Theoretical Explanation

Object-Oriented Programming (OOP) is a programming paradigm centered around objects rather than functions and logic. Java is a fully object-oriented language that embodies four core principles: encapsulation, inheritance, polymorphism, and abstraction. These principles promote modularity, reusability, maintainability, and scalability in software development.

Encapsulation is the bundling of data (fields) and the methods that operate on that data into a single unit (class), while restricting direct access to some components. In Java, encapsulation is achieved by declaring fields as private and providing public getter and setter methods. This protects the internal state of an object from unintended modification and allows the class to enforce validation rules.

Inheritance is the mechanism by which one class (subclass/child) acquires the properties and behaviors of another class (superclass/parent). The extends keyword is used to establish an inheritance relationship. Inheritance promotes code reuse and establishes an IS-A relationship between classes. For example, a Dog class extends Animal, meaning Dog IS-A Animal. Java supports single inheritance for classes but multiple inheritance for interfaces.

Polymorphism means many forms and allows objects of different classes to be treated as objects of a common superclass. It manifests in two ways: compile-time polymorphism (method overloading) and runtime polymorphism (method overriding). Overloading allows multiple methods with the same name but different parameter lists in the same class. Overriding allows a subclass to provide a specific implementation of a method already defined in its superclass. The JVM determines at runtime which method to invoke based on the actual object's class, enabling dynamic dispatch.

Abstraction hides complex implementation details and exposes only essential functionalities. In Java, abstraction is achieved through abstract classes and interfaces. An abstract class can contain both abstract methods (without bodies) and concrete methods (with bodies). An interface is a completely abstract class that defines a contract of methods that implementing classes must fulfill.

Association represents a relationship between two classes where one class uses or interacts with another. Aggregation is a weak HAS-A relationship where the contained object can exist independently of the container. Composition is a strong HAS-A relationship where the contained object cannot exist without the container. Cohesion refers to how closely related the responsibilities of a class are, while coupling refers to the degree of interdependence between classes. High cohesion and low coupling are desirable design goals.

### Flow Chart: OOPS Concepts

```
+------------+     +----------------+     +------------------+
|   Class    | --> | Encapsulation  | -->| Private fields   |
| Definition |     | (Data Hiding)  |    | Public methods   |
+------------+     +----------------+    +------------------+
       |
       v
+------------+     +----------------+     +------------------+
| Inheritance| --> | extends keyword| -->| Code Reuse       |
| (IS-A)     |     | Parent -> Child|    | Method Override  |
+------------+     +----------------+    +------------------+
       |
       v
+------------+     +----------------+     +------------------+
| Polymorph. | --> | Overloading    | -->| Compile-time     |
| (Many      |     | Overriding     |    | Runtime          |
|  Forms)    |     | Dynamic Dispatch|   | Flexibility      |
+------------+     +----------------+    +------------------+
       |
       v
+------------+     +----------------+     +------------------+
| Abstraction| --> | Abstract Class | -->| Hide complexity  |
| (Hide      |     | Interface      |    | Show essentials  |
|  Details)  |     |                |    |                  |
+------------+     +----------------+    +------------------+
```

### Example Code

```java
// Encapsulation example
class Employee {
    private int id;
    private String name;
    private double salary;
    
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    
    public int getId() { return id; }
    public String getName() { return name; }
    public double getSalary() { return salary; }
    public void setSalary(double salary) {
        if(salary > 0) this.salary = salary;
    }
    public void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

// Inheritance and Polymorphism example
class Animal {
    public void makeSound() { System.out.println("Animal makes a sound"); }
}

class Dog extends Animal {
    @Override public void makeSound() { System.out.println("Dog barks"); }
    public void fetch() { System.out.println("Dog fetches the ball"); }
}

class Cat extends Animal {
    @Override public void makeSound() { System.out.println("Cat meows"); }
}

// Abstraction example
interface Drawable {
    void draw();
}

class Rectangle implements Drawable {
    public void draw() { System.out.println("Drawing a Rectangle"); }
}

class Triangle implements Drawable {
    public void draw() { System.out.println("Drawing a Triangle"); }
}

public class OOPSDemo {
    public static void main(String[] args) {
        // Encapsulation
        Employee emp = new Employee(101, "Alice", 50000);
        emp.display();
        emp.setSalary(55000);
        emp.display();
        
        // Polymorphism
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        myDog.makeSound();
        myCat.makeSound();
        
        // Abstraction
        Drawable d1 = new Rectangle();
        Drawable d2 = new Triangle();
        d1.draw();
        d2.draw();
        
        // Method overloading
        System.out.println("
Sum of 2 ints: " + add(5, 10));
        System.out.println("Sum of 3 ints: " + add(5, 10, 15));
        System.out.println("Sum of 2 doubles: " + add(5.5, 10.5));
    }
    
    // Overloaded methods
    public static int add(int a, int b) { return a + b; }
    public static int add(int a, int b, int c) { return a + b + c; }
    public static double add(double a, double b) { return a + b; }
}
```

### Interview Questions
- **Q: What are the four pillars of OOP?**
  **A:** Encapsulation, Inheritance, Polymorphism, and Abstraction.
- **Q: What is the difference between method overloading and overriding?**
  **A:** Overloading is compile-time, same name different params in same class. Overriding is runtime, same signature in subclass.
- **Q: Can a class extend multiple classes in Java?**
  **A:** No, Java does not support multiple inheritance of classes, but it does support multiple inheritance of interfaces.
- **Q: What is the difference between aggregation and composition?**
  **A:** Aggregation is a weak HAS-A (parts can exist independently); composition is strong HAS-A (parts cannot exist without the whole).


---


## 15. String Handling (String Pool, String Class, StringBuffer, StringBuilder, CharSequence)

### Detailed Theoretical Explanation

String handling is one of the most frequently used operations in Java programming. The String class represents an immutable sequence of characters, meaning that once a String object is created, its value cannot be changed. Any operation that appears to modify a string actually creates a new String object in the heap. This immutability provides several benefits: thread safety (strings can be shared between threads without synchronization), security (sensitive data cannot be modified after creation), and hash code caching (enabling efficient use as keys in hash-based collections).

The String Pool (also known as the intern pool) is a special memory region inside the Java heap where string literals are stored. When a string literal is created, the JVM checks the pool first; if the string already exists, a reference to the existing object is returned instead of creating a new object. This conserves memory when the same string literal is used multiple times. Strings created using the new keyword, however, always create a new object on the heap outside the pool unless explicitly interned using the intern() method.

StringBuffer and StringBuilder are mutable alternatives to String that are used when frequent modifications are needed. StringBuffer is thread-safe because all its methods are synchronized, making it suitable for multi-threaded environments but slightly slower due to synchronization overhead. StringBuilder, introduced in Java 5, is not synchronized and therefore faster for single-threaded use cases. Both classes use an expandable character array internally, which avoids the overhead of creating numerous intermediate string objects during concatenation or modification operations.

The CharSequence interface is a common super-interface for String, StringBuffer, and StringBuilder. It provides read-only access to a sequence of characters and is often used as a parameter type in methods that need to accept any of these string representations. Key methods include length(), charAt(), subSequence(), and toString().

### Memory Diagram: String Pool

```
Heap Memory
+---------------------+
|   String Pool       |
|  +---------------+  |
|  | "Hello"       |  |<-- s1 (literal)
|  +---------------+  |<-- s2 (literal, same ref)
|  | "World"       |  |<-- s3 (literal)
|  +---------------+  |
+---------------------+
|  new String("Hello")|  <-- s4 (separate heap obj)
+---------------------+
```

### Example Code

```java
public class StringHandlingDemo {
    public static void main(String[] args) {
        // String immutability
        String s1 = "Hello";
        String s2 = s1.concat(" World");
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        
        // String pool demonstration
        String a = "Java";
        String b = "Java";
        String c = new String("Java");
        System.out.println("
a == b: " + (a == b));
        System.out.println("a == c: " + (a == c));
        System.out.println("a.equals(c): " + a.equals(c));
        
        // StringBuffer
        StringBuffer sb = new StringBuffer("Mutable");
        sb.append(" StringBuffer");
        sb.insert(8, "Java ");
        sb.reverse();
        System.out.println("
StringBuffer result: " + sb);
        
        // StringBuilder
        StringBuilder sbuilder = new StringBuilder("Builder");
        sbuilder.append(" Example");
        sbuilder.replace(0, 7, "String");
        System.out.println("StringBuilder result: " + sbuilder);
        
        // Common String methods
        String text = "  Hello Java World  ";
        System.out.println("
Original: '" + text + "'");
        System.out.println("trim(): '" + text.trim() + "'");
        System.out.println("length(): " + text.length());
        System.out.println("substring(8,12): " + text.substring(8, 12));
        System.out.println("toUpperCase(): " + text.toUpperCase());
        System.out.println("contains('Java'): " + text.contains("Java"));
        System.out.println("indexOf('Java'): " + text.indexOf("Java"));
        System.out.println("replace('Java','Python'): " + text.replace("Java", "Python"));
        
        // Split
        String csv = "apple,banana,cherry,date";
        String[] fruits = csv.split(",");
        System.out.println("
Split result:");
        for(String fruit : fruits) {
            System.out.println("  " + fruit);
        }
    }
}
```

### Interview Questions
- **Q: Why is String immutable in Java?**
  **A:** For security, thread safety, and hash code caching efficiency.
- **Q: What is the difference between StringBuffer and StringBuilder?**
  **A:** StringBuffer is thread-safe (synchronized); StringBuilder is faster but not thread-safe.
- **Q: What is the String Pool?**
  **A:** A special memory region in the heap where string literals are stored and reused.
- **Q: How do you compare two strings for content equality?**
  **A:** Using the .equals() method, not == (which checks reference equality).


---


## 16. Assertion

### Detailed Theoretical Explanation

Assertions in Java are a debugging tool used to verify assumptions about the program's state during development and testing. The assert keyword allows developers to specify conditions that they believe should always be true at a particular point in the code. If the condition evaluates to false, the JVM throws an AssertionError, which typically terminates the program and helps identify the source of the unexpected behavior. Assertions are not intended for handling runtime errors that users might encounter; instead, they are used to catch programming errors during development.

The syntax for assertions comes in two forms: assert condition; and assert condition : message;. The second form includes a descriptive message that is passed to the AssertionError constructor, making it easier to diagnose the failure. By default, assertions are disabled at runtime because they impose a small performance overhead. They can be enabled using the -ea (enable assertions) or -enableassertions flag when launching the JVM. Assertions can also be selectively enabled or disabled for specific classes or packages using flags like -ea:com.example.package.

A common use case for assertions is checking preconditions and postconditions in methods. For example, a method that calculates a square root might assert that the input parameter is non-negative. Another use case is verifying class invariants after constructor execution or ensuring that a switch statement has a default case that should never be reached. Because assertions can be disabled in production, they should never be used to validate user input or to perform operations that have side effects (such as modifying data structures), since those side effects would not occur when assertions are disabled.

### Flow Chart: Assertion Execution

```
+-----------+
|   Start   |
+-----------+
     |
     v
+-----------+     +----------------+
| assert    | --> |  True          |
| condition |     |  Continue      |
+-----------+     |  Execution     |
     | False       +----------------+
     v
+-----------+
| Assertion |
|   Error   |
+-----------+
     |
     v
+-----------+
|  Terminate|
+-----------+
```

### Example Code

```java
public class AssertionDemo {
    public static void main(String[] args) {
        // Enable assertions with -ea flag when running
        int age = 25;
        assert age >= 0 : "Age cannot be negative";
        System.out.println("Age is valid: " + age);
        
        // Asserting method preconditions
        int result = calculateFactorial(5);
        System.out.println("Factorial of 5: " + result);
        
        // This would throw AssertionError if assertions are enabled
        // int invalid = calculateFactorial(-3);
        
        // Asserting array bounds
        int[] numbers = {10, 20, 30, 40, 50};
        assert numbers.length == 5 : "Array must contain exactly 5 elements";
        System.out.println("
Array elements:");
        for(int i = 0; i < numbers.length; i++) {
            assert numbers[i] > 0 : "Element at index " + i + " must be positive";
            System.out.println("  Index " + i + ": " + numbers[i]);
        }
        
        // Asserting postcondition
        double sqrt = squareRoot(16.0);
        assert sqrt >= 0 : "Square root must be non-negative";
        System.out.println("
Square root of 16: " + sqrt);
    }
    
    public static int calculateFactorial(int n) {
        assert n >= 0 : "Input must be non-negative, got: " + n;
        int result = 1;
        for(int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    public static double squareRoot(double value) {
        assert value >= 0 : "Cannot compute square root of negative number";
        return Math.sqrt(value);
    }
}
```

### Interview Questions
- **Q: What happens if an assertion fails?**
  **A:** An AssertionError is thrown, typically terminating the program.
- **Q: Are assertions enabled by default?**
  **A:** No, they must be explicitly enabled with the -ea JVM flag.
- **Q: Should assertions be used for user input validation?**
  **A:** No, use exceptions for runtime validation; assertions are for debugging assumptions.


---


## 17. Thread and Concurrency

### Detailed Theoretical Explanation

Multithreading in Java allows a program to execute multiple threads concurrently, enabling efficient utilization of CPU resources and improved responsiveness in applications. A thread is the smallest unit of execution within a process. In Java, threads can be created by extending the Thread class or by implementing the Runnable interface. The Runnable approach is preferred because it separates the task logic from the threading mechanism and allows the class to extend another class if needed.

Thread lifecycle states include NEW (created but not started), RUNNABLE (ready or running), BLOCKED (waiting for a monitor lock), WAITING (waiting indefinitely for another thread), TIMED_WAITING (waiting for a specified duration), and TERMINATED (execution completed). Transitions between these states are managed by the JVM thread scheduler, which determines which thread receives CPU time based on priorities and platform-specific scheduling algorithms.

Synchronization is critical in multi-threaded programs to prevent race conditions, where multiple threads access shared data concurrently and produce inconsistent results. Java provides the synchronized keyword to create mutually exclusive locks on methods or blocks of code. When a thread enters a synchronized method, it acquires the object's monitor lock, preventing other threads from entering any synchronized method on that same object until the lock is released. The wait(), notify(), and notifyAll() methods allow threads to coordinate their execution by pausing and waking each other.

The java.util.concurrent package, introduced in Java 5, provides high-level concurrency utilities that are often preferred over low-level synchronized blocks. These include ExecutorService for managing thread pools, CountDownLatch and CyclicBarrier for synchronizing multiple threads, BlockingQueue for thread-safe producer-consumer patterns, and ConcurrentHashMap for thread-safe map operations without locking the entire collection.

### Flow Chart: Thread Lifecycle

```
+--------+     +-----------+     +----------+
|  NEW   | --> |  start()  | --> | RUNNABLE |
+--------+     +-----------+     +----------+
                                     |
                     +---------------+---------------+
                     |               |               |
                     v               v               v
                +--------+     +-------+      +---------+
                | BLOCKED|     | WAITING|     | TIMED   |
                | (lock) |     | (wait) |     | WAITING |
                +--------+     +-------+      +---------+
                     |               |               |
                     +---------------+---------------+
                                     |
                                     v
                                +----------+
                                | TERMINATED|
                                +----------+
```

### Example Code

```java
class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }
    public synchronized int getCount() { return count; }
}

class Worker implements Runnable {
    private Counter counter;
    public Worker(Counter counter) { this.counter = counter; }
    public void run() {
        for(int i = 0; i < 1000; i++) {
            counter.increment();
        }
    }
}

public class ThreadConcurrencyDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        Thread t1 = new Thread(new Worker(counter));
        Thread t2 = new Thread(new Worker(counter));
        Thread t3 = new Thread(new Worker(counter));
        
        long startTime = System.currentTimeMillis();
        t1.start();
        t2.start();
        t3.start();
        
        t1.join();
        t2.join();
        t3.join();
        
        long endTime = System.currentTimeMillis();
        System.out.println("Final count: " + counter.getCount());
        System.out.println("Expected count: 3000");
        System.out.println("Time taken: " + (endTime - startTime) + " ms");
        
        // Daemon thread example
        Thread daemon = new Thread(() -> {
            while(true) {
                System.out.println("Daemon running...");
                try { Thread.sleep(1000); } catch(InterruptedException e) { break; }
            }
        });
        daemon.setDaemon(true);
        daemon.start();
        Thread.sleep(2500);
        System.out.println("Main thread ending; daemon will terminate.");
    }
}
```

### Interview Questions
- **Q: What is the difference between extending Thread and implementing Runnable?**
  **A:** Runnable is preferred because Java supports single inheritance; Runnable separates task logic from thread management.
- **Q: What is a race condition?**
  **A:** A situation where multiple threads access shared data concurrently, leading to inconsistent results.
- **Q: What is the difference between sleep() and wait()?**
  **A:** sleep() pauses the thread for a specified time without releasing locks; wait() releases the lock and waits until notified.
- **Q: What is a daemon thread?**
  **A:** A low-priority thread that runs in the background and terminates automatically when all user threads finish.


---


## 18. Exception Handling

### Detailed Theoretical Explanation

Exception handling in Java is a powerful mechanism for managing runtime errors and abnormal conditions gracefully without crashing the application. An exception is an event that disrupts the normal flow of program execution. Java uses a class hierarchy rooted at java.lang.Throwable, which has two main subclasses: Error (representing serious system-level problems that applications should not typically handle, such as OutOfMemoryError) and Exception (representing conditions that applications might want to catch and recover from).

Exceptions are further divided into checked and unchecked categories. Checked exceptions ( subclasses of Exception but not RuntimeException) are verified at compile time; the compiler requires that they either be caught in a try-catch block or declared in the method's throws clause. Examples include IOException, SQLException, and ClassNotFoundException. Unchecked exceptions (subclasses of RuntimeException) are not checked at compile time and usually indicate programming errors such as NullPointerException, ArrayIndexOutOfBoundsException, and IllegalArgumentException.

The try-catch-finally block is the primary construct for exception handling. The try block encloses code that might throw an exception. One or more catch blocks follow, each designed to handle a specific exception type. The finally block contains code that executes regardless of whether an exception occurred, making it ideal for resource cleanup such as closing files or database connections. Java 7 introduced the try-with-resources statement, which automatically closes resources that implement the AutoCloseable interface at the end of the block, simplifying cleanup code significantly.

Developers can also create custom exception classes by extending Exception or RuntimeException. Custom exceptions improve code readability and allow applications to define domain-specific error conditions. Proper exception handling includes catching specific exceptions rather than generic Exception, avoiding empty catch blocks, preserving stack traces when re-throwing exceptions, and using finally or try-with-resources for reliable resource management.

### Flow Chart: Exception Handling Flow

```
+-----------+
|   Try     |
|   Block   |
+-----------+
     |
     v
+-----------+     +-----------+
| Exception | --> |  Catch    |
| Occurs?   |     |  Block    |
+-----------+     +-----------+
     | No                |
     v                   v
+-----------+     +-----------+
| Continue  |     | Finally   |
| Execution |     | Block     |
+-----------+     +-----------+
     |                   |
     +---------+---------+
               |
               v
          +---------+
          |   End   |
          +---------+
```

### Example Code

```java
import java.io.*;

public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch(ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e.getMessage());
        }
        
        // Multiple catch blocks
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);
        } catch(ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds: " + e.getMessage());
        } catch(Exception e) {
            System.out.println("General exception: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed.");
        }
        
        // Try-with-resources
        try (BufferedReader br = new BufferedReader(new FileReader("nonexistent.txt"))) {
            String line = br.readLine();
            System.out.println(line);
        } catch(IOException e) {
            System.out.println("IOException caught: " + e.getMessage());
        }
        
        // Throwing and propagating exceptions
        try {
            validateAge(-5);
        } catch(IllegalArgumentException e) {
            System.out.println("Validation failed: " + e.getMessage());
        }
        
        // Custom exception
        try {
            checkBalance(100, 200);
        } catch(InsufficientFundsException e) {
            System.out.println("Custom exception: " + e.getMessage());
        }
    }
    
    public static void validateAge(int age) {
        if(age < 0) {
            throw new IllegalArgumentException("Age cannot be negative: " + age);
        }
        System.out.println("Valid age: " + age);
    }
    
    public static void checkBalance(double balance, double amount) throws InsufficientFundsException {
        if(amount > balance) {
            throw new InsufficientFundsException("Balance: " + balance + ", Requested: " + amount);
        }
        System.out.println("Withdrawal successful.");
    }
}

class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) { super(message); }
}
```

### Interview Questions
- **Q: What is the difference between checked and unchecked exceptions?**
  **A:** Checked exceptions are verified at compile time and must be handled or declared. Unchecked exceptions are RuntimeExceptions and do not require explicit handling.
- **Q: What is the purpose of the finally block?**
  **A:** It executes regardless of whether an exception occurs, ideal for cleanup.
- **Q: Can you catch multiple exceptions in a single catch block?**
  **A:** Yes, using multi-catch syntax: catch(IOException | SQLException e).
- **Q: What is try-with-resources?**
  **A:** A Java 7 feature that automatically closes resources implementing AutoCloseable.


---


## 19. Nested Classes (Static Nested, Inner Classes, Anonymous)

### Detailed Theoretical Explanation

Nested classes in Java are classes defined within another class. They are used to logically group classes that are only used in one place, increasing encapsulation and readability. Java supports four types of nested classes: static nested classes, inner classes (non-static), local inner classes, and anonymous inner classes. A static nested class is associated with its outer class rather than an instance of the outer class, and it can access only static members of the outer class. An inner class (non-static) is associated with an instance of the outer class and can access all members, including private members, of the enclosing instance.

Local inner classes are defined within a method block and have access to the method's local variables (if they are effectively final). They are useful when a class is needed only within a single method and should not be visible outside it. Anonymous inner classes are a special form of local class that has no name and is declared and instantiated in a single expression. They are commonly used to implement interfaces or extend classes on the fly, such as event listeners in GUI programming. Anonymous classes are concise but can make code harder to read if overused.

### Example Code

```java
public class NestedClassesDemo {
    private int outerField = 100;
    private static int staticOuterField = 200;
    
    // Static nested class
    static class StaticNested {
        void display() {
            System.out.println("Static nested accessing: " + staticOuterField);
        }
    }
    
    // Inner class
    class Inner {
        void display() {
            System.out.println("Inner accessing outerField: " + outerField);
        }
    }
    
    void localClassDemo() {
        int localVar = 50;
        // Local inner class
        class LocalInner {
            void display() {
                System.out.println("Local inner accessing: " + outerField + ", local: " + localVar);
            }
        }
        LocalInner li = new LocalInner();
        li.display();
    }
    
    void anonymousClassDemo() {
        Runnable r = new Runnable() {
            public void run() {
                System.out.println("Anonymous inner class running.");
            }
        };
        r.run();
    }
    
    public static void main(String[] args) {
        NestedClassesDemo.StaticNested sn = new NestedClassesDemo.StaticNested();
        sn.display();
        
        NestedClassesDemo outer = new NestedClassesDemo();
        NestedClassesDemo.Inner inner = outer.new Inner();
        inner.display();
        
        outer.localClassDemo();
        outer.anonymousClassDemo();
    }
}
```

### Interview Questions
- **Q: What is the difference between a static nested class and an inner class?**
  **A:** Static nested class does not require an outer instance; inner class is tied to an instance of the outer class.
- **Q: Can a local class access non-final local variables?**
  **A:** In modern Java, it can access effectively final variables (variables that are not modified after initialization).


---


## 20. Serialization and Deserialization

### Detailed Theoretical Explanation

Serialization is the process of converting an object's state into a byte stream so that it can be stored in a file, transmitted over a network, or persisted in a database. Deserialization is the reverse process: reconstructing the object from the byte stream. In Java, serialization is achieved by implementing the java.io.Serializable marker interface, which has no methods but signals to the JVM that the class can be serialized. The ObjectOutputStream class handles serialization, while ObjectInputStream handles deserialization.

The serialVersionUID is a unique identifier for a serializable class. It is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes that are compatible. If the serialVersionUID does not match, an InvalidClassException is thrown. Developers should explicitly declare serialVersionUID to maintain compatibility across different versions of a class. Fields marked with the transient keyword are not serialized, which is useful for sensitive data (passwords, keys) or computed values that can be derived from other fields.

### Example Code

```java
import java.io.*;

class Employee implements Serializable {
    private static final long serialVersionUID = 1L;
    private int id;
    private String name;
    private transient String password; // sensitive data, not serialized
    
    public Employee(int id, String name, String password) {
        this.id = id; this.name = name; this.password = password;
    }
    
    public void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Password: " + password);
    }
}

public class SerializationDemo {
    public static void main(String[] args) {
        Employee emp = new Employee(101, "Alice", "secret123");
        String filename = "employee.ser";
        
        // Serialization
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
            oos.writeObject(emp);
            System.out.println("Object serialized successfully.");
        } catch(IOException e) { e.printStackTrace(); }
        
        // Deserialization
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
            Employee restored = (Employee) ois.readObject();
            System.out.println("Object deserialized.");
            restored.display(); // password will be null due to transient
        } catch(IOException | ClassNotFoundException e) { e.printStackTrace(); }
    }
}
```

### Interview Questions
- **Q: What is the purpose of the transient keyword?**
  **A:** It prevents a field from being serialized.
- **Q: What is serialVersionUID?**
  **A:** A unique identifier used during deserialization to ensure class compatibility.


---


## 21. Important Packages (java.lang, java.util, java.math)

### Detailed Theoretical Explanation

Java provides a rich set of built-in packages that form the foundation of the Java API. The java.lang package is the most fundamental and is automatically imported into every Java program. It contains core classes such as Object, String, System, Math, Thread, and wrapper classes (Integer, Double, etc.). The java.util package contains utility classes and data structures, including collections (List, Set, Map), date and time utilities, random number generators, and scanner for input. The java.math package provides classes for arbitrary-precision arithmetic (BigInteger and BigDecimal), which are essential for financial and scientific applications where standard primitive types lack sufficient precision.

The java.io and java.nio packages handle input and output operations, including file system access, stream processing, and network communication. The java.net package provides classes for networking, including URL, URI, sockets, and HTTP connections. Understanding these core packages is essential for everyday Java development because they provide the building blocks for almost every application.

### Example Code

```java
import java.util.*;
import java.math.BigDecimal;

public class ImportantPackagesDemo {
    public static void main(String[] args) {
        // java.util - ArrayList and Scanner
        ArrayList<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        System.out.println("Names: " + names);
        
        // java.math - BigDecimal for precision
        BigDecimal price = new BigDecimal("19.99");
        BigDecimal tax = new BigDecimal("0.08");
        BigDecimal total = price.add(price.multiply(tax));
        System.out.println("Total with tax: " + total);
        
        // java.lang - Math and System
        System.out.println("Square root of 16: " + Math.sqrt(16));
        System.out.println("Current time (ms): " + System.currentTimeMillis());
    }
}
```

### Interview Questions
- **Q: Which package is automatically imported in every Java program?**
  **A:** java.lang.
- **Q: What is the difference between BigInteger and BigDecimal?**
  **A:** BigInteger is for arbitrary-precision integers; BigDecimal is for arbitrary-precision floating-point arithmetic.


---


## 22. Object Class and Its Methods

### Detailed Theoretical Explanation

The Object class is the root of the Java class hierarchy. Every class in Java directly or indirectly extends Object, which means all objects inherit the methods defined in Object. Understanding these methods is crucial because they provide fundamental behaviors that can be overridden to customize object semantics. The key methods include toString(), equals(), hashCode(), getClass(), clone(), finalize(), wait(), notify(), and notifyAll().

The toString() method returns a string representation of the object and is commonly overridden to provide meaningful output for debugging and logging. The equals() method defines logical equality between objects; the default implementation in Object compares memory addresses (==), so it should be overridden to compare content. The hashCode() method returns an integer hash value used by hash-based collections (HashMap, HashSet). When equals() is overridden, hashCode() must also be overridden to maintain the contract that equal objects have equal hash codes.

The getClass() method returns the runtime Class object, enabling reflection. The clone() method creates a shallow copy of the object; classes must implement the Cloneable marker interface to support cloning. The finalize() method is called by the garbage collector before an object is destroyed, though its use is discouraged in modern Java in favor of try-with-resources and cleaner patterns. The wait(), notify(), and notifyAll() methods are used for inter-thread communication and synchronization.

### Example Code

```java
public class ObjectClassDemo {
    private int id;
    private String name;
    
    public ObjectClassDemo(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    @Override
    public String toString() {
        return "ObjectClassDemo{id=" + id + ", name='" + name + "'}";
    }
    
    @Override
    public boolean equals(Object obj) {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        ObjectClassDemo other = (ObjectClassDemo) obj;
        return id == other.id && name.equals(other.name);
    }
    
    @Override
    public int hashCode() {
        int result = Integer.hashCode(id);
        result = 31 * result + name.hashCode();
        return result;
    }
    
    public static void main(String[] args) {
        ObjectClassDemo obj1 = new ObjectClassDemo(1, "Alice");
        ObjectClassDemo obj2 = new ObjectClassDemo(1, "Alice");
        ObjectClassDemo obj3 = new ObjectClassDemo(2, "Bob");
        
        System.out.println("obj1.toString(): " + obj1);
        System.out.println("obj1.equals(obj2): " + obj1.equals(obj2));
        System.out.println("obj1.equals(obj3): " + obj1.equals(obj3));
        System.out.println("obj1.hashCode(): " + obj1.hashCode());
        System.out.println("obj2.hashCode(): " + obj2.hashCode());
        System.out.println("obj1.getClass(): " + obj1.getClass().getName());
    }
}
```

### Interview Questions
- **Q: Why should you override hashCode() when you override equals()?**
  **A:** To maintain the contract that equal objects must have equal hash codes, which is required for hash-based collections.
- **Q: What is the default behavior of equals() in Object?**
  **A:** It compares object references using ==.
- **Q: What does getClass() return?**
  **A:** The runtime Class object of the instance.


---


## 23. Regular Expressions

### Detailed Theoretical Explanation

Regular expressions (regex) are powerful patterns used for searching, matching, and manipulating text. Java provides robust regex support through the java.util.regex package, which includes the Pattern and Matcher classes. A Pattern object represents a compiled regular expression, which can be reused across multiple inputs for efficiency. A Matcher object performs match operations on a character sequence using a Pattern. Regex patterns consist of literal characters and metacharacters (such as ., *, +, ?, [], (), ^, $, \d, \w, \s) that define complex matching rules.

Common use cases include validating input formats (email addresses, phone numbers, postal codes), extracting specific substrings from text (parsing logs, scraping data), splitting strings based on complex delimiters, and replacing patterns within strings. Understanding regex syntax is essential for data validation, text processing, and many automation tasks in testing frameworks.

### Example Code

```java
import java.util.regex.*;

public class RegexDemo {
    public static void main(String[] args) {
        String text = "Contact us at support@example.com or sales@example.org";
        String emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}";
        
        Pattern pattern = Pattern.compile(emailPattern);
        Matcher matcher = pattern.matcher(text);
        
        System.out.println("Emails found:");
        while(matcher.find()) {
            System.out.println("  " + matcher.group());
        }
        
        // Validation
        String phone = "123-456-7890";
        System.out.println("
Phone valid? " + phone.matches("\d{3}-\d{3}-\d{4}"));
        
        // Replacement
        String masked = text.replaceAll(emailPattern, "[EMAIL]");
        System.out.println("Masked text: " + masked);
        
        // Splitting
        String csv = "apple,banana;cherry|date";
        String[] items = csv.split("[,;|]");
        System.out.println("
Split items:");
        for(String item : items) {
            System.out.println("  " + item);
        }
    }
}
```

### Interview Questions
- **Q: What is the difference between matches() and find()?**
  **A:** matches() checks the entire string against the pattern; find() searches for the next subsequence that matches.
- **Q: What does \d, \w, and \s represent?**
  **A:** \d = digit, \w = word character (alphanumeric + underscore), \s = whitespace.


---


## 24. Collections Framework (List, Set, Map, Queue, Iterator, Comparable, Comparator)

### Detailed Theoretical Explanation

The Java Collections Framework (JCF) is a unified architecture for representing and manipulating collections of objects. It provides a set of interfaces (Collection, List, Set, Map, Queue) and implementations (ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, PriorityQueue) that handle the storage, retrieval, and manipulation of data efficiently. The framework reduces programming effort by providing high-performance, reusable data structures and algorithms. All collection implementations are Serializable and support the Cloneable interface.

The List interface represents an ordered collection that allows duplicate elements. ArrayList provides dynamic array-based storage with fast random access but slower insertions/deletions in the middle. LinkedList uses a doubly-linked list, offering fast insertions/deletions but slower random access. The Set interface represents a collection that does not allow duplicates. HashSet provides constant-time performance for basic operations using a hash table. TreeSet maintains elements in sorted order using a Red-Black tree. The Map interface represents key-value pairs. HashMap provides fast lookup using hashing, while TreeMap maintains keys in sorted order. Understanding when to use each implementation is critical for writing efficient code.

### Example Code

```java
import java.util.*;

public class CollectionsFrameworkDemo {
    public static void main(String[] args) {
        // List - ArrayList
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        arrayList.add("Apple"); // duplicates allowed
        System.out.println("ArrayList: " + arrayList);
        
        // List - LinkedList
        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("First");
        linkedList.addLast("Last");
        linkedList.addFirst("NewFirst");
        System.out.println("LinkedList: " + linkedList);
        
        // Set - HashSet (no duplicates, unordered)
        Set<Integer> hashSet = new HashSet<>();
        hashSet.add(10);
        hashSet.add(20);
        hashSet.add(10); // duplicate ignored
        System.out.println("HashSet: " + hashSet);
        
        // Set - TreeSet (sorted)
        Set<Integer> treeSet = new TreeSet<>();
        treeSet.add(30);
        treeSet.add(10);
        treeSet.add(20);
        System.out.println("TreeSet (sorted): " + treeSet);
        
        // Map - HashMap
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Alice", 25);
        hashMap.put("Bob", 30);
        hashMap.put("Charlie", 35);
        System.out.println("HashMap: " + hashMap);
        System.out.println("Alice's age: " + hashMap.get("Alice"));
        
        // Map - TreeMap (sorted by key)
        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("Zebra", 1);
        treeMap.put("Apple", 2);
        treeMap.put("Mango", 3);
        System.out.println("TreeMap (sorted keys): " + treeMap);
        
        // Iteration
        System.out.println("
Iterating over ArrayList:");
        for(String fruit : arrayList) {
            System.out.println("  " + fruit);
        }
        
        // Iterator
        System.out.println("
Using Iterator on HashSet:");
        Iterator<Integer> it = hashSet.iterator();
        while(it.hasNext()) {
            System.out.println("  " + it.next());
        }
    }
}
```

### Interview Questions
- **Q: What is the difference between ArrayList and LinkedList?**
  **A:** ArrayList uses a dynamic array (fast random access, slow middle insertion); LinkedList uses doubly-linked nodes (fast insertion, slow random access).
- **Q: How does HashMap work internally?**
  **A:** It uses an array of buckets where each bucket is a linked list or tree of entries hashed by key.
- **Q: What is the difference between Set and Map?**
  **A:** Set stores unique elements only; Map stores key-value pairs with unique keys.


---


## 25. Cloning, Reflection, Class Loaders

### Detailed Theoretical Explanation

Cloning in Java creates a copy of an object. The Object class provides the clone() method, which performs a shallow copy by default (copying field values, including references to objects, rather than deep-copying nested objects). To support cloning, a class must implement the Cloneable marker interface; otherwise, calling clone() throws CloneNotSupportedException. For deep cloning, developers must manually clone nested objects within the overridden clone() method or use serialization-based approaches.

Reflection is a powerful feature that allows programs to inspect and manipulate classes, methods, fields, and constructors at runtime without knowing their names at compile time. The java.lang.reflect package provides classes such as Class, Method, Field, and Constructor. Reflection is used extensively in frameworks (Spring, Hibernate, JUnit) for dependency injection, ORM mapping, and dynamic proxy creation. However, reflection should be used sparingly because it breaks encapsulation, bypasses compile-time type checking, and has performance overhead.

Class loaders are responsible for dynamically loading Java classes into the JVM at runtime. The default class loader hierarchy includes the Bootstrap Class Loader (loads core JDK classes), Extension Class Loader (loads extension libraries), and Application Class Loader (loads user-defined classes from the classpath). Developers can also create custom class loaders to load classes from non-standard sources such as networks or encrypted files. Understanding class loading is important for diagnosing ClassNotFoundException and NoClassDefFoundError issues.

### Example Code

```java
import java.lang.reflect.*;

class Person implements Cloneable {
    String name;
    int age;
    public Person(String name, int age) { this.name = name; this.age = age; }
    
    @Override
    public Person clone() throws CloneNotSupportedException {
        return (Person) super.clone();
    }
}

public class ReflectionCloningDemo {
    public static void main(String[] args) throws Exception {
        // Cloning
        Person p1 = new Person("Alice", 30);
        Person p2 = p1.clone();
        System.out.println("Original: " + p1.name + ", Clone: " + p2.name);
        p2.name = "Bob";
        System.out.println("After clone modification - Original: " + p1.name + ", Clone: " + p2.name);
        
        // Reflection
        Class<?> cls = Class.forName("Person");
        System.out.println("
Class name: " + cls.getName());
        
        Constructor<?> constructor = cls.getConstructor(String.class, int.class);
        Object obj = constructor.newInstance("Charlie", 25);
        
        Field nameField = cls.getField("name");
        System.out.println("Field value: " + nameField.get(obj));
        
        Method[] methods = cls.getMethods();
        System.out.println("
Methods:");
        for(Method m : methods) {
            System.out.println("  " + m.getName());
        }
    }
}
```

### Interview Questions
- **Q: What is the difference between shallow copy and deep copy?**
  **A:** Shallow copy duplicates field values including references; deep copy duplicates referenced objects recursively.
- **Q: What is reflection used for?**
  **A:** Inspecting and manipulating classes, methods, and fields at runtime; used in frameworks and libraries.
- **Q: What are the types of class loaders in Java?**
  **A:** Bootstrap, Extension, and Application/System class loaders.


---


## 26. I/O and NIO API, RMI, Generics

### Detailed Theoretical Explanation

Java I/O (Input/Output) is used to process input and produce output through streams. The java.io package provides byte streams (InputStream, OutputStream) and character streams (Reader, Writer) for reading and writing data. Buffered streams (BufferedReader, BufferedWriter, BufferedInputStream, BufferedOutputStream) improve performance by reducing the number of native API calls. FileReader and FileWriter are convenience classes for reading and writing text files. ObjectInputStream and ObjectOutputStream support serialization.

The java.nio package (New I/O, introduced in Java 1.4) provides an alternative approach based on channels and buffers rather than streams. NIO supports non-blocking I/O, which is essential for building high-performance network servers that can handle many concurrent connections. Key classes include ByteBuffer, FileChannel, Selector, and SocketChannel. NIO.2 (introduced in Java 7) added the Path, Files, and FileSystem classes for modern file system operations.

RMI (Remote Method Invocation) allows Java objects running in one JVM to invoke methods on objects running in another JVM across a network. It provides a distributed computing model where remote objects are accessed through stubs and skeletons. Generics, introduced in Java 5, add type safety to collections and methods by allowing type parameters (e.g., List<String>). Generics eliminate the need for explicit casting, enable compile-time type checking, and reduce ClassCastException risks.

### Example Code

```java
import java.io.*;
import java.nio.file.*;

public class IOandGenericsDemo {
    public static void main(String[] args) {
        // Traditional I/O
        try (BufferedWriter bw = new BufferedWriter(new FileWriter("test.txt"))) {
            bw.write("Hello from Java I/O!");
            bw.newLine();
            bw.write("Line 2");
        } catch(IOException e) { e.printStackTrace(); }
        
        try (BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
            String line;
            while((line = br.readLine()) != null) {
                System.out.println("Read: " + line);
            }
        } catch(IOException e) { e.printStackTrace(); }
        
        // NIO.2
        Path path = Paths.get("nio_test.txt");
        try {
            Files.write(path, "Hello from NIO.2!".getBytes());
            String content = new String(Files.readAllBytes(path));
            System.out.println("NIO read: " + content);
        } catch(IOException e) { e.printStackTrace(); }
        
        // Generics
        GenericBox<String> stringBox = new GenericBox<>();
        stringBox.setItem("Generics Example");
        System.out.println("Box item: " + stringBox.getItem());
        
        GenericBox<Integer> intBox = new GenericBox<>();
        intBox.setItem(100);
        System.out.println("Box item: " + intBox.getItem());
    }
}

class GenericBox<T> {
    private T item;
    public void setItem(T item) { this.item = item; }
    public T getItem() { return item; }
}
```

### Interview Questions
- **Q: What is the difference between java.io and java.nio?**
  **A:** java.io is stream-based and blocking; java.nio is channel/buffer-based and supports non-blocking I/O.
- **Q: What is the benefit of generics?**
  **A:** Type safety at compile time, eliminating explicit casts and reducing runtime errors.
- **Q: What is RMI used for?**
  **A:** Remote Method Invocation enables distributed computing by invoking methods on remote JVMs.


---


## 27. Enum Types, Data Formatting, Resource Bundles, Annotations

### Detailed Theoretical Explanation

Enum types in Java represent a fixed set of constants, such as days of the week or compass directions. Introduced in Java 5, enums are full-fledged classes that can have fields, methods, and constructors. They provide type safety by ensuring that a variable can only hold one of the predefined constants. Enums implicitly extend java.lang.Enum and can implement interfaces. They are commonly used in switch statements and are naturally serializable and comparable.

Data formatting classes in java.text (DateFormat, SimpleDateFormat, NumberFormat, DecimalFormat) allow locale-sensitive formatting and parsing of dates, times, and numbers. The java.time package (Java 8+) provides a modern, immutable date-time API including LocalDate, LocalTime, LocalDateTime, ZonedDateTime, and DateTimeFormatter. Resource bundles (java.util.ResourceBundle) enable internationalization by storing locale-specific strings and objects in properties files or classes, allowing applications to adapt to different languages and regions without code changes.

Annotations (metadata) provide a way to attach supplementary information to code elements. Introduced in Java 5, annotations do not directly affect program logic but are processed by the compiler, runtime, or tools. Built-in annotations include @Override, @Deprecated, @SuppressWarnings, @FunctionalInterface, and @SafeVarargs. Custom annotations can be defined using @interface and processed using reflection. Frameworks like Spring, JUnit, and Hibernate make extensive use of annotations for configuration, testing, and ORM mapping.

### Example Code

```java
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

enum Status {
    ACTIVE("Active"), INACTIVE("Inactive"), PENDING("Pending");
    private String label;
    Status(String label) { this.label = label; }
    public String getLabel() { return label; }
}

public class EnumAnnotationsDemo {
    public static void main(String[] args) {
        // Enum usage
        Day today = Day.MONDAY;
        System.out.println("Today is: " + today);
        
        Status s = Status.ACTIVE;
        System.out.println("Status label: " + s.getLabel());
        
        // Date formatting
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Formatted date: " + now.format(formatter));
        
        // Resource bundle
        ResourceBundle bundle = ResourceBundle.getBundle("messages", Locale.ENGLISH);
        System.out.println("Greeting: " + bundle.getString("greeting"));
        
        // Annotations example (using built-in)
        displayMethodInfo();
    }
    
    @Deprecated
    public static void oldMethod() {
        System.out.println("This method is deprecated.");
    }
    
    @Override
    public String toString() {
        return "EnumAnnotationsDemo instance";
    }
    
    public static void displayMethodInfo() {
        System.out.println("Method displayMethodInfo is running.");
    }
}
```

### Interview Questions
- **Q: Can an enum extend a class?**
  **A:** No, enums implicitly extend java.lang.Enum and cannot extend another class, but they can implement interfaces.
- **Q: What is the purpose of @Override annotation?**
  **A:** It informs the compiler that the method is intended to override a superclass method, catching signature mismatches.
- **Q: What is a ResourceBundle used for?**
  **A:** Internationalization (i18n) by providing locale-specific resources.


---


## 28. Memory Management (Garbage Collection, Heap Size, Stack Size, Java Start-up Args)

### Detailed Theoretical Explanation

Java Memory Management is handled automatically by the JVM, relieving developers from manual memory allocation and deallocation. The JVM memory is primarily divided into the Method Area (or Metaspace in Java 8+), Heap, Stack, PC Registers, and Native Method Stack. The Method Area stores class-level data such as runtime constant pool, field and method data, and method code. The Heap is where all Java objects and arrays are allocated; it is the largest memory region and is shared across all threads. The Stack stores local variables, method parameters, and partial results for each thread; each thread has its own stack. PC Registers hold the address of the currently executing JVM instruction for each thread. The Native Method Stack supports native method execution.

Garbage Collection (GC) is the automatic process of reclaiming memory occupied by objects that are no longer reachable from any live thread. The JVM uses various GC algorithms such as Mark-and-Sweep, Generational GC (Young Generation: Eden, Survivor spaces; Old Generation/Tenured), and modern collectors like G1 (Garbage First) and ZGC. Objects are initially allocated in the Eden space. After surviving minor GC cycles, they are promoted to Survivor spaces and eventually to the Old Generation. Tuning GC parameters such as heap size (-Xms, -Xmx), generation ratios, and collector selection is critical for application performance.

### Memory Diagram: JVM Memory Areas

```
+------------------+
|   Method Area    |
|  (Metaspace)     |
|  Class data,     |
|  static vars     |
+------------------+
|      Heap        |
|  +------------+  |
|  | Young Gen  |  |
|  | Eden + S0  |  |
|  | S1         |  |
|  +------------+  |
|  | Old Gen    |  |
|  +------------+  |
+------------------+
|  Stack (per      |
|  thread)         |
|  local vars,     |
|  method frames   |
+------------------+
| PC Registers     |
| (per thread)     |
+------------------+
```

### Example Code

```java
public class MemoryManagementDemo {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        
        long maxMemory = runtime.maxMemory();
        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        
        System.out.println("Max Memory (bytes): " + maxMemory);
        System.out.println("Total Memory (bytes): " + totalMemory);
        System.out.println("Free Memory (bytes): " + freeMemory);
        System.out.println("Used Memory (bytes): " + (totalMemory - freeMemory));
        
        // Create objects to observe memory usage
        System.out.println("
--- Creating objects ---");
        for(int i = 0; i < 100000; i++) {
            String temp = new String("Object" + i);
        }
        
        long usedAfter = runtime.totalMemory() - runtime.freeMemory();
        System.out.println("Used Memory after creation (bytes): " + usedAfter);
        
        // Suggest garbage collection
        System.gc();
        
        long usedAfterGC = runtime.totalMemory() - runtime.freeMemory();
        System.out.println("Used Memory after GC (bytes): " + usedAfterGC);
    }
}
```

### Interview Questions
- **Q: What is the difference between Stack and Heap memory?**
  **A:** Stack stores local variables and method frames per thread; Heap stores objects shared across threads.
- **Q: What is Garbage Collection?**
  **A:** Automatic process of reclaiming memory from unreachable objects.
- **Q: What is the purpose of -Xms and -Xmx flags?**
  **A:** -Xms sets the initial heap size; -Xmx sets the maximum heap size.


---


## 29. JDBC, GUI (Swing, AWT, Applet)

### Detailed Theoretical Explanation

JDBC (Java Database Connectivity) is a standard API that enables Java applications to interact with relational databases. It provides a set of interfaces and classes in the java.sql and javax.sql packages for establishing connections, executing SQL statements, and processing results. The key components include DriverManager (manages database drivers), Connection (represents a session with the database), Statement (executes static SQL), PreparedStatement (executes precompiled SQL with parameters), CallableStatement (executes stored procedures), and ResultSet (holds query results). Using PreparedStatement is preferred over Statement because it prevents SQL injection attacks and improves performance through precompilation.

GUI programming in Java can be done using AWT (Abstract Window Toolkit), Swing, or JavaFX. AWT is the original GUI toolkit that uses native platform components (heavyweight) and provides basic widgets like Button, Label, and TextField. Swing is built on top of AWT and provides a richer set of lightweight components (written entirely in Java) such as JButton, JLabel, JTextField, JTable, JTree, and JTabbedPane. Swing supports the Model-View-Controller (MVC) architecture, pluggable look-and-feel, and advanced features like drag-and-drop. Applets were small Java programs embedded in web browsers, but they have been deprecated due to security concerns and are no longer supported in modern browsers.

### Example Code

```java
import java.sql.*;

public class JDBCDemo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/testdb";
        String user = "root";
        String password = "password";
        
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement ps = conn.prepareStatement("SELECT id, name FROM users WHERE id > ?")) {
            
            ps.setInt(1, 0);
            ResultSet rs = ps.executeQuery();
            
            System.out.println("Users:");
            while(rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("  ID: " + id + ", Name: " + name);
            }
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}
```

### Interview Questions
- **Q: What is the difference between Statement and PreparedStatement?**
  **A:** PreparedStatement is precompiled, supports parameters, and prevents SQL injection.
- **Q: What is the difference between AWT and Swing?**
  **A:** AWT uses native heavyweight components; Swing uses lightweight Java-drawn components with richer features.
- **Q: What is JDBC DriverManager?**
  **A:** It manages a list of database drivers and establishes connections.


---


## 30. Lambda Expressions and Java 7/8/9 New Features

### Detailed Theoretical Explanation

Lambda expressions, introduced in Java 8, provide a concise way to represent anonymous functions. They enable functional programming in Java by allowing methods to be passed as arguments, returned as values, and assigned to variables. A lambda expression consists of a parameter list, an arrow token (->), and a body. They can only be used with functional interfaces (interfaces with exactly one abstract method). Common functional interfaces include Runnable, Comparator, Predicate, Function, Consumer, and Supplier. Lambda expressions significantly reduce boilerplate code when implementing single-method interfaces.

Java 7 introduced several useful features including the try-with-resources statement for automatic resource management, the diamond operator (<>) for type inference in generic instance creation, strings in switch statements, multi-catch exception handling, binary literals, and underscore separators in numeric literals. Java 8 added lambda expressions, method references (::), the Stream API for functional-style operations on collections, default and static methods in interfaces, the java.time package (JSR-310), and the Optional class for null-safety. Java 9 introduced the module system (Project Jigsaw), JShell (interactive REPL), factory methods for collections (List.of, Set.of, Map.of), and improved Stream API methods.

### Example Code

```java
import java.util.*;
import java.util.stream.*;

public class LambdaAndFeaturesDemo {
    public static void main(String[] args) {
        // Lambda with list sorting
        List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
        names.sort((a, b) -> a.compareTo(b));
        System.out.println("Sorted: " + names);
        
        // Stream API
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Integer> evenSquares = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println("Even squares: " + evenSquares);
        
        // Method reference
        names.forEach(System.out::println);
        
        // Optional
        Optional<String> maybeName = Optional.of("Java");
        System.out.println("Optional value: " + maybeName.orElse("Default"));
        
        // Java 9 factory methods
        List<String> list = List.of("A", "B", "C");
        Set<Integer> set = Set.of(1, 2, 3);
        Map<String, Integer> map = Map.of("One", 1, "Two", 2);
        System.out.println("List: " + list + ", Set: " + set + ", Map: " + map);
    }
}
```

### Interview Questions
- **Q: What is a functional interface?**
  **A:** An interface with exactly one abstract method, annotated with @FunctionalInterface.
- **Q: What is the Stream API used for?**
  **A:** Performing functional-style operations (filter, map, reduce, collect) on collections.
- **Q: What are default methods in interfaces?**
  **A:** Methods with a body in an interface, introduced in Java 8, allowing interface evolution without breaking implementations.


---


## Part 2: Selenium WebDriver - 1. What is Selenium?

### Detailed Theoretical Explanation

Selenium is an open-source, portable framework for automating web browsers. It provides a suite of tools and libraries that enable developers and testers to write scripts in various programming languages (Java, Python, C#, Ruby, JavaScript) to simulate user interactions with web applications. Selenium was originally created by Jason Huggins in 2004 as an internal tool at ThoughtWorks. Over time, it evolved into a comprehensive ecosystem that supports multiple browsers, operating systems, and programming languages, making it one of the most widely adopted tools for web application testing and browser automation.

The Selenium suite consists of several components: Selenium IDE (Integrated Development Environment), a record-and-playback tool for creating test scripts without programming; Selenium RC (Remote Control), the legacy server-based approach that has been deprecated; Selenium WebDriver, the modern API that directly communicates with browsers using native support; and Selenium Grid, which enables parallel test execution across multiple machines and browsers to reduce test suite execution time. Selenium is platform-independent, meaning tests written on Windows can run on Linux or macOS without modification, provided the appropriate browser drivers are installed.

### Flow Chart: Selenium Suite Components

```
+-----------+     +----------------+     +------------------+
| Selenium  | --> | Selenium IDE   | -->| Record/Playback  |
| Suite     |     | (Legacy)       |    | Firefox Plugin   |
+-----------+     +----------------+    +------------------+
     |
     v
+-----------+     +----------------+     +------------------+
| Selenium  | --> | Selenium       | -->| Direct Browser   |
| WebDriver |     | WebDriver      |    | Communication    |
+-----------+     +----------------+    +------------------+
     |
     v
+-----------+     +----------------+     +------------------+
| Selenium  | --> | Selenium Grid  | -->| Parallel Cross-  |
| Grid      |     |                |    | Browser Testing  |
+-----------+     +----------------+    +------------------+
```

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WhatIsSeleniumDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        // Open a web application
        driver.get("https://www.google.com");
        
        // Get page information
        System.out.println("Page Title: " + driver.getTitle());
        System.out.println("Current URL: " + driver.getCurrentUrl());
        
        Thread.sleep(3000);
        driver.quit();
    }
}
```

### Interview Questions
- **Q: What is Selenium?**
  **A:** An open-source suite of tools for automating web browsers and testing web applications.
- **Q: What are the components of Selenium?**
  **A:** Selenium IDE, Selenium WebDriver, and Selenium Grid.


---


## 2. What is Selenium WebDriver?

### Detailed Theoretical Explanation

Selenium WebDriver is the core component of the Selenium suite and the industry standard for browser automation. Unlike its predecessor Selenium RC, which relied on a JavaScript-based intermediary server, WebDriver directly communicates with browsers using native operating system-level calls. Each browser vendor provides its own driver implementation (ChromeDriver for Chrome, GeckoDriver for Firefox, EdgeDriver for Microsoft Edge, SafariDriver for Safari, and InternetExplorerDriver for IE). These drivers act as translators, converting WebDriver API commands into browser-specific actions.

WebDriver supports multiple programming languages through language bindings that expose the same core API. The Java binding is the most widely used in enterprise environments due to Java's strong typing, extensive ecosystem, and integration with build tools like Maven and testing frameworks like TestNG and JUnit. WebDriver is designed to simulate real user interactions as closely as possible, supporting clicks, keyboard input, navigation, window management, cookie handling, and JavaScript execution. It does not support desktop application automation or native mobile app testing (for which Appium is the preferred solution).

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WhatIsWebDriverDemo {
    public static void main(String[] args) throws Exception {
        // WebDriver is an interface; we assign concrete implementations
        WebDriver chromeDriver = new ChromeDriver();
        chromeDriver.get("https://www.selenium.dev");
        System.out.println("Chrome Title: " + chromeDriver.getTitle());
        chromeDriver.quit();
        
        WebDriver firefoxDriver = new FirefoxDriver();
        firefoxDriver.get("https://www.selenium.dev");
        System.out.println("Firefox Title: " + firefoxDriver.getTitle());
        firefoxDriver.quit();
    }
}
```

### Interview Questions
- **Q: What is the difference between Selenium RC and WebDriver?**
  **A:** RC uses a JavaScript-based intermediary server; WebDriver communicates directly with browsers using native OS calls.
- **Q: Why is WebDriver called an interface?**
  **A:** WebDriver itself defines the contract (methods); concrete classes like ChromeDriver and FirefoxDriver provide implementations.


---


## 3. Selenium WebDriver Architecture

### Detailed Theoretical Explanation

Selenium WebDriver follows a client-server architecture with multiple layers that ensure platform independence and browser flexibility. The architecture consists of four main components: the Test Script (client layer), the Selenium WebDriver API (language bindings), the Browser Driver (server layer), and the Browser itself. When a test script executes a command such as driver.get() or element.click(), the command flows through these layers in a well-defined sequence.

The client layer consists of test scripts written in Java, Python, C#, or other supported languages. These scripts use the WebDriver API to construct commands. The WebDriver API layer consists of language-specific libraries (bindings) that provide classes and methods corresponding to the W3C WebDriver protocol. These bindings serialize commands into HTTP requests using the JSON Wire Protocol (legacy) or the W3C WebDriver protocol (modern standard). The Browser Driver is an executable file specific to each browser (e.g., chromedriver.exe) that runs as a local server, listens for incoming HTTP requests, and translates them into browser-native commands using the browser's automation API (such as Chrome DevTools Protocol or Marionette for Firefox). The browser executes the command and returns the result back through the same chain.

### Architecture Diagram

```
+---------------------+     +---------------------+     +---------------------+     +---------------------+
|   Test Script       | --> | Selenium WebDriver  | --> |   Browser Driver    | --> |      Browser        |
| (Java / Python /    |     | API (Language       |     | (ChromeDriver /     |     | (Chrome / Firefox / |
|  C# / etc.)         |     | Bindings)           |     |  GeckoDriver / etc.)|     |  Edge / etc.)       |
+---------------------+     +---------------------+     +---------------------+     +---------------------+
         ^                             ^                             ^                             |
         |                             |                             |                             |
         |                             |                             |                             v
         |                             |                             |                    +---------------------+
         |                             |                             |                    | 4. Results          |
         |                             |                             |                    +---------------------+
         |                             |                             |                             |
         |                             |                             |                             v
         |                             |                             |                    +---------------------+
         |                             |                             |                    | 5. Response         |
         |                             |                             |                    |    (Browser Driver) |
         |                             |                             |                    +---------------------+
         |                             |                             |                             |
         |                             |                             v                             v
         |                             |                    +---------------------+     +---------------------+
         |                             |                    | 3. Execute          |     | 2. WebDriver        |
         |                             |                    |    Commands         |     |    Commands         |
         |                             |                    +---------------------+     +---------------------+
         |                             |                                                           |
         |                             v                                                           v
         |                    +---------------------+                                   +---------------------+
         |                    | 6. Response         |                                   | 1. Selenium         |
         |                    |    (WebDriver API)  |                                   |    Commands         |
         |                    +---------------------+                                   +---------------------+
         |                             |
         +-----------------------------+
```

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;

public class WebDriverArchitectureDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        // 1. Test Script sends command via WebDriver API
        driver.get("https://www.google.com");
        
        // 2. WebDriver API forwards to ChromeDriver
        // 3. ChromeDriver communicates with Chrome browser
        // 4. Browser executes and returns results
        // 5. ChromeDriver sends response back to WebDriver API
        // 6. WebDriver API returns response to test script
        
        driver.findElement(By.name("q")).sendKeys("Selenium WebDriver Architecture");
        Thread.sleep(2000);
        
        System.out.println("Page title received from browser: " + driver.getTitle());
        driver.quit();
    }
}
```

### Interview Questions
- **Q: What is the role of ChromeDriver in Selenium architecture?**
  **A:** It acts as a translator between Selenium WebDriver commands and Chrome's native DevTools Protocol.
- **Q: What protocol does modern Selenium use?**
  **A:** The W3C WebDriver protocol (replacing the legacy JSON Wire Protocol).
- **Q: Is the WebDriver API platform-dependent?**
  **A:** No, the API is the same across platforms; only the browser driver executables are platform-specific.


---


## 4. What is a WebElement in Selenium?

### Detailed Theoretical Explanation

A WebElement is an interface in Selenium that represents an HTML element on a web page. Every interactive or observable component of a web page, such as text fields, buttons, checkboxes, radio buttons, dropdown lists, links, images, and div containers, is represented as a WebElement object in Selenium. The WebElement interface provides methods to interact with these components, including sendKeys() for typing text, click() for mouse clicks, getText() for retrieving visible text, getAttribute() for reading HTML attributes, isDisplayed() for visibility checks, isEnabled() for enabled state checks, and isSelected() for selection state checks.

WebElement objects are obtained by locating elements on the page using the findElement() or findElements() methods of the WebDriver or another WebElement. Each WebElement is tied to a specific DOM element and its reference can become stale if the page is refreshed or the element is removed and re-added to the DOM. In such cases, a StaleElementReferenceException is thrown, and the element must be relocated. Understanding WebElement state and behavior is essential for writing robust Selenium tests that can handle dynamic web applications.

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;

public class WebElementDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        driver.get("https://www.facebook.com");
        Thread.sleep(2000);
        
        // Locate WebElements
        WebElement emailField = driver.findElement(By.id("email"));
        WebElement passwordField = driver.findElement(By.id("pass"));
        WebElement loginButton = driver.findElement(By.name("login"));
        
        // Interact with WebElements
        emailField.sendKeys("test@example.com");
        passwordField.sendKeys("password123");
        
        System.out.println("Email displayed? " + emailField.isDisplayed());
        System.out.println("Email enabled? " + emailField.isEnabled());
        System.out.println("Login button text: " + loginButton.getText());
        System.out.println("Email tag name: " + emailField.getTagName());
        System.out.println("Email type attribute: " + emailField.getAttribute("type"));
        
        // Get CSS value
        System.out.println("Email font size: " + emailField.getCssValue("font-size"));
        
        driver.quit();
    }
}
```

### Interview Questions
- **Q: What is a WebElement?**
  **A:** It is an interface representing an HTML element on a web page, providing methods to interact with it.
- **Q: What exception occurs when a page refreshes and you use an old WebElement reference?**
  **A:** StaleElementReferenceException.
- **Q: How do you check if an element is visible?**
  **A:** Using the isDisplayed() method.


---


## 5. How Selenium WebDriver Works

### Detailed Theoretical Explanation

Selenium WebDriver works by establishing a bi-directional communication channel between the test script and the browser. The process begins when the test script creates an instance of a browser-specific driver class (such as ChromeDriver). This launches the browser driver executable as a local server process that listens on a specific port (typically a random available port). The driver instance in the test script connects to this server via HTTP.

When the test script calls a method like driver.get("https://example.com"), the WebDriver binding serializes this command into an HTTP POST request according to the W3C WebDriver protocol and sends it to the browser driver server. The browser driver interprets the command and uses the browser's native automation API (such as Chrome DevTools Protocol) to perform the actual action in the browser. For example, the get command instructs the browser to navigate to the specified URL. After the browser completes the action, it returns a response (which may include data such as the page title, element references, or status codes) back to the driver server, which forwards it to the test script.

Element location commands (findElement) work similarly: the test script sends a locate request with a strategy (By.id, By.xpath, etc.) and value. The browser driver queries the DOM using the browser's internal APIs and returns a unique element identifier. Subsequent interactions (click, sendKeys) use this identifier to target the specific DOM element. This architecture decouples the test script from browser internals, enabling the same script to run across different browsers by simply changing the driver instantiation.

### Flow Chart: How WebDriver Works

```
+-----------+     +-------------------+     +-------------------+
| Create    | --> | Launch Browser      | --> | Browser Driver    |
| Driver    |     | Driver Server       |     | Listens on Port   |
+-----------+     +-------------------+     +-------------------+
     |                                                |
     v                                                v
+-----------+     +-------------------+     +-------------------+
| Script    | --> | HTTP Request (W3C)| --> | Browser Driver    |
| Command   |     | WebDriver Protocol  |     | Interprets Command|
+-----------+     +-------------------+     +-------------------+
                                                      |
                                                      v
                                               +-------------------+
                                               | Browser Executes  |
                                               | Action in DOM     |
                                               +-------------------+
                                                      |
                                                      v
+-----------+     +-------------------+     +-------------------+
| Script    | <-- | HTTP Response       | <-- | Browser Driver    |
| Receives  |     | (Data/Status)       |     | Returns Result    |
| Result    |     +-------------------+     +-------------------+
+-----------+
```

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class HowWebDriverWorksDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        
        // 1. Driver instance connects to ChromeDriver server
        WebDriver driver = new ChromeDriver();
        
        // 2. HTTP request sent to navigate
        driver.get("https://www.gmail.com");
        Thread.sleep(3000);
        
        // 3. Find element request sent to server
        WebElement email = driver.findElement(By.id("identifierId"));
        
        // 4. Element ID returned; sendKeys command sent
        email.sendKeys("testuser@gmail.com");
        
        // 5. Click command sent using element ID
        driver.findElement(By.xpath("//span[text()='Next']")).click();
        
        Thread.sleep(3000);
        System.out.println("Current URL: " + driver.getCurrentUrl());
        
        driver.quit();
    }
}
```

### Interview Questions
- **Q: How does WebDriver communicate with the browser?**
  **A:** Through HTTP requests using the W3C WebDriver protocol sent to the browser driver server.
- **Q: What happens when findElement() is called?**
  **A:** WebDriver sends a locate request to the browser driver, which queries the DOM and returns an element reference.
- **Q: Why do we need browser-specific drivers?**
  **A:** Because each browser exposes a different native automation API that the driver must translate.


---


## 6. How to Find Elements in Selenium with Java?

### Detailed Theoretical Explanation

Finding elements is the foundation of Selenium automation because all interactions (clicking, typing, reading text) require first locating the target element in the DOM. Selenium provides the By class, which encapsulates various locator strategies. The most commonly used locators are By.id (fastest and most reliable when IDs are unique and static), By.name (useful for form elements), By.className (selects by CSS class, but may match multiple elements), By.tagName (selects by HTML tag), By.linkText and By.partialLinkText (for anchor tags), By.cssSelector (flexible and powerful CSS-based selection), and By.xpath (versatile XML path expressions that can traverse the DOM in any direction).

The choice of locator strategy impacts test reliability and maintainability. IDs are preferred because they are typically unique and independent of the DOM structure. CSS selectors are fast and well-supported across browsers. XPath is extremely powerful for complex queries but can be slower and more brittle if based on absolute paths. Relative XPath expressions using attributes, text content, or partial matches are more robust than absolute paths. When multiple elements match a locator, findElement() returns the first match, while findElements() returns a List of all matches. It is a best practice to avoid locators based on dynamic attributes or brittle positional indices that may change when the UI is updated.

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import java.util.List;

public class FindElementsDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        driver.get("https://www.google.com");
        Thread.sleep(2000);
        
        // Different locator strategies
        WebElement byId = driver.findElement(By.id("lst-ib"));
        WebElement byName = driver.findElement(By.name("q"));
        WebElement byClass = driver.findElement(By.className("gLFyf"));
        WebElement byTag = driver.findElement(By.tagName("input"));
        WebElement byCss = driver.findElement(By.cssSelector("input[name='q']"));
        WebElement byXPath = driver.findElement(By.xpath("//input[@name='q']"));
        
        System.out.println("Located elements using multiple strategies.");
        
        // Find multiple elements
        List<WebElement> allLinks = driver.findElements(By.tagName("a"));
        System.out.println("Total links on page: " + allLinks.size());
        
        driver.quit();
    }
}
```

### Interview Questions
- **Q: Which locator is the fastest in Selenium?**
  **A:** By.id is generally the fastest and most reliable.
- **Q: What is the difference between findElement() and findElements()?**
  **A:** findElement() returns the first matching WebElement; findElements() returns a List of all matching elements.
- **Q: What exception does findElement() throw if no element is found?**
  **A:** NoSuchElementException.


---


## 7. What is findElement() in Selenium?

### Detailed Theoretical Explanation

The findElement() method is a fundamental API in Selenium WebDriver used to locate a single web element on a page. It accepts a By object that specifies the locator strategy and value, queries the browser's DOM, and returns a WebElement reference representing the first matching element. If no element matches the provided locator, findElement() throws a NoSuchElementException, which is one of the most common exceptions beginners encounter. The method is available on both the WebDriver interface (searches the entire document) and the WebElement interface (searches within the context of a specific element, useful for scoped searches within tables, forms, or containers).

The findElement() method interacts with the browser driver via the W3C WebDriver protocol. When invoked, the WebDriver binding sends an HTTP POST request to the browser driver's /element endpoint with the locating strategy and value as JSON parameters. The browser driver executes the search using the browser's native DOM query capabilities and returns a unique element ID. This ID is used internally by Selenium for subsequent interactions with the element. Because the DOM can change dynamically, it is often necessary to wrap findElement() calls within wait conditions (explicit waits) to handle elements that appear after a delay due to AJAX calls or animations.

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class FindElementDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        driver.get("https://www.gmail.com");
        
        // Basic findElement
        WebElement email = driver.findElement(By.id("identifierId"));
        email.sendKeys("test@gmail.com");
        
        // Using explicit wait with findElement equivalent
        WebElement nextButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[text()='Next']")));
        nextButton.click();
        
        // Scoped findElement within a WebElement
        WebElement form = driver.findElement(By.tagName("form"));
        WebElement inputInsideForm = form.findElement(By.tagName("input"));
        System.out.println("Scoped element tag: " + inputInsideForm.getTagName());
        
        driver.quit();
    }
}
```

### Interview Questions
- **Q: What does findElement() return?**
  **A:** A WebElement representing the first matching element.
- **Q: What happens if findElement() does not find an element?**
  **A:** It throws NoSuchElementException.
- **Q: Can you call findElement() on a WebElement?**
  **A:** Yes, it searches for descendants within that element's DOM subtree.


---


## 8. Selenium Methods (Browser, Navigation, WebElement, Window, Alert, Frame, Wait)

### Detailed Theoretical Explanation

Selenium WebDriver provides a comprehensive set of methods organized into categories based on the aspect of the browser or page they control. Browser methods manage the browser window and session, including get() for navigation, close() for closing the current window, quit() for ending the session, manage() for configuring timeouts and cookies, and getTitle()/getCurrentUrl()/getPageSource() for retrieving page information. Navigation methods control browser history and refreshes, including navigate().to(), navigate().back(), navigate().forward(), and navigate().refresh().

WebElement methods enable interaction with page elements, including click(), sendKeys(), clear(), getText(), getAttribute(), getCssValue(), isDisplayed(), isEnabled(), and isSelected(). Window methods handle multiple browser windows and tabs through getWindowHandle(), getWindowHandles(), and switchTo().window(). Alert methods manage JavaScript popups using switchTo().alert() along with accept(), dismiss(), getText(), and sendKeys(). Frame methods allow switching between frames and iframes using switchTo().frame() with index, name, or WebElement arguments. Wait methods synchronize test execution with application state using implicit waits (global timeout for findElement) and explicit waits (WebDriverWait with ExpectedConditions for specific conditions like visibility or clickability).

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.Set;

public class SeleniumMethodsDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        // Browser methods
        driver.get("https://www.selenium.dev");
        System.out.println("Title: " + driver.getTitle());
        System.out.println("URL: " + driver.getCurrentUrl());
        
        // Navigation methods
        driver.navigate().to("https://www.google.com");
        driver.navigate().back();
        driver.navigate().forward();
        driver.navigate().refresh();
        
        // WebElement methods
        driver.get("https://www.facebook.com");
        WebElement email = driver.findElement(By.id("email"));
        email.sendKeys("user@example.com");
        email.clear();
        email.sendKeys("new@example.com");
        System.out.println("Email displayed: " + email.isDisplayed());
        System.out.println("Email enabled: " + email.isEnabled());
        
        // Window methods
        driver.switchTo().newWindow(org.openqa.selenium.WindowType.TAB);
        driver.get("https://www.gmail.com");
        Set<String> handles = driver.getWindowHandles();
        System.out.println("Window handles: " + handles.size());
        
        // Alert methods
        driver.get("https://the-internet.herokuapp.com/javascript_alerts");
        driver.findElement(By.xpath("//button[text()='Click for JS Alert']")).click();
        Alert alert = driver.switchTo().alert();
        System.out.println("Alert text: " + alert.getText());
        alert.accept();
        
        // Wait methods
        driver.get("https://www.google.com");
        WebElement searchBox = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("q")));
        searchBox.sendKeys("Selenium Waits");
        
        driver.quit();
    }
}
```

### Interview Questions
- **Q: What is the difference between close() and quit()?**
  **A:** close() closes the current browser window; quit() closes all windows and ends the WebDriver session.
- **Q: What are the types of waits in Selenium?**
  **A:** Implicit wait (global), Explicit wait (condition-specific), and Fluent wait (configurable polling).
- **Q: How do you handle frames in Selenium?**
  **A:** Using driver.switchTo().frame() with index, name, or WebElement.


---


## 9. What is the difference between close() and quit()?

### Detailed Theoretical Explanation

The close() and quit() methods in Selenium WebDriver both affect browser windows, but they differ significantly in scope and purpose. The close() method is designed to close only the current browser window or tab that the WebDriver is focused on. If multiple windows or tabs are open, calling close() will shut down the active window and switch the WebDriver focus to the remaining window, if any. However, the WebDriver session itself remains active, and the browser process may continue running in the background. This can lead to resource leaks if not managed properly, especially in long-running test suites.

The quit() method, on the other hand, terminates the entire WebDriver session. It closes all browser windows and tabs, stops the browser driver server process, and releases all associated system resources including memory and file handles. quit() should always be called at the end of a test script or in a teardown method (such as @AfterMethod in TestNG or @After in JUnit) to ensure clean resource management. Failing to call quit() can leave orphaned browser and driver processes running on the test machine, eventually consuming memory and causing test failures due to port conflicts.

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class CloseVsQuitDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        driver.get("https://www.google.com");
        String firstHandle = driver.getWindowHandle();
        
        // Open a new tab
        driver.switchTo().newWindow(org.openqa.selenium.WindowType.TAB);
        driver.get("https://www.gmail.com");
        
        System.out.println("Windows before close: " + driver.getWindowHandles().size());
        
        // close() closes only the current tab
        driver.close();
        System.out.println("Windows after close: " + driver.getWindowHandles().size());
        
        // Switch back to the first window
        driver.switchTo().window(firstHandle);
        System.out.println("Current URL after close: " + driver.getCurrentUrl());
        
        // quit() closes all windows and ends the session
        driver.quit();
        System.out.println("Session ended with quit().");
    }
}
```

### Interview Questions
- **Q: When should you use close() vs quit()?**
  **A:** Use close() to close a specific window; use quit() at the end of tests to end the session and release all resources.
- **Q: What happens if you do not call quit()?**
  **A:** Browser and driver processes may remain running, causing memory leaks and port conflicts.
- **Q: Does close() end the WebDriver session?**
  **A:** No, the session remains active until quit() is called or the program terminates.


---


## 10. Why Wait Statements are Required in Selenium?

### Detailed Theoretical Explanation

Wait statements are essential in Selenium because modern web applications use asynchronous technologies such as AJAX, JavaScript frameworks (React, Angular, Vue), and dynamic content loading that cause elements to appear, disappear, or change state at unpredictable times. If a test script attempts to interact with an element before it is present in the DOM, visible, or enabled, Selenium will throw exceptions such as NoSuchElementException, ElementNotVisibleException, or ElementClickInterceptedException. Waits provide synchronization between the test execution speed and the application's response time, ensuring that operations occur only when the application is in the expected state.

There are three types of waits in Selenium. Implicit wait sets a global timeout for the findElement() and findElements() methods. If an element is not immediately found, the driver will poll the DOM repeatedly until the timeout expires. Explicit wait uses the WebDriverWait class along with ExpectedConditions to wait for a specific condition on a specific element, such as visibility, clickability, or presence in the DOM. Explicit waits are preferred because they are more precise and do not unnecessarily delay test execution. Fluent wait is a customizable form of explicit wait that allows defining the polling frequency and exceptions to ignore during the wait period.

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class WaitStatementsDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        // Implicit wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        
        driver.get("https://the-internet.herokuapp.com/dynamic_loading/1");
        driver.findElement(By.xpath("//button[contains(text(),'Start')]")).click();
        
        // Explicit wait for dynamic content
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        WebElement finish = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
        System.out.println("Dynamic text: " + finish.getText());
        
        // Fluent wait example
        org.openqa.selenium.support.ui.FluentWait<WebDriver> fluentWait = 
            new org.openqa.selenium.support.ui.FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(15))
                .pollingEvery(Duration.ofMillis(500))
                .ignoring(org.openqa.selenium.NoSuchElementException.class);
        
        WebElement helloWorld = fluentWait.until(ExpectedConditions.visibilityOfElementLocated(By.id("finish")));
        System.out.println("Fluent wait result: " + helloWorld.getText());
        
        driver.quit();
    }
}
```

### Interview Questions
- **Q: Why are waits important in Selenium?**
  **A:** To synchronize test execution with dynamic web application behavior and avoid exceptions from premature element access.
- **Q: What is the difference between implicit and explicit wait?**
  **A:** Implicit wait is global for all findElement calls; explicit wait targets specific elements with specific conditions.
- **Q: What is FluentWait?**
  **A:** A configurable wait that allows setting polling frequency and exceptions to ignore.


---


## 11. Beginners' Common Mistakes and Tips

### Detailed Theoretical Explanation

Beginners in Selenium automation often encounter recurring mistakes that lead to flaky tests, maintenance overhead, and debugging difficulties. One of the most common mistakes is using Thread.sleep() for synchronization instead of proper wait mechanisms. Thread.sleep() pauses execution unconditionally, making tests slow and unreliable because the pause duration must be long enough for the slowest scenario. Another frequent error is using brittle locators such as absolute XPath expressions or positional indices (e.g., /html/body/div[3]/div[1]/input), which break whenever the DOM structure changes slightly.

Other common mistakes include failing to handle StaleElementReferenceException when the DOM refreshes, not calling quit() at the end of tests (causing memory leaks), neglecting to use Page Object Model (POM) for maintainability, hardcoding test data and credentials directly in scripts, and not using try-catch blocks for recovery from expected exceptions. Beginners also sometimes mix implicit and explicit waits, which can lead to unpredictable timeout behaviors because implicit waits apply to all findElement calls while explicit waits have their own timing logic.

Tips for writing robust Selenium tests include: using stable locators (IDs, CSS selectors with classes/attributes, relative XPath), implementing explicit waits for dynamic content, organizing code using Page Object Model, parameterizing test data through external files or data providers, adding proper logging and screenshots for debugging, using headless browsers for CI/CD pipelines, and keeping test methods small and focused on a single scenario. Understanding the application under test and its technology stack (whether it uses React, Angular, or plain HTML) also helps in choosing appropriate wait conditions and locators.

### Example Code

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class BestPracticesDemo {
    public static void main(String[] args) throws Exception {
        System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        
        // Good practice: use explicit wait instead of Thread.sleep
        driver.get("https://www.gmail.com");
        WebElement email = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("identifierId")));
        email.sendKeys("test@gmail.com");
        
        // Good practice: stable locator using attributes
        WebElement nextButton = driver.findElement(By.xpath("//span[text()='Next']"));
        nextButton.click();
        
        // Good practice: handle expected conditions
        try {
            WebElement error = driver.findElement(By.xpath("//*[contains(text(),'Wrong password')]"));
            System.out.println("Error displayed: " + error.isDisplayed());
        } catch(org.openqa.selenium.NoSuchElementException e) {
            System.out.println("Error element not present.");
        }
        
        // Always quit
        driver.quit();
    }
}
```

### Interview Questions
- **Q: Why should Thread.sleep() be avoided?**
  **A:** It pauses execution unconditionally, making tests slow and unreliable; explicit waits are preferred.
- **Q: What is Page Object Model (POM)?**
  **A:** A design pattern that separates page-specific locators and methods into dedicated classes for maintainability.
- **Q: What is a flaky test?**
  **A:** A test that passes and fails unpredictably without code changes, usually due to timing or environmental issues.


---


## 12. Conclusion

### Summary

Selenium WebDriver is a powerful and flexible tool for automating web browsers. By understanding its architecture, mastering element location strategies, using appropriate wait mechanisms, and following best practices such as Page Object Model and proper resource cleanup, testers can build reliable and maintainable automation suites. Selenium's language bindings, cross-browser support, and integration with testing frameworks like TestNG and Cucumber make it the cornerstone of modern web test automation. Continuous learning about browser updates, new WebDriver features, and emerging web technologies will ensure that automation efforts remain effective and efficient.


---


## Part 3: Selenium Automation for API Testing

### Detailed Theoretical Explanation

API (Application Programming Interface) testing validates the functionality, reliability, performance, and security of application programming interfaces. Unlike UI testing, which interacts with the graphical interface, API testing communicates directly with the application's backend services, making it faster, more stable, and easier to automate. REST (Representational State Transfer) is the most common architectural style for web APIs, using HTTP methods (GET, POST, PUT, DELETE, PATCH) to perform CRUD (Create, Read, Update, Delete) operations on resources identified by URLs.

REST APIs typically exchange data in JSON (JavaScript Object Notation) or XML formats. JSON is lightweight, human-readable, and widely preferred. HTTP status codes provide immediate feedback about the request outcome: 200 OK (success), 201 Created (resource created), 400 Bad Request (client error), 401 Unauthorized (authentication required), 403 Forbidden (permission denied), 404 Not Found (resource missing), and 500 Internal Server Error (server failure). RestAssured is a popular Java library that simplifies API testing by providing a fluent, BDD-style DSL for constructing requests and validating responses.

Authentication mechanisms in API testing include Basic Auth (username/password encoded in Base64), OAuth 2.0 (token-based authorization), API Keys (unique identifiers passed in headers or query parameters), and Bearer Tokens. Data-driven API testing involves parameterizing request payloads and assertions using external data sources such as Excel files, JSON files, or databases, enabling the same test logic to be executed with multiple input combinations.

### Flow Chart: API Testing Workflow

```
+-----------+     +-------------------+     +------------------+
| Define    | --> | Build HTTP Request| -->| Send to API      |
| Test Case |     | (Method, URL,     |    | Endpoint         |
|           |     | Headers, Body)    |    |                  |
+-----------+     +-------------------+    +------------------+
                                                      |
                                                      v
                                               +------------------+
                                               | Receive Response |
                                               | (Status, Headers,|
                                               |  Body)           |
                                               +------------------+
                                                      |
                                                      v
                                               +------------------+
                                               | Validate         |
                                               | (Status Code,    |
                                               |  JSON Path,      |
                                               |  Schema)         |
                                               +------------------+
```

### Example Code

```java
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;

public class APITestingDemo {
    @Test
    public void testGetRequest() {
        RestAssured.baseURI = "https://reqres.in";
        RequestSpecification request = RestAssured.given();
        Response response = request.request(Method.GET, "/api/users?page=2");
        
        System.out.println("Status Code: " + response.getStatusCode());
        System.out.println("Response Body: " + response.getBody().asString());
        
        Assert.assertEquals(response.getStatusCode(), 200);
        Assert.assertTrue(response.getBody().asString().contains("data"));
    }
    
    @Test
    public void testPostRequest() {
        RestAssured.baseURI = "https://reqres.in";
        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", "application/json");
        
        JSONObject requestBody = new JSONObject();
        requestBody.put("name", "John Doe");
        requestBody.put("job", "Software Engineer");
        request.body(requestBody.toString());
        
        Response response = request.request(Method.POST, "/api/users");
        
        System.out.println("Status Code: " + response.getStatusCode());
        System.out.println("Response Body: " + response.getBody().asString());
        
        Assert.assertEquals(response.getStatusCode(), 201);
        Assert.assertTrue(response.getBody().asString().contains("id"));
    }
    
    @Test
    public void testPutRequest() {
        RestAssured.baseURI = "https://reqres.in";
        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", "application/json");
        
        JSONObject requestBody = new JSONObject();
        requestBody.put("name", "Jane Doe");
        requestBody.put("job", "Manager");
        request.body(requestBody.toString());
        
        Response response = request.request(Method.PUT, "/api/users/2");
        Assert.assertEquals(response.getStatusCode(), 200);
    }
    
    @Test
    public void testDeleteRequest() {
        RestAssured.baseURI = "https://reqres.in";
        RequestSpecification request = RestAssured.given();
        Response response = request.request(Method.DELETE, "/api/users/2");
        Assert.assertEquals(response.getStatusCode(), 204);
    }
}
```

### Interview Questions
- **Q: What is the difference between REST and SOAP?**
  **A:** REST is lightweight, uses HTTP methods and JSON/XML, and is stateless. SOAP is protocol-based, uses XML envelopes, and supports WS-* standards.
- **Q: What are common HTTP status codes?**
  **A:** 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.
- **Q: What is RestAssured?**
  **A:** A Java DSL library that simplifies testing REST APIs with a fluent, readable syntax.
- **Q: How do you validate JSON responses in RestAssured?**
  **A:** Using JsonPath, JSON schema validation, or assertions on response body content.


---


## Part 4: Selenium with Java - BDD Framework (Cucumber)

### Detailed Theoretical Explanation

Behavior-Driven Development (BDD) is a collaborative software development approach that bridges the communication gap between technical and non-technical stakeholders by using natural language specifications. Cucumber is the most popular BDD framework for Java that implements this approach. It allows business analysts, testers, and developers to write executable specifications in plain English using the Gherkin syntax. Gherkin uses keywords such as Feature, Scenario, Given, When, Then, And, and But to describe application behavior in a way that is both human-readable and machine-executable.

A Feature file (.feature) describes a high-level business capability and contains one or more Scenarios that represent specific test cases. Each scenario consists of steps starting with Given (preconditions), When (actions), and Then (expected outcomes). Step Definitions (Glue Code) are Java methods annotated with regular expressions that map Gherkin steps to automation code. The Runner class configures Cucumber with options such as feature file paths, glue code packages, and report formats. Hooks (@Before, @After) run setup and teardown code around scenarios, while Tags allow selective execution of subsets of scenarios.

DataTables and Scenario Outlines enable data-driven BDD testing. DataTables pass tabular data to step definitions as lists of maps or custom objects. Scenario Outlines allow the same scenario to be executed multiple times with different sets of data specified in an Examples table. Integrating Cucumber with Selenium and Page Object Model creates a maintainable, readable, and scalable automation framework where business requirements are directly tied to automated verification.

### Flow Chart: Cucumber BDD Execution Flow

```
+-----------+     +-------------------+     +------------------+
| Feature   | --> | Runner Class      | -->| Step Definitions |
| File      |     | (CucumberOptions) |    | (Glue Code)      |
| (.feature)|     |                   |    |                  |
+-----------+     +-------------------+    +------------------+
     |                                              |
     v                                              v
+-----------+     +-------------------+     +------------------+
| Gherkin   | --> | Regex Matching    | -->| Selenium         |
| Steps     |     | (Given/When/Then) |    | Automation Code  |
+-----------+     +-------------------+    +------------------+
                                                      |
                                                      v
                                               +------------------+
                                               | Reports Generated|
                                               | (HTML, JSON)     |
                                               +------------------+
```

### Example Code

```java
// Feature File: login.feature
/*
Feature: Gmail Login Validation

  Scenario: Validate valid user login
    Given launch site using "chrome"
    When enter "validuser@gmail.com" as userid
    And click userid next
    And enter "ValidPassword123" as password
    And click password next
    Then validate output for "valid" for password criteria
    When close site

  Scenario Outline: Validate multiple login scenarios
    Given launch site using "chrome"
    When enter "<userid>" as userid
    And click userid next
    And enter "<password>" as password
    And click password next
    Then validate output for "<criteria>" for password criteria
    When close site

    Examples:
      | userid                | password       | criteria |
      | validuser@gmail.com   | ValidPass123   | valid    |
      | validuser@gmail.com   | WrongPass      | invalid  |
      | validuser@gmail.com   |                | blank    |
*/

// Runner Class
package runnerClasses;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = {"src/test/java/features/login.feature"},
    glue = {"classpath:tests"},
    plugin = {"pretty", "html:target/cucumber-reports"},
    monochrome = true,
    strict = true
)
public class TestRunner {
}

// Step Definitions (Glue Code)
package tests;

import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginSteps {
    WebDriver driver;
    
    @Given("^launch site using "(.*)"$")
    public void launchSite(String browser) {
        if(browser.equals("chrome")) {
            System.setProperty("webdriver.chrome.driver", "D:\\testing\\chromedriver.exe");
            driver = new ChromeDriver();
        }
        driver.get("https://www.gmail.com");
    }
    
    @When("^enter "(.*)" as userid$")
    public void enterUserid(String userid) {
        driver.findElement(org.openqa.selenium.By.id("identifierId")).sendKeys(userid);
    }
    
    @And("^click userid next$")
    public void clickUseridNext() throws Exception {
        driver.findElement(org.openqa.selenium.By.xpath("//span[text()='Next']")).click();
        Thread.sleep(3000);
    }
    
    @And("^enter "(.*)" as password$")
    public void enterPassword(String password) {
        driver.findElement(org.openqa.selenium.By.name("password")).sendKeys(password);
    }
    
    @And("^click password next$")
    public void clickPasswordNext() throws Exception {
        driver.findElement(org.openqa.selenium.By.xpath("//span[text()='Next']")).click();
        Thread.sleep(3000);
    }
    
    @Then("^validate output for "(.*)" for password criteria$")
    public void validateOutput(String criteria) {
        if(criteria.equals("valid")) {
            boolean composeVisible = driver.findElements(org.openqa.selenium.By.xpath("//*[contains(text(),'Compose')]")).size() > 0;
            assert composeVisible : "Valid login failed";
        } else if(criteria.equals("invalid")) {
            boolean errorVisible = driver.findElements(org.openqa.selenium.By.xpath("//*[contains(text(),'Wrong password')]")).size() > 0;
            assert errorVisible : "Invalid password error not displayed";
        }
    }
    
    @When("^close site$")
    public void closeSite() {
        driver.quit();
    }
}
```

### Interview Questions
- **Q: What is BDD?**
  **A:** Behavior-Driven Development is an approach that uses natural language specifications to drive development and testing.
- **Q: What is the purpose of a Runner class in Cucumber?**
  **A:** It configures Cucumber options and triggers the execution of feature files.
- **Q: What is the difference between Scenario and Scenario Outline?**
  **A:** Scenario runs once; Scenario Outline runs multiple times with different data from the Examples table.
- **Q: What are Hooks in Cucumber?**
  **A:** Methods annotated with @Before and @After that run setup and teardown for scenarios.


---


## Part 5: Selenium with Java - TestNG Framework

### Detailed Theoretical Explanation

TestNG (Test Next Generation) is a powerful testing framework for Java that overcomes the limitations of JUnit by providing advanced features for unit, functional, integration, and end-to-end testing. It was created by Cedric Beust and is widely adopted in Selenium automation projects because of its flexible test configuration, parallel execution support, rich reporting, and powerful annotations. TestNG uses annotations to define test lifecycle methods, allowing developers to control setup, teardown, test execution order, dependencies, and data parameterization without relying on method naming conventions.

Key TestNG annotations include @Test (marks a method as a test case), @BeforeSuite and @AfterSuite (run once per suite), @BeforeTest and @AfterTest (run once per test tag in XML), @BeforeClass and @AfterClass (run once per test class), @BeforeMethod and @AfterMethod (run before and after each test method), @DataProvider (supplies data to test methods), @Parameters (injects values from XML), @Listeners (attaches custom listeners), and @Factory (creates dynamic test instances). TestNG generates comprehensive HTML and XML reports that include execution time, pass/fail status, exception traces, and custom log messages.

Parallel execution in TestNG allows tests to run concurrently across multiple threads, reducing overall execution time. This is configured in the testng.xml suite file using the parallel attribute (methods, tests, classes) and the thread-count attribute. TestNG Listeners (ITestListener, IInvokedMethodListener, IReporter) enable custom behavior such as taking screenshots on failure, sending notifications, or generating custom reports. The @DataProvider annotation enables data-driven testing by returning a two-dimensional Object array, allowing the same test method to execute with multiple input sets.

### Flow Chart: TestNG Execution Flow

```
+-----------+     +-------------------+     +------------------+
| testng.xml| --> | @BeforeSuite      | -->| @BeforeTest      |
| Suite     |     | (once per suite)  |    | (once per test)  |
+-----------+     +-------------------+    +------------------+
     |                                              |
     v                                              v
+-----------+     +-------------------+     +------------------+
| @BeforeClass| -->| @BeforeMethod   | -->| @Test Method     |
| (once per |     | (before each      |    | Execution        |
|  class)    |     |  test)           |    |                  |
+-----------+     +-------------------+    +------------------+
     |                                              |
     v                                              v
+-----------+     +-------------------+     +------------------+
| @AfterMethod| <--| @AfterClass     | <--| @AfterTest       |
| (after each|     | (once per class) |    | (once per test)  |
|  test)     |     +-------------------+    +------------------+
+-----------+                                    |
     |                                           v
     v                                    +------------------+
+-----------+                             | @AfterSuite      |
| Report    |                             | (once per suite) |
| Generated |                             +------------------+
+-----------+
```

### Example Code

```java
package tests;

import org.testng.annotations.*;
import org.testng.Assert;
import org.testng.Reporter;

public class TestNGDemo {
    
    @BeforeSuite
    public void beforeSuite() {
        System.out.println("Before Suite: Initialize global resources");
    }
    
    @BeforeTest
    public void beforeTest() {
        System.out.println("Before Test: Setup test environment");
    }
    
    @BeforeClass
    public void beforeClass() {
        System.out.println("Before Class: Initialize WebDriver");
    }
    
    @BeforeMethod
    public void beforeMethod() {
        System.out.println("Before Method: Navigate to base URL");
    }
    
    @Test(priority = 1, description = "Verify login with valid credentials")
    public void validLoginTest() {
        System.out.println("Executing valid login test");
        Reporter.log("Valid login test started");
        Assert.assertTrue(true, "Login should succeed");
        Reporter.log("Valid login test passed");
    }
    
    @Test(priority = 2, dependsOnMethods = "validLoginTest")
    public void dashboardTest() {
        System.out.println("Executing dashboard test after login");
        Assert.assertEquals("Dashboard", "Dashboard", "Dashboard title mismatch");
    }
    
    @Test(priority = 3, dataProvider = "loginData")
    public void dataDrivenLoginTest(String username, String password, boolean expectedResult) {
        System.out.println("Testing login with: " + username + "/" + password);
        Reporter.log("Testing login with: " + username);
        boolean actualResult = username.startsWith("valid");
        Assert.assertEquals(actualResult, expectedResult, "Login result mismatch");
    }
    
    @DataProvider(name = "loginData")
    public Object[][] getLoginData() {
        return new Object[][] {
            {"validUser1", "pass123", true},
            {"validUser2", "pass456", true},
            {"invalidUser", "wrongPass", false}
        };
    }
    
    @AfterMethod
    public void afterMethod() {
        System.out.println("After Method: Capture screenshot if failed");
    }
    
    @AfterClass
    public void afterClass() {
        System.out.println("After Class: Close WebDriver");
    }
    
    @AfterTest
    public void afterTest() {
        System.out.println("After Test: Clean up test data");
    }
    
    @AfterSuite
    public void afterSuite() {
        System.out.println("After Suite: Generate final report");
    }
}
```

**testng.xml configuration:**

```xml
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="SeleniumTestSuite" parallel="methods" thread-count="2">
    <test name="LoginTests">
        <parameter name="browser" value="chrome"/>
        <parameter name="url" value="https://www.gmail.com"/>
        <classes>
            <class name="tests.TestNGDemo"/>
        </classes>
    </test>
</suite>
```

**Parameter injection example:**

```java
@Test
@Parameters({"browser", "url"})
public void parameterizedTest(String browser, String url) {
    System.out.println("Browser: " + browser);
    System.out.println("URL: " + url);
    // Initialize driver and navigate to URL
}
```

**Listener example:**

```java
import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestListener implements ITestListener {
    public void onTestStart(ITestResult result) {
        System.out.println("Test started: " + result.getName());
    }
    
    public void onTestSuccess(ITestResult result) {
        System.out.println("Test passed: " + result.getName());
    }
    
    public void onTestFailure(ITestResult result) {
        System.out.println("Test failed: " + result.getName());
        // Take screenshot logic here
    }
    
    public void onTestSkipped(ITestResult result) {
        System.out.println("Test skipped: " + result.getName());
    }
}
```

### Interview Questions
- **Q: What are the advantages of TestNG over JUnit?**
  **A:** TestNG supports parallel execution, dependent tests, data providers, flexible annotations, and better reporting.
- **Q: What is the execution order of TestNG annotations?**
  **A:** @BeforeSuite -> @BeforeTest -> @BeforeClass -> @BeforeMethod -> @Test -> @AfterMethod -> @AfterClass -> @AfterTest -> @AfterSuite.
- **Q: How do you run tests in parallel in TestNG?**
  **A:** By setting parallel="methods|tests|classes" and thread-count in testng.xml.
- **Q: What is a DataProvider in TestNG?**
  **A:** An annotation that returns a 2D Object array to supply test data to test methods.
- **Q: How do you parameterize tests in TestNG?**
  **A:** Using @Parameters for XML-based parameters or @DataProvider for method-based data supply.


---
