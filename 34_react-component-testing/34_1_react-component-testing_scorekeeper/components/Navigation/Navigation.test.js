import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);

  const navPlay = screen.getByRole("link", { name: "Play" });
  const navHistory = screen.getByRole("link", { name: "History" });

  expect(navPlay).toBeInTheDocument();
  expect(navHistory).toBeInTheDocument();
});
