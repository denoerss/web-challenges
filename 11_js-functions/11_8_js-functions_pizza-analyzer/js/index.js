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
  // calculate the radius of each pizza (radius = diameter / 2)
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;

  // calculate the area of each pizza (area = PI * radius ^ 2)
  const area1 = Math.PI * Math.pow(radius1, 2);
  const area2 = Math.PI * Math.pow(radius2, 2);

  // calculate the gain in area
  const areaGain = area2 - area1;
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {}
