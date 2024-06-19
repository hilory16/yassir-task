import { screen, render } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import Random from ".";

const Component = () => {
  return (
    <div>
      <p>How are you</p>
      <div>
        <label htmlFor="email address">Email</label>
        <input
          type="text"
          name="email address"
          id="email address"
          placeholder="email one"
        />
      </div>

      <label htmlFor="comment">Comment</label>
      <textarea id="comment"></textarea>

      <button type="button">Hello World</button>
    </div>
  );
};

describe("Button Changer", () => {
  test("Button starts with correct color ", () => {
    const { container } = render(<Component />);
    // logRoles(container);

    const input = screen.getByRole("textbox", { name: /email/i });
    const input2 = screen.getByPlaceholderText("email one");
    expect(input).toBeInTheDocument();
    // expect(input).toBeChecked();
  });

  test("Button starts with correct text", () => {});

  test("Button has correct colour after click", async () => {
    render(<Component />);
    const user = userEvent.setup();
    const buttonElement = screen.getByRole("button", { name: /hello world/i });

    await user.click(buttonElement);
  });

  test("Test MSW", async () => {
    render(<Random />);
    const todos = await screen.findAllByText(/Todo/i);
    expect(todos.length).toBe(2);
  });
});
