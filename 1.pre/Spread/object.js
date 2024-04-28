/* Spread Operator */

const user = {
  name: "Amandeep",
  age: 22,
  occupation: null,
};

const copiedObj = {
  ...user,
  occupation: "Developer",
  hobbies: ["football", "books"],
};

console.log(user);
console.log(copiedObj);

// rest operator in object destructuring
let { age, name, hobbies, ...restOfKeys } = copiedObj;

//shallow copy of hobbies array
hobbies.push("Going for walk");
//deep copy of age
age = 21;
console.log(age);
console.log(name);
console.log(hobbies);
console.log(restOfKeys);
console.log(copiedObj);
