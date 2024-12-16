console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  // log entire data object
  console.log("ENTIRE DATA OBJECT_", data);

  // log different values of data object
  data.results.forEach((character) =>
    console.log(
      "CHARACTER NAME_",
      character.name,
      "HEIGHT_",
      character.height,
      "MASS_",
      character.mass
    )
  );

  // BONUS: log eye color of R2-D2
  const R2D2 = data.results.find((character) => {
    return character.name === "R2-D2";
  });

  console.log("R2-D2 EYECOLOR_", R2D2["eye_color"]);
}

fetchData();
