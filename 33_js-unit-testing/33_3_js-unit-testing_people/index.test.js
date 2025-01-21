import { resolveObjectURL } from "buffer";
import {
  getFirstNames,
  getFullNames,
  getNameAndAge,
  getPeopleByAge,
  getPeopleNamesOlderThan,
  getPeopleByLastName,
  findPersonById,
  isAnyoneOlderThan,
  getFullNamesSortedByAge,
} from "./index.js";

const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

test("getFirstNames() returns an array with the first names", () => {
  const expected = people.map((person) => `${person.firstName}`);
  console.log("getFristNames_", expected);
  const result = getFirstNames(people);
  expect(result).toEqual(expected);
});

test('getFullNames() returns an array with full names as strings, e.g. "Jane Doe"', () => {
  const expected = people.map(
    (person) => `${person.firstName} ${person.lastName}`
  );
  console.log("getFullNames_", expected);
  const result = getFullNames(people);
  expect(result).toEqual(expected);
});

test('getNameAndAge() returns an array of formatted strings like this: "Skywalker (23)"', () => {
  const expected = people.map((person) => `${person.lastName} (${person.age})`);
  console.log("getNameAndAge_", expected);
  const result = getNameAndAge(people);
  expect(result).toEqual(expected);
});

test("getPeopleByAge() returns an array of people of a certain age", () => {
  const expected = people.filter((person) => person.age === 23);
  console.log("getPeopleByAge", expected);
  const result = getPeopleByAge(people);
  expect(result).toEqual(expected);
});

test('getPeopleNamesOlderThan() returns an array of people full names older than a certain age, e.g. "Luke Skywalker"', () => {});

test("getPeopleByLastName() returns an array of people of a certain lastName", () => {});

// Hint: use Array.prototype.find for the implementation
test("findPersonById() returns the full object of a person", () => {});

// Hint: implementation should use Array.prototype.some
test("isAnyoneOlderThan() returns true if any person is older than the given age", () => {});

test("isAnyoneOlderThan() returns false if no person is older than the given age", () => {});

test("getFullNamesSortedByAge() returns an array of last names sorted by age", () => {});
