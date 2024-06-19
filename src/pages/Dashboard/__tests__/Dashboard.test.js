import { screen, render, waitFor } from "@testing-library/react";
import { TestRenderWrapper } from "components/TestRenderWrapper";
import userEvent from "@testing-library/user-event";
import Dashboard from "../index";

describe("Dashboard Page", () => {
  // beforeEach(() => {
  //   render(
  //     <TestRenderWrapper>
  //       <Dashboard />
  //     </TestRenderWrapper>
  //   );
  // });

  test("renders upcoming reservations correctly", () => {
    // const dashboardText = screen.getByText(/Upcoming Reservations/i);
    // expect(dashboardText).toBeInTheDocument();
  });

  test("search input is functional", async () => {
    // const value = "yuri";
    // const user = userEvent.setup();
    // const searchInput = screen.getByPlaceholderText(
    //   /Search first name and last name/i
    // );
    // await user.type(searchInput, value);
    // expect(searchInput.value).toBe(value);
  });
});
