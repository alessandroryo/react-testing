import { render, screen } from "@testing-library/react";
import App from "../App";
import { data } from "../CompVariant";

test("Testing queryBy and findBy", async () => {
  render(<App />);
  const text = screen.queryByText(/Welcome/);
  expect(text).toBeNull();
  const text2 = await screen.findByText(/Welcome/);
  expect(text2).toBeInTheDocument();
});

it("Render p for all days", () => {
  render(<App />);
  expect(screen.getAllByTestId("day")).toHaveLength(data.length);
});
