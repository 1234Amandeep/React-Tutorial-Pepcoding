/* Object Destructuring */

const obj = {
  name: "Amandeep",
  country: "India",
  totalStates: 29,
};

const key1 = obj.name;
const key2 = obj.country;

// console.log(key1);
// console.log(key2);

var { name, country, extraKey = "not yet defined" } = obj;

// console.log(name);
// console.log(country);
// console.log(extraKey);

var { name: prop1, countryCode = "+91", ...rest } = obj;
console.log(prop1);
console.log(countryCode);
console.log(rest);
