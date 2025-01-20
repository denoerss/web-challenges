import { add, subtract, multiply, divide } from "./index.js";

test("add() returns the sum of a + b", () => {
  const result = add(1, 2);
  expect(result).toBe(1 + 2);
});

test("subtract() returns the difference of a - b", () => {
  const result = subtract(2, 1);
  expect(result).toBe(2 - 1);
});

test("multiply() returns the product of a * b", () => {
  const result = multiply(5, 10);
  expect(result).toBe(5 * 10);
});

test("divide() return the quotient of a / b", () => {
  const result = divide(10, 5);
  expect(result).toBe(10 / 5);
});

test("divide() return 'You should not do this!' if b equals 0", () => {
  const result = divide(10, 0);
  expect(result).toBe("You should not do this!");
});
