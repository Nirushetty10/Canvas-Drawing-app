// const Employee = {
//   firstname: 'John',
//   lastname: 'Doe'
// };

// const emp2 = {
//   sec : "B",
//   room : 201 ,
//   __proto__ : Employee
// }

// console.log(Object.entries(emp2));

// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }

const entries = [
  ['foo', 'bar'],
  ['baz', 42]
];

const obj = Object.fromEntries(entries);

console.log(obj);