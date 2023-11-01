//NUMBER 8
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

console.log("Below is nuber 7");
//NUMBER 7
for (let index = 0; index <= 15; index++) {
  if (index % 2 == 0) {
    console.log(index + " is even");
  } else {
    console.log(index + " is odd");
  }
}
console.log("Below is number 10");
//Number 10
function isString(inp) {
  return typeof inp === "string";
}
console.log(isString(4.32));

console.log("below is number 6");
//Number 6
const int1 = prompt("type an integer(for number 6)");
const int2 = prompt("type another integer(for number 6)");
const int3 = prompt("type the last integer(for number 6)");

product = int1 * int2 * int3;
console.log(product);
if (product > 0) {
  console.log("+");
} else if (product < 0) {
  console.log("-");
} else {
  console.log("no sign");
}

console.log("below is number 4");
//Number 4
console.log(
  "console.log(false == '0') will output true because of the loose equality operator whereas console.log(false===0) will output false because of the strict equality operator"
);

console.log("below is no. 1")
//No.1
console.log("NaN is a data type that stands for Not A Number")

console.log("below is number 2")
//No. 2
const isPalindrome = str => str === str.split('').reverse().join('');
console.log("const isPalindrome = str => str === str.split('').reverse().join('')")

console.log("below is no. 3")
//No. 3
function sum(x) {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else if (arguments.length === 1) {
    return function(y) {
      return x + y;
    };
  }
}
console.log("function sum(x) {if (arguments.length === 2) {return arguments[0] + arguments[1];} else if (arguments.length === 1) {return function(y) {return x + y;};}}")

console.log("below is no. 5")
console.log("console.log(0.1+0.2) will be added as a float and therefore the output will have 17 digits after the decimal point hence, console.log(0.1+0.2==0.3) will output false")

console .log("below is no. 9")
let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);
