import { render, screen } from "@testing-library/react";
import Avatar from ".";

it("renders the avatar", () => {
    render(<Avatar />);
    const ReactElement = screen.getByText("A");
    expect(ReactElement).toBeInTheDocument();
});
