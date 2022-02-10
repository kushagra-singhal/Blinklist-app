import { render, screen } from "@testing-library/react";
import React from "react";
import Logo from '.';

test('should render Logo', () => {
    render(<Logo name='blinklist' />);
    const linkElement = screen.getByText('blinklist')
    expect(linkElement).toBeInTheDocument();
});