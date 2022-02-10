import React from 'react';
import ProgressBar from ".";
import {render, screen } from '@testing-library/react';


test('should render progressbar', () => {
  render(<ProgressBar value={60}/>);
  const progressBarElement = screen.getByRole('progressbar');;
  expect(progressBarElement).toBeInTheDocument();
});

test('should render progressbar with value', () => {
    render(<ProgressBar value={60}/>);
    const progressBarElement = screen.getByRole('progressbar');
    expect((progressBarElement).getAttribute('aria-valuenow')).toBe('60');
});
  