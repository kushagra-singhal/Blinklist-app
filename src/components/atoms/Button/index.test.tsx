import { render, screen } from "@testing-library/react";
import React from "react";
import Button from ".";

test('it render the Button', () => {
    render(<Button children="Hello" />);
    const typoElement = screen.getByRole('button');
    expect(typoElement).toBeInTheDocument();
});