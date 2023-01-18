import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"
import CompUserEvent from "../CompUserEvent"

const MOCK_SUBMIT_BUTTON = jest.fn();

it("Testing onChange event when user type", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Input value");
  userEvent.type(input, "Hello");
  expect(input).toHaveValue("Hello");
});

it("Testing onClick event when user type", () => {
  render(<CompUserEvent onSubmit={MOCK_SUBMIT_BUTTON} />);
  const textSubmit = screen.getByTestId("text-submit");
  userEvent.click(textSubmit);
  expect(MOCK_SUBMIT_BUTTON).toHaveBeenCalled();
});
