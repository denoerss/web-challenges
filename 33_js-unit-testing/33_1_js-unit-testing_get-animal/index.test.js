import { getAnimals } from "./index.js";

test("getAnimals() returns a string 'I totally love cats!' if called with the argument 'cats'.", () => {
  const result = getAnimals("cats");
  expect(result).toBe("I totally love cats!");
});

test("getAnimals() returns a string 'I like [animalPluralName]!' if called with a string argument.", () => {
  const result = getAnimals("dogs");
  expect(result).toBe("I like dogs!");
});

test("getAnimals() returns a string 'I do not like animals at all!' if called without arguments.", () => {
  const result = getAnimals();
  expect(result).toBe("I do not like animals at all!");
});
