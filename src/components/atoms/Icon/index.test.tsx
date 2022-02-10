import { render, screen } from "@testing-library/react";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Icon from '.';

test('it should render passed icon', () => {
    render(<Icon icon={<AddIcon data-testid='add-icon'/>}/>);
    const iconElement = screen.getByTestId('add-icon');
    expect(iconElement).toBeInTheDocument();
});