console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();

  // log entire data object
  console.log("ENTIRE DATA OBJECT_", data);
}

fetchData();
