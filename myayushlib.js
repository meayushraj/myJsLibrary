console.log("my library")















/*

function findDif(str) {
  let data = str.split('')
  let data2 = 'ayush'.split('')
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


// Write a mul function which will produce the following outputs when invoked:
function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    }
  }
}
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48


// What will be the output of the code below ?
var y = 1;
if (function f() { }) {
  y += typeof f;
}
console.log(y); // 1undefined

var k = 1;
if (1) {
  function foo() { };
  k += typeof foo;
}
console.log(k); // 1function




// What is the drawback of creating true private methods in JavaScript?

var Employee = function (name, company, salary) {
  this.name = name || "";
  this.company = company || "";
  this.salary = salary || 5000;

  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };

  this.dispalyIncreasedSalary = function () {
    increaseSlary();
    console.log(this.salary);
  };
};

// Create Employee class object
var emp1 = new Employee("John", "Pluto", 3000);
// Create Employee class object
var emp2 = new Employee("Merry", "Pluto", 2000);
// Create Employee class object
var emp3 = new Employee("Ren", "Pluto", 2500);


// What will be the output of the following code?

var output = (function (x) {
  delete x;
  return x;
})(0);

console.log('case First', output);

var x = 1;
var output = (function () {
  delete x;
  return x;
})();

console.log('case Second', output);




var x = { foo: 1 };
var output = (function () {
  delete x.foo;
  return x.foo;
})();

console.log(output);

var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);


// What will be the output of the code below?
var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];

console.log(trees.length);


//What will be the output of the code below?
var bar = true;
console.log(bar + 0);
console.log(bar + "xyz");
console.log(bar + true);
console.log(bar + false);

//What will be the output of the code below?
var z = 1, y = z = typeof y;
console.log(y);



// What will be the output of the code below?
var foo = function bar() { return 12; };
console.log(typeof bar());


//What is the difference between the function declarations below?
var foo = function () {
  // Some code
};

function bar() {
  // Some code
};

// What will be the output of code below?
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);

  var salary = "5000$";

  console.log("My New Salary " + salary);
})();


//What is the instanceof operator in JavaScript? What would be the output of the code below?
function foo() {
  return foo;
}
new foo() instanceof foo;


document.getElementById('date').innerHTML = new Date().getMilliseconds();
const btnDebounce = document.getElementById('dbbtn0');
const btnThrottle = document.getElementById('thbtn1');


let delayCalls, cnt = 0;
btnDebounce.addEventListener('click', () => {
  if (cnt == 0) {
    clearTimeout(delayCalls);
    delayCalls = setTimeout(() => {
      console.log('Debounce button clicked', new Date().getMilliseconds());
    }, 2000)
    cnt++
  }
  else {
    delayCalls = setTimeout(() => {
      console.log('Debounce button clicked', new Date().getMilliseconds());
    }, 2000)
    clearTimeout(delayCalls);

  }

})


function checkPrimeNumber(isPrime) {
  let flag = false;
  for (let i = 2; i < isPrime; i++) {
    if (isPrime % i == 0) {
      flag = true;
      break;
    }
  }
  if (flag) {
    console.log('not prime')
  }
  else {
    console.log('prime')
  }
}
// checkPrimeNumber(293);


function printPrimeRange(range) {
  console.log(`List of prime numbers upto ${range} are below`)
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

function lengthOfDigit(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

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
  // if (originalNumber === sumOfNumber) {
  //   console.log('Armstrong Number')
  // }
  // else {
  //   console.log('Not an Armstrong Number')
  // }
  return originalNumber === sumOfNumber;
}
// armstrongNumber(153); //153, 370, 371 and 407


function armstrongNumberRange(givenRange) {
  for (let i = 100; i < givenRange; i++) {
    if (armstrongNumber(i)) {
      console.log(i);
    }
  }
  console.log('Thats all the final list of Armstrong Number');
}
// armstrongNumberRange(1000);

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
  for (let i = 1; i < givenRange; i++) {
    if (perfectNumber(i)) {
      console.log(i);
    }
  }
  console.log('Thats all the final list of Perfect Number Number');
}
// perfectNumberRange(10000);

var emojiArray = ["👨", "‍", "👨", "‍", "👧", "‍", "👧", "😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇", "🎉"];

console.log(emojiArray)








function LongestWord(sen) {
  let wordArray = sen.match(/[a-z0-9]+/gi);
  let maxLength = 0;
  wordArray.filter((a) => {
    if (a.length > maxLength) {
      maxLength = a.length
    }
  });
  let maxWord = wordArray.filter((a) => {
    return a.length == maxLength;
  });
  return maxWord[0];
}
// LongestWord("fun&!! time");




// function drawStars(n) {
  let rows = n * 2 - 1;
  for (let i = 1; i <= rows; i++) {
    let num = i <= n ? i : (2 * n - 1);
    let starRow = '';
    for (let j = 1; j <= num; j++) {
      let hasStar = j % 2 === i % 2;
      starRow += hasStar ? '* ' : ' '
    }
    console.log(starRow)
  }
}



btnThrottle.addEventListener('click', () => {
    console.log('Throttle button clicked')
})







//polyfills for bind method..
let name = {
  firstname: "Akshay",
  lastname: "Saini"
}

let printName = function (hometown, state, country) {
  console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
printMyName( "India");

Function.prototype.mybind = function(...args){
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName2 = printName.mybind(name, "Dehradun", "Uttarakhand");
printMyName2( "India");


*/