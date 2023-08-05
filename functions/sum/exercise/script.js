/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

function add(a, b) {
  //Add function here
  return a + b
}

function sub(a, b) {
  return a - b;
  //Subtract function here
}

function div(a, b) {
  return a / b;
  //Divide function here
}

function mul(a, b) {
  return a * b
  //Multiply function here
}

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

console.log(add(500, 10));
console.log(sub(500, 10));
console.log(div(500, 10));
console.log(mul(500, 10));