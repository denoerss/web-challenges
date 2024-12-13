console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  // PART 1: RENDER STARS
  for (let i = 1; i <= 5; i++) {
    const starEmpty = document.createElement("img");
    starEmpty.src = "assets/star-empty.svg";

    starContainer.appendChild(starEmpty);
  }
  // --^-- write or modify code above this line --^--
}

renderStars();
