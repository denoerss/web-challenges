console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible.

HINT: You can find more information about arrow functions and implicit returns in the handout.
*/

// function getCurrentHour() {
//   const now = new Date();
//   const currentHour = now.getHours();
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }
// }

const getCurrentHour = () => {
  const currentHour = new Date().getHours(); // get current Hour

  return currentHour === 0 // condition1: If currentHour is 0 (mindnifght in 24-hour-clock)
    ? "12am" // valueIfTure: returns "12am"
    : currentHour === 12 // condition2: If currentHour is 12 (noon in 24-hour-clock) / noon remains as 12 in 12-hour-clock but is suffixed with "pm"
    ? "12pm" // valueIfTrue: returns "12pm"
    : currentHour <= 11 // condition 3:  If currentHour is between 1 and 11 (inclusive)
    ? `${currentHour}am` // valueIfTrue: appends "am" to the hour
    : `${currentHour - 12}pm`; // valueIfFalse / else-fallback: •	If none of the above conditions are true (i.e., currentHour is between 13 and 23), it subtracts 12 to convert to a 12-hour format and appends "pm".
  // For example: 13 (1pm) becomes 13 - 12 = 1pm. / 23 (11pm) becomes 23 - 12 = 11pm.
};

// TEST EXPRESSION
// const expression = "Expression";
// const testExpression = `Test embedded ${expression}!`;
// console.log(testExpression);

// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5; // single-line arrow function: The body contains a single expression, so the return keyword is implied (implicit return).

// function cleanInput(string) {
//   return string.toLowerCase().trim();
// }

const cleanInput = (string) => string.toLowerCase().trim();

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }
//   if (number % 2 === 0) {
//     return false;
//   }
//   return true;
// };

function isOddAndSmall(number) {
  // if (number > 10) {
  //   return false;
  // } else if (number % 2 === 0) {
  //   return false;
  // } else {
  //   return true;
  // }

  //MORE SIMPLE:
  if (number > 10) return false;
  if (number % 2 === 0) return false;
  return true;
}

// const add3 = (a, b, c) => a + b + c;

function add3(a, b, c) {
  return a + b + c;
}

const repeat10 = (string) => string.repeat(10);

function repeat10(string) {
  return string.repeat(10);
}
