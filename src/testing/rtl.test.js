import { render, screen } from "@testing-library/react";
import App from "../App";

test("Name in main application", () => {
  render(<App />);
  const text = screen.getByText("Alessandro Ryo");
  expect(text).toBeInTheDocument();
});
