export function getAnimals(animal = "I do not like animals at all!") {
  if (animal === "cats") {
    return `I totally love ${animal}!`;
  }
  if (animal === "dogs") {
    return `I like ${animal}!`;
  }
  return animal;
}
