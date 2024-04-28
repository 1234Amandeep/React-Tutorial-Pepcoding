/* Array Destructuring */

const arr = ["hello", "world", "How", "are", "you!"];

const value1 = arr[0];
const value2 = arr[1];

// console.log(value1);
// console.log(value2);

var [val1, val2] = arr;

// console.log(val1);
// console.log(val2);

var [val1, val2, , val4] = arr;
console.log(val1);
console.log(val2);
console.log(val4);
