console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// select all 3 buttons w/ data-js attribute
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

// add event listener to buttons
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
