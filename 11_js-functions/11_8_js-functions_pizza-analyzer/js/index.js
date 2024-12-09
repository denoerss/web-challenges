console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = 12;
let pizzaSize2 = 24;

pizzaInput1.addEventListener("input", () => {
  // 1.5 save current values of both pizza inputs in two variables
  const pizzaSize1 = pizzaInput1.value;
  // 2.4 call function updatePizzaDisplay
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // 1.5 save current values of both pizza inputs in two variables
  const pizzaSize2 = pizzaInput2.value;
  // 2.4 call function updatePizzaDisplay
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1
// 1.1 define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  // 1.2.1 calculate pizza radius
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  // 1.2.2 calculate pizza area
  const area1 = Math.PI * radius1 ** 2;
  const area2 = Math.PI * radius2 ** 2;
  // 1.3 calculate pizza gain
  const pizzaGain = ((area2 - area1) / area1) * 100;
  // 1.4 round pizza gain & set textContet to roundedPizzaGain
  const roundedPizzaGain = Math.round(pizzaGain);
  output.textContent = `${roundedPizzaGain}%`;
}

// 1.6 call function
calculatePizzaGain(pizzaSize1, pizzaSize2);

// Task 2
// 2.1 define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  // 2.2 calculate newDisplaySize
  const newDisplaySize = (newSize / 24) * 100;
  // 2.3 set width of pizzaElement to newDisplaySize
  pizzaElement.style.width = `${newDisplaySize}px`;
}

// Task 3
// define the function updateOutputColor here
