console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337"; // true
// const receivedPassword = "password1234"; // false

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as denoers.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
// SOLUTION 1 // zu kompliziert ...
// const numberOfHotdogs = 4;
// let pricePerHotdog = 0;

// if (numberOfHotdogs < 5) {
//   console.log((pricePerHotdog = 2), numberOfHotdogs * pricePerHotdog);
// } else if (numberOfHotdogs < 100) {
//   console.log((pricePerHotdog = 1.5), numberOfHotdogs * pricePerHotdog);
// } else if (numberOfHotdogs < 1000000) {
//   console.log((pricePerHotdog = 1), numberOfHotdogs * pricePerHotdog);
// } else {
//   console.log((pricePerHotdog = 0.1), numberOfHotdogs * pricePerHotdog);
// }

// SOLUTION 2 // etwas simpler ...
const numberOfHotdogs = 42;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else {
  pricePerHotdog = 0.1;
}
let totalPrice = numberOfHotdogs * pricePerHotdog;

console.log(numberOfHotdogs, pricePerHotdog, totalPrice);

// Part 4: Daytime
const currentHour = 23;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// // Part 5: Greeting
// const userName = "Archibald";

// const greeting = "Hello " + "//enter your code here" + "!";

// // console.log(greeting);
