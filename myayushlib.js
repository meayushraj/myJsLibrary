/**
 * ═══════════════════════════════════════════════════════════════════════════
 * JAVASCRIPT LAST-MINUTE INTERVIEW PREPARATION GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This file contains essential JavaScript concepts, patterns, and common
 * interview questions organized by topic for quick revision.
 */

// ═══════════════════════════════════════════════════════════════════════════
// 1. CLOSURE & HIGHER-ORDER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Currying Example - mul function
 * Creates nested functions where each returns a function expecting next parameter
 */
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    }
  }
}
console.log("mul(2)(3)(4):", mul(2)(3)(4)); // output: 24
console.log("mul(4)(3)(4):", mul(4)(3)(4)); // output: 48

// ═══════════════════════════════════════════════════════════════════════════
// 2. SCOPE & HOISTING
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Hoisting with Function Expressions vs Declarations
 * Function expressions are NOT hoisted, declarations are
 */
console.log("\n--- Hoisting Test 1: Function Expression ---");
var y = 1;
if (function f() { }) {  // Function expression - evaluates to true, but f is not available
  y += typeof f;  // typeof f = "undefined" (not hoisted)
}
console.log("y value:", y); // Output: "1undefined"

console.log("\n--- Hoisting Test 2: Function Declaration ---");
var k = 1;
if (1) {
  function foo() { };  // Function declaration - hoisted
  k += typeof foo;  // typeof foo = "function"
}
console.log("k value:", k); // Output: "1function"

/**
 * Variable Shadowing with var
 * Inner scope var shadows outer scope variable
 */
console.log("\n--- Variable Shadowing ---");
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);  // Prints undefined due to hoisting

  var salary = "5000$";  // This var is hoisted to top, shadowing outer salary
  console.log("My New Salary " + salary);  // "5000$"
})();

// ═══════════════════════════════════════════════════════════════════════════
// 3. THE DELETE OPERATOR
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Important: delete operator behavior varies significantly
 */

console.log("\n--- DELETE OPERATOR TESTS ---");

// Test 1: Cannot delete function parameters
var output1 = (function (x) {
  delete x;  // Does NOT delete parameter
  return x;
})(0);
console.log("Delete parameter:", output1); // Output: 0

// Test 2: Cannot delete global/local variables created with var
var x = 1;
var output2 = (function () {
  delete x;  // Does NOT delete variable declared with var
  return x;
})();
console.log("Delete global var:", output2); // Output: 1

// Test 3: CAN delete object properties
var obj = { foo: 1 };
var output3 = (function () {
  delete obj.foo;  // Successfully deletes property
  return obj.foo;
})();
console.log("Delete object property:", output3); // Output: undefined

// Test 4: Cannot delete inherited properties
var Employee = { company: 'xyz' };
var emp1 = Object.create(Employee);
delete emp1.company;  // Doesn't delete inherited property
console.log("Delete inherited property:", emp1.company); // Output: "xyz"

// Test 5: Delete from array - leaves hole, doesn't reduce length
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log("Array length after delete:", trees.length); // Output: 5 (not 4)
console.log("Array after delete:", trees); // ["xyz", "xxxx", "test", empty, "apple"]

// ═══════════════════════════════════════════════════════════════════════════
// 4. TYPE COERCION
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n--- TYPE COERCION ---");

var bar = true;
console.log("true + 0:", bar + 0);  // 1 (boolean to number)
console.log("true + 'xyz':", bar + "xyz");  // "truexyz" (string concatenation)
console.log("true + true:", bar + true);  // 2 (both to numbers)
console.log("true + false:", bar + false);  // 1 (both to numbers)

// ═══════════════════════════════════════════════════════════════════════════
// 5. FUNCTION DECLARATION vs EXPRESSION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Key Difference: Named function expressions create scope for recursive calls
 */

// Function Expression
var foo = function () {
  // Some code
};

// Function Declaration
function bar() {
  // Some code
}

// Named Function Expression - function name available only inside itself
var baz = function namedFunc() {
  // 'namedFunc' is available here, but not outside
};

// ═══════════════════════════════════════════════════════════════════════════
// 6. TYPEOF OPERATOR QUIRKS
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n--- TYPEOF OPERATOR ---");

/**
 * This will throw an error because bar() is undefined
 * (it's defined inside a function, not in global scope)
 */
// var foo = function bar() { return 12; };
// console.log(typeof bar());  // ReferenceError: bar is not defined

// But this works - bar is a named function expression, only available inside itself:
var namedFuncExpr = function bar() { return 12; };
// console.log(typeof bar());  // ReferenceError: bar is not defined (correct)

// ═══════════════════════════════════════════════════════════════════════════
// 7. RIGHT-TO-LEFT ASSIGNMENT
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n--- RIGHT-TO-LEFT ASSIGNMENT ---");

var z = 1, y = z = typeof y;
// Evaluation: typeof y = "undefined" (y not yet assigned)
// Then: z = "undefined"
// Then: y = "undefined"
console.log("y value:", y); // Output: "undefined"

// ═══════════════════════════════════════════════════════════════════════════
// 8. INSTANCEOF OPERATOR
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n--- INSTANCEOF OPERATOR ---");

function fooConstructor() {
  return fooConstructor;  // Returns the function itself
}
console.log("new fooConstructor() instanceof fooConstructor:", new fooConstructor() instanceof fooConstructor);  // Output: true
// Because new fooConstructor() creates object whose [[Prototype]] is fooConstructor.prototype

// ═══════════════════════════════════════════════════════════════════════════
// 9. PRIVATE METHODS & CLOSURES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * DRAWBACK: Every instance creates new functions in memory
 * This wastes memory when you have many instances
 */
var EmployeeClass = function (name, company, salary) {
  this.name = name || "";
  this.company = company || "";
  this.salary = salary || 5000;

  // Private method - created for EACH instance (memory waste!)
  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };

  this.displayIncreasedSalary = function () {
    increaseSalary.call(this);  // Fixed typo: increaseSlary -> increaseSalary
    console.log(this.salary);
  };
};

// Better approach: Put methods on prototype
EmployeeClass.prototype.increaseSalary = function () {
  this.salary = this.salary + 1000;
};

var emp1 = new EmployeeClass("John", "Pluto", 3000);
var emp2 = new EmployeeClass("Merry", "Pluto", 2000);
var emp3 = new EmployeeClass("Ren", "Pluto", 2500);

// ═══════════════════════════════════════════════════════════════════════════
// 10. NUMBER UTILITIES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Check if a number is prime
 */
function checkPrimeNumber(num) {
  let flag = false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = true;
      break;
    }
  }
  return !flag;  // true if prime
}

/**
 * Print all prime numbers up to range
 */
function printPrimeRange(range) {
  console.log(`\nList of prime numbers upto ${range}:`);
  for (let i = 2; i < range; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(i);
    }
  }
}
// printPrimeRange(20);

/**
 * Get number of digits in a number
 */
function lengthOfDigit(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

/**
 * Armstrong Number: Sum of digits raised to power of digit count equals number
 * Examples: 153 (1³ + 5³ + 3³ = 153), 370, 371, 407
 */
function armstrongNumber(givenNumber) {
  let power = lengthOfDigit(givenNumber);
  let originalNumber = givenNumber;
  let sumOfNumber = 0;
  let remainder = 0;
  while (givenNumber > 0) {
    remainder = givenNumber % 10;
    sumOfNumber += Math.pow(remainder, power);
    givenNumber = Math.floor(givenNumber / 10);
  }
  return originalNumber === sumOfNumber;
}

function armstrongNumberRange(givenRange) {
  console.log(`\nArmstrong numbers upto ${givenRange}:`);
  for (let i = 100; i < givenRange; i++) {
    if (armstrongNumber(i)) {
      console.log(i);
    }
  }
}
// armstrongNumberRange(1000);

/**
 * Perfect Number: Sum of proper divisors equals the number
 * Example: 6 (1 + 2 + 3 = 6), 28 (1 + 2 + 4 + 7 + 14 = 28)
 */
function perfectNumber(givenNumber) {
  let originalNumber = givenNumber;
  let sumOfNumber = 0;

  for (let i = 1; i < givenNumber; i++) {
    if (givenNumber % i == 0) {
      sumOfNumber += i;
    }
  }
  return originalNumber === sumOfNumber;
}

function perfectNumberRange(givenRange) {
  console.log(`\nPerfect numbers upto ${givenRange}:`);
  for (let i = 1; i < givenRange; i++) {
    if (perfectNumber(i)) {
      console.log(i);
    }
  }
}
// perfectNumberRange(10000);

// ═══════════════════════════════════════════════════════════════════════════
// 11. STRING ALGORITHMS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Find the longest word in a sentence
 * Uses regex to extract words and filter method to compare lengths
 */
function longestWord(sen) {
  let wordArray = sen.match(/[a-z0-9]+/gi);
  let maxLength = 0;
  
  // Find max length
  wordArray.filter((a) => {
    if (a.length > maxLength) {
      maxLength = a.length
    }
  });
  
  // Find and return word with max length
  let maxWord = wordArray.filter((a) => {
    return a.length == maxLength;
  });
  return maxWord[0];
}
console.log("\nLongest word in 'fun&!! time':", longestWord("fun&!! time")); // "time"

/**
 * Find difference - check if string starts with 'ayush'
 */
function findDif(str) {
  let data = str.split('');
  let data2 = 'ayush'.split('');
  let flag = false;
  for (let index = 0; index < data2.length; index++) {
    if (data[index] !== data2[index]) {
      flag = true;
      break;
    }
  }
  if (!flag) return 'Ayush ' + str;
  if (flag) return str;
}

// ═══════════════════════════════════════════════════════════════════════════
// 12. FUNCTION BINDING & THIS CONTEXT
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n--- FUNCTION BINDING & THIS CONTEXT ---");

let person = {
  firstname: "Akshay",
  lastname: "Saini"
};

let printName = function (hometown, state, country) {
  console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
};

// Using native bind
let printMyName = printName.bind(person, "Dehradun", "Uttarakhand");
printMyName("India");

/**
 * POLYFILL for Function.prototype.bind()
 * bind returns a new function with 'this' context and partial arguments fixed
 */
Function.prototype.mybind = function(...args) {
  let obj = this;  // The function being bound
  let params = args.slice(1);  // Extract context and preset arguments
  return function (...args2) {
    // When the bound function is called, apply with combined arguments
    obj.apply(args[0], [...params, ...args2]);
  }
};

let printMyName2 = printName.mybind(person, "Dehradun", "Uttarakhand");
printMyName2("India");

// ═══════════════════════════════════════════════════════════════════════════
// 13. DEBOUNCING & THROTTLING
// ═══════════════════════════════════════════════════════════════════════════

/**
 * DEBOUNCE: Execute function only after X milliseconds of inactivity
 * Use case: Search input, auto-save
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * THROTTLE: Execute function at most once every X milliseconds
 * Use case: Scroll events, mouse move tracking
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// 14. MISCELLANEOUS
// ═══════════════════════════════════════════════════════════════════════════

// Emoji array example
var emojiArray = ["👨", "‍", "👨", "‍", "👧", "‍", "👧", "😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇", "🎉"];
console.log("\nEmoji array:", emojiArray);

/**
 * ═════════════════════════════════════════════════════════════════════════
 * KEY CONCEPTS SUMMARY FOR INTERVIEWS
 * ═════════════════════════════════════════════════════════════════════════
 * 
 * 1. CLOSURES: Functions with access to outer scope variables
 * 2. HOISTING: var and function declarations moved to top of scope
 * 3. THIS: Determined by how function is called, not where it's defined
 * 4. SCOPE: var (function), let/const (block)
 * 5. PROTOTYPAL INHERITANCE: Objects inherit from prototype chain
 * 6. CALLBACKS: Functions passed as arguments (async operations)
 * 7. PROMISES: Object representing eventual completion of async operation
 * 8. ASYNC/AWAIT: Syntactic sugar over Promises
 * 9. EVENT LOOP: Call stack → Microtask queue → Macrotask queue
 * 10. COERCION: Type conversion in operations (== vs ===)
 * 11. CURRYING: Breaking down functions into multiple single-argument functions
 * 12. PURE FUNCTIONS: Same input always produces same output, no side effects
 * 13. IMMUTABILITY: Data structures don't change after creation
 * 14. HIGHER-ORDER FUNCTIONS: Functions that return or accept functions
 * ═════════════════════════════════════════════════════════════════════════
 */
