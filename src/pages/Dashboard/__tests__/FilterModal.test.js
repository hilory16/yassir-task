import { screen, render } from "@testing-library/react";
import { TestRenderWrapper } from "components/TestRenderWrapper";
import userEvent from "@testing-library/user-event";
import FilterModal from "../Feature/FilterModal";

describe("Filter Modal", () => {
  const onClose = jest.fn();
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <TestRenderWrapper>
        <FilterModal isOpen={true} onClose={onClose} onSubmit={onSubmit} />
      </TestRenderWrapper>
    );
  });

  test("modal shows the children and a close button", () => {
    const closeBtn = screen.getByRole("button", { name: /close modal/i });
    const filterText = screen.getByText(/Select Filter/i);
    expect(filterText).toBeInTheDocument();
    expect(closeBtn).toBeInTheDocument();
  });

  test("close function is triggered when on close is clicked", async () => {
    const user = userEvent.setup();
    const closeBtn = screen.getByRole("button", { name: /close modal/i });
    await user.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
