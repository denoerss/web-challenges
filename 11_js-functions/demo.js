/* FUNCTIONS */
console.clear();

// FUNCTION DECLARATION

// function printPersonalData() {
//   const name = "Denise";
//   const age = 32;
//   console.log(name + " is " + age + " years old.");
// }

// FUNCTION CALL

// printPersonalData();
// printPersonalData();

// FUNCTION PARAMETERS

function printPersonalData(name, age) {
  console.log(name + " is " + age + " years old.");
}

// FUNCTION DECLARATION (Parameter, Function Call: Argument)

printPersonalData("Alex", 41);
printPersonalData("Denise", 32);

// RETURN VALUE

function calculateSum(a, b) {
  const sum = a + b;
  return sum;
  console.log(sum); // will never be logged to the console (because after return)
}

const sum = calculateSum(5, 6);

console.log(sum);

function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputLength("hi");

console.log(isValid); // V1
console.log(checkInputLength("hi")); // V2 / if not saved as var
