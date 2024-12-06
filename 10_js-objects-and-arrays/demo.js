// 1. OBJECTS

// bracket notation: const myObject = {}

const user = {
  name: "Hendrik",
  // nested array:
  hobbies: ["tischtennis", "kochen", "feiern"],
};

// print boolean (true/fals) if number of hobbies of user is 3
console.log("ARRAY_2", user.hobbies.length === 3);

// 2. ARRAY

// bracket notation: const myArray = []
const people = [
  // nested objects:
  { name: "Denise", age: 32 },
  { name: "Philipp", age: 30 },
];

// print age of first nested object w/ index: 0
console.log("ARRAY_1", people[0].age);
