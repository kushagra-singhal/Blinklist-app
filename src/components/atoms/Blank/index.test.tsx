import { render, screen } from "@testing-library/react";
import Blank from ".";

it("render the blank component", () => {
    render(<Blank />);
    const ReactElement = screen.getByTestId("blank");
    expect(ReactElement).toBeInTheDocument();
});

