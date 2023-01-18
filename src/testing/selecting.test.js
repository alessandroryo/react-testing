import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"

describe("Testing select elements and expect the value", () => {
  test("Check rendered text is true", () => {
    render(<App />);
    const text = screen.getByText("Current condition: Show");
    expect(text).toBeInTheDocument();
  });

  test("Check rendered button text is false", () => {
    render(<App />);
    const text = screen.getByText("Hide");
    expect(text).toBeInTheDocument();
  });
});

describe("Select elements and trigger fire event", () => {
  test("Check rendered text after button is clicked", () => {
    render(<App />);
    const button = screen.getByTestId("toggle-button");
    fireEvent.click(button);
    const text = screen.getByText("Current condition: Hide");
    expect(text).toBeInTheDocument();
  });
  test("Check rendered button text after button is clicked", () => {
    render(<App />);
    // screen.getByRole("");
    const buttonText = screen.getByText("Hide");
    fireEvent.click(buttonText);
    const text = screen.getByText("Show");
    expect(text).toBeInTheDocument();
  });
});
