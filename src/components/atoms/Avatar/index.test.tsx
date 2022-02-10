import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("render the avatar", () => {
    render(<Avatar />);
    const ReactElement = screen.getAllByTestId("avatar");
    expect(ReactElement).toBeInTheDocument();
});
