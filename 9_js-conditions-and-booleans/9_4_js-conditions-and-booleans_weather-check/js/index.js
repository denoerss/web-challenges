// Change this value to test different "weather" conditions.

// SOLUTION PART 1
// const weather = "stormy";

// switch (weather) {
//   case "sunny":
//     console.log("It's sunny!");
//     break;
//   case "rainy":
//     console.log("It's raining, don't forget your umbrella!");
//     break;
//   case "snowy":
//     console.log("It's snowing, stay warm!");
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }

// SOLUTION PART 2
const weather = "snowy";
const temperature = -3;

if (weather == "sunny" && temperature > 20) {
  console.log("It's sunny and warm!");
} else if (weather === "sunny" && temperature <= 20) {
  console.log("It's sunny, but a bit chilly!");
} else if (weather === "rainy") {
  console.log("It's raining, don't forget your umbrella!");
} else if (weather === "snowy" && temperature <= 0) {
  console.log("Freezing snow!");
} else {
  console.log("I'm not sure what the weather is like.");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
