import { render, screen } from "@testing-library/react";
import Blank from ".";

it("renders the blank component", () => {
    render(<Blank />);
    const ReactElement = screen.getByTestId("blank");
    expect(ReactElement).toBeInTheDocument();
});

