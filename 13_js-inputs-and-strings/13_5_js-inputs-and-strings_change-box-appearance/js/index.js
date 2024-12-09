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

inputRadius.addEventListener("input", () => {
  const radiusValue = inputRadius.value;
  box.style.borderRadius =
    radiusValue === inputRadius.max ? "50%" : `${radiusValue}px`;
  box.style.transition = "border-radius 0.3s ease"; // ease
});

inputRotation.addEventListener("input", () => {
  const rotationValue = inputRotation.value;
  box.style.transform = `rotate(${rotationValue}deg)`;
});
