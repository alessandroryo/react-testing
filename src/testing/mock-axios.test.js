import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../App";

jest.mock("axios");

test("Members list with axios", async () => {
  const members = [
    {
      id: 1,
      name: "Alessandro Ryo",
    },
    {
      id: 2,
      name: "John Doe",
    },
    {
      id: 3,
      name: "Jane Doe",
    },
  ];

  axios.get.mockImplementation(() => {
    return Promise.resolve({
      data: members,
    });
  });

  render(<App />);
  const button = screen.getByTestId("get-members");
  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getAllByTestId("member-name")).toHaveLength(members.length);
  });
});
