import { render, screen } from "@testing-library/react";
import React from "react";
import Banner1 from ".";

test('banner is the Heading', () => {
    render(<Banner1 />)
    const Element = screen.getByTestId('banner1');
    expect(Element).toBeInTheDocument();
});