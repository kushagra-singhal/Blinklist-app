import React from 'react';
import renderer from 'react-test-renderer';
// import { render, screen } from '@testing-library/react';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './Themes/main';


test('renders the App Component', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
  expect(component).toMatchSnapshot();
});
