console.clear();

const box = document.querySelector('[data-js="box"]');
const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

inputColor.addEventListener("input", () => {
  const colorValue = inputColor.value;
  const hslColor = `hsl(${colorValue}, 70%, 60%)`;
  box.style.backgroundColor = hslColor;
});

inputRadius.addEventListener("click", () => {});

inputRotation.addEventListener("click", () => {});
