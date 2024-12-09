console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  // calculate pizza radius
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  // calculate pizza area
  const area1 = Math.PI * radius1 ** 2;
  const area2 = Math.PI * radius2 ** 2;
}

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
