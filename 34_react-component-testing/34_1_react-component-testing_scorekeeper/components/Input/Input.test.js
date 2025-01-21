/* eslint-disable jest/no-conditional-expect */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

const mockData = {
  label: "test label",
  placeholder: "test placeholder",
  name: "myTest",
  value: "1234",
  onChange: jest.fn(),
  required: false,
};

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText={mockData.label}
      placeholder={mockData.placeholder}
      name={mockData.name}
      value={mockData.value}
      onChange={mockData.onChange}
      required={mockData.required}
    />
  );

  const label = screen.getByText(mockData.label);
  expect(label).toBeInTheDocument();
  expect(label).toHaveAttribute("for", mockData.name);

  const input = screen.getByPlaceholderText(mockData.placeholder);
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("id", mockData.name);
  expect(input).toHaveAttribute("name", mockData.name);
  expect(input).toHaveAttribute("type", "text");
  if (mockData.required) {
    expect(input).toHaveAttribute("required");
  } else {
    expect(input).not.toHaveAttribute("required");
  }
});

test("calls callback on every user input", async () => {
  onChange = jest.fn();

  render(
    <Input
      labelText={mockData.label}
      placeholder={mockData.placeholder}
      name={mockData.name}
      value={mockData.value}
      onChange={onChange}
      required={mockData.required}
    />
  );

  const input = screen.getByPlaceholderText(mockData.placeholder);
  await userEvent.type(input, "hello");

  expect(onChange).toHaveBeenCalledTimes(5);
});
